// ツール本体の言語別ページ（検索でそれぞれの言語の人に見つけてもらうため）。
// gen-en.mjs（ページを作る）と gen-tasks.mjs（sitemap.xml を作る）の両方がここを読む。
// ja はサイトの一番上（index.html そのもの）。ほかは index.html から自動で作る（直接編集しない）。
// 言語を足したら index.html の <link rel="alternate" hreflang=…> にも同じ行を足す（gen-en.mjs が足りないと止まる）。
export const SITE = "https://tarkovtaskmap.github.io/";

export const PAGE_LANGS = [
  { code: "ja", hreflang: "ja", dir: "",   // ja のページの題・説明文は index.html に直接書いてある（ogTitle はアプリ用の説明にだけ使う）
    ogTitle: "Tarkov Task Map — タスク目標＆脱出地点マップ" },
  { code: "en", hreflang: "en", dir: "en",
    title: "Tarkov Task Map — Escape from Tarkov task (quest) objectives & extracts on the map",
    desc: "Free Escape from Tarkov map tool: pick your tasks (quests) before a raid and see their objectives and extracts on the map. PvP / PvE / Seasonal, no install.",
    ogTitle: "Tarkov Task Map — task objectives & extracts map",
    ogDesc: "Pick your tasks before a raid and see objectives and extracts on the map. PvP / PvE / Seasonal, free, no install." },
  { code: "de", hreflang: "de", dir: "de",
    title: "Tarkov Aufgabenkarte – Questziele & Extraktionen auf der Karte | Tarkov Task Map",
    desc: "Kostenloses Karten-Tool für Escape from Tarkov: Wähle vor dem Raid deine Aufgaben (Quests) und sieh ihre Ziele und Extraktionen auf der Karte. PvP / PvE / Saison, ohne Installation.",
    ogTitle: "Tarkov Task Map – Aufgabenziele & Extraktionen auf der Karte",
    ogDesc: "Wähle vor dem Raid deine Aufgaben und sieh Ziele und Extraktionen auf der Karte. PvP / PvE / Saison, kostenlos, ohne Installation." },
  { code: "es", hreflang: "es", dir: "es",
    title: "Mapa de misiones de Tarkov – objetivos y extracciones en el mapa | Tarkov Task Map",
    desc: "Herramienta de mapas gratuita para Escape from Tarkov: elige tus misiones (quests) antes de la incursión y mira sus objetivos y extracciones en el mapa. PvP / PvE / Temporada, sin instalar nada.",
    ogTitle: "Tarkov Task Map – objetivos de misiones y extracciones en el mapa",
    ogDesc: "Elige tus misiones antes de la incursión y mira objetivos y extracciones en el mapa. PvP / PvE / Temporada, gratis, sin instalar nada." },
  { code: "pt", hreflang: "pt", dir: "pt",
    title: "Mapa de tarefas do Tarkov – objetivos e extrações no mapa | Tarkov Task Map",
    desc: "Ferramenta de mapa gratuita para Escape from Tarkov: escolha suas tarefas (quests) antes da raid e veja os objetivos e as extrações no mapa. PvP / PvE / Sazonal, sem instalar nada.",
    ogTitle: "Tarkov Task Map – objetivos das tarefas e extrações no mapa",
    ogDesc: "Escolha suas tarefas antes da raid e veja objetivos e extrações no mapa. PvP / PvE / Sazonal, grátis, sem instalar nada." },
  { code: "pl", hreflang: "pl", dir: "pl",
    title: "Mapa zadań Tarkov – cele questów i wyjścia na mapie | Tarkov Task Map",
    desc: "Darmowe narzędzie z mapą do Escape from Tarkov: wybierz zadania (questy) przed rajdem i zobacz ich cele oraz wyjścia na mapie. PvP / PvE / Sezonowy, bez instalacji.",
    ogTitle: "Tarkov Task Map – cele zadań i wyjścia na mapie",
    ogDesc: "Wybierz zadania przed rajdem i zobacz cele oraz wyjścia na mapie. PvP / PvE / Sezonowy, za darmo, bez instalacji." },
  { code: "ru", hreflang: "ru", dir: "ru",
    title: "Карта заданий Таркова – цели квестов и выходы на карте | Tarkov Task Map",
    desc: "Бесплатная карта для Escape from Tarkov (Побег из Таркова): выберите задания (квесты) перед рейдом и смотрите их цели и выходы на карте. PvP / PvE / сезонный режим, без установки.",
    ogTitle: "Tarkov Task Map – цели заданий и выходы на карте",
    ogDesc: "Выберите задания перед рейдом и смотрите цели и выходы на карте. PvP / PvE / сезонный режим, бесплатно, без установки." },
  { code: "tr", hreflang: "tr", dir: "tr",
    title: "Tarkov Görev Haritası – görev hedefleri ve çıkışlar haritada | Tarkov Task Map",
    desc: "Escape from Tarkov için ücretsiz harita aracı: baskından önce görevlerini seç, hedeflerini ve çıkışları haritada gör. PvP / PvE / Sezon, kurulum gerektirmez.",
    ogTitle: "Tarkov Task Map – görev hedefleri ve çıkışlar haritada",
    ogDesc: "Baskından önce görevlerini seç, hedefleri ve çıkışları haritada gör. PvP / PvE / Sezon, ücretsiz, kurulum yok." },
  { code: "zh", hreflang: "zh-Hans", dir: "zh",
    title: "塔科夫任务地图 – 任务目标与撤离点地图 | Tarkov Task Map",
    desc: "免费的《逃离塔科夫》地图工具：在战局开始前选择任务，即可在地图上查看任务目标和撤离点。支持 PvP / PvE / 赛季，无需安装。",
    ogTitle: "Tarkov Task Map – 任务目标与撤离点地图",
    ogDesc: "战局前选择任务，在地图上查看目标和撤离点。支持 PvP / PvE / 赛季，免费，无需安装。" },
];

export const pageUrl = L => SITE + (L.dir ? L.dir + "/" : "");
