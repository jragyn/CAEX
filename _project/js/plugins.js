// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"true","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"473","Gold Overlap":"A lotta","---Items---":"","Default Max":"20","Quantity Text Size":"20","---Parameters---":"","Max Level":"100","Actor MaxHP":"1000000","Actor MaxMP":"1000000","Actor Parameter":"10000","Enemy MaxHP":"1000000","Enemy MaxMP":"1000000","Enemy Parameter":"10000","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"false","Default Enabled Switches":"[]","Ignore Mouse when inactive":"false"}},
{"name":"QCamera","status":true,"description":"<QCamera>\r\nBetter Camera control","parameters":{"Offset":"0.5","Shift Y":"0","Shift X":"0"}},
{"name":"QMovement","status":false,"description":"<QMovement>\r\nMore control over character movement","parameters":{"Main Settings":"","Grid":"48","Tile Size":"48","Off Grid":"false","Optional Settings":"","Smart Move":"3","Mid Pass":"true","Move on click":"false","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[]","Debug Settings":"","Show Colliders":"true"}},
{"name":"QPathfind","status":false,"description":"<QPathfind>\r\nA* Pathfinding algorithm","parameters":{"Diagonals":"true","Any Angle":"false","Intervals":"100","Smart Wait":"60","Dash on Mouse":"true"}},
{"name":"QSpeed","status":true,"description":"<QSpeed>\r\nAllows for custom Move speeds and an acceleration effect","parameters":{"Acceleration":"false","Duration":"30","Dash Inc":"1"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-BATTLE","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_ActionName","status":true,"description":"(v1.2) Displays a window with action name.","parameters":{"Layout X-Axis":"420","Layout Y-Axis":"64","Name X-Axis":"0","Name Y-Axis":"24","Icon X-Axis":"0","Icon Y-Axis":"-4","Font Size":"22"}},
{"name":"MOG_BattleHud","status":false,"description":"(v3.7) Allows you to customize the battle layout.","parameters":{"Hud X-Axis":"-100","Hud Y-Axis":"500","Hud Space X":"0","Hud Space Y":"0","Hud Slide X":"0","Hud Slide Y":"250","Vertical Mode":"false","Command Auto Adjust":"true","Max Battle Members":"4",">> LAYOUT OVERLAY =========":"","Layout2 Visible":"true","Layout2 X-Axis":"0","Layout2 Y-Axis":"0",">> TURN ===================":"","Turn Visible":"true","Turn X-Axis":"-10","Turn Y-Axis":"0","Turn Rotation Speed":"0.01","Turn Zoom Animation":"true",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"52","Face Y-Axis":"62","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"false","Face Priority":"0",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"-45","Name Y-Axis":"75","Name Align":"1","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"87","HP Meter Y-Axis":"17","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align type":"0","HP Number X-Axis":"170","HP Number Y-Axis":"-1","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"104","MP Meter Y-Axis":"43","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align type":"0","MP Number X-Axis":"187","MP Number Y-Axis":"26","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"104","TP Meter Y-Axis":"69","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number Align type":"0","TP Number X-Axis":"187","TP Number Y-Axis":"53","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116",">> ATB ===================":"","ATB Meter Visible":"true","ATB Meter X-Axis":"145","ATB Meter Y-Axis":"100","ATB Meter Angle":"0","ATB Meter Flow Anime":"true",">> STATES ===================":"","States Visible":"true","States X-Axis":"102","States Y-Axis":"86","States Mode":"0","States Max":"4","States Align":"0",">> W COMMAND ===================":"","W Command X-Axis":"0","W Command Y-Axis":"-15","W Command Width":"192","W Command Height":"180","W Command Slide X":"0","W Command Slide Y":"64","Layout Command":"true","L Command X-Axis":"-25","L Command Y-Axis":"-35",">> W PARTY ===================":"","W Party X-Axis":"325","W Party Y-Axis":"170","W Party Width":"192","W Party Height":"110","W Party Slide X":"0","W Party Slide Y":"-100","Layout Party":"true","L Party X-Axis":"-325","L Party Y-Axis":"-42",">> W HELP ===================":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"816","W Help Height":"108","W Help Slide X":"0","W Help Slide Y":"-50","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0",">> W SKILL ===================":"","W Skill X-Axis":"0","W Skill Y-Axis":"444","W Skill Width":"816","W Skill Height":"180","W Skill maxCols":"2","W Skill Slide X":"0\r","W Skill Slide Y":"50","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67",">> W ITEM ===================":"","W Item X-Axis":"0","W Item Y-Axis":"444","W Item Width":"816","W Item Height":"180","W Item maxCols":"2","W Item Slide X":"0","W Item Slide Y":"50","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67",">> W ACTOR ===================":"","W Actor X-Axis":"0","W Actor Y-Axis":"444","W Actor Width":"816","W Actor Height":"180","W Actor maxCols":"1","W Actor Slide X":"0","W Actor Slide Y":"50","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67",">> W ENEMY ===================":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"444","W Enemy Width":"816","W Enemy Height":"180","W Enemy maxCols":"2","W Enemy Slide X":"0","W Enemy Slide Y":"50","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67",">> SCREEN LAYOUT ===================":"","Screen Layout":"true","Screen X-Axis":"0","Screen Y-Axis":"0",">> CUSTOM POSITION ===================":"","Custom Position 1":"","Custom Position 2":"","Custom Position 3":"","Custom Position 4":"","Custom Position 5":"","Custom Position 6":"","Custom Position 7":"","Custom Position 8":""}},
{"name":"MOG_BossHP","status":true,"description":"(v2.2) Features an HP Meter for Bosses.","parameters":{"Shake Effect":"true","HP Number Visible":"true","Show Face":"true","Slant Animation":"true","Flow Speed":"4","Name Font Size":"18","Layout X-Axis":"150","Layout Y-Axis":"10","BHP Name X-Axis":"36","Name Y-Axis":"23","Face X-Axis":"-50","Face Y-Axis":"10","Meter X-Axis":"22","Meter Y-Axis":"28","Number X-Axis":"460","Number Y-Axis":"32","Number Percentage":"false","Show States":"true","States Max":"8","States X-axis":"50","States Y-axis":"-8"}},
{"name":"MOG_ComboCounter","status":true,"description":"(v1.6) Displays the number of hits on the target.","parameters":{"C HIT Layout X-Axis":"118","C HIT Layout Y-Axis":"134","C DMG Layout X-Axis":"10","C DMG Layout Y-Axis":"100","C HIT Number X-Axis":"115","C HIT Number Y-Axis":"145","C DMG Number X-Axis":"150","C DMG Number Y-Axis":"103"}},
{"name":"MOG_DmgPopupEffects","status":true,"description":"(v1.0) Adds some effects to the damage sprites.","parameters":{"Duration":"90","PopUp Type":"1","Zoom Effect":"true","Center Y-Axis":"true"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-VISUAL","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_CharacterMotion","status":true,"description":"(v1.3) System of animations of the sprites of the characters.","parameters":{}},
{"name":"MOG_DizzyEffect","status":true,"description":"(v1.0) Adds the Dizzy effect.","parameters":{}},
{"name":"MOG_EventIndicators","status":true,"description":"(v1.0) It displays animated indicators above the event.","parameters":{"Default Font Size":"16","Default X - Axis":"0","Default Y - Axis":"0"}},
{"name":"MOG_TreasurePopup","status":true,"description":"(v1.1) Displays the icon and name of the earned treasure.","parameters":{"Duration":"15","Fade Speed":"5","X - Axis":"0","Y - Axis":"-32","Random Movement":"false","X Speed":"0","Y Speed":"1","Font Size":"16","Icon Scale":"0.60","Treasure Space Y-Axis":"20","Zoom Effect":"false","Gold Popup":"true","Gold Icon Index":"163"}},
{"name":"MOG_Weather_EX","status":true,"description":"(v2.0) Adds new weather effects.","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-GAMEPLAY","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_PickupThrow","status":true,"description":"(v1.3) System of throwing the events.","parameters":{"Character Height":"22","Character Pose":"true","Hold Direction":"true","Hold Direction Button":"pagedown","Sound File":"Jump1"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-HUD","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"J_HUD","status":true,"description":"Stemmed from Mr. Wriggles' SimpleHUD, but added more things.","parameters":{"HUD_opacity":"0","HUD_width":"420","HUD_height":"160","HUD_x":"0","HUD_y":"592"}},
{"name":"MOG_ActorHud","status":false,"description":"(v1.9) Add a Hud with the character's parameters.","parameters":{"Initial Visible":"true","Hud X-Axis":"0","Hud Y-Axis":"535","Smart Fade":"true","Auto Fade":"true",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"55","Face Y-Axis":"100","Face Priority":"1",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"5","Name Y-Axis":"20","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"143","HP Meter Y-Axis":"85","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align":"0","HP Number X-Axis":"270","HP Number Y-Axis":"70","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40","HP Icon Visible":"false","HP Icon Half Mode":"false","HP Icon Max Colors":"2","HP Icon Max Rows":"10","HP Icon Max Columns":"2","HP Icon X-Axis":"143","HP Icon Y-Axis":"85","HP Icon Space X":"0","HP Icon Space Y":"0","HP Icon Zoom Anime":"true",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"160","MP Meter Y-Axis":"115","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align":"0","MP Number X-Axis":"287","MP Number Y-Axis":"100","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78","MP Icon Visible":"false","MP Icon Half Mode":"false","MP Icon Max Colors":"2","MP Icon Max Rows":"10","MP Icon Max Columns":"2","MP Icon X-Axis":"143","MP Icon Y-Axis":"120","MP Icon Space X":"0","MP Icon Space Y":"0","MP Icon Zoom Anime":"true",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"143","TP Meter Y-Axis":"145","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number Align":"0","TP Number X-Axis":"270","TP Number Y-Axis":"130","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116","TP Icon Visible":"false","TP Icon Half Mode":"false","TP Icon Max Colors":"2","TP Icon Max Rows":"10","TP Icon Max Columns":"2","TP Icon X-Axis":"143","TP Icon Y-Axis":"50","TP Icon Space X":"0","TP Icon Space Y":"0","TP Icon Zoom Anime":"true",">> EXP ===================":"","EXP Meter Visible":"true","EXP Meter X-Axis":"127","EXP Meter Y-Axis":"173","EXP Meter Angle":"180","Level Number Visible":"true","Level Number Align":"1","Level Number X-Axis":"65","Level Number Y-Axis":"153",">> STATES ===================":"","States Visible":"true","States X-Axis":"5","States Y-Axis":"64"}},
{"name":"MOG_GoldHud","status":true,"description":"(v1.6) Features a Hud with the amount of money.","parameters":{"Initial Visible":"true","Hud X-Axis":"1030","Hud Y-Axis":"660","Number X-Axis":"240","Number Y-Axis":"24","Fade Limit":"60"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"-CHRONO","status":false,"description":"","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_CharPoses","status":true,"description":"(v2.2) Activates movement poses in the character.","parameters":{"Poses for Followers":"true","Dash Pose":"true","Jump Pose":"false","Idle Pose":"true","Idle Start Time":"60"}},
{"name":"MOG_EventSensor","status":true,"description":"(v1.1) Event distance system.","parameters":{"Self Switch Key":"D"}},
{"name":"MOG_ChronoEngine","status":true,"description":"(v0.2b) The Chrono[trigger] ABS (and ATB) System.","parameters":{"Tool Map ID":"90","Battle Mode":"1","Battle Sensor Range":"5","Max Battle Members":"3","ATB Mode":"2","ATB Max":"1600","States Duration":"240","Diagonal Movement":"true","Touch Input Mode":"false","Attack Command":"true","Shield Command":"true","Skill Command":"true","Item Command":"true","Skill Menu Command":"true","Item Menu Command":"true","Attack Button":"ok","Shield Button":"cancel","Skill Button":"R2","Item Button":"L2","Dash Button":"shift","Skill Menu Button":"pagedown","Item Menu Button":"pageup","Escape Button":"shift","Shield Animation ID":"202","Cast Animation ID":"203","Level UP Animation ID":"201","Treasure SE":"Item3","Turn SE":"Ice1","Charging SE":"Up1","Charged SE":"Saint3","Action Cost SE":"Cancel1","Hookshot X-Axis Offset":"12","Hookshot Y-Axis Offset":"0","Cursor Actor X-Axis":"0","Cursor Actor Y-Axis":"-20","Cursor Actor Rotation":"0.02","Cursor Actor Blend Mode":"1","Cursor Actor Opacity":"150","Cursor X-Axis":"0","Cursor Y-Axis":"0","Cursor Float Mode":"true","Cursor FontSize":"18","Cursor Text X-Axis":"0","Cursor Text Y-Axis":"3","Cursor HP X-Axis":"0","Cursor HP Y-Axis":"32","Cursor HP Gauge X-Axis":"0","Cursor HP Gauge Y-Axis":"1","Command X-Axis":"0","Command Y-Axis":"0","Command Name X-Axis":"0","Command Name Y-Axis":"-7","Command Arrow X-Axis":"0","Command Arrow Y-Axis":"0","Phase X-axis":"130","Phase Y-axis":"300","Result X-axis":"200","Result Y-axis":"200","Result FontSize":"24","Result Exp X-axis":"110","Result Exp Y-axis":"80","Result Gold X-axis":"110","Result Gold Y-axis":"185","Escape X-axis":"60","Escape Y-axis":"170","Escape Gauge X-axis":"6","Escape Gauge Y-axis":"23"}},
{"name":"MOG_ChronoATBHud","status":true,"description":"(v1.2) Introduces ATB's Hud to the Chrono Engine.","parameters":{"Hud Angle":"0","Hud X-Axis":"740","Hud Y-Axis":"45","Enemy X-Axis Offset":"16","Actor X-Axis Offset":"-16","Active X-Axis":"-3","Active Y-Axis":"30","Gauge Size":"160","Skill Visible":"true","Skill Zoom":"0.6","Skill X-Axis":"0","Skill Y-Axis":"0"}},
{"name":"MOG_ChronoEnemyHP","status":true,"description":"(v1.2) Displays the HP of the enemy by attacking it.","parameters":{"Duration":"90","Font Size":"20","Layout X-Axis":"720","Layout Y-Axis":"32","Meter X-Axis":"27","Meter Y-Axis":"29","Name X-Axis":"80","Name Y-Axis":"0"}},
{"name":"MOG_ChronoToolHud","status":true,"description":"(v1.2) Displays stock actions on the Chrono Engine.","parameters":{"Hud Start Visible":"true","Hud Font Size":"18","Hud Item Color":"0","Hud Mp Color":"3","Hud Tp Color":"5","Hud Icon X-Axis":"3","Hud Icon Y-Axis":"19","Hud Cost Number X-Axis":"0","Hud Cost Number Y-Axis":"38","Item Hud X-Axis":"350","Item Hud Y-Axis":"660","Skill Hud X-Axis":"392","Skill Hud Y-Axis":"660","Weapon Hud X-Axis":"434","Weapon Hud Y-Axis":"660","Shield Hud X-Axis":"480","Shield Hud Y-Axis":"660"}},
{"name":"MOG_ChronoCT","status":true,"description":"(v1.1) Adds the CT system.","parameters":{"Initial Visible":"true","Dash Cost":"true","Full SE":"","Smart Fade":"true","Slant Animation":"true","Hud X-Axis":"570","Hud Y-Axis":"660","Number X-Axis":"155","Number Y-Axis":"3"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"J_MOG_Modifications","status":true,"description":"Modifies different aspects of the MOG Chrono Engine, ABS mode.","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"YEP_ItemCore","status":true,"description":"v1.28 Changes the way Items are handled for your game\r\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"0","Max Armors":"0","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_ItemSynthesis","status":true,"description":"v1.10 Players can now craft their own items in-game\r\nthrough an item synthesis system.","parameters":{"---General---":"","Synthesis Command":"Cook","Show Command":"false","Enable Command":"false","Auto Place Command":"true","---Command Window---":"","Item Command":"Craft Recipe","Weapon Command":"","Armor Command":"","Finish Command":"Done Cooking","Text Alignment":"right","---Status Window---":"","Collected Recipes":"Collected Recipes","Crafted Items":"","Crafted Weapons":"","Crafted Armors":"","---List Window---":"","Equipped Recipes":"true","Mask Unknown":"true","Mask Text":"?","Mask Italic":"true","Mask Help Text":"This item has not been prepared yet.","Ingredients Text":"Ingredients","Amount Text":"Number","Amount Format":"false","Quantity Text Size":"20","---Sound---":"","Default SE":"Twine","Default Volume":"100","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.12 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_SkillCostItems","status":true,"description":"v1.04 (Requires YEP_SkillCore.js) Skills can now have an\r\nitem cost attached to them.","parameters":{"---General---":"","Cost Style":"2","Font Size":"20","Amount Format":"×%1","Amount Y Buffer":"4","---Gauges---":"","Gauge Color 1":"13","Gauge Color 2":"5","Display Name":"true","Text Color":"16"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.17 Allows for the equipment system to be more flexible to\r\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Finish","Remove Text":"Remove","Remove Icon":"16","Empty Text":"<Empty>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_AutoPassiveStates","status":true,"description":"v1.15 This plugin allows for some states to function as\r\npassives for actors, enemies, skills, and equips.","parameters":{"---Basic---":"","Actor Passives":"0","Enemy Passives":"0","Global Passives":"0","---List---":"...Requires RPG Maker MV 1.5.0+...","Actor Passives List":"[]","Enemy Passives List":"[]","Global Passives List":"[]"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\r\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_Gab","status":true,"description":"v1.06 The Gab Window functions as a window for random\r\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"GameFont","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"108","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.14 Alter the basic mechanics behind buffs and states\r\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"1","Maximum Limit":"10","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\r\nbeing able to venture into those spots.","parameters":{"Player Restrict":"0","Event Restrict":"0","All Restrict":"0","Player Allow":"8","Event Allow":"0","All Allow":"0"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\r\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"10","Saved Icon":"342","Empty Icon":"480","Return After Saving":"true","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, variable 1, variable 2, variable 3","Data Column 3":"empty, variable 4, variable 5, variable 6","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"J_Base","status":true,"description":"The core plugin that basically handles setup, icons, text, etc. This should go above any other plugins of mine you use!","parameters":{"MHP-icon":"391","MMP-icon":"392","ATK-icon":"394","DEF-icon":"395","MAT-icon":"396","MDF-icon":"397","AGI-icon":"398","LUK-icon":"399","EXP-icon":"125","SDP-icon":"447","GOLD-icon":"457","DROP-icon":"352","---SPARAM---":"","TGR-text":"Targeting","TGR-icon":"14","GRD-text":"Guard Rate","GRD-icon":"12","REC-text":"Recovery Rate","REC-icon":"7","PHA-text":"Item Amp","PHA-icon":"320","MCR-text":"MP Reduce","MCR-icon":"79","TCR-text":"TP Charge","TCR-icon":"76","PDR-text":"PhysDMG%","PDR-icon":"51","MDR-text":"MagiDMG%","MDR-icon":"53","FDR-text":"FloorDMG%","FDR-icon":"54","EXR-text":"EXPboost%","EXR-icon":"125","---XPARAM---":"","HIT-text":"Hit%","HIT-icon":"102","EVA-text":"Evade%","EVA-icon":"6","CRI-text":"Critical%","CRI-icon":"78","CEV-text":"Crit Evade","CEV-icon":"74","MEV-text":"M-Evade%","MEV-icon":"9","MRF-text":"M-Reflect%","MRF-icon":"366","CNT-text":"Counter%","CNT-icon":"15","HRG-text":"HP Regen%","HRG-icon":"84","MRG-text":"MP Regen%","MRG-icon":"446","TRG-text":"TP Regen","TRG-icon":"70","EL01-icon":"123","EL02-icon":"107","EL03-icon":"110","EL04-icon":"64","EL05-icon":"67","EL06-icon":"68","EL07-icon":"69","EL08-icon":"70","EL09-icon":"71","EL10-icon":"118"}},
{"name":"J_revamp_equipscreen","status":true,"description":"Alters the equipscreen to provide greater detail about equipped items and their impacts on characters.","parameters":{}},
{"name":"J_revamp_statusscreen","status":true,"description":"Alters the status screen to display all details and parameters. Click \"Help...\" for more details.","parameters":{}},
{"name":"J_MapTime","status":true,"description":"Provides functionality for HRG/MRG/TRG while on the map.","parameters":{"useTPregen":"false","useTPforDash":"true","flatHealing":"false"}},
{"name":"J_Difficulty","status":true,"description":"Provides difficulty options for the the player that modify enemy stats.","parameters":{"Difficulty Variable":"10\r"}},
{"name":"J_RecordWindow","status":false,"description":"This plugin creates a window that acts as a log for EXP/GOLD/items acquired.","parameters":{"w_width":"400","w_height":"196","stallMod":"60","expIcon":"87","goldIcon":"314"}},
{"name":"J_XPGPvariance","status":true,"description":"Provides notetag-defined levels to give multipliers against XP/GP.","parameters":{}},
{"name":"J_DropItem","status":true,"description":"Modifies the database drop functionality to be a percent instead of 1/N,\r\nAnd accommodates the \"Extra Drops\" notetags.","parameters":{"dropScale":"100"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"J_critDamage","status":true,"description":"Creates new paramters: CDM/CDR for crit damage manipulation.","parameters":{}},
{"name":"J_HUD_Item","status":false,"description":"Shows an item in the lower right corner","parameters":{"visible":"101"}},
{"name":"J_HUD_Time","status":false,"description":"Shows the current time in the upper right corner.","parameters":{"visible":"102"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"J_SDP","status":true,"description":"Stat Distribution Panels","parameters":{"cmdName":"Distribute"}}
];
