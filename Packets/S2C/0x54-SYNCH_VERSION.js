var BasePacket = require('../BasePacket');
var TipConfig = require('../SharedStruct/TipConfig');

var PlayerInfo = {
	PlayerID: 'int64',
	SummonorLevel: 'uint16',
	SummonorSpell1: 'uint32',
	SummonorSpell2: 'uint32',
	Bitfield: 'uint8',
	TeamId: 'uint32',
	BotName: ['char', 64],
	BotSkinName: ['char', 64],
	EloRanking: ['char', 16],
	BotSkinID: 'int32',
	BotDifficulty: 'int32',
	ProfileIconId: 'int32',
	AllyBadgeID: 'uint8',
	EnemyBadgeID: 'uint8',
};
//54 00 00 00 00 01 00 00 00 01 00 00 00 00 00 00 00 1e 00 1c af 64 03 a8 6e 49 06 00 64 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
//54 00 00 00 00 01 01 00 00 00 01 00 00 00 00 00 00 00 1e 00 1c af 64 03 a8 6e 49 06 00 64 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
module.exports = class extends BasePacket {//S2C.SYNCH_VERSION
	struct = {
		bitfield: ['bitfield', {
			VersionMatches: 1,
			WriteToClientFile: 2,
			MatchedGame: 4,
			DradisInit: 8,
		}],
		MapToLoad: 'int32',
		PlayerInfo: [PlayerInfo, 12],
		VersionString: ['char', 256],
		MapMode: ['char', 128],
		PlatformID: ['char', 32],
		Mutators: [['char', 64], 8],
		MutatorsNum: 'uint8',
		OrderRankedTeamName: ['char', 97],
		OrderRankedTeamTag: ['char', 25],
		ChaosRankedTeamName: ['char', 97],
		ChaosRankedTeamTag: ['char', 25],
		MetricsServerWebAddress: ['char', 256],
		MetricsServerWebPath: ['char', 256],
		MetricsServerPort: 'uint16',
		DradisProdAddress: ['char', 256],
		DradisProdResource: ['char', 256],
		DradisProdPort: 'uint16',
		DradisTestAddress: ['char', 256],
		DradisTestResource: ['char', 256],
		DradisTestPort: 'uint16',
		TipConfig: TipConfig,
		GameFeatures: ['bitfield64', {
			Equalize: 1 << 0,
			FoundryOptions: 1 << 1,
			OldOptions: 1 << 2,
			FoundryQuicChat: 1 << 3,
			EarlyWarningForFOWMissiles: 1 << 4,
			AnimatedCursors: 1 << 5,
			ItemUndo: 1 << 6,
			NewPlayerRecommendedPages: 1 << 7,
			HighlightLineMissileTargets: 1 << 8,
			ControlledChampionIndicator: 1 << 9,
			AlternateBountySystem: 1 << 10,
			NewMinionSpawnOrder: 1 << 11,
			TurretRangeIndicators: 1 << 12,
			GoldSourceInfoLogDump: 1 << 13,
			ParticleSinNameTech: 1 << 14,
			NetworMetrics_1: 1 << 15,
			HardwareMetrics_1: 1 << 16,
			TruLagMetrics: 1 << 17,
			DradisSD: 1 << 18,
			ServerIPLogging: 1 << 19,
			JungleTimers: 1 << 20,
			TraceRouteMetrics: 1 << 21,
			IsLolbug19805LoggingEnabled: 1 << 22,
			IsLolbug19805HacyTourniquetEnabled: 1 << 23,
			TurretMemory: 1 << 24,
			TimerSyncForReplay: 1 << 25,
			RegisterWithLocalServiceDiscovery: 1 << 26,
			MinionFarmingBounty: 1 << 27,
			TeleportToDestroyedTowers: 1 << 28,
			NonRefCountedCharacterStates: 1 << 29,
			unk1: 1 << 30,
		}],
		DisabledItems: ['uint32', 64],
		EnabledDradisMessages: ['uint8', 19],
	}
};
