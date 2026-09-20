import fs from "fs";
// 使い方: node ja-translate.mjs → untranslated.json の全件を日本語にして ja-supplement.js を書き出す
// ルール: アイテム名・マップ名・トレーダー名・ボス名は英語のまま、説明文だけ日本語。「殺す」は「倒す」。
const src = JSON.parse(fs.readFileSync("tools/untranslated.json", "utf8"));
const OUT = process.argv[2] || "ja-supplement.js";

const ORD = { first:"1 つ目", second:"2 つ目", third:"3 つ目", fourth:"4 つ目", fifth:"5 つ目", sixth:"6 つ目", seventh:"7 つ目" };
const orJa = s => s.replace(/, or /g, "、または ").replace(/ or /g, " または ").replace(/, /g, "、");
const mapsJa = s => orJa(s.replace("Streets or Tarkov", "Streets of Tarkov"));
const prestige = s => s.replace(/\(Prestige (\d+) or higher\)/, "(Prestige $1 以上)");

const M = {}; // 個別に訳すもの
const add = (en, ja) => { M[en] = ja; };

// --- 調べる / 入手 / その他 ---
add("Check the first armory in the eastern barracks (Black Pawn) on Reserve", "Reserve の eastern barracks（Black Pawn）にある 1 つ目の armory を調べる");
add("Check the first armory in the southern barracks (White Pawn) on Reserve", "Reserve の southern barracks（White Pawn）にある 1 つ目の armory を調べる");
add("Check the second armory in the eastern barracks (Black Pawn) on Reserve", "Reserve の eastern barracks（Black Pawn）にある 2 つ目の armory を調べる");
add("Check the second armory in the southern barracks (White Pawn) on Reserve", "Reserve の southern barracks（White Pawn）にある 2 つ目の armory を調べる");
add("Claim a trophy from The Wedge", "The Wedge から戦利品を手に入れる");

