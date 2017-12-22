// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.25 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"true","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"473","Gold Overlap":"A lotta","---Items---":"","Default Max":"20","Quantity Text Size":"20","---Parameters---":"","Max Level":"100","Actor MaxHP":"1000000","Actor MaxMP":"1000000","Actor Parameter":"10000","Enemy MaxHP":"1000000","Enemy MaxMP":"1000000","Enemy Parameter":"10000","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"true","Custom Image":"CAEXsplash","Fade Out Time":"120","Fade In Time":"60","Wait Time":"180"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QUpdate","status":true,"description":"<QUpdate>\r\nChecks QPlugins for updates","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"false","Default Enabled Switches":"[]"}},
{"name":"QInput","status":true,"description":"<QInput>\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\",\"#j\",\"#space\",\"$A\"]","Escape / Cancel":"[\"#esc\",\"#k\",\"$B\"]","Menu":"[\"#esc\",\"#;\",\"$START\"]","Shift":"[\"#shift\",\"#l\",\"$X\"]","Control":"[\"#ctrl\", \"$L3\"]","Tab":"[\"#tab\", \"$X\"]","Pageup":"[\"#q\",\"$L1\"]","Pagedown":"[\"#e\",\"$R1\"]","Left":"[\"#a\",\"$LEFT\",\"#left\"]","Right":"[\"#d\",\"$RIGHT\",\"#right\"]","Up":"[\"#w\",\"$UP\",\"#up\"]","Down":"[\"#s\",\"$DOWN\",\"#down\"]","Debug":"[\"#f9\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f5","Restart":"f11","Console":"f8"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QMovement","status":true,"description":"<QMovement>\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"3","Mid Pass":"false","Move on click":"false","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[]","Debug Settings":"","Show Colliders":"false"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QABS","status":true,"description":"<QABS>\nAction Battle System for QMovement","parameters":{"Attack Settings":"","Quick Target":"false","Lock when Targeting":"true","Aim with Mouse":"false","Aim with Analog":"true","Move Resistance Rate Stat":"xparam(1)","Loot Settings":"","Loot Decay":"600","AoE Loot":"true","Loot Touch Trigger":"true","Gold Icon":"473","Level Animation":"51","Enemy AI":"","AI Default Sight Range":"240","AI Action Wait":"75","AI Uses QSight":"true","AI uses QPathfind":"true","Default Skills":"[\"{\\\"Keyboard Input\\\":\\\"#k\\\",\\\"Gamepad Input\\\":\\\"$A\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#l\\\",\\\"Gamepad Input\\\":\\\"$B\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#u\\\",\\\"Gamepad Input\\\":\\\"$X\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#i\\\",\\\"Gamepad Input\\\":\\\"$Y\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#o\\\",\\\"Gamepad Input\\\":\\\"$L1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#p\\\",\\\"Gamepad Input\\\":\\\"$R1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\"]"}},
{"name":"QABS+Gauges","status":true,"description":"<QABSGauges>","parameters":{"Gauge Configs":"","Gauge Width":"72","Gauge Height":"8","Boss Gauge Width":"480","Boss Gauge Height":"16","Gauge Default OX":"0","Gauge Default OY":"-48","Boss Gauge Default OX":"0","Boss Gauge Default OY":"24","Gauge Colors":"","Gauge Background Color":"#202040","Gauge Inbetween Color":"#ffffff","Gauge HP Color 1":"#e08040","Gauge HP Color 2":"#f0c040","Gauge Text":"","Text Font":"Ubuntu Mono","Font Size":"12","Font Color":"#ffffff","Boss Text Font":"Ubuntu Mono","Boss Font Size":"20","Boss Font Color":"#ffffff"}},
{"name":"QABS+Skillbar","status":true,"description":"<QABSSkillbar>\nQABS Addon: Adds a skillbar","parameters":{"Show Unassigned Keys":"false","Default visibility":"false"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPathfind","status":true,"description":"<QPathfind>\nA* Pathfinding algorithm","parameters":{"Diagonals":"true","Any Angle":"true","Intervals":"200","Smart Wait":"60","Dash on Mouse":"false"}},
{"name":"QSight","status":true,"description":"<QSight>\r\nReal time line of sight","parameters":{"See Through Terrain":"[]","Show":"true"}},
{"name":"QPopup","status":true,"description":"<QPopup>\nLets you create popups in the map or on screen","parameters":{"Presets":"[\"{\\\"ID\\\":\\\"QABS-LEVEL\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"40\\\",\\\"Font Color\\\":\\\"#ffffff\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"5 60 slideup 30\\\\\\\",\\\\\\\"120 60 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-EXP\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"24\\\",\\\"Font Color\\\":\\\"#ffffff\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"5 15 slidedown 30\\\\\\\",\\\\\\\"60 15 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-ITEM\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"24\\\",\\\"Font Color\\\":\\\"#ffffff\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"5 15 slideup 30\\\\\\\",\\\\\\\"60 15 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-MISSED\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"28\\\",\\\"Font Color\\\":\\\"#ffffff\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[]\\\"}\",\"{\\\"ID\\\":\\\"QABS-DMG-NU\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"30\\\",\\\"Font Color\\\":\\\"#d8d8d8\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-DMG-CRIT-NU\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"42\\\",\\\"Font Color\\\":\\\"#ff5656\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-DMG-PL\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"30\\\",\\\"Font Color\\\":\\\"#ffff84\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-DMG-CRIT-PL\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"42\\\",\\\"Font Color\\\":\\\"#ffff00\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-DMG-EN\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"30\\\",\\\"Font Color\\\":\\\"#ffffff\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-DMG-CRIT-EN\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"42\\\",\\\"Font Color\\\":\\\"#f7ff16\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-HEAL\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"30\\\",\\\"Font Color\\\":\\\"#009b24\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-HEAL-CRIT\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"42\\\",\\\"Font Color\\\":\\\"#00ff3b\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-MP\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"30\\\",\\\"Font Color\\\":\\\"#8c0085\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\",\"{\\\"ID\\\":\\\"QABS-MP-CRIT\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"Ubuntu Mono\\\",\\\"Font Size\\\":\\\"42\\\",\\\"Font Color\\\":\\\"#ff00f2\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"30 30 slideup 30\\\\\\\",\\\\\\\"30 30 fadeout\\\\\\\"]\\\"}\"]"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"YEP_ItemCore","status":true,"description":"v1.28 Changes the way Items are handled for your game\r\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_ItemSynthesis","status":true,"description":"v1.10 Players can now craft their own items in-game\r\nthrough an item synthesis system.","parameters":{"---General---":"","Synthesis Command":"Synthesis","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Command Window---":"","Item Command":"Craft Item","Weapon Command":"Craft Weapon","Armor Command":"Craft Armor","Finish Command":"Finish","Text Alignment":"center","---Status Window---":"","Collected Recipes":"Collected Recipes","Crafted Items":"Crafted Items","Crafted Weapons":"Crafted Weapons","Crafted Armors":"Crafted Armors","---List Window---":"","Equipped Recipes":"true","Mask Unknown":"true","Mask Text":"?","Mask Italic":"true","Mask Help Text":"This item has not been synthesized yet.","Ingredients Text":"Ingredients","Amount Text":"Quantity","Amount Format":"false","Quantity Text Size":"20","---Sound---":"","Default SE":"Twine","Default Volume":"100","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.12 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_SkillCostItems","status":true,"description":"v1.04 (Requires YEP_SkillCore.js) Skills can now have an\r\nitem cost attached to them.","parameters":{"---General---":"","Cost Style":"2","Font Size":"20","Amount Format":"×%1","Amount Y Buffer":"4","---Gauges---":"","Gauge Color 1":"13","Gauge Color 2":"5","Display Name":"true","Text Color":"16"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.17 Allows for the equipment system to be more flexible to\r\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Finish","Remove Text":"Remove","Remove Icon":"16","Empty Text":"<Empty>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_AutoPassiveStates","status":true,"description":"v1.15 This plugin allows for some states to function as\r\npassives for actors, enemies, skills, and equips.","parameters":{"---Basic---":"","Actor Passives":"0","Enemy Passives":"0","Global Passives":"0","---List---":"...Requires RPG Maker MV 1.5.0+...","Actor Passives List":"[]","Enemy Passives List":"[]","Global Passives List":"[]"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\r\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_Gab","status":true,"description":"v1.06 The Gab Window functions as a window for random\r\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"Ubuntu Mono","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"108","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.14 Alter the basic mechanics behind buffs and states\r\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"1","Maximum Limit":"10","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\r\nbeing able to venture into those spots.","parameters":{"Player Restrict":"0","Event Restrict":"0","All Restrict":"0","Player Allow":"8","Event Allow":"0","All Allow":"0"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\r\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"10","Saved Icon":"342","Empty Icon":"480","Return After Saving":"true","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, variable 1, variable 2, variable 3","Data Column 3":"empty, variable 4, variable 5, variable 6","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_StatDistribution","status":true,"description":"Allows players to distribute points to different stats of the Actors at his or her discretion.","parameters":{"Default Stats":"mhp, hrg, mmp, mrg, atk, trg, tcr, cri, def, pdr, rec, mat, mcr, mdf, mdr, luk, exr, fdr","Default Formula":"Math.ceil(5 + level * (level * 1.4))","Show on Menu":"false","== Stat Reset ==":"","Allow Stat Resets":"false","Reset Gold Cost":"points * 100","== Custom Texts ==":"","Level Up Message":"Got %1 stat points!","Command Name":"Allocate","Points Text":"Stat Points:","Upgrade Text":"Upgrade Cost:","Spend Text":"Power Up!","Reset Text":"Reset","Finish Text":"Finalize Stat Changes.","== Gauge Options ==":"","Use Gauges":"false","Gauge Height":"14","== Points Label ==":"","Point Icon":"87","Point Text":"Points","Point Color":"#66ff66"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"OrangeAntiLag","status":true,"description":"Improves part of RM code to reduce lag","parameters":{}},
{"name":"OrangeTimeSystem","status":false,"description":"<OrangeTimeSystem> 2.8.1 - Adds a time system to your game","parameters":{"useRealTimeStructure":"false","useRealTime":"true","secondLength":"100","secondLengthDuringTest":"0","secondLengthVariable":"0","minuteLength":"60","hourLength":"60","dayLength":"24","weekLength":"7","monthLength":"31","yearLength":"12","dayPeriod1Hour":"6","dayPeriod2Hour":"9","dayPeriod3Hour":"18","dayPeriod4Hour":"20","mainSwitchId":"0","pauseClockDuringConversations":"true","initialSecond":"0","initialMinute":"0","initialHour":"6","initialDay":"1","initialMonth":"1","initialYear":"1","weekDayOffset":"0","dayNames":"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday","dayShortNames":"Mon, Tue, Wed, Thur, Fri, Sat, Sun","monthNames":"January, February, March, April, May, June, July, August, September, October, November, December","monthShortNames":"Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec","insideSwitch":"3000","tilesetList":""}},
{"name":"OrangeTimeEvents","status":false,"description":"Allow you to configure common events to be called when the time system changes","parameters":{"onChangeSecond":"0","onChangeMinute":"0","onChangeHour":"0","onChangeDay":"0","onChangeMonth":"0","onChangeYear":"0","onChangeDayPeriod":"0","onChangeTime":"0","onNightPeriod":"0","onEarlyMorningPeriod":"0","onDayPeriod":"0","onEveningPeriod":"0"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"J_Base","status":true,"description":"The core plugin that basically handles setup, icons, text, etc. This should go above any other plugins of mine you use!","parameters":{"MHP-icon":"96","MMP-icon":"97","ATK-icon":"99","DEF-icon":"100","MAT-icon":"101","MDF-icon":"102","AGI-icon":"103","LUK-icon":"104","EXP-icon":"350","GOLD-icon":"472","DROP-icon":"382","---SPARAM---":"","TGR-text":"Targeting","TGR-icon":"14","GRD-text":"Guard Rate","GRD-icon":"12","REC-text":"Recovery Rate","REC-icon":"7","PHA-text":"Item Amp","PHA-icon":"373","MCR-text":"MP Reduce","MCR-icon":"79","TCR-text":"TP Charge","TCR-icon":"76","PDR-text":"PhysDMG%","PDR-icon":"51","MDR-text":"MagiDMG%","MDR-icon":"53","FDR-text":"FloorDMG%","FDR-icon":"54","EXR-text":"EXPboost%","EXR-icon":"607","---XPARAM---":"","HIT-text":"Hit%","HIT-icon":"542","EVA-text":"Evade%","EVA-icon":"6","CRI-text":"Critical%","CRI-icon":"78","CEV-text":"Crit Evade","CEV-icon":"74","MEV-text":"M-Evade%","MEV-icon":"9","MRF-text":"M-Reflect%","MRF-icon":"127","CNT-text":"Counter%","CNT-icon":"15","HRG-text":"HP Regen%","HRG-icon":"84","MRG-text":"MP Regen%","MRG-icon":"968","TRG-text":"TP Regen","TRG-icon":"77","EL01-icon":"244","EL02-icon":"242","EL03-icon":"247","EL04-icon":"64","EL05-icon":"67","EL06-icon":"68","EL07-icon":"69","EL08-icon":"66","EL09-icon":"71","EL10-icon":"70"}},
{"name":"J_revamp_equipscreen","status":true,"description":"Alters the equipscreen to provide greater detail about equipped items and their impacts on characters.","parameters":{}},
{"name":"J_revamp_statusscreen","status":true,"description":"Alters the status screen to display all details and parameters. Click \"Help...\" for more details.","parameters":{}},
{"name":"J_MapTime","status":true,"description":"Provides functionality for HRG/MRG/TRG while on the map.","parameters":{"useTPforDash":"true","flatHealing":"false"}},
{"name":"J_Difficulty","status":true,"description":"Provides difficulty options for the the player that modify enemy stats.","parameters":{"Difficulty Variable":"10\r"}},
{"name":"J_HUD","status":true,"description":"Stemmed from Mr. Wriggles' SimpleHUD, but added more things.","parameters":{"HUD_width":"420","HUD_height":"128","HUD_opacity":"0"}},
{"name":"J_RecordWindow","status":false,"description":"This plugin creates a window that acts as a log for EXP/GOLD/items acquired.","parameters":{"w_width":"400","w_height":"196","stallMod":"60","expIcon":"87","goldIcon":"314"}},
{"name":"J_QABS_EquipSkills","status":true,"description":"Enables skills for use via hotkeybar.","parameters":{}},
{"name":"J_XPGPvariance","status":true,"description":"Provides notetag-defined levels to give multipliers against XP/GP.","parameters":{}},
{"name":"J_DropItem","status":true,"description":"Modifies the database drop functionality to be a percent instead of 1/N,\r\nAnd accommodates the \"Extra Drops\" notetags.","parameters":{"dropScale":"100"}},
{"name":"J_QABS_RespawnConditions","status":true,"description":"Sets a switch or variable conditional to respawning enemies.","parameters":{}},
{"name":"J_QABS_CollectAndUse","status":true,"description":"Automatically uses a skill on item-pickup.","parameters":{}},
{"name":"J_QABS_Popups_Teams","status":true,"description":"Differentiates team popups.","parameters":{}},
{"name":"J_QABS_DeathAnim","status":true,"description":"Adds in an animation from the database when an enemy is defeated.","parameters":{}},
{"name":"J_QABS_CustomAI","status":true,"description":"Adds in a new AI \"basic\" to the QABS.","parameters":{}},
{"name":"J_QABS_DOTdurations","status":true,"description":"Extends the duration of states when re-afflicted.","parameters":{}},
{"name":"J_QABS_NoKnockback","status":true,"description":"","parameters":{}}
];
