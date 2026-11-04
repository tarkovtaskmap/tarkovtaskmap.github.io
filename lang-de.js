/* Deutsche Oberfläche. Namen von Aufgaben, Gegenständen, Karten, Extraktionen usw. stammen aus der Übersetzung von tarkov.dev (wie im Spiel).
   Die Texte der Oberfläche hat der Entwickler mit Hilfe maschineller Übersetzung übersetzt — wenn etwas unnatürlich klingt, gib bitte über „Feedback“ Bescheid.
   Fehlt ein Text, wird Englisch angezeigt. */
(function(){
  const s = (n, one, many) => n === 1 ? one : many;
  window.__STR_DE__ = {
  appTitle:"Tarkov — Aufgabenkarte",
  refresh:"Daten aktualisieren", traderAll:"▼ Händler (alle)", mapAll:"▼ Karte (alle)",
  followCurrentMap:"[Aktueller Karte folgen]", searchPlaceholder:"Aufgabenname suchen…",
  clearSel:"Auswahl löschen", kappaOnly:"Nur Kappa ★", lvLabel:"Lv", showDone:"Erledigte zeigen",
  supportLink:"☕ Das Tool auf Ko-fi unterstützen", supportBtn:"☕ Unterstützen",
  supportBtnTitle:"Danke, dass du das Tool nutzt! Es bleibt immer kostenlos. Wenn es dir Zeit spart, freue ich mich über ein Trinkgeld auf Ko-fi — völlig freiwillig.",
  supportBtnSub:"Danke fürs Nutzen! (freiwillig)",
  layersSection:"Ebenen / Teilen", optTransit:"Transit (zwischen Karten)",
  hintExitBelow:"※ Extraktionen wählst du oben im Bereich „Extraktionen“", optHazard:"Gefahrenzonen", optLock:"Verschlossene Türen",
  optSwitch:"Schalter", optBoss:"Bosse", optSpawn:"Spawns", optIcons:"Symbole",
  optRoute:"Routennummern (①②③…)", shareCreateBtn:"Link erstellen", shareLoadBtn:"Code laden",
  exitSection:"Extraktionen", hintFactionSelect:"Wähle, als was du in diesen Raid gehst", showAll:"Alle zeigen", hideAll:"Alle ausblenden",
  exitHint:(shown,total)=>`${shown} / ${total} Extraktionen sichtbar`, noExitData:"Keine Extraktionsdaten für diese Karte",
  brightHead:"Helligkeit / Kontrast", brightToggleTitle:"Öffnen / schließen (minimieren)",
  brightness:"Helligkeit", brightnessTitle:"Helligkeit der Karte", contrast:"Kontrast", contrastTitle:"Kontrast der Karte",
  reset:"Zurücksetzen", raidStart:"Raid starten",
  guideTitle:"Zum ersten Mal hier?",
  guideStep1:"Filtere rechts unter <b>„Aufgaben wählen“</b> nach Händler oder Karte und hake die Aufgaben für diesen Raid an. Sie erscheinen links unter „Ausgewählt“ mit den Buchstaben A / B / C…, passend zu den Pins auf der Karte.",
  guideStep2:"Wechsle die Karte über die Tabs oben. Fahre über einen Pin, um den Aufgabennamen zu sehen.",
  guideStep3:"Wähle links im Bereich <b>Extraktionen</b>, als was du startest (PMC/Scav), und hake die Extraktionen an, die du nutzt → nur diese erscheinen auf der Karte (grün=PMC / blau=Scav / orange=gemeinsam).",
  guideStep4:"Schieb dieses Fenster auf deinen zweiten Monitor und drück <b>F11</b> für Vollbild — so liest es sich am besten.",
  guideStep5:"Nach einem Wipe oder neuen Aufgaben drück rechts <b>Daten aktualisieren</b>.",
  guideStep6:"Dein Fortschritt (ausgewählte und erledigte Aufgaben, Level usw.) wird <b>automatisch in diesem Browser gespeichert</b>. Bevor du auf einen anderen PC wechselst oder Browserdaten löschst, sichere ihn mit <b>Backup exportieren</b> unter „Einstellungen“ links.",
  guideM1:"Öffne <b>☰ Menü</b> (oben rechts), scrolle zu <b>„Aufgaben wählen“</b>, filtere nach Händler oder Karte und hake die Aufgaben für diesen Raid an.",
  guideM2:"Tippe außerhalb des Menüs (dunkler Bereich), um zur Karte zurückzukehren — deine Aufgaben erscheinen als Pins. Tippe auf einen Pin, um den Aufgabennamen zu sehen.",
  guideM3:"Wische über die Tabs oben, um die Karte zu wechseln. Die Extraktionen, die du nutzt, wählst du im Menü unter <b>Extraktionen</b>.",
  guideM4:"Dein Fortschritt (ausgewählte und erledigte Aufgaben usw.) wird <b>automatisch in diesem Browser gespeichert</b>.",
  taskListLink:"📋 Liste aller Aufgaben (auf Englisch)", taskLinkMissing:"Diese Aufgabe ist nicht in den Daten des aktuellen Modus (wechsle mal zwischen PvP / PvE).",
  guideStart:"Los geht's", loadingInitial:"Daten werden geladen…",
  multipleOrNone:"Mehrere / keine", doneBadge:"✓ erledigt (du)", markDoneTitle:"Als erledigt markieren",
  searchPrefix:mn=>`Suche: ${mn}`, searchResults:"Suchergebnisse", noMatch:"Keine Treffer", selectedHeader:"Ausgewählt",
  filterHint:"Filtere oben nach „Händler“ oder „Karte“, um die Aufgaben alphabetisch aufzulisten. Du kannst auch direkt nach dem Aufgabennamen suchen.",
  availableNow:"▶ Jetzt annehmbar", noQuestsToShow:"Keine Aufgaben anzuzeigen (prüfe die Filter)",
  labelSep:" / ",
  selCount:n=>`${n} ${s(n,"Aufgabe","Aufgaben")} ausgewählt`,
  progressDone:(dn,total)=>`Erledigt <b>${dn}</b>/${total}`,
  progressKappa:(kapDn,kapAll)=>` ・ Für Kappa nötig <b>${kapDn}</b>/${kapAll}`,
  progressLK:(lkDn,lkAll)=>` ・ Lightkeeper <b>${lkDn}</b>/${lkAll}`,
  unknownName:"(unbekannt)", kindPMC:"PMC", kindScav:"Scav", kindShared:"Gemeinsam", sharedGlyph:"G",
  kindCoop:"Co-op (beide nötig)", coopListNote:"🟠 „Co-op“ = nur nutzbar, wenn ein PMC und ein Scav da sind",
  floorNote:floor=>`※ Diese Extraktion liegt im Stockwerk ${floor} (nicht das, das du gerade ansiehst)`,
  extractPopup:(name,kind,fac)=>`<b>Extraktion: ${name}</b><br>Typ: ${kind} (dieser Raid: ${fac==="scav"?"Scav":"PMC"})`,
  transitLabel:"Transit", transitPopup:desc=>`<b>Transit</b><br>${desc}`,
  hazardSniper:"Schussfeld des Scharfschützen-Scavs", hazardMinefield:"Minenfeld", hazardOther:"Gefahrenzone",
  dangerousAreaPopup:label=>`<b>${label}</b><br><span style="color:#888">Dieser Bereich ist gefährlich</span>`,
  lockedDoor:"Verschlossene Tür", lockType:"Typ", needsPower:"※ Braucht Strom", lockGlyph:"V", routeLabel:"Route", floorLabel:"Stockwerk:",
  lockPopup:(type,power)=>`<b>Verschlossene Tür</b><br>Typ: ${type}${power?"<br>※ Braucht Strom":""}`,
  switchLabel:"Schalter", switchPopup:name=>`<b>Schalter</b><br><span style="color:#555">${name}</span>`,
  spawnChanceApprox:pct=>`Spawnchance ~${pct}%`,
  spawnPoint:"Spawnpunkt", sideOther:x=>x,
  optionalTag:" (optional)", conditionsLabel:"Bedingungen: ",
  noCoordHeader:"Keine Koordinaten auf dieser Karte (siehe Wiki)",
  noQuestSelected:"Keine Aufgaben ausgewählt",
  legendSniper:"Schussfeld des Scharfschützen", legendMinefield:"Minenfeld", legendOtherHazard:"Andere Gefahr",
  legendLockedDoor:"Verschlossene Tür", legendSwitch:"Schalter", legendBoss:"Boss-Spawn",
  legendPmcSpawn:"PMC-Spawn", legendScavSpawn:"Scav-Spawn", legendRoute:"— — Route (nummerierte Reihenfolge)",
  legendToggle:open=>`Legende ${open?"▲":"▼"}`,
  legendExitLine:fac=>`Extraktionen (dieser Raid: <b>${fac==="scav"?"Scav":"PMC"}</b>): <span class="dot" style="background:var(--ok)"></span>PMC&nbsp; <span class="dot" style="background:var(--scav)"></span>Scav&nbsp; <span class="dot" style="background:var(--shared)"></span>Co-op (beide nötig) — sichtbar sind nur die unter „Extraktionen“ angehakten. Stockwerk-Abzeichen = die Extraktion liegt in einem anderen Stockwerk`,
  legendMarkerLine:'<span class="dot" style="background:#888"></span>Kreis=Aufgabenziel (Buchstabe A/B..)　📌=deine Notiz (Rechtsklick zum Hinzufügen)',
  legendHazardLine:"Gestrichelte Umrandung=Gefahrenzone. Betreten ist gefährlich",
  legendColorLine:"Kartenfarben (von tarkov.dev): dunkelgrau=Innenräume / Schraffur=Treppen・Rampen / hellblau=Wasser / gestrichelt=Kartengrenze",
  legendLhTitle:"Kartensymbole (Grafik von re3mr.com)",
  legendLhAiScav:"KI-Scav-Spawn", legendLhRogues:"Rogue-Spawn", legendLhGoons:"Patrouillengebiet der Goons",
  legendLhPmcSpawn:"PMC-Spawn", legendLhCache:"Versteck", legendLhRogueCache:"Rogue-Versteck",
  legendLhBoss:"Boss (Zryachiy)", legendLhBossGuard:"Boss-Wache", legendLhBtrStop:"BTR-Haltestelle",
  condClimb:items=>`${items} dabeihaben (egal wo im Inventar) und die Schutzweste ablegen`,
  condNoBag:"Rucksack ablegen (kein Rucksack, egal welche Größe)",
  condHandIn:item=>`${item} am Ausgang abgeben`,
  condPay:amt=>`${amt} bezahlen (pro Person, bis zu 4, einmal pro Raid)`,
  condFlare:item=>`In der Signalzone eine grüne Leuchtpatrone abfeuern (${item})`,
  condD2:"Strom mit dem Hebel in den Kommandobüros einschalten, dann den Türknopf drücken",
  condBunker:"Generator mit dem Hebel draußen starten, dann innerhalb von ~4 Min. raus (Alarm, Raider)",
  condSaferoom:"Strom im Kraftwerk wiederherstellen, mit der Keycard Object #11SR hinein und die Tür verriegeln (einmalig)",
  condLabElev:a=>`Stromkasten benutzen (bei ${a}); es können Raider auftauchen`,
  condSewage:"Wasser über das Bedienfeld ablassen (~80 s)",
  condLabGate:a=>`Bedienfeld benutzen (${a}). Klappt nicht in jedem Raid und löst Alarm aus. Eine TerraGroup Labs Keycard (gelb) kann den Alarm vorher abschalten (optional)`,
  condTrainReserve:"Kommt spät im Raid (bei etwa 20–10 Min. Restzeit) und bleibt etwa 7,5 Min.",
  condTrain:"Ein Zug, der zu einer festen Zeit kommt und nur kurz bleibt",
  condWayUp:"Öffnet 15 Minuten nach Raidbeginn",
  condVexLh:"Preis noch nicht bestätigt. Das Auto ist nicht in jedem Raid da. Position von Hand nach der Kartengrafik gesetzt",
  tcondLabCard:"Braucht 1 TerraGroup Labs Zugangskarte (einmalig)",
  tcondLabrys:"Braucht eine Labrys-Zugangskarte (Tür im Keller des Westflügels im Resort)",
  tcondTerminal:"Nur 21:00–6:00 Uhr Spielzeit. Braucht außerdem Storyfortschritt und eine Zugangskarte (wird verbraucht)",
  tcondSudak:"Braucht 1 Sudak-Tudak Schiffsreparaturset (einmalig)",
  transitTo:d=>`Transit → ${d}`,
  transitRules:"• Nutzbar ab 1 Min. nach Raidbeginn<br>• Die Nutzung deaktiviert alle anderen Extraktionen<br>• 20 s in der Zone bleiben, um zu wechseln (Verlassen setzt auf 30 s zurück)",
  transitGo:d=>`Karte öffnen: ${d}`,
  transitUnsupported:"Diese Zielkarte wird vom Tool nicht unterstützt",
  condLbl:k=>({climb:"RR+Seil", nobag:"Kein Rucksack", item:"Abgabe", card:"Keycard", tool:"Werkzeug", flare:"Leuchtpatrone", pay:"Bezahlen", power:"Strom", timer:"Zeit"})[k],
  condNoArmorRow:"Schutzweste ablegen", condNoBagRow:"Rucksack ablegen", condFlareRow:"In der Signalzone abfeuern (nur grün)", condPopupHead:"Voraussetzungen",
  exitCondNote:"Markierte Extraktionen und Transits haben Voraussetzungen (drüberfahren zum Ansehen). Hake nur die an, die du nutzt — dann steht, was du brauchst, im Raid-Check.",
  prepExit:"🚪 Voraussetzungen deiner Extraktionen & Transits",
  legendCondLine:"Abzeichen oben links an einer Extraktion oder einem Transit = hat Voraussetzungen (klicken für Details):",
  prereqLabel:"Benötigt: ", nextLabel:"Danach: ", andMore:" weitere",
  shareCopiedAlert:"Link kopiert. Schick ihn deinem Freund.",
  sharePromptCopy:"Kopiere diesen Link und schick ihn deinem Freund:",
  sharePromptLoad:"Füge den Code (nach #s=) oder den ganzen Link ein:",
  shareLoadedAlert:"Geteilte Daten geladen.",
  shareLoadFailedAlert:msg=>`Laden fehlgeschlagen: ${msg}`,
  ttBtn:"TarkovTracker importieren", ttTitle:"Fortschritt aus TarkovTracker importieren",
  ttHow:"<ol><li>Speichere in den Einstellungen von TarkovTracker (tarkovtracker.org) ein <b>Backup (Export)</b> deines Fortschritts als JSON</li><li>Wähle die Datei unten aus oder füge den Inhalt ein</li></ol>Übernommen werden können erledigte / fehlgeschlagene Aufgaben, erledigte Ziele und dein Level.",
  ttPrivacy:"🔒 Die Datei wird nur in diesem Browser verarbeitet und nirgendwohin gesendet.",
  ttPasteLabel:"Oder den JSON-Inhalt einfügen:",
  ttErrJson:"Konnte nicht als JSON gelesen werden. Prüfe, ob es eine Backup-Datei ist.",
  ttErrFormat:"Das ist keine Backup-Datei von TarkovTracker.",
  ttErrEmpty:"Kein importierbarer Fortschritt gefunden.",
  modeLabel:"Spielmodus", modePvp:"PvP", modePve:"PvE", modeSeasonal:"Saison",
  modeHintPvp:"Normaler PvP-Charakter. Der Fortschritt (erledigte Aufgaben, Level…) wird pro Modus getrennt gespeichert.",
  modeHintPve:"PvE-Charakter. Wechselt zu den Aufgaben, Extraktionen und Bossen aus PvE (Fortschritt getrennt von PvP).",
  modeHintSeasonal:"Saison-PvP-Charakter (Wipe jede Saison). Normale Aufgaben nutzen dieselben Daten wie PvP; reine Saison-Aufgaben (Kord Breach) werden noch nicht abgedeckt. Fortschritt wird getrennt gespeichert.",
  ttTarget:(n,cur)=>cur ? `Importieren nach: <b>${n}</b> (der gerade angezeigte Modus)` : `Importieren nach: <b>${n}</b> (anders als der angezeigte Modus; gilt nach dem Wechsel)`,
  ttOtherMode:(n)=>`Im Modus „${n}“ gespeichert. Wechsle oben mit den Modus-Buttons zu ${n}, um ihn zu sehen.`,
  ttEmptyProfile:"In dieser Quelle ist kein Fortschritt. Wähle oben unter „Import-Modus“ einen Modus mit Fortschritt.",
  menuBtn:"☰ Menü", closeMenu:"Schließen",
  jumpTitle:"Auf der Karte zeigen (wählt die Aufgabe aus und springt zu ihren Pins auf der richtigen Karte und Etage)", jumpNoPins:"Keine Pins anzuzeigen (keine Koordinaten oder schon erledigt)",
  helpBtn:"Hilfe", helpTitle:"Anleitung", helpClose:"Schließen",
  fbLink:"💬 Feedback / Wunsch senden", fbSub:"Ideen und Fehlermeldungen willkommen (anonym möglich)", fbBtn:"Feedback / Fehler melden", fbTitle:"Feedback / Fehler melden",
  fbIntro:"Schreib uns, welche Funktion du dir wünschst, was nicht klappt oder welchen Fehler du gefunden hast. Was du sendest, sieht <b>nur der Entwickler</b> (es ist nicht öffentlich). Kein Login, kein Name, keine E-Mail nötig. Bitte keine persönlichen Daten angeben. Eine Antwort ist nicht immer möglich.",
  fbTypeIdea:"💡 Funktionswunsch", fbTypeBug:"🐞 Fehler", fbTypeOther:"💬 Sonstiges",
  fbMsgLabel:"Nachricht", fbMsgPh:"z. B. Der Pin von Aufgabe X ist an der falschen Stelle / Ich hätte gern eine Funktion, die…",
  fbInfoLabel:"Mitgesendete Infos (kannst du prüfen)",
  fbCopy:"Text kopieren", fbSend:"Senden", fbCopied:"Kopiert.", fbEmpty:"Bitte gib eine Nachricht ein.",
  fbSent:"Gesendet. Danke für dein Feedback!", fbSending:"Wird gesendet…", fbWait:"Bitte warte kurz, bevor du noch etwas sendest.", fbSendErr:"Senden fehlgeschlagen. Prüfe die Verbindung oder nutze unten „Formular direkt öffnen“.", fbDirect:"Formular direkt öffnen",
  guideMore:"Die ausführliche Anleitung findest du jederzeit über den Button „Hilfe“ oben in der Seitenleiste.",
  helpBody:`
<details open><summary>1. Schnellstart</summary><div><ol>
<li>Stell oben links den <b>Spielmodus</b> (PvP / PvE / Saison) auf den ein, den du spielst.</li>
<li>Filtere in der Seitenleiste nach <b>Händler</b> oder <b>Karte</b> und hake die <b>Aufgaben für diesen Raid</b> an.</li>
<li>Wechsle die Karte über die Tabs oben. Die Ziele der ausgewählten Aufgaben erscheinen als <b>Pins</b>. Fahre über einen Pin, um Beschreibung, Bedingungen sowie vorherige und nächste Aufgaben zu sehen.</li>
<li>Hake im Bereich <b>Extraktionen</b> die Extraktionen an, die du nutzt (→ 5.).</li>
<li>Schieb das Fenster auf deinen zweiten Monitor und drück <span class="k">F11</span> für Vollbild.</li>
</ol></div></details>

<details><summary>2. Spielmodi (PvP / PvE / Saison)</summary><div>
<p>Jeder Modus ist im Spiel ein eigener Charakter, deshalb <b>speichert das Tool den Fortschritt pro Modus</b> (erledigte/fehlgeschlagene Aufgaben, Level, ausgewählte Aufgaben, gewählte Extraktionen). Ein Wechsel lädt die Seite neu.</p>
<ul>
<li><b>PvP</b>: der normale PvP-Charakter.</li>
<li><b>PvE</b>: wechselt zu den PvE-Aufgaben ([PVE ZONE]), Extraktionen, Bossen und Spawns.</li>
<li><b>Saison</b>: der Saison-Charakter (mit Wipe). Es gibt keine eigene Datenquelle, daher nutzen normale Aufgaben die PvP-Daten. <b>Reine Saison-Aufgaben (Kord Breach) werden nicht abgedeckt</b>.</li>
</ul></div></details>

<details><summary>3. Die Karte lesen</summary><div><ul>
<li><b>Stockwerk-Buttons</b> (über der Karte): wechseln das Stockwerk auf mehrstöckigen Karten. In oberen Stockwerken wird das Erdgeschoss zur Orientierung blass darunter gezeigt. Die Zahl auf jedem Button ist die Anzahl deiner Pins in diesem Stockwerk.</li>
<li><b>Farben und Buchstaben der Pins</b>: jede Aufgabe hat eine Farbe und einen Buchstaben (A, B, C…), genau wie in der Aufgabenliste.</li>
<li><b>Button 📍</b> (in jeder Aufgabenzeile): wählt die Aufgabe aus, wechselt bei Bedarf Karte und Stockwerk und springt zu ihren Pins (ein Ring blinkt um sie herum).</li>
<li><b>Legende</b>: „Legende ▼“ unten links erklärt Symbole und Farben.</li>
<li><b>Ebenen</b>: unter „Ebenen / Teilen“ schaltest du Transits, Gefahrenzonen, verschlossene Türen, Schalter, Bosse und Spawns ein oder aus.</li>
<li><b>Routennummern</b>: eingeschaltet bekommen die Pins ①②③… in der Reihenfolge des kürzesten Wegs, mit einer Linie verbunden.</li>
<li><b>Eigene Pins</b>: <b>Rechtsklick</b> auf die Karte fügt einen Pin mit Notiz hinzu (Pin anklicken zum Bearbeiten/Löschen).</li>
<li><b>Helligkeit / Kontrast</b>: Regler oben links auf der Karte.</li>
</ul></div></details>

<details><summary>4. Markierungen in der Aufgabenliste &amp; Erledigt</summary><div><ul>
<li><span class="k">★</span> … eine Aufgabe, die für den Kappa-Container nötig ist. „Nur Kappa ★“ filtert auf diese.</li>
<li><b>Abzeichen A / B / C</b>: jede Aufgabe unter „Ausgewählt“ oben links hat ein Abzeichen in derselben Farbe und mit demselben Buchstaben wie ihre Pins. Vergleiche die Abzeichen oder fahre über einen Pin, um den Aufgabennamen zu sehen.</li>
<li><b>Größere Karte</b>: „◀ Größere Karte“ oben links klappt das ganze linke Panel ein, damit die Karte den Bildschirm füllt. Eingeklappt öffnet <b>▶</b> oben links auf der Karte es wieder (wird gemerkt).</li>
<li><b>Zwei Spalten</b>: links „Ausgewählt → Raid-Check → Extraktionen → Story → Einstellungen“; rechts „Aufgaben wählen“ (Filter &amp; Suche → Aufgabenliste). Du kannst nur die rechte Spalte einklappen (eingeklappt öffnet „🗂 Aufgaben wählen“ über der Karte sie wieder). Auf schmalen Bildschirmen stehen sie untereinander.</li>
<li><b>Übersicht pro Karte</b>: unter den ausgewählten Aufgaben zeigt jede Karte die Zahl der Aufgaben und Ziele. Die vollste bekommt das Abzeichen „Beste“; ein Klick auf die Zeile wechselt zu dieser Karte. Eine Zeile zeigt außerdem die Karten mit den meisten Aufgaben, die du jetzt annehmen kannst (sobald du Level oder erledigte Aufgaben eingibst). Die Zahl auf jedem Karten-Tab ist die Anzahl der Ziele deiner ausgewählten Aufgaben dort (auch Ziele ohne Koordinaten).</li>
<li><span class="k">○ / ✓</span> … klicken, um eine Aufgabe als erledigt zu markieren / rückgängig zu machen. Erledigte Aufgaben verschwinden automatisch aus der Liste; „Erledigte zeigen“ holt sie zurück.</li>
<li><span class="k">⚠</span> … eine Aufgabe mit Fehlschlagbedingung (drüberfahren oder Aufgabe auswählen, um sie zu sehen). Dazu gehören <b>sich gegenseitig ausschließende Aufgaben</b> (wer die eine erledigt, lässt die andere scheitern) — mit Namen.</li>
<li><span class="k">✗ gesperrt</span> … du hast die ausschließende Gegenstück-Aufgabe schon erledigt, diese kann nicht mehr angenommen werden. In der Liste und unter „Jetzt annehmbar“ ausgeblendet.</li>
<li><span class="k">✗ fehlgeschlagen</span> … eine fehlgeschlagene Aufgabe (gesetzt durch den TarkovTracker-Import). In der Liste und unter „Jetzt annehmbar“ ausgeblendet.</li>
<li>Gib dein Level bei <b>Lv</b> ein, und der Bereich „<b>▶ Jetzt annehmbar</b>“ zeigt Aufgaben, deren Voraussetzungen erledigt sind und deren Levelanforderung du erfüllst.</li>
<li>Im Co-op bleiben Aufgaben, die <b>du selbst ausgewählt</b> oder <b>per Link erhalten</b> hast, auch erledigt mit dem Abzeichen „✓ erledigt“ sichtbar.</li>
</ul></div></details>

<details><summary>5. Extraktionen wählen</summary><div>
<p>Wähle im Bereich „Extraktionen“ zuerst <b>PMC oder Scav</b> und hake dann die Extraktionen an, die du nutzt — auf der Karte erscheinen <b>nur die angehakten</b>. Es gibt die Buttons „Alle zeigen / Alle ausblenden“. Farben: grün = PMC, blau = Scav, orange = gemeinsam. Im PvE-Modus werden die PvE-Extraktionen gezeigt.</p>
<p><b>Extraktionen mit Voraussetzungen</b> bekommen ein Abzeichen oben links am Kartenmarker und in der Liste (🧗 Red-Rebel-Eispickel + Paracord, keine Schutzweste / 🎒 kein Rucksack / 📜 Gegenstand abgeben / 💳 Keycard / 🎆 grüne Leuchtpatrone / 💰 Bezahlung / ⚡ Strom oder Bedienfeld / ⏱️ zeitgebunden). Drüberfahren (oder am Handy antippen) zeigt die Details. Hakst du nur die Extraktionen an, die du nutzt, steht, was du brauchst, im Raid-Check unter „🚪 Voraussetzungen deiner Extraktionen“. Preise und Abgabegegenstände stammen aus den Daten von tarkov.dev; alles andere wurde nur anhand geprüfter Infos von Hand ergänzt.</p>
<p><b>Transits</b> (lila T) sind standardmäßig sichtbar (ausblenden unter „Ebenen“). Ein Klick zeigt Ziel, Voraussetzungen, die wichtigsten Regeln und einen Button „Karte öffnen“. Transits, die eine Keycard oder einen Gegenstand brauchen, bekommen dieselben Abzeichen (💳 / 🔧 / ⏱️). Transits stehen auch am Ende des Bereichs „Extraktionen“ — hake nur die an, die du nutzt, dann erscheinen die nötigen Keycards oder Gegenstände im Raid-Check.</p>
</div></details>

<details><summary>6. Raid-Check</summary><div>
<p>Das Panel „Raid-Check“ zeigt, was deine ausgewählten Aufgaben brauchen. Die Häkchen in den Zeilen werden gespeichert („Zurücksetzen“ löscht sie).</p>
<ul><li>🔑 mitzunehmende Schlüssel / 📤 mitzunehmende oder zu platzierende Gegenstände / 📥 im Raid einzusammelnde Gegenstände (FiR = muss im Raid gefunden sein) / 🎯 Waffen- &amp; Ausrüstungsanforderungen (zu nutzende Waffen, nötige Mods, zu tragende Ausrüstung — bei vielen Einträgen drüberfahren für die ganze Liste)</li></ul>
<p>Drück <b>„Alle Karten“</b> in der Kopfzeile, um alles, was deine ausgewählten Aufgaben auf allen Karten brauchen, in einer Liste zu sehen (Mengen werden addiert, jeder Gegenstand zeigt seine Karten). „Diese Karte“ geht zurück.</p>
<p>Der <b>Raid-Timer</b> über der Karte zählt das Zeitlimit der Karte herunter (gelb bei 5 Min., rot bei 2 Min.).</p>
</div></details>

<details><summary>7. Story-Kapitel</summary><div>
<p>Neben den Händleraufgaben gibt es eine <b>Zielcheckliste</b> für die Story-Kapitel (Tour / Falling Skies / Batya / The Unheard / Blue Fire / They Are Already Here / Accidental Witness / The Labyrinth / The Ticket / Boreas). Öffne <b>„Story“</b> in der Seitenleiste, um die Ziele jedes Kapitels zu sehen.</p>
<ul>
<li>Hake Ziele an, um deinen Fortschritt festzuhalten (pro Modus getrennt). Es gibt auch die Buttons „Alle Hauptziele erledigen“ und „Alles löschen“.</li>
<li>Story-Ziele haben <b>keine Koordinatendaten, daher erscheinen keine Pins auf der Karte</b>. Die Beschreibungen sind auf Englisch, wie im Spiel.</li>
<li>Händleraufgaben, die ein Story-Ziel voraussetzen, bekommen das Zeichen <span class="k">📖</span> (unerfüllte zeigen die Voraussetzung; ✓ wenn erfüllt).</li>
<li>Der TarkovTracker-Import übernimmt auch den Abschluss der Kapitel.</li>
</ul></div></details>

<details><summary>8. TarkovTracker-Import</summary><div>
<p>Für alle, die ihren Fortschritt schon in TarkovTracker führen: erledigte und fehlgeschlagene Aufgaben, erledigte Ziele und dein Level auf einmal übernehmen.</p>
<ol>
<li>Speichere in den Einstellungen von TarkovTracker (tarkovtracker.org) das Backup (Export) als <b>.json</b>.</li>
<li>Öffne hier „Ebenen / Teilen“, drück <b>TarkovTracker importieren</b> und wähle die Datei (oder füge sie ein).</li>
<li>Prüfe die Zusammenfassung und drück <b>Importieren</b>. Du kannst „Nur hinzufügen / Überschreiben“ wählen und direkt danach rückgängig machen.</li>
</ol>
<p>Die Datei wird nur in deinem Browser verarbeitet und nirgendwohin gesendet. Sie wird im <b>selben Modus wie das gewählte Profil</b> der Datei gespeichert (PvE-Fortschritt landet in PvE; ist das ein anderer als der angezeigte Modus, gilt er nach dem Wechsel). Wenn du TarkovTracker nicht nutzt, ignorier das — du kannst Erledigtes auch von Hand mit ○/✓ markieren.</p>
</div></details>

<details><summary>9. Links zum Teilen</summary><div>
<p>„Link erstellen“ kopiert den aktuellen Stand (Modus, ausgewählte Aufgaben, Erledigtes, Level, eigene Pins, Karte, gewählte Extraktionen) als URL. Ein Freund, der ihn öffnet oder unter „Code laden“ einfügt, bekommt denselben Stand. Fehlgeschlagene Aufgaben und erledigte Ziele werden nicht geteilt.</p>
</div></details>

<details><summary>10. Daten aktualisieren &amp; Probleme</summary><div><ul>
<li><b>Backup</b>: dein Fortschritt (ausgewählte Aufgaben, erledigte Aufgaben, Level, Häkchen, eigene Pins usw.) ist nur in diesem Browser gespeichert. Bevor du Browserdaten löschst oder auf einen anderen PC wechselst, speichere ihn mit <b>Backup exportieren</b> unter „Ebenen &amp; Teilen“ in eine Datei und drück am neuen Ort <b>Backup importieren</b> (ersetzt die aktuellen Daten durch den Dateiinhalt). Wenn du Fortschritt hast, aber seit 30+ Tagen kein Backup gemacht hast, erscheint oben in der linken Spalte ein kleiner Hinweis („Später“ blendet ihn 14 Tage aus).</li>
<li><b>Daten aktualisieren</b>: drück es nach einem Wipe oder wenn neue Aufgaben dazukommen. Aktualisiert Aufgaben, Extraktionen, Boss-Spawns usw. (aktualisiert sich außerdem etwa einmal am Tag von selbst).</li>
<li>Wenn die Daten nicht laden: prüfe die Verbindung und drück „Daten aktualisieren“. Können sie nicht geladen werden, werden die mitgelieferten Daten genutzt und „⚠ veraltet“ angezeigt.</li>
<li>Karte ist schwarz: der Bildserver ist ausgelastet — kurz warten und neu laden.</li>
<li>Kartengrafik passt nicht zum neuen Layout (z. B. Lighthouse): die Grafik bleibt alt, bis tarkov.dev sie aktualisiert; über der Karte erscheint ein Hinweis.</li>
<li>Namen von Aufgaben, Gegenständen, Karten und Extraktionen erscheinen auf Deutsch, wie im Spiel (Übersetzung von tarkov.dev; wo keine vorhanden ist, auf Englisch).</li>
<li><b>Statistik</b>: um zu sehen, was verbessert werden sollte, zählen wir anonym nur Besuche, wie oft jede Funktion genutzt wird und ungefähr wie lange die Seite offen ist (GoatCounter, ohne Cookies). Namen der Aufgaben, die du wählst, dein Fortschritt und alles, was du eintippst, werden nie gesendet.</li>
<li>Funktionswünsche, Fehler und Feedback kannst du über den Button „💬 Feedback / Wunsch senden“ rechts am Ende der Karten-Tabs schicken (oder über den Button unten in diesem Fenster).</li>
</ul></div></details>

<details><summary>11. Sicherheit (Angst vor einem Bann?)</summary><div>
<p>Dieses Tool ist eine <b>völlig separate Webseite</b> — eine externe Karte, die du einfach im Browser öffnest, dieselbe Art Tool wie tarkov.dev.</p>
<ul>
<li>Es <b>berührt nie</b> das Programm des Spiels, seinen Speicher, seine Dateien oder seinen Netzwerkverkehr (kein Auslesen, kein Verändern, keine Injection).</li>
<li>Es nimmt deinen Bildschirm nicht auf und liest keine Spiellogs. Es holt nichts aus dem Spiel und verfolgt deine Position nicht.</li>
<li>Es nutzt nur <b>öffentliche Daten und Karten von tarkov.dev</b> und die Aufgaben, die du wählst. Deine Auswahl und dein Fortschritt werden nur in deinem eigenen Browser gespeichert.</li>
<li>Nichts zu installieren, und keine Funktion, die das Spiel steuert oder automatisiert.</li>
</ul>
<p>Es funktioniert völlig anders als Tools, die Spieldaten auslesen oder verändern (Cheats). Trotzdem ist es ein <b>inoffizielles Fan-Tool</b> ohne Freigabe durch Battlestate Games (BSG), daher können wir nicht versprechen, dass nie etwas passiert — wenn du unsicher bist, lies bitte die offiziellen Bedingungen von BSG.</p>
</div></details>

<p class="muted">Dieses Tool greift nie ins Spiel ein (kein Speicherauslesen, keine Injection). Es nutzt öffentliche Daten und Karten von tarkov.dev (Karten: CC BY-NC-SA 4.0).</p>`,
  ttModeLabel:"Spielmodus:", ttModePvp:"PvP", ttModePve:"PvE", ttModeSeasonal:"Saison",
  ttSummary:(lv,c,cKnown,f,o,st)=>`Level <b>${lv||"-"}</b> / erledigte Aufgaben <b>${c}</b> (${cKnown} hier erkannt) / fehlgeschlagen <b>${f}</b> / erledigte Ziele <b>${o}</b> / Story-Ziele <b>${st}</b>`,
  storySection:"Story", storyHint:"Zielcheckliste der Story-Kapitel (keine Pins auf der Karte — es gibt keine Koordinatendaten). Die Beschreibungen sind auf Englisch, wie im Spiel.",
  storyNone:"Story-Daten konnten nicht geladen werden (drück Daten aktualisieren).", storyOptional:"optional",
  storyDoneAll:"Alle Hauptziele erledigen", storyClear:"Alles löschen", storyReqLabel:"Benötigt Story-Ziel:",
  ttMerge:"Nur hinzufügen (mein Erledigtes behalten)", ttOverwrite:"Überschreiben (genau wie TarkovTracker)",
  ttLevelLabel:lv=>`Auch das Level übernehmen (Lv ${lv})`,
  ttRun:"Importieren", ttClose:"Schließen", ttUndoBtn:"Letzten Import rückgängig machen",
  ttDoneMsg:(c,f,o,st)=>`Importiert: ${c} erledigt / ${f} fehlgeschlagen / ${o} Ziele / ${st} Story-Ziele`,
  ttUndoneMsg:"Wiederhergestellt.",
  failBadge:"✗ fehlgeschlagen", lockedBadge:"✗ gesperrt",
  failExclusive:(n)=>`Diese Aufgabe scheitert, wenn du erledigst: ${n}`,
  failGenShoot:"Hat eine Fehlschlagbedingung zum Töten bestimmter Ziele", failGenStanding:"Kann je nach Ansehen beim Händler scheitern",
  failGenPlant:"Hat eine Fehlschlagbedingung zum Platzieren von Gegenständen", failGenUse:"Hat eine Fehlschlagbedingung zum Benutzen von Gegenständen",
  failGenExtract:"Scheitert, wenn du stirbst oder den Raid anders als per Extraktion verlässt", failGenVisit:"Hat eine Fehlschlagbedingung", failGenOther:"Hat eine Fehlschlagbedingung",
  prepHeader:mjp=>`Raid-Check — ${mjp}`,
  prepEmpty:"Auf dieser Karte brauchst du keine Schlüssel und musst nichts einsammeln (nur Pins).",
  prepKeys:"🔑 Mitzunehmende Schlüssel", prepBring:"📤 Mitnehmen (platzieren/markieren)", prepCollect:"📥 Vor Ort finden",
  prepHeaderAll:"Raid-Check — alle Karten", prepAllBtn:"Alle Karten", prepOneBtn:"Diese Karte", prepAllTip:"Zeigt, was alle ausgewählten Aufgaben auf allen Karten brauchen", prepOneTip:"Zurück zur angezeigten Karte",
  prepAnyMap:"Beliebige Karte", prepEmptyAll:"Deine ausgewählten Aufgaben brauchen keine Schlüssel, keine einzusammelnden Gegenstände und keine Ausrüstung.",
  bkNote:"Dein Fortschritt (ausgewählte und erledigte Aufgaben, Level usw.) wird automatisch nur in diesem Browser gespeichert. Exportiere ihn, bevor du das Gerät wechselst oder Browserdaten löschst.",
  bkRemind:d=>`Seit ${d}+ Tagen kein Backup. Fortschritt jetzt sichern?`, bkRemindNow:"Exportieren", bkRemindLater:"Später",
  bkExportBtn:"Backup exportieren", bkImportBtn:"Backup importieren", bkExported:n=>`Backup exportiert (${n} ${s(n,"Eintrag","Einträge")})`, bkBad:"Diese Datei kann nicht als Backup gelesen werden.", bkConfirm:n=>`Backup importieren (${n} ${s(n,"Eintrag","Einträge")})? Deine aktuelle Auswahl, erledigte Aufgaben, Level, Häkchen, eigene Pins usw. werden durch den Inhalt der Datei ersetzt.`, bkReplaced:"Importiert. Wird neu geladen…",
  collapseBtn:"◀ Größere Karte", collapseTip:"Linkes Panel einklappen für eine größere Karte (eingeklappt öffnet ▶ oben links auf der Karte es wieder)", reopenTip:"Linkes Panel öffnen",
  pickTitle:"Aufgaben wählen", pkCollapseTip:"Nur diese Spalte einklappen (Aufgaben wählen)", pkReopenBtn:"🗂 Aufgaben wählen", pkReopenTip:"Spalte „Aufgaben wählen“ öffnen",
  filtSection:"Filter & Suche", settingsSection:"Einstellungen (Ebenen, Teilen, Backup)", selEmpty:"Hier erscheinen deine ausgewählten Aufgaben mit den Abzeichen A / B / C… (wähle Aufgaben rechts in der Spalte „Aufgaben wählen“).", chipTip:l=>`Karten-Pin „${l}“`,
  mapSumFoldTip:"Klicken zum Ein- / Ausklappen",
  mapSumTitle:"Übersicht pro Karte (ausgewählte Aufgaben)", mapSumBest:"Beste", mapSumCount:(t,o)=>`${t} ${s(t,"Aufgabe","Aufgaben")} · ${o} ${s(o,"Ziel","Ziele")}`, mapSumDoable:"Karten mit den meisten Aufgaben, die du jetzt annehmen kannst:",
  prepGear:"🎯 Waffen- & Ausrüstungsanforderungen", gearWeapons:"Waffen", gearMods:"Nötige Mods", gearWear:"Tragen", gearNotWear:n=>`Die angegebene Ausrüstung nicht tragen (${n} ${s(n,"Teil","Teile")})`, gearMore:n=>`+${n} weitere`,
  pinPromptAdd:"Notiz für diesen Pin (z. B. Achtung Sniper / Pausenpunkt)",
  pinPromptEdit:"Notiz bearbeiten",
  pinPopupMemo:"Notiz", pinPopupEmpty:"<span style='color:#888'>(keine)</span>",
  pinEdit:"Bearbeiten", pinDelete:"Löschen",
  mapLoading:jp=>`${jp} wird geladen…`,
  mapAttribution:'Karte: <a href="https://tarkov.dev" target="_blank">tarkov.dev</a> (CC BY-NC-SA)',
  lighthouseArtCredit:'Kartengrafik Lighthouse: <a href="https://reemr.se/Lighthouse/" target="_blank">re3mr.com</a> (CC BY-NC-SA 4.0)',
  fetchingFirst:"Neueste Daten von json.tarkov.dev werden geladen… (das erste Mal dauert etwas)",
  fetchingData:"Neueste Daten von json.tarkov.dev werden geladen…",
  fetchFailed:msg=>`<div class="err">Daten konnten nicht geladen werden.<br>${msg}<br><br>Prüfe die Verbindung und drück „Daten aktualisieren“.</div>`,
  fetchFailedAlert:msg=>`Laden fehlgeschlagen: ${msg}`,
  staleData:"⚠ Veraltet: ", updatedData:"Aktualisiert: ",
  leafletLoadError:'<div class="err">Die Kartenbibliothek (Leaflet) konnte nicht geladen werden.<br>Prüfe deine Internetverbindung und lade die Seite neu.</div>',
  noTaskData:"Die Aufgabendaten sind leer",
  bodyHead:"Kopf", bodyThorax:"Brustkorb", bodyStomach:"Bauch", bodyLeftArm:"Linker Arm", bodyRightArm:"Rechter Arm", bodyLeftLeg:"Linkes Bein", bodyRightLeg:"Rechtes Bein",
  condShoot:parts=>"Treffer: " + parts.join("/"),
  condDistIn:v=>`innerhalb von ${v} m`, condDistOut:v=>`aus über ${v} m`,
  condWeaponOnly:n=>`nur bestimmte Waffen (${n})`, condWearing:"bestimmte Ausrüstung tragen", condNotWearing:"bestimmte Ausrüstung ablegen",
  condTimeRange:(a,b)=>`${a}:00–${b}:00`, condKillCount:n=>`Kills×${n}`,
  attrErgo:"Ergonomie", attrAccuracy:"Präzision (MOA)", attrDurability:"Haltbarkeit", attrRecoilV:"Rückstoß vert.",
  attrRecoilH:"Rückstoß horiz.", attrWeight:"Gewicht", attrEffDist:"Eff. Reichweite", attrMagCap:"Magazinkapazität", attrMuzzleV:"Mündungsgeschw.",
  objVisit:"Ort besuchen", objFindItem:"Gegenstand finden", objFindQuestItem:"Questgegenstand finden",
  objGiveItem:"Gegenstand abgeben", objGiveQuestItem:"Questgegenstand abgeben", objPlantItem:"Gegenstand platzieren",
  objPlantQuestItem:"Questgegenstand platzieren", objMark:"Markierung setzen", objShoot:"Eliminieren (töten)",
  objExtract:"Vom Ort extrahieren", objBuildWeapon:"Waffe bauen", objUseItem:"Gegenstand benutzen",
  objSellItem:"Auf dem Flohmarkt anbieten", objExperience:"Bedingung erfüllen", objSkill:"Fertigkeitsstufe erreichen",
  objTraderLevel:"Treuestufe beim Händler", objTraderStanding:"Ansehen beim Händler",
  objTaskStatus:"Status einer anderen Aufgabe", objDialogue:"Dialog", objGlobalVariable:"Fortschrittsmarke",
  };
})();