// --- 撃破 ---
add("Eliminate BEAR PMC operatives on Lighthouse, Ground Zero, Reserve, Shoreline, or Streets of Tarkov", "Lighthouse、Ground Zero、Reserve、Shoreline、Streets of Tarkov のいずれかで、BEAR の PMC オペレーターを倒す");
add("Eliminate PMC operatives", "PMC オペレーターを倒す");
add("Eliminate PMC operatives at the specified Scav bases on Customs, Shoreline, or Woods", "Customs、Shoreline、Woods の指定された Scav の拠点で、PMC オペレーターを倒す");
add("Eliminate PMC operatives from less than 25 meters away with a bolt-action rifle", "ボルトアクションライフルで、25 m 未満の距離から PMC オペレーターを倒す");
add("Eliminate PMC operatives on Factory", "Factory で、PMC オペレーターを倒す");
add("Eliminate PMC operatives while using any AK-series assault rifle", "いずれかの AK シリーズのアサルトライフルを使用して、PMC オペレーターを倒す");
add("Eliminate PMC operatives while wearing 6B43 body armor and Kiver-M helmet on Factory", "Factory で、6B43 body armor と Kiver-M helmet を着用して、PMC オペレーターを倒す");
add("Eliminate PMC operatives with a bolt-action rifle with night or thermal scope", "暗視またはサーマルスコープ付きのボルトアクションライフルで、PMC オペレーターを倒す");
add("Eliminate PMC operatives with a bolt-action rifle without dying", "死なずに、ボルトアクションライフルで PMC オペレーターを倒す");
add("Eliminate PMC operatives with a suppressed bolt-action rifle", "サプレッサー付きのボルトアクションライフルで、PMC オペレーターを倒す");
add("Eliminate PMC operatives with common Scav weapons while wearing the specified gear on Customs", "Customs で、指定の装備を着用し、一般的な Scav の武器で PMC オペレーターを倒す");
add("Eliminate PMC operatives with the specified weapons on Lighthouse, Shoreline, Reserve, Ground Zero, or The Lab", "Lighthouse、Shoreline、Reserve、Ground Zero、The Lab のいずれかで、指定の武器で PMC オペレーターを倒す");
add("Eliminate PMCs with SR-25 with Hybrid 46 suppressor and S&B PM II 1-8x24 scope on Lighthouse or Reserve", "Lighthouse または Reserve で、Hybrid 46 サプレッサーと S&B PM II 1-8x24 スコープを付けた SR-25 で PMC を倒す");
add("Eliminate Raiders on Reserve", "Reserve で、Raider を倒す");
add("Eliminate Raiders or Black Division operatives on Reserve or The Lab", "Reserve または The Lab で、Raider または Black Division のオペレーターを倒す");
add("Eliminate Reshala's guards", "Reshala の護衛を倒す");
add("Eliminate 20 PMCs with AK-12 with the proprietary suppressor and PS-320 scope on Lighthouse, Customs, or Reserve", "Lighthouse、Customs、Reserve のいずれかで、専用のサプレッサーと PS-320 スコープを付けた AK-12 で PMC を 20 人倒す");
add("Eliminate Rogues with a GP-25 grenade launcher", "GP-25 グレネードランチャーで、Rogue を倒す");
add("Eliminate Scavs along the shore and the main road on Lighthouse or Shoreline", "Lighthouse または Shoreline の海岸沿いとメインロード沿いで、Scav を倒す");
add("Eliminate Scavs around the main barracks on Reserve", "Reserve の main barracks 周辺で、Scav を倒す");
add("Eliminate Scavs at USEC camp, Scav camp, sawmill, or abandoned village on Woods", "Woods の USEC camp、Scav camp、sawmill、abandoned village のいずれかで、Scav を倒す");
add("Eliminate Scavs from over 40 meters away with a bolt-action rifle with iron sights", "アイアンサイトのボルトアクションライフルで、40 m 超の距離から Scav を倒す");
add("Eliminate Scavs in one raid on Ground Zero", "Ground Zero で、1 回のレイドの間に Scav を倒す");
add("Eliminate Scavs in the underground storage warehouse on Reserve", "Reserve の underground storage warehouse で、Scav を倒す");
add("Eliminate Scavs on Interchange, Ground Zero, Woods, or Customs", "Interchange、Ground Zero、Woods、Customs のいずれかで、Scav を倒す");
add("Eliminate Scavs on Interchange, Ground Zero, or Woods", "Interchange、Ground Zero、Woods のいずれかで、Scav を倒す");
add("Eliminate Scavs on Streets of Tarkov", "Streets of Tarkov で、Scav を倒す");
for (const m of ["Customs or Lighthouse", "Ground Zero or Interchange", "Shoreline or Streets of Tarkov", "Woods or Reserve"])
  add(`Eliminate Scavs while using UNTAR helmet and armor, and 5.56x45 UN weapons on ${m}`, `${orJa(m)} で、UNTAR ヘルメットとアーマー、5.56x45 の UN 武器を使用して、Scav を倒す`);
