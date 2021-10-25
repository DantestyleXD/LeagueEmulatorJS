var Packets = {
	Header: {
		cmd: 'uint8',
		netId: 'uint32',
	},
	BasePacket: require('./Packets/BasePacket'),
	HANDSHAKE: {
		id: 0,
		KEY_CHECK:							{id: 0x00, packet: require('./Packets/HANDSHAKE/0x00-KEY_CHECK')},
		SPM_HierarchicalProfilerUpdate:		{id: 0x01},
		SPM_AddMemoryListener:				{id: 0x4D},
		SPM_HierarchicalMemoryUpdate:		{id: 0x4E},
		SPM_RemoveListener:					{id: 0x8B},
		SPM_RemoveMemoryListener:			{id: 0x8E},
		SPM_AddListener:					{id: 0x91},
		SPM_RemoveBBProfileListener:		{id: 0x99},
		SPM_AddBBProfileListener:			{id: 0xA6},
		SPM_HierarchicalBBProfileUpdate:	{id: 0xB6},
		SPM_SamplingProfilerUpdate:			{id: 0xC7},
	},
	LOADING_SCREEN: {
		id: 7,
		CLIENT_READY:						{id: 0x64, packet: require('./Packets/LOADING_SCREEN/0x64-CLIENT_READY')},
		LOAD_HERO:							{id: 0x65, packet: require('./Packets/LOADING_SCREEN/0x65-LOAD_HERO')},
		LOAD_NAME:							{id: 0x66, packet: require('./Packets/LOADING_SCREEN/0x66-LOAD_NAME')},
		LOAD_SCREEN_INFO:					{id: 0x67, packet: require('./Packets/LOADING_SCREEN/0x67-LOAD_SCREEN_INFO')},
	},
	GAMEPLAY: {
		id: 2,
		HEART_BEAT:							{id: 0x08, packet: require('./Packets/GAMEPLAY/0x08-HEART_BEAT')},
		SyncSimTimeFinal:					{id: 0x76, packet: require('./Packets/GAMEPLAY/0x76-SyncSimTimeFinal')},
	},
	LOW_PRIORITY: {
		id: 4,
		MOVE_ANS:							{id: 0x61, packet: require('./Packets/LOW_PRIORITY/0x61-MOVE_ANS')},
		PING_LOAD_INFO:						{id: 0x95, packet: require('./Packets/LOW_PRIORITY/0x95-PING_LOAD_INFO')},
		CHAR_STATS:							{id: 0xC4, packet: require('./Packets/LOW_PRIORITY/0xC4-CHAR_STATS')},
	},
	COMMUNICATION: {
		id: 5,
		CHAT_BOX_MESSAGE:					{id: 0x68, packet: require('./Packets/COMMUNICATION/0x68-CHAT_BOX_MESSAGE')},
	},
	C2S: {
		id: 1,
    	TutorialAudioEventFinished:			{id: 0x05, packet: require('./Packets/C2S/0x05-TutorialAudioEventFinished')},
		SELL_ITEM:							{id: 0x09, packet: require('./Packets/C2S/0x09-SELL_ITEM')},
		UNPAUSE_GAME:						{id: 0x0A, packet: require('./Packets/C2S/0x0A-UNPAUSE_GAME')},
		QUERY_STATUS_REQ:					{id: 0x14},// BasePacket?
		PING_LOAD_INFO:						{id: 0x16, packet: require('./Packets/C2S/0x16-PING_LOAD_INFO')},
		WriteNavFlags_Acc:					{id: 0x1D, packet: require('./Packets/C2S/0x1D-WriteNavFlags_Acc')},
		SWAP_ITEMS:							{id: 0x20, packet: require('./Packets/C2S/0x20-SWAP_ITEMS')},
		VIEW_REQ:							{id: 0x2E, packet: require('./Packets/C2S/0x2E-VIEW_REQ')},
		SKILL_UPGRADE:						{id: 0x39, packet: require('./Packets/C2S/0x39-SKILL_UPGRADE')},
		USE_OBJECT:							{id: 0x3A, packet: require('./Packets/C2S/0x3A-USE_OBJECT')},
		AUTO_ATTACK_OPTION:					{id: 0x47, packet: require('./Packets/C2S/0x47-AUTO_ATTACK_OPTION')},
		EMOTION:							{id: 0x48, packet: require('./Packets/C2S/0x48-EMOTION')},
		PlayVOCommand:						{id: 0x49, packet: require('./Packets/C2S/0x49-PlayVOCommand')},
		OnScoreBoardOpened:					{id: 0x4B},// BasePacket?
		START_GAME:							{id: 0x52, packet: require('./Packets/C2S/0x52-START_GAME')},
		SCOREBOARD:							{id: 0x56, packet: require('./Packets/C2S/0x56-SCOREBOARD')},
		ATTENTION_PING:						{id: 0x57, packet: require('./Packets/C2S/0x57-ATTENTION_PING')},
		OnShopOpened:						{id: 0x5D},// BasePacket?
		BLUE_TIP_CLICKED:					{id: 0x6D, packet: require('./Packets/C2S/0x6D-BLUE_TIP_CLICKED')},
		MOVE_REQ:							{id: 0x72, packet: require('./Packets/C2S/0x72-MOVE_REQ')},
		MOVE_CONFIRM:						{id: 0x77, packet: require('./Packets/C2S/0x77-MOVE_CONFIRM')},
		LOCK_CAMERA:						{id: 0x81, packet: require('./Packets/C2S/0x81-LOCK_CAMERA')},
		BUY_ITEM_REQ:						{id: 0x82, packet: require('./Packets/C2S/0x82-BUY_ITEM_REQ')},
		ClientFinished:						{id: 0x8D},// BasePacket?
		EXIT:								{id: 0x8F},// BasePacket?
		WORLD_SEND_GAME_NUMBER:				{id: 0x92, packet: require('./Packets/C2S/0x92-WORLD_SEND_GAME_NUMBER')},
		CAST_SPELL:							{id: 0x9A, packet: require('./Packets/C2S/0x9A-CAST_SPELL')},
		SoftReconnect:						{id: 0x9C},// BasePacket?
		PAUSE_GAME:							{id: 0xA1, packet: require('./Packets/C2S/0xA1-PAUSE_GAME')},
		SURRENDER:							{id: 0xA4, packet: require('./Packets/C2S/0xA4-SURRENDER')},
		STATS_CONFIRM:						{id: 0xA8, packet: require('./Packets/C2S/0xA8-STATS_CONFIRM')},
		CLICK:								{id: 0xAF, packet: require('./Packets/C2S/0xAF-CLICK')},
		SYNCH_VERSION:						{id: 0xBD, packet: require('./Packets/C2S/0xBD-SYNCH_VERSION')},
		CHAR_LOADED:						{id: 0xBE},// BasePacket?
		OnTutorialPopupClosed:				{id: 0xCC},// BasePacket?
		QUEST_CLICKED:						{id: 0xCD, packet: require('./Packets/C2S/0xCD-QUEST_CLICKED')},
		OnRespawnPointEvent:				{id: 0xD6, packet: require('./Packets/C2S/0xD6-OnRespawnPointEvent')},
		SPELL_CHARGE_UPDATE:				{id: 0xE6, packet: require('./Packets/C2S/0xE6-SPELL_CHARGE_UPDATE')},
		SpectatorDataReq:					{id: 0xEA, packet: require('./Packets/C2S/0xEA-SpectatorDataReq')},
		PlayContextualEmote:				{id: 0xF4, packet: require('./Packets/C2S/0xF4-PlayContextualEmote')},
		TeamBalanceVote:					{id: 0xFB, packet: require('./Packets/C2S/0xFB-TeamBalanceVote')},
		UnitSendDrawPath:					{id: 0x0106, packet: require('./Packets/C2S/0x0106-UnitSendDrawPath')},
		UndoItemReq:						{id: 0x010A},// BasePacket?
		CheatLogGoldSources:				{id: 0x011B},// BasePacket?
	},
	S2C: {
		id: 3,
    	DisplayLocalizedTutorialChatText:	{id: 0x02, packet: require('./Packets/S2C/0x02-DisplayLocalizedTutorialChatText')},
    	Barrack_SpawnUnit:					{id: 0x03, packet: require('./Packets/S2C/0x03-Barrack_SpawnUnit')},
    	SwitchNexusesToOnIdleParticles:		{id: 0x04},// BasePacket?
		SetCircularMovementRestriction:		{id: 0x06, packet: require('./Packets/S2C/0x06-SetCircularMovementRestriction')},
    	UpdateGoldRedirectTarget:			{id: 0x07, packet: require('./Packets/S2C/0x07-UpdateGoldRedirectTarget')},
		REMOVE_ITEM:						{id: 0x0B, packet: require('./Packets/S2C/0x0B-REMOVE_ITEM')},
		NEXT_AUTO_ATTACK:					{id: 0x0C, packet: require('./Packets/S2C/0x0C-NEXT_AUTO_ATTACK')},
		EDIT_MESSAGE_BOX_TOP:				{id: 0x0D, packet: require('./Packets/S2C/0x0D-EDIT_MESSAGE_BOX_TOP')},
		UNLOCK_CAMERA:						{id: 0x0E},// BasePacket?
		Reconnect:							{id: 0x0F, packet: require('./Packets/S2C/0x0F-Reconnect')},
		ADD_XP:								{id: 0x10, packet: require('./Packets/S2C/0x10-ADD_XP')},
		END_SPAWN:							{id: 0x11},// BasePacket?
		GAME_SPEED:							{id: 0x12, packet: require('./Packets/S2C/0x12-GAME_SPEED')},
		BotAI:								{id: 0x13, packet: require('./Packets/S2C/0x13-BotAI')},
		SKILL_UP:							{id: 0x15, packet: require('./Packets/S2C/0x15-SKILL_UP')},
		CHANGE_SPELL:						{id: 0x17, packet: require('./Packets/S2C/0x17-CHANGE_SPELL')},
		FLOATING_TEXT:						{id: 0x18, packet: require('./Packets/S2C/0x18-FLOATING_TEXT')},
		FLOATING_TEXT_WITH_VALUE:			{id: 0x19, packet: require('./Packets/S2C/0x19-FLOATING_TEXT_WITH_VALUE')},
		BEGIN_AUTO_ATTACK:					{id: 0x1A, packet: require('./Packets/S2C/0x1A-BEGIN_AUTO_ATTACK')},
		CHAMPION_DIE2:						{id: 0x1B, packet: require('./Packets/S2C/0x1B-CHAMPION_DIE2')},
		EDIT_BUFF:							{id: 0x1C, packet: require('./Packets/S2C/0x1C-EDIT_BUFF')},
		NPC_BuffReplaceGroup:				{id: 0x1E, packet: require('./Packets/S2C/0x1E-NPC_BuffReplaceGroup')},
		NPC_SetAutocast:					{id: 0x1F, packet: require('./Packets/S2C/0x1F-NPC_SetAutocast')},
		NPC_Die_EventHistory:				{id: 0x21, packet: require('./Packets/S2C/0x21-NPC_Die_EventHistory')},
		ADD_GOLD:							{id: 0x22, packet: require('./Packets/S2C/0x22-ADD_GOLD')},
		FOG_UPDATE2:						{id: 0x23, packet: require('./Packets/S2C/0x23-FOG_UPDATE2')},
		MoveRegion:							{id: 0x24, packet: require('./Packets/S2C/0x24-MoveRegion')},
		MOVE_CAMERA:						{id: 0x25, packet: require('./Packets/S2C/0x25-MOVE_CAMERA')},
		LineMissileHitList:					{id: 0x26, packet: require('./Packets/S2C/0x26-LineMissileHitList')},
		SOUND_SETTINGS:						{id: 0x27, packet: require('./Packets/S2C/0x27-SOUND_SETTINGS')},
		ServerTick:							{id: 0x28, packet: require('./Packets/S2C/0x28-ServerTick')},
		StopAnimation:						{id: 0x29, packet: require('./Packets/S2C/0x29-StopAnimation')},
		AVATAR_INFO:						{id: 0x2A, packet: require('./Packets/S2C/0x2A-AVATAR_INFO')},
		INHIBITOR_STATE:					{id: 0x2B, packet: require('./Packets/S2C/0x2B-INHIBITOR_STATE')},
		VIEW_ANS:							{id: 0x2C, packet: require('./Packets/S2C/0x2C-VIEW_ANS')},
		ModifyDebugCircleRadius:			{id: 0x2D, packet: require('./Packets/S2C/0x2D-ModifyDebugCircleRadius')},
		CHAMPION_RESPAWN:					{id: 0x2F, packet: require('./Packets/S2C/0x2F-CHAMPION_RESPAWN')},
		NPC_BuffReplace:					{id: 0x30, packet: require('./Packets/S2C/0x30-NPC_BuffReplace')},
		Pause:								{id: 0x31, packet: require('./Packets/S2C/0x31-Pause')},
		SetFadeOut_Pop:						{id: 0x32, packet: require('./Packets/S2C/0x32-SetFadeOut_Pop')},
		ADD_UNIT_FOW:						{id: 0x33, packet: require('./Packets/S2C/0x33-ADD_UNIT_FOW')},
		STOP_AUTO_ATTACK:					{id: 0x34, packet: require('./Packets/S2C/0x34-STOP_AUTO_ATTACK')},
		DELETE_OBJECT:						{id: 0x35},// BasePacket?
		MESSAGE_BOX_TOP:					{id: 0x36, packet: require('./Packets/S2C/0x36-MESSAGE_BOX_TOP')},
		SpawnPet:							{id: 0x37, packet: require('./Packets/S2C/0x37-SpawnPet')},
		DESTROY_OBJECT:						{id: 0x38, packet: require('./Packets/S2C/0x38-DESTROY_OBJECT')},
		SPAWN_PROJECTILE:					{id: 0x3B, packet: require('./Packets/S2C/0x3B-SPAWN_PROJECTILE')},
		MovementDriverReplication:			{id: 0x3C, packet: require('./Packets/S2C/0x3C-MovementDriverReplication')},
		HighlightHUDElement:				{id: 0x3D, packet: require('./Packets/S2C/0x3D-HighlightHUDElement')},
		SWAP_ITEMS:							{id: 0x3E, packet: require('./Packets/S2C/0x3E-SWAP_ITEMS')},
		LEVEL_UP:							{id: 0x3F, packet: require('./Packets/S2C/0x3F-LEVEL_UP')},
		ATTENTION_PING:						{id: 0x40, packet: require('./Packets/S2C/0x40-ATTENTION_PING')},
		WriteNavFlags:						{id: 0x41, packet: require('./Packets/S2C/0x41-WriteNavFlags')},
		EMOTION:							{id: 0x42, packet: require('./Packets/S2C/0x42-EMOTION')},
		PLAY_SOUND:							{id: 0x43, packet: require('./Packets/S2C/0x43-PLAY_SOUND')},
		PlayVOCommand:						{id: 0x44, packet: require('./Packets/S2C/0x44-PlayVOCommand')},
		ANNOUNCE:							{id: 0x45, packet: require('./Packets/S2C/0x45-ANNOUNCE')},
		PLAYER_STATS:						{id: 0x46, packet: require('./Packets/S2C/0x46-PLAYER_STATS')},
		HeroReincarnate:					{id: 0x4A, packet: require('./Packets/S2C/0x4A-HeroReincarnate')},
		HERO_SPAWN:							{id: 0x4C, packet: require('./Packets/S2C/0x4C-HERO_SPAWN')},
		ToggleUIHighlight:					{id: 0x4F, packet: require('./Packets/S2C/0x4F-ToggleUIHighlight')},
		FACE_DIRECTION:						{id: 0x50, packet: require('./Packets/S2C/0x50-FACE_DIRECTION')},
		LEAVE_VISION:						{id: 0x51},// BasePacket?
		SetItem:							{id: 0x53, packet: require('./Packets/S2C/0x53-SetItem')},
		SYNCH_VERSION:						{id: 0x54, packet: require('./Packets/S2C/0x54-SYNCH_VERSION')},
		BLUE_TIP:							{id: 0x55, packet: require('./Packets/S2C/0x55-BLUE_TIP')},
		RemoveDebugObject:					{id: 0x58, packet: require('./Packets/S2C/0x58-RemoveDebugObject')},
		HIGHLIGHT_UNIT:						{id: 0x59, packet: require('./Packets/S2C/0x59-HIGHLIGHT_UNIT')},
		DESTROY_PROJECTILE:					{id: 0x5A},// BasePacket?
		SetSpellLevel:						{id: 0x5B, packet: require('./Packets/S2C/0x5B-SetSpellLevel')},
		START_GAME:							{id: 0x5C, packet: require('./Packets/S2C/0x5C-START_GAME')},
		CHAMPION_DIE:						{id: 0x5E, packet: require('./Packets/S2C/0x5E-CHAMPION_DIE')},
		FadeOutMainSFX:						{id: 0x5F, packet: require('./Packets/S2C/0x5F-FadeOutMainSFX')},
		PlayThemeMusic:						{id: 0x60, packet: require('./Packets/S2C/0x60-PlayThemeMusic')},
		START_SPAWN:						{id: 0x62, packet: require('./Packets/S2C/0x62-START_SPAWN')},
		CreateNeutral:						{id: 0x63, packet: require('./Packets/S2C/0x63-CreateNeutral')},
		DASH:								{id: 0x64, packet: require('./Packets/S2C/0x64-DASH')},
		DAMAGE_DONE:						{id: 0x65, packet: require('./Packets/S2C/0x65-DAMAGE_DONE')},
		MODIFY_SHIELD:						{id: 0x66, packet: require('./Packets/S2C/0x66-MODIFY_SHIELD')},
		PopCharacterData:					{id: 0x67, packet: require('./Packets/S2C/0x67-PopCharacterData')},
		BuffAddGroup:						{id: 0x68, packet: require('./Packets/S2C/0x68-BuffAddGroup')},
		AI_TargetSelection:					{id: 0x69, packet: require('./Packets/S2C/0x69-AI_TargetSelection')},
		SET_TARGET:							{id: 0x6A, packet: require('./Packets/S2C/0x6A-SET_TARGET')},
		SET_ANIMATION:						{id: 0x6B, packet: require('./Packets/S2C/0x6B-SET_ANIMATION')},
		ChainMissileSync:					{id: 0x6C, packet: require('./Packets/S2C/0x6C-ChainMissileSync')},
		SHOW_PROJECTILE:					{id: 0x6E, packet: require('./Packets/S2C/0x6E-SHOW_PROJECTILE')},
		BUY_ITEM_ANS:						{id: 0x6F, packet: require('./Packets/S2C/0x6F-BUY_ITEM_ANS')},
		SetSpellData:						{id: 0x70, packet: require('./Packets/S2C/0x70-SetSpellData')},
		FREEZE_UNIT_ANIMATION:				{id: 0x71, packet: require('./Packets/S2C/0x71-FREEZE_UNIT_ANIMATION')},
		SET_CAMERA_POSITION:				{id: 0x73, packet: require('./Packets/S2C/0x73-SET_CAMERA_POSITION')},
		AnimatedBuildingSetCurrentSkin:		{id: 0x74, packet: require('./Packets/S2C/0x74-AnimatedBuildingSetCurrentSkin')},
		Connected:							{id: 0x75, packet: require('./Packets/S2C/0x75-Connected')},
		LockCamera:							{id: 0x78, packet: require('./Packets/S2C/0x78-LockCamera')},
		PlayVOAudioEvent:					{id: 0x79, packet: require('./Packets/S2C/0x79-PlayVOAudioEvent')},
		AI_Command:							{id: 0x7A, packet: require('./Packets/S2C/0x7A-AI_Command')},
		REMOVE_BUFF:						{id: 0x7B, packet: require('./Packets/S2C/0x7B-REMOVE_BUFF')},
		SpawnMinion:						{id: 0x7C, packet: require('./Packets/S2C/0x7C-SpawnMinion')},
		Unused125:							{id: 0x7D},
		ToggleFoW:							{id: 0x7E},// BasePacket?
		ToolTipVars:						{id: 0x7F, packet: require('./Packets/S2C/0x7F-ToolTipVars')},
		Unused128:							{id: 0x80},
		WaypointListHeroWithSpeed:			{id: 0x83, packet: require('./Packets/S2C/0x83-WaypointListHeroWithSpeed')},
		TOGGLE_INPUT_LOCKING_FLAG:			{id: 0x84, packet: require('./Packets/S2C/0x84-TOGGLE_INPUT_LOCKING_FLAG')},
		SET_COOLDOWN:						{id: 0x85, packet: require('./Packets/S2C/0x85-SET_COOLDOWN')},
		CancelTargetingReticle:				{id: 0x86, packet: require('./Packets/S2C/0x86-CancelTargetingReticle')},
		SPAWN_PARTICLE:						{id: 0x87, packet: require('./Packets/S2C/0x87-SPAWN_PARTICLE')},
		QUERY_STATUS_ANS:					{id: 0x88, packet: require('./Packets/S2C/0x88-QUERY_STATUS_ANS')},
		Building_Die:						{id: 0x89, packet: require('./Packets/S2C/0x89-Building_Die')},
		PreloadCharacterData:				{id: 0x8A, packet: require('./Packets/S2C/0x8A-PreloadCharacterData')},
		QUEST:								{id: 0x8C, packet: require('./Packets/S2C/0x8C-QUEST')},
		ModifyDebugObjectColor:				{id: 0x90, packet: require('./Packets/S2C/0x90-ModifyDebugObjectColor')},
		WORLD_SEND_GAME_NUMBER:				{id: 0x92, packet: require('./Packets/S2C/0x92-WORLD_SEND_GAME_NUMBER')},
		SetPARState:						{id: 0x93, packet: require('./Packets/S2C/0x93-SetPARState')},
		NPC_BuffRemoveGroup:				{id: 0x94, packet: require('./Packets/S2C/0x94-NPC_BuffRemoveGroup')},
		CHANGE_CHARACTER_VOICE:				{id: 0x96, packet: require('./Packets/S2C/0x96-CHANGE_CHARACTER_VOICE')},
		UPDATE_MODEL:						{id: 0x97, packet: require('./Packets/S2C/0x97-UPDATE_MODEL')},
		DISCONNECTED_ANNOUNCEMENT:			{id: 0x98, packet: require('./Packets/S2C/0x98-DISCONNECTED_ANNOUNCEMENT')},
		ToggleInputLockFlag:				{id: 0x9B, packet: require('./Packets/S2C/0x9B-ToggleInputLockFlag')},
		TURRET_SPAWN:						{id: 0x9D, packet: require('./Packets/S2C/0x9D-TURRET_SPAWN')},
		NPC_HIDE:							{id: 0x9E, packet: require('./Packets/S2C/0x5E-CHAMPION_DIE')},
		SET_ITEM_STACKS:					{id: 0x9F, packet: require('./Packets/S2C/0x9F-SET_ITEM_STACKS')},
		MESSAGE_BOX_RIGHT:					{id: 0xA0, packet: require('./Packets/S2C/0xA0-MESSAGE_BOX_RIGHT')},
		REMOVE_MESSAGE_BOX_TOP:				{id: 0xA2},// BasePacket?
		ANNOUNCE2:							{id: 0xA3, packet: require('./Packets/S2C/0xA3-ANNOUNCE2')},
		SURRENDER_RESULT:					{id: 0xA5, packet: require('./Packets/S2C/0xA5-SURRENDER_RESULT')},
		REMOVE_MESSAGE_BOX_RIGHT:			{id: 0xA7},// BasePacket?
		SetGreyscaleEnabledWhenDead:		{id: 0xA9, packet: require('./Packets/S2C/0xA9-SetGreyscaleEnabledWhenDead')},
		AI_State:							{id: 0xAA, packet: require('./Packets/S2C/0xAA-AI_State')},
		ENABLE_FOW:							{id: 0xAB, packet: require('./Packets/S2C/0xAB-ENABLE_FOW')},
		ReloadScripts:						{id: 0xAC},// BasePacket?
		Cheat:								{id: 0xAD},// BasePacket?
		SET_HEALTH:							{id: 0xAE, packet: require('./Packets/S2C/0xAE-SET_HEALTH')},
		SPELL_ANIMATION:					{id: 0xB0, packet: require('./Packets/S2C/0xB0-SPELL_ANIMATION')},
		EDIT_MESSAGE_BOX_RIGHT:				{id: 0xB1, packet: require('./Packets/S2C/0xB1-EDIT_MESSAGE_BOX_RIGHT')},
		SET_MODEL_TRANSPARENCY:				{id: 0xB2, packet: require('./Packets/S2C/0xB2-SET_MODEL_TRANSPARENCY')},
		BASIC_TUTORIAL_MESSAGE_WINDOW:		{id: 0xB3, packet: require('./Packets/S2C/0xB3-BASIC_TUTORIAL_MESSAGE_WINDOW')},
		REMOVE_HIGHLIGHT_UNIT:				{id: 0xB4, packet: require('./Packets/S2C/0xB4-REMOVE_HIGHLIGHT_UNIT')},
		CAST_SPELL_ANS:						{id: 0xB5, packet: require('./Packets/S2C/0xB5-CAST_SPELL_ANS')},
		ADD_BUFF:							{id: 0xB7, packet: require('./Packets/S2C/0xB7-ADD_BUFF')},
		AFK_WARNING_WINDOW:					{id: 0xB8},// BasePacket?
		WaypointList:						{id: 0xB9, packet: require('./Packets/S2C/0xB9-WaypointList')},
		OBJECT_SPAWN:						{id: 0xBA, packet: require('./Packets/S2C/0xBA-OBJECT_SPAWN')},
		AddDebugObject:						{id: 0xBB, packet: require('./Packets/S2C/0xBB-AddDebugObject')},
		HIDE_UI:							{id: 0xBC},// BasePacket?
		NPC_BuffUpdateCountGroup:			{id: 0xBF, packet: require('./Packets/S2C/0xBF-NPC_BuffUpdateCountGroup')},
		SET_TARGET2:						{id: 0xC0, packet: require('./Packets/S2C/0xC0-SET_TARGET2')},
		GAME_TIMER:							{id: 0xC1, packet: require('./Packets/S2C/0xC1-GAME_TIMER')},
		GAME_TIMER_UPDATE:					{id: 0xC2, packet: require('./Packets/S2C/0xC2-GAME_TIMER_UPDATE')},
		Neutral_Camp_Empty:					{id: 0xC3, packet: require('./Packets/S2C/0xC3-Neutral_Camp_Empty')},
		EndOfGameEvent:						{id: 0xC5, packet: require('./Packets/S2C/0xC5-EndOfGameEvent')},
		GAME_END:							{id: 0xC6, packet: require('./Packets/S2C/0xC6-GAME_END')},
		PopAllCharacterData:				{id: 0xC8},// BasePacket?
		SURRENDER:							{id: 0xC9, packet: require('./Packets/S2C/0xC9-SURRENDER')},
		HandleUIHighlight:					{id: 0xCA, packet: require('./Packets/S2C/0xCA-HandleUIHighlight')},
		FadeMinions:						{id: 0xCB, packet: require('./Packets/S2C/0xCB-FadeMinions')},
		SHOW_HP_AND_NAME:					{id: 0xCE, packet: require('./Packets/S2C/0xCE-SHOW_HP_AND_NAME')},
		SpawnBot:							{id: 0xCF, packet: require('./Packets/S2C/0xCF-SpawnBot')},
		LEVEL_PROP_SPAWN:					{id: 0xD0, packet: require('./Packets/S2C/0xD0-LEVEL_PROP_SPAWN')},
		LEVEL_PROP_ANIMATION:				{id: 0xD1, packet: require('./Packets/S2C/0xD1-LEVEL_PROP_ANIMATION')},
		AttachFlexParticle:					{id: 0xD2, packet: require('./Packets/S2C/0xD2-AttachFlexParticle')},
		SET_CAPTURE_POINT:					{id: 0xD3, packet: require('./Packets/S2C/0xD3-SET_CAPTURE_POINT')},
		CHANGE_CRYSTAL_SCAR_NEXUS_HP:		{id: 0xD4, packet: require('./Packets/S2C/0xD4-CHANGE_CRYSTAL_SCAR_NEXUS_HP')},
		HandleRespawnPointUpdate:			{id: 0xD5, packet: require('./Packets/S2C/0xD5-HandleRespawnPointUpdate')},
		SET_TEAM:							{id: 0xD7, packet: require('./Packets/S2C/0xD7-SET_TEAM')},
		ATTACH_MINIMAP_ICON:				{id: 0xD8, packet: require('./Packets/S2C/0xD8-ATTACH_MINIMAP_ICON')},
		DOMINION_POINTS:					{id: 0xD9, packet: require('./Packets/S2C/0xD9-DOMINION_POINTS')},
		IncrementPlayerStat:				{id: 0xDA, packet: require('./Packets/S2C/0xDA-IncrementPlayerStat')},
		ColorRemapFX:						{id: 0xDB, packet: require('./Packets/S2C/0xDB-ColorRemapFX')},
		InteractiveMusicCommand:			{id: 0xDC, packet: require('./Packets/S2C/0xDC-InteractiveMusicCommand')},
		Unused221:							{id: 0xDD},
		Unused222:							{id: 0xDE},
		Unused223:							{id: 0xDF},
		OnEnterTeamVisiblity:				{id: 0xE0, packet: require('./Packets/S2C/0xE0-OnEnterTeamVisiblity')},
		OnLeaveTeamVisiblity:				{id: 0xE1, packet: require('./Packets/S2C/0xE0-OnEnterTeamVisiblity')},
		FX_OnEnterTeamVisibility:			{id: 0xE2, packet: require('./Packets/S2C/0xE2-FX_OnEnterTeamVisibility')},
		FX_OnLeaveTeamVisiblity:			{id: 0xE3, packet: require('./Packets/S2C/0xE2-FX_OnEnterTeamVisibility')},
		ReplayOnly_GoldEarned:				{id: 0xE4, packet: require('./Packets/S2C/0xE4-ReplayOnly_GoldEarned')},
		CLOSE_GAME:							{id: 0xE5},// BasePacket?
		ModifyDebugText:					{id: 0xE7, packet: require('./Packets/S2C/0xE7-ModifyDebugText')},
		SetDebugHidden:						{id: 0xE8, packet: require('./Packets/S2C/0xE8-SetDebugHidden')},
		ActivateMinionCamp:					{id: 0xE9, packet: require('./Packets/S2C/0xE9-ActivateMinionCamp')},
		SpectatorMetaData:					{id: 0xEB, packet: require('./Packets/S2C/0xEB-SpectatorMetaData')},
		SpectatorDataChunkInfo:				{id: 0xEC, packet: require('./Packets/S2C/0xEC-SpectatorDataChunkInfo')},
		SpectatorDataChunk:					{id: 0xED, packet: require('./Packets/S2C/0xED-SpectatorDataChunk')},
		ChangeMissileTarget:				{id: 0xEE, packet: require('./Packets/S2C/0xEE-ChangeMissileTarget')},
		MarkOrSweepForSoftReconnect:		{id: 0xEF, packet: require('./Packets/S2C/0xEF-MarkOrSweepForSoftReconnect')},
		SetShopEnabled:						{id: 0xF0, packet: require('./Packets/S2C/0xF0-SetShopEnabled')},
		CreateFollowerObject:				{id: 0xF1, packet: require('./Packets/S2C/0xF1-CreateFollowerObject')},
		ReattachFollowerObject:				{id: 0xF2, packet: require('./Packets/S2C/0xF2-ReattachFollowerObject')},
		PlayContextualEmote:				{id: 0xF3, packet: require('./Packets/S2C/0xF3-PlayContextualEmote')},
		SetHoverIndicatorTarget:			{id: 0xF5, packet: require('./Packets/S2C/0xF5-SetHoverIndicatorTarget')},
		SetHoverIndicatorEnabled:			{id: 0xF6, packet: require('./Packets/S2C/0xF6-SetHoverIndicatorEnabled')},
		DEBUG_MESSAGE:						{id: 0xF7, packet: require('./Packets/S2C/0xF7-DEBUG_MESSAGE')},
		ChangeEmitterGroup:					{id: 0xF8, packet: require('./Packets/S2C/0xF8-ChangeEmitterGroup')},
		MESSAGES_AVAILABLE:					{id: 0xF9, packet: require('./Packets/S2C/0xF9-MESSAGES_AVAILABLE')},
		TeamBalanceVote:					{id: 0xFA, packet: require('./Packets/S2C/0xFA-TeamBalanceVote')},
		TeamBalanceStatus:					{id: 0xFC, packet: require('./Packets/S2C/0xFC-TeamBalanceStatus')},
		SET_ITEM_STACKS2:					{id: 0xFD, packet: require('./Packets/S2C/0xFD-SET_ITEM_STACKS2')},
		EXTENDED:							{id: 0xFE},// ExtendedPacket
		BATCH:								{id: 0xFF},// BatchPacket
		SpawnMarker:						{id: 0x0100, packet: require('./Packets/S2C/0x0100-SpawnMarker')},
		UnitSetAutoAttackGroundAllowed:		{id: 0x0101, packet: require('./Packets/S2C/0x0101-UnitSetAutoAttackGroundAllowed')},
		UnitSetShowAutoAttackIndicator:		{id: 0x0102, packet: require('./Packets/S2C/0x0102-UnitSetShowAutoAttackIndicator')},
		AnimationUpdateTimeStep:			{id: 0x0103, packet: require('./Packets/S2C/0x0103-AnimationUpdateTimeStep')},
		UnitSetSpellPARCost:				{id: 0x0104, packet: require('./Packets/S2C/0x0104-UnitSetSpellPARCost')},
		UnitSetDrawPathMode:				{id: 0x0105, packet: require('./Packets/S2C/0x0105-UnitSetDrawPathMode')},
		AmmoUpdate:							{id: 0x0107, packet: require('./Packets/S2C/0x0107-AmmoUpdate')},
		UnitSetCursorReticle:				{id: 0x0108, packet: require('./Packets/S2C/0x0108-UnitSetCursorReticle')},
		BuffUpdateNumCounter:				{id: 0x0109, packet: require('./Packets/S2C/0x0109-BuffUpdateNumCounter')},
		SetUndoEnabled:						{id: 0x010B, packet: require('./Packets/S2C/0x010B-SetUndoEnabled')},
		SetInventory_Broadcast:				{id: 0x010C, packet: require('./Packets/S2C/0x010C-SetInventory_Broadcast')},
		ChangeMissileSpeed:					{id: 0x010D, packet: require('./Packets/S2C/0x010D-ChangeMissileSpeed')},
		SURRENDER_STATE:					{id: 0x010E, packet: require('./Packets/S2C/0x010E-SURRENDER_STATE')},
		ON_ATTACK:							{id: 0x010F, packet: require('./Packets/S2C/0x010F-ON_ATTACK')},
		DestroyUnit:						{id: 0x0110},// BasePacket?
		UnitSetSpellLevelOverrides:			{id: 0x0111, packet: require('./Packets/S2C/0x0111-UnitSetSpellLevelOverrides')},
		UnitSetMaxLevelOverride:			{id: 0x0112, packet: require('./Packets/S2C/0x0112-UnitSetMaxLevelOverride')},
		UnitSetPARType:						{id: 0x0113, packet: require('./Packets/S2C/0x0113-UnitSetPARType')},
		MoveMarker:							{id: 0x0114, packet: require('./Packets/S2C/0x0114-MoveMarker')},
		ReplayOnly_MultiKillCountUpdate:	{id: 0x0115, packet: require('./Packets/S2C/0x0115-ReplayOnly_MultiKillCountUpdate')},
		NeutralMinionTimerUpdate:			{id: 0x0116, packet: require('./Packets/S2C/0x0116-NeutralMinionTimerUpdate')},
		CHAMPION_DEATH_TIMER:				{id: 0x0117, packet: require('./Packets/S2C/0x0117-CHAMPION_DEATH_TIMER')},
		SET_SPELL_ACTIVE_STATE:				{id: 0x0118, packet: require('./Packets/S2C/0x0118-SET_SPELL_ACTIVE_STATE')},
		RESOURCE_TYPE:						{id: 0x0119, packet: require('./Packets/S2C/0x0119-RESOURCE_TYPE')},
		DebugLogGoldSources:				{id: 0x011A, packet: require('./Packets/S2C/0x011A-DebugLogGoldSources')},
		REPLACE_STORE_ITEM:					{id: 0x011C, packet: require('./Packets/S2C/0x011C-REPLACE_STORE_ITEM')},
		ShopItemSubstitutionClear:			{id: 0x011D, packet: require('./Packets/S2C/0x011D-ShopItemSubstitutionClear')},
		ResetClient:						{id: 0x011E},// BasePacket?
		IncrementMinionKills:				{id: 0x011F, packet: require('./Packets/S2C/0x011F-IncrementMinionKills')},
		UpdateAttackSpeedCapOverrides:		{id: 0x0120, packet: require('./Packets/S2C/0x0120-UpdateAttackSpeedCapOverrides')},
		NotifyContextualSituation:			{id: 0x0121, packet: require('./Packets/S2C/0x0121-NotifyContextualSituation')},
		CREATE_MONSTER_CAMP:				{id: 0x0122, packet: require('./Packets/S2C/0x0122-CREATE_MONSTER_CAMP')},
		SpawnTurret:						{id: 0x0123, packet: require('./Packets/S2C/0x0123-SpawnTurret')},
		UpdateAscended:						{id: 0x0124, packet: require('./Packets/S2C/0x0124-UpdateAscended')},
		SPELL_EMPOWER:						{id: 0x0125, packet: require('./Packets/S2C/0x17-CHANGE_SPELL')},
		NPC_DIE:							{id: 0x0126, packet: require('./Packets/S2C/0x0126-NPC_DIE')},
		SetInventory_MapView:				{id: 0x0127, packet: require('./Packets/S2C/0x010C-SetInventory_Broadcast')},
		FLOATING_TEXT2:						{id: 0x0128, packet: require('./Packets/S2C/0x0128-FLOATING_TEXT2')},
		FORCE_TARGET_SPELL:					{id: 0x0129, packet: require('./Packets/S2C/0x0129-FORCE_TARGET_SPELL')},
		StopSpellTargeter:					{id: 0x012A, packet: require('./Packets/S2C/0x012A-StopSpellTargeter')},
		MOVE_CHAMPION_CAMERA_CENTER:		{id: 0x012B, packet: require('./Packets/S2C/0x012B-MOVE_CHAMPION_CAMERA_CENTER')},
		_0x012C_UNK_:						{id: 0x012C, packet: require('./Packets/S2C/0x012C-_0x012C_UNK_')},
		SetFadeOut:							{id: 0x012D, packet: require('./Packets/S2C/0x012D-SetFadeOut')},
		_0x12E_UNK_AddRegion:				{id: 0x012E, packet: require('./Packets/S2C/0x012E-_0x12E_UNK_AddRegion')},
		UnlockAnimation:					{id: 0x012F, packet: require('./Packets/S2C/0x012F-UnlockAnimation')},
	},
};

for(var i in Packets){
	if(typeof Packets[i].id != 'undefined'){
		Packets[i].name = i;
		Packets[Packets[i].id] = Packets[i];
		
		for(var j in Packets[i]){
			if(typeof Packets[i][j].id != 'undefined'){
				Packets[i][j].name = j;
				Packets[i][j].channel = Packets[i].id;
				Packets[i][Packets[i][j].id] = Packets[i][j];
			}
		}
	}
}
//console.log(Packets);

module.exports = Packets;
