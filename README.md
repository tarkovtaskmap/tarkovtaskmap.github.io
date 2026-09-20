# Tarkov Task Map / タルコフ タスクマップ

A free, single-page **pre-raid companion tool for Escape from Tarkov**. Pick the tasks
you're running this raid and it pins their objective locations, plus the extracts you
choose, on an interactive map — meant for a second monitor.

**▶ Live tool:** https://tarkovtaskmap.github.io/

No installation, no login (only anonymous visit / feature-usage counts via GoatCounter, no cookies), no game-memory access — just static data from
[tarkov.dev](https://tarkov.dev)'s public API. Works in any browser; the language follows your browser (Japanese, English, Simplified Chinese or Russian) —
use the language dropdown top-left to switch. In Chinese and Russian, task / item / map / extract names are shown in that language (as in the game).

## Features

- Filter tasks by trader/map, pin objective + extract locations for the raid you're planning
- Multi-floor maps, hazards, locked doors, switches, boss spawn chances
- Pre-raid checklist (keys to bring / items to plant / items to find)
- Task chain view (prerequisites / unlocks), Kappa/Lightkeeper progress
- Custom pins & notes, route ordering, share your setup via a link (no backend)
- Works offline-ish: caches data locally, falls back to a bundled snapshot if
  tarkov.dev's API is down

## Credits & license

- Task/extract/map data: [tarkov.dev](https://tarkov.dev) / `json.tarkov.dev` (community, free)
- Map art (SVG): tarkov.dev, © Shebuka et al., **CC BY-NC-SA 4.0 (non-commercial)** —
  this project does not run ads or sell access, in order to stay compliant
- Coordinate-projection logic: [the-hideout/tarkov-dev](https://github.com/the-hideout/tarkov-dev) (MIT)

This tool does not access the game client in any way (no memory reading, no injection) —
it only displays public community map/quest data. Viewing external maps and planning
extracts is not a Tarkov ToS violation.

日本語での詳しい使い方は [はじめに.md](./はじめに.md) を参照してください。