add("Eliminate Scavs while wearing a Scav vest on Lighthouse", "Lighthouse で、Scav Vest を着用して、Scav を倒す");
add("Eliminate Scavs with 9x39 caliber weapons on Reserve", "Reserve で、9x39 口径の武器で Scav を倒す");
add("Eliminate Scavs with AKM series weapons on Shoreline", "Shoreline で、AKM シリーズの武器で Scav を倒す");
add("Eliminate Scavs with AKS-74U on Customs", "Customs で、AKS-74U で Scav を倒す");
add("Eliminate Scavs with Light machine guns", "ライトマシンガンで、Scav を倒す");
add("Eliminate Scavs with an M4A1, M16, ADAR, or TX-15 on Shoreline", "Shoreline で、M4A1、M16、ADAR、TX-15 のいずれかで Scav を倒す");
add("Eliminate Scavs with an SVDS or TKPD on Lighthouse", "Lighthouse で、SVDS または TKPD で Scav を倒す");
add("Eliminate Sniper Scavs with a bolt-action rifle", "ボルトアクションライフルで、Sniper Scav を倒す");
add("Eliminate any target", "対象を問わず倒す");
add("Eliminate any target around the chalets on Lighthouse", "Lighthouse の chalets 周辺で、対象を問わず倒す");
add("Eliminate any target at the smuggler bases on Shoreline or Interchange", "Shoreline または Interchange の smuggler bases で、対象を問わず倒す");
add("Eliminate any target at the train depot on Reserve", "Reserve の train depot で、対象を問わず倒す");
add("Eliminate any target at the train station territory on Lighthouse", "Lighthouse の train station 一帯で、対象を問わず倒す");
add("Eliminate any target during 21:00-06:00 on Streets or Tarkov, Lighthouse, Reserve, Ground Zero, or Shoreline", "Streets of Tarkov、Lighthouse、Reserve、Ground Zero、Shoreline のいずれかで、21:00〜06:00 の間に対象を問わず倒す");
add("Eliminate any target from less than 60 meters away while wearing a gas mask or respirator in The Lab", "The Lab で、ガスマスクまたはレスピレーターを着用し、60 m 未満の距離から対象を問わず倒す");
add("Eliminate any target in The Lab", "The Lab で、対象を問わず倒す");
add("Eliminate any target on Interchange", "Interchange で、対象を問わず倒す");
add("Eliminate any target with AK-74 series weapons on Reserve or Lighthouse", "Reserve または Lighthouse で、AK-74 シリーズの武器で対象を問わず倒す");
add("Eliminate any target with AR-15 weapons from over 100 meters away on Reserve, Lighthouse, Shoreline, or Ground Zero", "Reserve、Lighthouse、Shoreline、Ground Zero のいずれかで、AR-15 系の武器で 100 m 超の距離から対象を問わず倒す");
add("Eliminate any target with SR-2M with suppressor and KP-SR2 sight on Reserve or Lighthouse", "Reserve または Lighthouse で、サプレッサーと KP-SR2 サイトを付けた SR-2M で、対象を問わず倒す");
add("Eliminate any target with a GP-25 grenade launcher", "GP-25 グレネードランチャーで、対象を問わず倒す");
add("Eliminate any target with a bolt-action rifle", "ボルトアクションライフルで、対象を問わず倒す");
add("Eliminate any target with a bolt-action rifle without dying", "死なずに、ボルトアクションライフルで対象を問わず倒す");
add("Eliminate any target with a suppressed 12ga shotgun on Reserve, Lighthouse, Ground Zero, or The Lab", "Reserve、Lighthouse、Ground Zero、The Lab のいずれかで、サプレッサー付きの 12ga ショットガンで対象を問わず倒す");
add("Eliminate any target with an M203 grenade launcher on Lighthouse or Reserve", "Lighthouse または Reserve で、M203 グレネードランチャーで対象を問わず倒す");
add("Eliminate any target with an RPDN with EKP-1S-03 sight on Shoreline, Lighthouse, or Reserve", "Shoreline、Lighthouse、Reserve のいずれかで、EKP-1S-03 サイトを付けた RPDN で対象を問わず倒す");
add("Eliminate any target with any 7.62x51 DMR from over 50 meters away on Shoreline or Lighthouse", "Shoreline または Lighthouse で、いずれかの 7.62x51 DMR で 50 m 超の距離から対象を問わず倒す");
add("Eliminate any target with hand grenades or grenade launchers", "手榴弾またはグレネードランチャーで、対象を問わず倒す");
add("Eliminate any target with headshots using a 12ga shotgun on Streets of Tarkov", "Streets of Tarkov で、12ga ショットガンのヘッドショットで対象を問わず倒す");
add("Eliminate any target with headshots using a Steyr AUG on Factory", "Factory で、Steyr AUG のヘッドショットで対象を問わず倒す");
add("Eliminate any target with the golden TT-33 pistol", "golden TT-33 ピストルで、対象を問わず倒す");
add("Locate and neutralize Big Pipe (in one raid)", "Big Pipe を見つけて倒す（1 回のレイドの間に）");
add("Locate and neutralize Birdeye (in one raid)", "Birdeye を見つけて倒す（1 回のレイドの間に）");
add("Locate and neutralize Knight (in one raid)", "Knight を見つけて倒す（1 回のレイドの間に）");
add("Locate and neutralize Reshala", "Reshala を見つけて倒す");
add("Locate and neutralize The Wedge's squad", "The Wedge の部隊を見つけて倒す");
add("Locate and neutralize any Boss", "いずれかのボスを見つけて倒す");
add("Locate and neutralize the hooded men", "フードをかぶった男たちを見つけて倒す");
add("Shoot any target in the head from over 40 meters away with a bolt-action rifle", "ボルトアクションライフルで、40 m 超の距離から、対象の頭を撃つ");
add("Shoot any target in the legs from over 40 meters away with a bolt-action rifle", "ボルトアクションライフルで、40 m 超の距離から、対象の脚を撃つ");

