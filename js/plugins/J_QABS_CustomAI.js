/* -------------------------------------------------------------------------- */
// J_QABS_CustomAI
// V: 1.0
//
/*:@plugindesc Adds in a new AI "basic" to the QABS.
@author J

@help Enables the new "basic" AI for use with QABS.
				It isn't actually that much smarter than the original, but it deals with
				a few nuances that needed help.

			Details:
				Enemies now use use custom AI wait timers to given unique durations
				between actions. This can be setup with the following notetags:
					<aiWait:###>
				example:
					<aiWait:40>
				translates to:
					waits 40 frames (2/3 of a second) between actions.

				If no notetag is included on the enemy, they will use the default aiWait
				setup within the QABS itself.

			Additionally:
				Enemies will now attempt to hold a distance between their target while
				they await their turn. Their skill designation is still determined by
				the QABS itself, but if the enemy deems it best to use a melee skill,
				they will approach the target till in range before executing the skill.
				If an enemy is too many levels below the target, instead of just
				continuing the attack, they will run the opposite direction at an
				increased move-rate.

*/

// adds in a new "_aiMode" for tracking the state of a battler.
var j_Game_Event_customAI = Game_Event.prototype.setupBattler;
Game_Event.prototype.setupBattler = function() {
	j_Game_Event_customAI.call(this);
	if (this._battlerId > 0) {
		this._aiMode = null;
		this._balloon = null;
		this._baseMove = this._moveSpeed;
	}
};

// returns true if the aiType is created, otherwise, false.
Game_Event.prototype.validAI = function() {
	switch (this._aiType) {
		case "simple":
			return true;
		case "basic":
			return true;
		default:
			return false;
	}
};

// updated version of the "updateAI" processing function.
// this does overwrite the current, but accommodates the original.
Game_Event.prototype.updateAI = function(type) {
	switch (type) {
		case "simple":
			return this.updateAISimple();
		case "basic":
			return this.updateAIBasic();
		default: break;
	}
};

Game_Event.prototype.updateAIBasic = function() {
	var bestTarget = this.bestTarget();
	if (!bestTarget) return;
	this.basicAImode();
};

// closes the gap between the player and enemy.
Game_Event.prototype.closeDistance = function() {
	var bestTarget = this.bestTarget();
	if (this.canMove() && this.hasTarget()) {
		if (this._aiPathfind) {
			var distance = this.pixelDistanceFrom(bestTarget.cx(), bestTarget.cy());
			var minDist = 0;
			var maxDist = 60;
			if (distance > minDist && distance < maxDist) {
				this.clearPathfind();
				this.turnTowardCharacter(bestTarget);
			}	else if (distance > maxDist) {
				this.initChase(bestTarget.charaId());
			} else if (distance < minDist) {
				this.clearPathfind();
				this.moveAwayFromCharacter(bestTarget);
			}
		}
	}
};

// holds a given distance between the player and enemy.
// the current distance is between (4x own size) and (6x own size) in pixels.
Game_Event.prototype.holdDistance = function(xRange) {
	var bestTarget = this.bestTarget();
	// if a target is noticed, and the pursuer can move
	if (this.canMove() && this.hasTarget()) {
		if (this._aiPathfind) {
			var distance = this.pixelDistanceFrom(bestTarget.cx(), bestTarget.cy());
			if (xRange != null) {
				if (distance < xRange) {
					// if closer than the min distance, get away.
					this.clearPathfind();
					this.moveAwayFromCharacter(bestTarget);
					return;
				}
			} else {
				var minDist = Math.floor((this.collider('collision').width + this.collider('collision').height) / 2 * 4);
				var maxDist = Math.floor((this.collider('collision').width + this.collider('collision').height) / 2 * 6);
				if (distance > minDist && distance < maxDist) {
					// if within the min-max distances, just look at the target.
					this.clearPathfind();
					this.turnTowardCharacter(bestTarget);
				}	else if (distance > maxDist) {
					// if outside of the max distance, get closer.
					this.initChase(bestTarget.charaId());
				} else if (distance < minDist) {
					// if closer than the min distance, get away.
					this.clearPathfind();
					this.moveAwayFromCharacter(bestTarget);
				}
			}
		}
	}
};