// --- 納品(定型でないもの) ---
add("Hand over RUB", "RUB を納品する");
add("Hand over any found in raid Russian grenades", "レイド内で入手した Russian grenades を納品する");
add("Hand over any found in raid keys for the underground storage warehouse (RB-PSP and RB-PSV)", "レイド内で入手した underground storage warehouse の鍵（RB-PSP と RB-PSV）を納品する");
add("Hand over any found in raid medicine items", "レイド内で入手した医薬品を納品する");
add("Hand over one of Reshala's guards' armor vests", "Reshala の護衛のアーマーベストを 1 つ納品する");
add("Hand over the container", "コンテナを納品する");
add("Hand over the flash drive", "フラッシュドライブを納品する");
add("Hand over the found info", "入手した情報を納品する");
add("Hand over the found item", "入手したアイテムを納品する");
add("Hand over the gear found in the rooms", "部屋で見つけた装備を納品する");
add("Hand over the item", "アイテムを納品する");
add("Hand over the items", "アイテムを納品する");
add("Hand over the vial", "小瓶を納品する");

// --- 設置(WI-FI Camera)。マップ名は英語のまま ---
const cam = (place, mapEn, ja) => add(place, `${mapEn ? mapEn + " の" : ""}${ja} に WI-FI Camera を設置する`);
cam("Install a WI-FI Camera at Anvil 3-4 crew member's execution site on Customs", "Customs", "Anvil 3-4 の乗組員が処刑された場所");
cam("Install a WI-FI Camera at every indie developer's worst nightmare on Customs", "Customs", "すべてのインディー開発者にとって最悪の悪夢の場所");
cam("Install a WI-FI Camera at every tank driver's first videogame on Reserve", "Reserve", "すべての戦車兵にとって最初のビデオゲームの場所");
cam("Install a WI-FI Camera at the amphibian pizza lovers' hideout on Streets of Tarkov", "Streets of Tarkov", "ピザ好きの両生類たちの隠れ家");
cam("Install a WI-FI Camera at the barbed wire body on Streets of Tarkov", "Streets of Tarkov", "有刺鉄線に絡まった遺体の場所");
cam("Install a WI-FI Camera at the bear who sat into a flaming car on Woods", "Woods", "燃えている車に乗り込んだクマの場所");
cam("Install a WI-FI Camera at the bucket-head villain on Customs", "Customs", "バケツ頭の悪役の場所");
cam("Install a WI-FI Camera at the burned girl's sickroom on Streets of Tarkov", "Streets of Tarkov", "焼けた少女の病室");
cam("Install a WI-FI Camera at the computer with a joke for programmers on Ground Zero", "Ground Zero", "プログラマー向けのジョークが書かれたコンピューター");
cam("Install a WI-FI Camera at the dangerous Russian chocolate beauty on Factory", "Factory", "危険なロシアのチョコレート美人の場所");
cam("Install a WI-FI Camera at the high rise where one die-hard guy kicked ass on Ground Zero", "Ground Zero", "タフな男が大暴れした高層ビル");
cam("Install a WI-FI Camera at the kindled rest place on Lighthouse", "Lighthouse", "火が灯された休憩場所");
cam("Install a WI-FI Camera at the little chair surrounded by big black chairs on Ground Zero", "Ground Zero", "大きな黒い椅子に囲まれた小さな椅子");
cam("Install a WI-FI Camera at the megagenius scientist's seat on Lighthouse", "Lighthouse", "超天才科学者の席");
cam("Install a WI-FI Camera at the mother of all strategy games on Factory", "Factory", "すべてのストラテジーゲームの母の場所");
cam("Install a WI-FI Camera at the not-so-lonely bathroom on Shoreline", "Shoreline", "あまり孤独ではないバスルーム");
cam("Install a WI-FI Camera at the ominous welcome sign on Lighthouse", "Lighthouse", "不吉な歓迎の看板");
cam("Install a WI-FI Camera at the place where conscripts did a very important task on Reserve", "Reserve", "徴集兵がとても重要な任務を果たした場所");
cam("Install a WI-FI Camera at the place where some valve technicians couldn't finish their third project on Factory", "Factory", "バルブ技師たちが 3 つ目のプロジェクトを終えられなかった場所");
cam("Install a WI-FI Camera at the really scary hole in the wall on Streets of Tarkov", "Streets of Tarkov", "壁にあるとても怖い穴");
cam("Install a WI-FI Camera at the stairway to the skies on Factory", "Factory", "空へ続く階段");
cam("Install a WI-FI Camera at the two chair riddle on Reserve", "Reserve", "2 脚の椅子の謎の場所");
cam("Install a WI-FI Camera at the upside-down chair on Shoreline", "Shoreline", "逆さまの椅子");
cam("Install a WI-FI Camera by your friend Wilson on Lighthouse", "Lighthouse", "あなたの友達 Wilson のそば");
cam("Install a WI-FI Camera in the conspiracy theorist's room on Factory", "Factory", "陰謀論者の部屋");
cam("Install a WI-FI Camera in the room where the firefighter burned the books to become happy on Factory", "Factory", "消防士が幸せになるために本を燃やした部屋");
cam("Install a WI-FI Camera near where someone thought he'd get transported to the magic school on Factory", "Factory", "誰かが魔法学校に飛ばされると思い込んだ場所の近く");
add("Install the hacking device in the central control station room on Icebreaker", "Icebreaker の central control station room に、ハッキングデバイスを設置する");
add("Place a WI-FI Camera at the army truck near the industrial zone in the northern part of the water treatment plant", "water treatment plant 北部の industrial zone 近くにある軍用トラックに、WI-FI Camera を設置する");
add("Place a WI-FI Camera at the police truck in the western part of the water treatment plant", "water treatment plant 西部にある警察のトラックに、WI-FI Camera を設置する");
add("Place a WI-FI Camera at the yellow bulldozer in the south-eastern part of the water treatment plant", "water treatment plant 南東部にある黄色いブルドーザーに、WI-FI Camera を設置する");
add("Place a WI-FI Camera at the yellow bus on the southern bridge approaching the water treatment plant", "water treatment plant へ向かう南側の橋にある黄色いバスに、WI-FI Camera を設置する");
add("Place a WI-FI Camera inside the quarantine zone in The Lab", "The Lab の quarantine zone の中に、WI-FI Camera を設置する");

// --- 訪問・調査・その他の行動 ---
add("Investigate the roof of any water treatment plant facility on Lighthouse", "Lighthouse の water treatment plant のいずれかの施設の屋上を調べる");
add("Launch a yellow signal flare at the train depot on Reserve", "Reserve の train depot で、黄色い信号フレアを打ち上げる");
add("Launch a yellow signal flare at the train station on Lighthouse", "Lighthouse の train station で、黄色い信号フレアを打ち上げる");
add("Gain the Fatigue status effect (by exhausting leg stamina) and maintain it for 8 minutes", "Fatigue の状態異常になり（脚のスタミナを使い切る）、8 分間維持する");
add("Reflash the Radio transmitter", "Radio transmitter を再フラッシュする");
add("Repair the equipment in the automation room leading to the engine room on Icebreaker", "Icebreaker の、engine room に通じる automation room にある機器を修理する");
add("Repair the equipment in the automation room near the storage room on Icebreaker", "Icebreaker の、storage room の近くにある automation room の機器を修理する");
add("Repair the equipment in the automation room under the engine room on Icebreaker", "Icebreaker の、engine room の下にある automation room の機器を修理する");
add("Return to the old champion's hideout on Customs", "Customs の、昔のチャンピオンの隠れ家に戻る");
add("Search Glukhar's guards and collect their helmets of Class 4 or higher", "Glukhar の護衛を調べ、クラス 4 以上のヘルメットを回収する");
add("Use the transit from Lighthouse to Shoreline (In one raid)", "Lighthouse から Shoreline へのトランジットを使う（1 回のレイドの間に）");
add("Visit the Lighthouse building", "Lighthouse building を訪れる");
add("Win a match claiming at least 2nd place in the team in TeamFight, BlastGang, or CheckPoint mode", "TeamFight、BlastGang、CheckPoint のいずれかのモードで、チーム内 2 位以上で試合に勝利する");
add("You must not kill Rogues or The Goons on Lighthouse while the task is active", "タスクの間は、Lighthouse で Rogue と The Goons を倒してはいけない");