// determines whether or not there is a target in range to engage.
// returns true if there is, false if not.
// modified version of original QABS "AISimpleInRange".
Game_Event.prototype.hasTarget = function() {
	var bestTarget = this.bestTarget();
	var targetId = bestTarget.charaId();
	if (this.isTargetInRange(bestTarget)) {
		if (!this._agroList.hasOwnProperty(targetId)) {
			this.addAgro(targetId);
			if (this._aiPathfind) {	this.clearPathfind();	}
		}
		if (this._endWait) {
			this.removeWaitListener(this._endWait);
			this._endWait = null;
		}
		return true;
	} else {
		if (!this._endWait && this.inCombat()) {
			bestTarget.removeAgro(this.charaId());
			if (this._aiPathfind) { this.clearPathfind();	}
			this._endWait = this.wait(90).then(function() {
				this._endWait = null;
				this._aiMode = null;
				this.requestBalloon(2);
				this.endCombat();
			}.bind(this));
		}
		return false;
	}
	return false;
};

// the state-based AI.
// the six states of action that enemies can be in.
Game_Event.prototype.basicAImode = function() {
	if (this._aiMode == null) this._aiMode = 'ENGAGE';
	if (!this.hasTarget()) { return; };
	switch (this._aiMode) {
		case 'ENGAGE':
			this.basicAIengage();
			break;
		case 'START':
			this.basicAIstart();
			break;
		case 'WAIT':
			this.basicAIwait();
			break;
		case 'READY':
			this.basicAIready();
			break;
		case 'ATTACK':
			this.basicAIattack();
			break;
		case 'FLEE':
			this.basicAIflee();
			break;
		default: break;
	}
};

// this state only occurs once per encounter with the enemy.
Game_Event.prototype.basicAIengage = function() {
	this.requestBalloon(1);
	this._aiMode = 'START';
};

// create wait timer.
// either pulls from notes or from QABS.aiWait default.
Game_Event.prototype.basicAIstart = function() {
	this._aiWait = this.getAIwait();
	this._aiMode = 'WAIT';
};

// count up enemy's wait timer.
// move away if possible.
Game_Event.prototype.basicAIwait = function() {
	if (this._aiWait > 0) {
		this._aiWait--;
		this.holdDistance();
	}
	else {
		this._aiMode = 'READY';
	}
};

// get closer till a suitable action is available.
Game_Event.prototype.basicAIready = function() {
	var diff = $gameParty.leader().level - $dataEnemies[this._battlerId].level;
	if (diff > 9) {
		this._aiMode = 'FLEE';
		return;
	}
	if (QABSManager.bestAction(this.charaId())) {
		this._aiMode = 'ATTACK';
		return;
	}
	else {
		this.closeDistance();
	}
};

// execute "best action".
// reset back to wait time.
Game_Event.prototype.basicAIattack = function() {
	var skill = this.useSkill(QABSManager.bestAction(this.charaId()));
	if (skill == null) return;
	skill._target = this.bestTarget();
	this._aiMode = 'START';
};

// if the difference in levels between target and self is too great, flee!
Game_Event.prototype.basicAIflee = function() {
	this._moveSpeed = this._baseMove + 1;
	this.requestBalloon(6);
	this.holdDistance(400);
	this._balloon = this.wait(90).then(function() {
		this._balloon = null;
		this._aiMode = 'START';
		this._moveSpeed = this._baseMove;
		return;
	}.bind(this));
};

// reads the notedata of enemies on creation
// if new _aiWait was provided, overwrites with that instead.
Game_Event.prototype.getAIwait = function() {
	// note data of the given enemy AND regexp structure
	var nd = this.battler().enemy().note.split(/[\r\n]+/);
	var rgx = /<aiWait:(\d+)>/i;
	// custom _aiWait variable
	var customWait = 0;
	// iterate through all the notes to grab it.
	for (var n = 0; n < nd.length; n++) { if (nd[n].match(rgx)) { customWait = Number(RegExp.$1); } }
	if (customWait == 0)
		customWait = QABS.aiWait;
	return customWait;
};