// --- マーク ---
add("Locate and mark any UN Tigr vehicle with an MS2000 Marker on Customs", "Customs で、いずれかの UN Tigr 車両を見つけて、MS2000 Marker でマークする");
add("Locate and mark any of the fuel tank trucks with an MS2000 Marker on Customs", "Customs で、いずれかの fuel tank truck を見つけて、MS2000 Marker でマークする");
for (const [en, ja] of [["first", "1 つ目"], ["second", "2 つ目"], ["third", "3 つ目"], ["fourth", "4 つ目"]])
  add(`Locate and mark the ${en} section of the cliff path with an MS2000 Marker on Lighthouse`, `Lighthouse の cliff path の ${ja} の区間を見つけて、MS2000 Marker でマークする`);
add("Locate and mark the fourth ambulance with an MS2000 Marker on Shoreline", "Shoreline で、4 台目の救急車を見つけて、MS2000 Marker でマークする");
add("Mark Artyom's car with an MS2000 Marker", "MS2000 Marker で、Artyom の車にマークする");
add("Mark any ATM on Klimov Street with an MS2000 Marker on Streets of Tarkov", "Streets of Tarkov の Klimov Street で、いずれかの ATM に MS2000 Marker でマークする");
add("Mark any of the special TerraGroup cargo boxes with an MS2000 Marker on Customs", "Customs で、いずれかの special TerraGroup cargo box に MS2000 Marker でマークする");

// --- 場所を見つける ---
add("Locate the debtor on Streets of Tarkov", "Streets of Tarkov で、債務者を見つける");
add("Locate the debtor on Streets of tarkov", "Streets of Tarkov で、債務者を見つける");
for (const [en, ja] of Object.entries(ORD)) add(`Locate the ${en} special TerraGroup cargo on Customs`, `Customs で、${ja} の special TerraGroup cargo を見つける`);
for (const [en, ja] of [["first", "1 つ目"], ["second", "2 つ目"], ["third", "3 つ目"]]) {
  add(`Locate the ${en} ATM inside Klimov Shopping Mall on Streets of Tarkov`, `Streets of Tarkov の Klimov Shopping Mall の中で、${ja} の ATM を見つける`);
  add(`Locate the ${en} group of ATMs inside Klimov Shopping Mall on Streets of Tarkov`, `Streets of Tarkov の Klimov Shopping Mall の中で、${ja} の ATM のグループを見つける`);
  add(`Locate the ${en} ATM on Klimov Street on Streets of Tarkov`, `Streets of Tarkov の Klimov Street で、${ja} の ATM を見つける`);
}
add("Locate the first pharmacy on Primorsky Ave on Streets of tarkov", "Streets of Tarkov の Primorsky Ave で、1 つ目の薬局を見つける");
add("Locate the second pharmacy on Primorsky Ave on Streets of tarkov", "Streets of Tarkov の Primorsky Ave で、2 つ目の薬局を見つける");
add("Locate the pharmacy near Cardinal apartment complex on Streets of tarkov", "Streets of Tarkov の Cardinal apartment complex の近くにある薬局を見つける");
add("Locate the hidden TerraGroup cargo in the Health Resort on Shoreline", "Shoreline の Health Resort で、隠された TerraGroup cargo を見つける");
add("Locate the private prison warden's apartment on Streets of Tarkov", "Streets of Tarkov で、民間刑務所の所長の部屋を見つける");

// --- 入手(場所付き) ---
add("Locate and obtain Sanitar's surgery kit on Shoreline", "Shoreline で、Sanitar's surgery kit を見つけて入手する");
add("Locate and obtain any Russian gear in the armory rooms", "armory rooms で、いずれかのロシア製の装備を見つけて入手する");
add("Locate and obtain the chemical container on Factory", "Factory で、chemical container を見つけて入手する");
add("Locate and obtain the chemical vial on Customs", "Customs で、chemical vial を見つけて入手する");
add("Locate and obtain the compromising information on Ref", "Ref から、compromising information を見つけて入手する");
add("Locate and obtain the golden Zibbo lighter from Dorm room 303 on Customs", "Customs の Dorm room 303 で、golden Zibbo lighter を見つけて入手する");
add("Locate and obtain the motor controller on Woods", "Woods で、motor controller を見つけて入手する");
add("Locate and obtain the nuclear power unit control log on Icebreaker", "Icebreaker で、nuclear power unit control log を見つけて入手する");
add("Locate and obtain the red vial at the TerraGroup office on Streets of Tarkov", "Streets of Tarkov の TerraGroup office で、red vial を見つけて入手する");
add("Locate and obtain the single-axis fiber optic gyroscope on Woods", "Woods で、single-axis fiber optic gyroscope を見つけて入手する");
add("Obtain the V3 Flash drive on Lighthouse", "Lighthouse で、V3 Flash drive を入手する");
add("Obtain the unusual cultist knives", "unusual cultist knives を入手する");

// --- 隠す ---
add("Stash a 6B47 helmet (Olive Drab) in the specified place on Interchange", "Interchange の指定の場所に、6B47 helmet (Olive Drab) を隠す");
add("Stash a ComTac II headset in the specified place on Interchange", "Interchange の指定の場所に、ComTac II headset を隠す");
add("Stash a Corrugated hose in the med lab on Customs", "Customs の med lab に、Corrugated hose を隠す");
add("Stash a Military COFDM Wireless Signal Transmitter inside the makeshift lab on Lighthouse", "Lighthouse の makeshift lab の中に、Military COFDM Wireless Signal Transmitter を隠す");
add("Stash a Military flash drive in the trash bags at the chalet tennis court on Lighthouse", "Lighthouse の chalet tennis court にあるゴミ袋の中に、Military flash drive を隠す");
add("Stash a Roler Submariner gold wrist watch in the trash bags at the chalet tennis court on Lighthouse", "Lighthouse の chalet tennis court にあるゴミ袋の中に、Roler Submariner gold wrist watch を隠す");
add("Stash a Virtex programmable processor inside the makeshift lab on Lighthouse", "Lighthouse の makeshift lab の中に、Virtex programmable processor を隠す");
add("Stash a regular Zibbo lighter at Dorm room 303 on Customs", "Customs の Dorm room 303 に、regular Zibbo lighter を隠す");
add("Stash an AXMC sniper rifle in the trash bags at the chalet tennis court on Lighthouse", "Lighthouse の chalet tennis court にあるゴミ袋の中に、AXMC sniper rifle を隠す");
add("Stash an MF-UNTAR body armor in the boat", "ボートの中に、MF-UNTAR body armor を隠す");
add("Stash any Gunpowder in the designated spot", "指定の場所に、いずれかの Gunpowder を隠す");
add("Stash the Goshan cash register key at the BIZARRO store fitting rooms on Interchange", "Interchange の BIZARRO store の試着室に、Goshan cash register key を隠す");
add("Stash the blood sample in Sanitar's office in The Lab", "The Lab の Sanitar's office に、blood sample を隠す");
add("Stash the container by the police station on Streets of Tarkov", "Streets of Tarkov の police station の近くに、container を隠す");

// --- 規則で訳すもの ---
function byRule(t) {
  let m;
  if ((m = t.match(/^Find the item in raid: any (.+)$/))) return `レイド内で入手する（FiR）: いずれかの ${orJa(m[1])}`;
  if ((m = t.match(/^Find the item in raid:? (.+)$/))) return `レイド内で入手する（FiR）: ${orJa(m[1])}`;
  if ((m = t.match(/^Find the item: (.+)$/))) return `アイテムを入手する: ${orJa(m[1])}`;
  if ((m = t.match(/^Find the items from the (.+) category in raid$/))) return `レイド内で「${m[1]}」カテゴリのアイテムを入手する（FiR）`;
  if ((m = t.match(/^Hand over the found in raid item: (.+)$/))) return `レイド内で入手したアイテムを納品する: ${orJa(prestige(m[1]))}`;
  if ((m = t.match(/^Hand over the found in raid items from the (.+) category$/))) return `レイド内で入手した「${m[1]}」カテゴリのアイテムを納品する`;
  if ((m = t.match(/^Hand over the item: (.+)$/))) return `アイテムを納品する: ${orJa(m[1])}`;
  if ((m = t.match(/^Hand over (?:the|any) found in raid (.+)$/))) return `レイド内で入手した ${m[1]} を納品する`;
  if ((m = t.match(/^Hand over any items from the (.+) category$/))) return `「${m[1]}」カテゴリのアイテムを納品する`;
  if ((m = t.match(/^Obtain the item: (.+)$/))) return `アイテムを入手する: ${orJa(m[1])}`;
  if ((m = t.match(/^Survive and extract from (.+) with the "Survived" exit status$/))) return `${orJa(m[1])} から生還して脱出する（「Survived」のステータス）`;
  if ((m = t.match(/^Survive and extract from the location$/))) return `その場所から生還して脱出する`;
  if ((m = t.match(/^Survive and extract from (.+)$/))) return `${orJa(m[1])} から生還して脱出する`;
  return null;
}

const out = {}; const missing = [];
for (const [key, en] of Object.entries(src)) {
  const ja = M[en] || byRule(en);
  if (!ja) { missing.push(en); continue; }
  out[key] = ja;
}
if (missing.length) { console.log("MISSING", missing.length); missing.forEach(m => console.log(" -", m)); process.exit(1); }
fs.writeFileSync(OUT, "/* 日本語訳が無いタスク目標の補足訳（tarkov.dev の日本語データに訳が入れば、そちらを優先） */\nwindow.__JA_SUPP__ = " + JSON.stringify(out) + ";\n");
fs.writeFileSync("tools/ja-preview.txt", Object.entries(out).map(([k, v]) => src[k] + "\n  → " + v).join("\n"));
console.log("ok", Object.keys(out).length, "keys ->", OUT);
