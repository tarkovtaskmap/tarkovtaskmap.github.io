/* Polski interfejs. Nazwy zadań, przedmiotów, map, wyjść itp. pochodzą z tłumaczenia tarkov.dev (jak w grze).
   Teksty interfejsu przetłumaczył autor z pomocą tłumaczenia maszynowego — jeśli coś brzmi nienaturalnie, daj znać przez „Opinia”.
   Gdy brakuje tekstu, pokazywany jest angielski. */
(function(){
  // liczba mnoga: 1 zadanie / 2 zadania / 5 zadań
  const pl = (n, one, few, many) => { n = Math.abs(n); if(n === 1) return one; const d = n % 10, h = n % 100; return (d >= 2 && d <= 4 && !(h >= 12 && h <= 14)) ? few : many; };
  window.__STR_PL__ = {
  appTitle:"Tarkov — Mapa zadań",
  refresh:"Odśwież dane", traderAll:"▼ Handlarz (wszyscy)", mapAll:"▼ Mapa (wszystkie)",
  followCurrentMap:"[Zgodnie z bieżącą mapą]", searchPlaceholder:"Szukaj nazwy zadania…",
  clearSel:"Wyczyść wybór", kappaOnly:"Tylko Kappa ★", lvLabel:"Poz.", showDone:"Pokaż ukończone",
  supportLink:"☕ Wesprzyj narzędzie na Ko-fi", supportBtn:"☕ Wesprzyj",
  supportBtnTitle:"Dzięki, że korzystasz! Narzędzie zawsze będzie darmowe. Jeśli oszczędza ci czas, napiwek na Ko-fi bardzo pomaga — całkowicie dobrowolnie.",
  supportBtnSub:"Dzięki za korzystanie! (dobrowolnie)",
  layersSection:"Warstwy / udostępnianie", optTransit:"Tranzyt (między mapami)",
  hintExitBelow:"※ Wyjścia wybierasz wyżej, w sekcji „Wyjścia”", optHazard:"Strefy zagrożenia", optLock:"Zamknięte drzwi",
  optSwitch:"Przełączniki", optBoss:"Bossowie", optSpawn:"Spawny", optIcons:"Ikony",
  optRoute:"Numeracja trasy (①②③…)", shareCreateBtn:"Utwórz link", shareLoadBtn:"Wczytaj kod",
  exitSection:"Wyjścia", hintFactionSelect:"Wybierz, kim wchodzisz do tego rajdu", showAll:"Pokaż wszystkie", hideAll:"Ukryj wszystkie",
  exitHint:(shown,total)=>`Pokazano ${shown} / ${total} wyjść`, noExitData:"Brak danych o wyjściach dla tej mapy",
  brightHead:"Jasność / kontrast", brightToggleTitle:"Otwórz / zamknij (zminimalizuj)",
  brightness:"Jasność", brightnessTitle:"Jasność mapy", contrast:"Kontrast", contrastTitle:"Kontrast mapy",
  reset:"Reset", raidStart:"Start rajdu",
  guideTitle:"Pierwszy raz tutaj?",
  guideStep1:"W prawej kolumnie <b>„Wybierz zadania”</b> filtruj według handlarza lub mapy i zaznacz zadania, które robisz w tym rajdzie. Pojawią się po lewej w „Wybrane” z oznaczeniami A / B / C… takimi jak pinezki na mapie.",
  guideStep2:"Mapy przełączasz kartami u góry. Najedź na pinezkę, aby zobaczyć nazwę zadania.",
  guideStep3:"W sekcji <b>Wyjścia</b> po lewej wybierz, kim wchodzisz (PMC/Scav), i zaznacz wyjścia, których użyjesz → tylko one będą na mapie (zielone=PMC / niebieskie=Scav / pomarańczowe=wspólne).",
  guideStep4:"Przenieś to okno na drugi monitor i naciśnij <b>F11</b> (pełny ekran) — tak czyta się najwygodniej.",
  guideStep5:"Po wipe'ie lub dodaniu nowych zadań naciśnij <b>Odśwież dane</b> w prawej kolumnie.",
  guideStep6:"Twój postęp (wybrane i ukończone zadania, poziom itd.) <b>zapisuje się automatycznie w tej przeglądarce</b>. Przed przejściem na inny komputer lub czyszczeniem danych przeglądarki zapisz go przyciskiem <b>Eksportuj kopię</b> w „Ustawieniach” po lewej.",
  guideM1:"Otwórz <b>☰ Menu</b> (prawy górny róg), przewiń do <b>„Wybierz zadania”</b>, filtruj według handlarza lub mapy i zaznacz zadania na ten rajd.",
  guideM2:"Stuknij poza menu (ciemny obszar), aby wrócić do mapy — zadania pojawią się jako pinezki. Stuknij pinezkę, aby zobaczyć nazwę zadania.",
  guideM3:"Przesuwaj karty u góry, aby zmienić mapę. Wyjścia, których użyjesz, wybierzesz w sekcji <b>Wyjścia</b> w menu.",
  guideM4:"Twój postęp (wybrane i ukończone zadania itd.) <b>zapisuje się automatycznie w tej przeglądarce</b>.",
  taskListLink:"📋 Lista wszystkich zadań (po angielsku)", taskLinkMissing:"Tego zadania nie ma w danych bieżącego trybu (spróbuj przełączyć PvP / PvE).",
  guideStart:"Zaczynamy", loadingInitial:"Wczytywanie danych…",
  multipleOrNone:"Kilka / brak", doneBadge:"✓ ukończone (ty)", markDoneTitle:"Oznacz jako ukończone",
  searchPrefix:mn=>`Szukaj: ${mn}`, searchResults:"Wyniki wyszukiwania", noMatch:"Brak wyników", selectedHeader:"Wybrane",
  filterHint:"Filtruj według „Handlarza” lub „Mapy” powyżej, aby zobaczyć zadania alfabetycznie. Możesz też od razu wyszukać nazwę zadania.",
  availableNow:"▶ Dostępne teraz", noQuestsToShow:"Brak zadań do pokazania (sprawdź filtry)",
  labelSep:" / ",
  selCount:n=>`Wybrano ${n} ${pl(n,"zadanie","zadania","zadań")}`,
  progressDone:(dn,total)=>`Ukończone <b>${dn}</b>/${total}`,
  progressKappa:(kapDn,kapAll)=>` ・ Wymagane do Kappy <b>${kapDn}</b>/${kapAll}`,
  progressLK:(lkDn,lkAll)=>` ・ Lightkeeper <b>${lkDn}</b>/${lkAll}`,
  unknownName:"(nieznane)", kindPMC:"PMC", kindScav:"Scav", kindShared:"Wspólne", sharedGlyph:"W",
  kindCoop:"Co-op (wymagani obaj)", coopListNote:"🟠 „Co-op” = działa tylko, gdy obecni są PMC i Scav",
  floorNote:floor=>`※ To wyjście jest na piętrze ${floor} (innym niż oglądane teraz)`,
  extractPopup:(name,kind,fac)=>`<b>Wyjście: ${name}</b><br>Typ: ${kind} (ten rajd: ${fac==="scav"?"Scav":"PMC"})`,
  transitLabel:"Tranzyt", transitPopup:desc=>`<b>Tranzyt</b><br>${desc}`,
  hazardSniper:"Pole ostrzału snajpera-scava", hazardMinefield:"Pole minowe", hazardOther:"Strefa zagrożenia",
  dangerousAreaPopup:label=>`<b>${label}</b><br><span style="color:#888">Ten obszar jest niebezpieczny</span>`,
  lockedDoor:"Zamknięte drzwi", lockType:"Typ", needsPower:"※ Wymaga zasilania", lockGlyph:"Z", routeLabel:"Trasa", floorLabel:"Piętro:",
  lockPopup:(type,power)=>`<b>Zamknięte drzwi</b><br>Typ: ${type}${power?"<br>※ Wymaga zasilania":""}`,
  switchLabel:"Przełącznik", switchPopup:name=>`<b>Przełącznik</b><br><span style="color:#555">${name}</span>`,
  spawnChanceApprox:pct=>`Szansa na spawn ~${pct}%`,
  spawnPoint:"Punkt spawnu", sideOther:s=>s,
  optionalTag:" (opcjonalne)", conditionsLabel:"Warunki: ",
  noCoordHeader:"Brak współrzędnych na tej mapie (zobacz Wiki)",
  noQuestSelected:"Nie wybrano zadań",
  legendSniper:"Pole ostrzału snajpera", legendMinefield:"Pole minowe", legendOtherHazard:"Inne zagrożenie",
  legendLockedDoor:"Zamknięte drzwi", legendSwitch:"Przełącznik", legendBoss:"Spawn bossa",
  legendPmcSpawn:"Spawn PMC", legendScavSpawn:"Spawn Scava", legendRoute:"— — Trasa (kolejność numerów)",
  legendToggle:open=>`Legenda ${open?"▲":"▼"}`,
  legendExitLine:fac=>`Wyjścia (ten rajd: <b>${fac==="scav"?"Scav":"PMC"}</b>): <span class="dot" style="background:var(--ok)"></span>PMC&nbsp; <span class="dot" style="background:var(--scav)"></span>Scav&nbsp; <span class="dot" style="background:var(--shared)"></span>Co-op (wymagani obaj) — widać tylko wyjścia zaznaczone w „Wyjściach”. Oznaczenie piętra = wyjście jest na innym piętrze`,
  legendMarkerLine:'<span class="dot" style="background:#888"></span>Kółko=cel zadania (litera A/B..)　📌=twoja notatka (dodaj prawym przyciskiem)',
  legendHazardLine:"Przerywany obrys=strefa zagrożenia. Wejście jest niebezpieczne",
  legendColorLine:"Kolory mapy (z tarkov.dev): ciemnoszary=wnętrza / kreskowanie=schody・rampy / jasnoniebieski=woda / przerywana linia=granica mapy",
  legendLhTitle:"Symbole mapy (grafika re3mr.com)",
  legendLhAiScav:"Spawn AI Scavów", legendLhRogues:"Spawn Rogue'ów", legendLhGoons:"Obszar patrolu Goonów",
  legendLhPmcSpawn:"Spawn PMC", legendLhCache:"Skrytka", legendLhRogueCache:"Skrytka Rogue'ów",
  legendLhBoss:"Boss (Zryachiy)", legendLhBossGuard:"Ochrona bossa", legendLhBtrStop:"Przystanek BTR",
  condClimb:items=>`Miej przy sobie ${items} (gdziekolwiek w ekwipunku) i zdejmij kamizelkę kuloodporną`,
  condNoBag:"Zdejmij plecak (żadnego plecaka, niezależnie od rozmiaru)",
  condHandIn:item=>`Oddaj ${item} przy wyjściu`,
  condPay:amt=>`Zapłać ${amt} (za osobę, do 4 osób, raz na rajd)`,
  condFlare:item=>`Wystrzel zieloną flarę w strefie sygnałowej (${item})`,
  condD2:"Włącz zasilanie dźwignią w biurach dowództwa, potem naciśnij przycisk drzwi",
  condBunker:"Uruchom generator dźwignią na zewnątrz, potem wyjdź w ciągu ~4 min (alarm, Raiderzy)",
  condSaferoom:"Przywróć zasilanie w elektrowni, wejdź z kartą Object #11SR i zamknij drzwi (jednorazowo)",
  condLabElev:a=>`Użyj panelu zasilania (obok ${a}); mogą pojawić się Raiderzy`,
  condSewage:"Spuść wodę panelem (~80 s)",
  condLabGate:a=>`Użyj panelu sterowania (${a}). Nie zawsze działa i włącza alarm. Karta TerraGroup Labs (żółta) może wcześniej wyłączyć alarm (opcjonalnie)`,
  condTrainReserve:"Przyjeżdża pod koniec rajdu (ok. 20–10 min do końca) i stoi ok. 7,5 min",
  condTrain:"Pociąg przyjeżdża o ustalonym czasie i stoi tylko chwilę",
  condWayUp:"Otwiera się 15 minut po starcie rajdu",
  condVexLh:"Opłata jeszcze niepotwierdzona. Samochodu nie ma w każdym rajdzie. Pozycja ustawiona ręcznie według grafiki mapy",
  tcondLabCard:"Wymaga 1 karty dostępu TerraGroup Labs (jednorazowej)",
  tcondLabrys:"Wymaga karty dostępu Labrys (drzwi w piwnicy zachodniego skrzydła Resortu)",
  tcondTerminal:"Tylko 21:00–6:00 czasu w grze. Wymaga też postępu fabuły i karty wstępu (zużywa się)",
  tcondSudak:"Wymaga 1 zestawu naprawczego Sudak-Tudak (jednorazowego)",
  transitTo:d=>`Tranzyt → ${d}`,
  transitRules:"• Dostępny od 1 min po starcie rajdu<br>• Użycie wyłącza wszystkie inne wyjścia<br>• Zostań w strefie 20 s, aby przejść (wyjście ze strefy resetuje do 30 s)",
  transitGo:d=>`Otwórz mapę: ${d}`,
  transitUnsupported:"Ta mapa docelowa nie jest obsługiwana przez narzędzie",
  condLbl:k=>({climb:"RR+lina", nobag:"Bez plecaka", item:"Oddanie", card:"Karta", tool:"Narzędzie", flare:"Flara", pay:"Opłata", power:"Zasilanie", timer:"Czas"})[k],
  condNoArmorRow:"Zdejmij kamizelkę kuloodporną", condNoBagRow:"Zdejmij plecak", condFlareRow:"Wystrzel w strefie sygnałowej (tylko zielona)", condPopupHead:"Wymagania",
  exitCondNote:"Oznaczone wyjścia i tranzyty mają wymagania (najedź, aby zobaczyć). Zaznacz tylko te, których użyjesz — potrzebne rzeczy pojawią się na liście przed rajdem.",
  prepExit:"🚪 Wymagania twoich wyjść i tranzytów",
  legendCondLine:"Oznaczenie w lewym górnym rogu wyjścia lub tranzytu = są wymagania (kliknij po szczegóły):",
  prereqLabel:"Wymaga: ", nextLabel:"Dalej: ", andMore:" więcej",
  shareCopiedAlert:"Skopiowano link. Wyślij go znajomemu.",
  sharePromptCopy:"Skopiuj ten link i wyślij go znajomemu:",
  sharePromptLoad:"Wklej kod (po #s=) albo cały link:",
  shareLoadedAlert:"Wczytano udostępnione dane.",
  shareLoadFailedAlert:msg=>`Nie udało się wczytać: ${msg}`,
  ttBtn:"Import z TarkovTracker", ttTitle:"Import postępu z TarkovTracker",
  ttHow:"<ol><li>W ustawieniach TarkovTracker (tarkovtracker.org) zapisz <b>kopię zapasową (eksport)</b> postępu w pliku JSON</li><li>Wybierz ten plik poniżej albo wklej jego zawartość</li></ol>Można przenieść ukończone / nieudane zadania, ukończone cele i twój poziom.",
  ttPrivacy:"🔒 Plik jest przetwarzany tylko w tej przeglądarce i nigdzie nie jest wysyłany.",
  ttPasteLabel:"Albo wklej zawartość JSON:",
  ttErrJson:"Nie da się tego odczytać jako JSON. Sprawdź, czy to plik kopii zapasowej.",
  ttErrFormat:"To nie jest plik kopii zapasowej TarkovTracker.",
  ttErrEmpty:"Nie znaleziono postępu do zaimportowania.",
  modeLabel:"Tryb gry", modePvp:"PvP", modePve:"PvE", modeSeasonal:"Sezonowy",
  modeHintPvp:"Zwykła postać PvP. Postęp (ukończone zadania, poziom…) zapisuje się osobno dla każdego trybu.",
  modeHintPve:"Postać PvE. Przełącza na zadania, wyjścia i bossów z PvE (postęp osobno od PvP).",
  modeHintSeasonal:"Sezonowa postać PvP (wipe co sezon). Zwykłe zadania mają te same dane co PvP; zadania tylko sezonowe (Kord Breach) nie są jeszcze obsługiwane. Postęp zapisuje się osobno.",
  ttTarget:(n,cur)=>cur ? `Import do: <b>${n}</b> (tryb pokazany teraz)` : `Import do: <b>${n}</b> (inny niż tryb pokazany teraz; zadziała po przełączeniu)`,
  ttOtherMode:(n)=>`Zapisano w trybie „${n}”. Przełącz na ${n} przyciskami trybu u góry, aby go zobaczyć.`,
  ttEmptyProfile:"W tym źródle nie ma postępu. Wybierz powyżej w „Tryb importu” tryb, który ma postęp.",
  menuBtn:"☰ Menu", closeMenu:"Zamknij",
  jumpTitle:"Pokaż na mapie (zaznacza zadanie i przenosi do jego pinezek na właściwej mapie i piętrze)", jumpNoPins:"Brak pinezek do pokazania (brak współrzędnych albo już ukończone)",
  helpBtn:"Pomoc", helpTitle:"Jak używać", helpClose:"Zamknij",
  fbLink:"💬 Wyślij opinię / prośbę", fbSub:"Pomysły i zgłoszenia błędów mile widziane (anonimowo OK)", fbBtn:"Opinia / zgłoszenie błędu", fbTitle:"Opinia / zgłoszenie błędu",
  fbIntro:"Napisz, jakiej funkcji potrzebujesz albo co nie działa. To, co wyślesz, <b>widzi tylko autor</b> (nie jest publiczne). Nie trzeba logowania, imienia ani e-maila. Nie podawaj danych osobowych. Nie zawsze uda się odpowiedzieć.",
  fbTypeIdea:"💡 Prośba o funkcję", fbTypeBug:"🐞 Błąd", fbTypeOther:"💬 Inne",
  fbMsgLabel:"Wiadomość", fbMsgPh:"np. Pinezka zadania X jest w złym miejscu / chciałbym funkcję, która…",
  fbInfoLabel:"Informacje wysyłane razem z wiadomością (możesz je sprawdzić)",
  fbCopy:"Kopiuj tekst", fbSend:"Wyślij", fbCopied:"Skopiowano.", fbEmpty:"Wpisz wiadomość.",
  fbSent:"Wysłano. Dziękujemy za opinię!", fbSending:"Wysyłanie…", fbWait:"Poczekaj chwilę przed wysłaniem kolejnej.", fbSendErr:"Nie udało się wysłać. Sprawdź połączenie albo użyj poniżej „Otwórz formularz bezpośrednio”.", fbDirect:"Otwórz formularz bezpośrednio",
  guideMore:"Szczegółowy poradnik otworzysz w każdej chwili przyciskiem „Pomoc” u góry panelu bocznego.",
  helpBody:`
<details open><summary>1. Szybki start</summary><div><ol>
<li>W lewym górnym rogu ustaw <b>Tryb gry</b> (PvP / PvE / Sezonowy), w który grasz.</li>
<li>W panelu bocznym filtruj według <b>Handlarza</b> lub <b>Mapy</b> i zaznacz <b>zadania, które robisz w tym rajdzie</b>.</li>
<li>Mapy przełączasz kartami u góry. Cele wybranych zadań pojawiają się jako <b>pinezki</b>. Najedź na pinezkę, aby zobaczyć opis, warunki oraz zadania poprzednie i następne.</li>
<li>W sekcji <b>Wyjścia</b> zaznacz wyjścia, których użyjesz (→ 5.).</li>
<li>Przenieś okno na drugi monitor i naciśnij <span class="k">F11</span> (pełny ekran).</li>
</ol></div></details>

<details><summary>2. Tryby gry (PvP / PvE / Sezonowy)</summary><div>
<p>Każdy tryb to w grze osobna postać, więc narzędzie <b>zapisuje postęp osobno dla każdego trybu</b> (ukończone/nieudane zadania, poziom, wybrane zadania, wybór wyjść). Zmiana trybu przeładowuje stronę.</p>
<ul>
<li><b>PvP</b>: zwykła postać PvP.</li>
<li><b>PvE</b>: przełącza na zadania ([PVE ZONE]), wyjścia, bossów i spawny z PvE.</li>
<li><b>Sezonowy</b>: postać sezonowa (z wipe'ami). Nie ma osobnego źródła danych, więc zwykłe zadania używają danych PvP. <b>Zadania tylko sezonowe (Kord Breach) nie są obsługiwane</b>.</li>
</ul></div></details>

<details><summary>3. Czytanie mapy</summary><div><ul>
<li><b>Przyciski pięter</b> (nad mapą): przełączają piętra na mapach wielopoziomowych. Na wyższym piętrze parter jest słabo widoczny pod spodem dla orientacji. Liczba na przycisku to liczba twoich pinezek na tym piętrze.</li>
<li><b>Kolory i litery pinezek</b>: każde zadanie ma kolor i literę (A, B, C…), takie same jak na liście zadań.</li>
<li><b>Przycisk 📍</b> (w wierszu zadania): zaznacza zadanie, w razie potrzeby przełącza mapę i piętro i przesuwa mapę do jego pinezek (wokół nich mignie pierścień).</li>
<li><b>Legenda</b>: „Legenda ▼” w lewym dolnym rogu objaśnia symbole i kolory.</li>
<li><b>Warstwy</b>: w „Warstwy / udostępnianie” włączysz tranzyty, strefy zagrożenia, zamknięte drzwi, przełączniki, bossów i spawny.</li>
<li><b>Numeracja trasy</b>: po włączeniu pinezki dostają ①②③… w kolejności najkrótszej trasy, połączone linią.</li>
<li><b>Własne pinezki</b>: kliknij mapę <b>prawym przyciskiem</b>, aby dodać pinezkę z notatką (kliknij pinezkę, aby ją edytować/usunąć).</li>
<li><b>Jasność / kontrast</b>: suwaki w lewym górnym rogu mapy.</li>
</ul></div></details>

<details><summary>4. Oznaczenia na liście zadań i ukończenie</summary><div><ul>
<li><span class="k">★</span> … zadanie wymagane do pojemnika Kappa. „Tylko Kappa ★” filtruje tylko je.</li>
<li><b>Oznaczenia A / B / C</b>: każde zadanie w „Wybrane” w lewym górnym rogu ma oznaczenie w tym samym kolorze i z tą samą literą co jego pinezki. Porównaj oznaczenia albo najedź na pinezkę, aby zobaczyć nazwę zadania.</li>
<li><b>Większa mapa</b>: „◀ Większa mapa” w lewym górnym rogu zwija cały lewy panel, by mapa zajęła ekran. Gdy jest zwinięty, <b>▶</b> w lewym górnym rogu mapy go otwiera (narzędzie to zapamiętuje).</li>
<li><b>Dwie kolumny</b>: lewa to „Wybrane → Lista przed rajdem → Wyjścia → Fabuła → Ustawienia”; prawa to „Wybierz zadania” (Filtry i wyszukiwanie → Lista zadań). Możesz zwinąć samą prawą kolumnę (gdy jest zwinięta, „🗂 Wybierz zadania” nad mapą ją otwiera). Na wąskich ekranach są jedna pod drugą.</li>
<li><b>Podsumowanie map</b>: pod wybranymi zadaniami każda mapa pokazuje liczbę zadań i celów. Najbardziej obłożona dostaje oznaczenie „Najlepsza”; kliknij wiersz, aby przejść na tę mapę. Osobny wiersz pokazuje mapy z największą liczbą zadań, które możesz przyjąć teraz (po wpisaniu poziomu lub ukończonych zadań). Liczba na karcie mapy to liczba celów twoich wybranych zadań na niej (także celów bez współrzędnych).</li>
<li><span class="k">○ / ✓</span> … kliknij, aby oznaczyć zadanie jako ukończone / cofnąć. Ukończone zadania same znikają z listy; „Pokaż ukończone” je przywraca.</li>
<li><span class="k">⚠</span> … zadanie z warunkiem porażki (najedź albo wybierz zadanie, aby go zobaczyć). Obejmuje <b>zadania wzajemnie wykluczające się</b> (ukończenie jednego oblewa drugie) — z nazwą.</li>
<li><span class="k">✗ zablokowane</span> … ukończono już zadanie wykluczające, więc tego nie da się już przyjąć. Ukryte na liście i w „Dostępne teraz”.</li>
<li><span class="k">✗ nieudane</span> … zadanie nieudane (ustawione przez import z TarkovTracker). Ukryte na liście i w „Dostępne teraz”.</li>
<li>Wpisz swój poziom w <b>Poz.</b>, a sekcja „<b>▶ Dostępne teraz</b>” pokaże zadania z ukończonymi wymaganiami i spełnionym wymogiem poziomu.</li>
<li>W grze ze znajomymi zadania <b>wybrane przez ciebie</b> lub <b>otrzymane przez link</b> zostają widoczne z oznaczeniem „✓ ukończone”, nawet gdy są ukończone.</li>
</ul></div></details>

<details><summary>5. Wybór wyjść</summary><div>
<p>W sekcji „Wyjścia” najpierw wybierz <b>PMC albo Scav</b>, potem zaznacz wyjścia, których użyjesz — na mapie pojawiają się <b>tylko zaznaczone</b>. Są przyciski „Pokaż wszystkie / Ukryj wszystkie”. Kolory: zielony = PMC, niebieski = Scav, pomarańczowy = wspólne. W trybie PvE pokazywane są wyjścia z PvE.</p>
<p><b>Wyjścia z wymaganiami</b> mają oznaczenie w lewym górnym rogu znacznika na mapie i na liście (🧗 czekan Red Rebel + Paracord, bez kamizelki / 🎒 bez plecaka / 📜 oddanie przedmiotu / 💳 karta / 🎆 zielona flara / 💰 opłata / ⚡ zasilanie lub panel / ⏱️ czasowe). Najedź (lub stuknij na telefonie), aby zobaczyć szczegóły. Jeśli zaznaczysz tylko wyjścia, których użyjesz, potrzebne rzeczy pojawią się w „🚪 Wymagania twoich wyjść” na liście przed rajdem. Ceny i przedmioty do oddania pochodzą z danych tarkov.dev; resztę dodano ręcznie tylko na podstawie sprawdzonych informacji.</p>
<p><b>Tranzyty</b> (fioletowe T) są domyślnie widoczne (możesz je ukryć w „Warstwy”). Kliknij jeden, aby zobaczyć cel, wymagania, najważniejsze zasady i przycisk „Otwórz mapę”. Tranzyty wymagające karty lub przedmiotu mają te same oznaczenia (💳 / 🔧 / ⏱️). Tranzyty są też na końcu sekcji „Wyjścia” — zaznacz tylko te, których użyjesz, a potrzebne karty lub przedmioty pojawią się na liście przed rajdem.</p>
</div></details>

<details><summary>6. Lista przed rajdem</summary><div>
<p>Panel „Lista przed rajdem” pokazuje, czego potrzebują twoje wybrane zadania. Zaznaczenia w wierszach są zapisywane („Reset” je czyści).</p>
<ul><li>🔑 klucze do zabrania / 📤 przedmioty do zabrania lub podłożenia / 📥 przedmioty do znalezienia w rajdzie (FiR = muszą być znalezione w rajdzie) / 🎯 wymagania broni i wyposażenia (broń, wymagane części, wyposażenie do założenia — najedź, aby zobaczyć pełną listę, gdy jest długa)</li></ul>
<p>Naciśnij <b>„Wszystkie mapy”</b> w nagłówku, aby zobaczyć na jednej liście wszystko, czego potrzebują wybrane zadania na wszystkich mapach (ilości są sumowane, a przy każdym przedmiocie widać mapy). „Ta mapa” wraca.</p>
<p><b>Licznik rajdu</b> nad mapą odlicza limit czasu mapy (żółty przy 5 min, czerwony przy 2 min).</p>
</div></details>

<details><summary>7. Rozdziały fabuły</summary><div>
<p>Oprócz zadań handlarzy jest <b>lista celów</b> rozdziałów fabuły (Tour / Falling Skies / Batya / The Unheard / Blue Fire / They Are Already Here / Accidental Witness / The Labyrinth / The Ticket / Boreas). Otwórz <b>„Fabuła”</b> w panelu bocznym, aby zobaczyć cele każdego rozdziału.</p>
<ul>
<li>Zaznaczaj cele, aby zapisywać postęp (osobno dla każdego trybu). Są też przyciski „Ukończ wszystkie główne cele” i „Wyczyść wszystko”.</li>
<li>Cele fabularne <b>nie mają danych o współrzędnych, więc nie ma ich pinezek na mapie</b>. Opisy są po angielsku, jak w grze.</li>
<li>Zadania handlarzy wymagające celu fabularnego mają znak <span class="k">📖</span> (niespełnione pokazują wymaganie; ✓ gdy spełnione).</li>
<li>Import z TarkovTracker przenosi też ukończenie rozdziałów.</li>
</ul></div></details>

<details><summary>8. Import z TarkovTracker</summary><div>
<p>Dla osób, które już śledzą postęp w TarkovTracker: przenieś naraz ukończone i nieudane zadania, ukończone cele i swój poziom.</p>
<ol>
<li>W ustawieniach TarkovTracker (tarkovtracker.org) zapisz kopię zapasową (eksport) <b>.json</b>.</li>
<li>Otwórz tutaj „Warstwy / udostępnianie”, naciśnij <b>Import z TarkovTracker</b> i wybierz plik (albo go wklej).</li>
<li>Sprawdź podsumowanie, potem <b>Importuj</b>. Możesz wybrać „Tylko dodaj / Nadpisz” i od razu cofnąć.</li>
</ol>
<p>Plik jest przetwarzany tylko w twojej przeglądarce i nigdzie nie jest wysyłany. Zapisuje się w <b>tym samym trybie co profil wybrany</b> w pliku (postęp PvE trafia do PvE; jeśli to inny tryb niż pokazany teraz, zadziała po przełączeniu). Jeśli nie używasz TarkovTracker, pomiń to — ukończenie możesz zaznaczać ręcznie przez ○/✓.</p>
</div></details>

<details><summary>9. Linki do udostępniania</summary><div>
<p>„Utwórz link” kopiuje obecny stan (tryb, wybrane zadania, ukończenia, poziom, własne pinezki, mapa, wybór wyjść) jako adres URL. Znajomy, który go otworzy albo wklei w „Wczytaj kod”, dostanie ten sam stan. Nieudane zadania i ukończone cele nie są udostępniane.</p>
</div></details>

<details><summary>10. Odświeżanie danych i problemy</summary><div><ul>
<li><b>Kopia zapasowa</b>: twój postęp (wybrane zadania, ukończone zadania, poziom, zaznaczenia, własne pinezki itd.) jest zapisany tylko w tej przeglądarce. Przed wyczyszczeniem danych przeglądarki albo przeniesieniem na inny komputer użyj <b>Eksportuj kopię</b> w „Warstwy i udostępnianie”, aby zapisać go do pliku, a potem naciśnij <b>Importuj kopię</b> w nowym miejscu (zastąpi obecne dane zawartością pliku). Jeśli masz postęp, a od 30+ dni nie robisz kopii, u góry lewej kolumny pojawi się małe przypomnienie („Później” ukrywa je na 14 dni).</li>
<li><b>Odśwież dane</b>: naciśnij po wipe'ie albo po dodaniu nowych zadań. Aktualizuje zadania, wyjścia, spawny bossów itd. (odświeża się też samo mniej więcej raz dziennie).</li>
<li>Jeśli dane się nie wczytują: sprawdź połączenie i naciśnij „Odśwież dane”. Jeśli nie da się ich pobrać, używane są dane dołączone do narzędzia i widać „⚠ nieaktualne”.</li>
<li>Mapa jest czarna: serwer obrazów jest zajęty — poczekaj chwilę i przeładuj.</li>
<li>Grafika mapy nie zgadza się z nowym układem (np. Lighthouse): grafika zostaje stara, dopóki tarkov.dev jej nie zaktualizuje; nad mapą pojawia się informacja.</li>
<li>Nazwy zadań, przedmiotów, map i wyjść są po polsku, jak w grze (tłumaczenie tarkov.dev; gdzie go brak — po angielsku).</li>
<li><b>Statystyki</b>: aby wiedzieć, co ulepszać, anonimowo liczymy tylko wizyty, ile razy użyto każdej funkcji i mniej więcej jak długo strona jest otwarta (GoatCounter, bez ciasteczek). Nazwy wybranych zadań, twój postęp i to, co wpisujesz, nigdy nie są wysyłane.</li>
<li>Prośby o funkcje, błędy i opinie możesz wysłać przyciskiem „💬 Wyślij opinię / prośbę” na prawym końcu kart map (albo przyciskiem na dole tego okna).</li>
</ul></div></details>

<details><summary>11. Bezpieczeństwo (obawy o bana?)</summary><div>
<p>To narzędzie to <b>całkowicie oddzielna strona internetowa</b> — zewnętrzna mapa, którą po prostu otwierasz w przeglądarce, tego samego rodzaju co tarkov.dev.</p>
<ul>
<li><b>Nigdy nie dotyka</b> programu gry, jej pamięci, plików ani ruchu sieciowego (bez odczytu, modyfikacji i wstrzykiwania).</li>
<li>Nie przechwytuje ekranu i nie śledzi logów gry. Niczego z gry nie pobiera i nie śledzi twojej pozycji.</li>
<li>Używa tylko <b>publicznych danych i map z tarkov.dev</b> oraz zadań, które wybierzesz. Twój wybór i postęp są zapisane tylko w twojej przeglądarce.</li>
<li>Nic nie trzeba instalować i nie ma funkcji sterujących grą ani jej automatyzujących.</li>
</ul>
<p>Działa zupełnie inaczej niż narzędzia czytające lub zmieniające dane gry (cheaty). Mimo to jest to <b>nieoficjalne narzędzie fanowskie</b>, niezatwierdzone przez Battlestate Games (BSG), więc nie możemy obiecać, że nigdy nic się nie stanie — jeśli masz wątpliwości, sprawdź oficjalny regulamin BSG.</p>
</div></details>

<p class="muted">To narzędzie nigdy nie ingeruje w grę (bez odczytu pamięci i wstrzykiwania). Korzysta z publicznych danych i map tarkov.dev (mapy: CC BY-NC-SA 4.0).</p>`,
  ttModeLabel:"Tryb gry:", ttModePvp:"PvP", ttModePve:"PvE", ttModeSeasonal:"Sezonowy",
  ttSummary:(lv,c,cKnown,f,o,s)=>`Poziom <b>${lv||"-"}</b> / ukończone zadania <b>${c}</b> (rozpoznane tutaj: ${cKnown}) / nieudane <b>${f}</b> / ukończone cele <b>${o}</b> / cele fabularne <b>${s}</b>`,
  storySection:"Fabuła", storyHint:"Lista celów rozdziałów fabuły (bez pinezek na mapie — brak danych o współrzędnych). Opisy są po angielsku, jak w grze.",
  storyNone:"Nie udało się wczytać danych fabuły (naciśnij Odśwież dane).", storyOptional:"opcjonalne",
  storyDoneAll:"Ukończ wszystkie główne cele", storyClear:"Wyczyść wszystko", storyReqLabel:"Wymaga celu fabularnego:",
  ttMerge:"Tylko dodaj (zachowaj moje ukończenia)", ttOverwrite:"Nadpisz (dokładnie jak w TarkovTracker)",
  ttLevelLabel:lv=>`Przenieś też poziom (Poz. ${lv})`,
  ttRun:"Importuj", ttClose:"Zamknij", ttUndoBtn:"Cofnij ostatni import",
  ttDoneMsg:(c,f,o,s)=>`Zaimportowano: ukończone ${c} / nieudane ${f} / cele ${o} / cele fabularne ${s}`,
  ttUndoneMsg:"Przywrócono.",
  failBadge:"✗ nieudane", lockedBadge:"✗ zablokowane",
  failExclusive:(n)=>`To zadanie zostanie oblane, jeśli ukończysz: ${n}`,
  failGenShoot:"Ma warunek porażki związany z zabijaniem określonych celów", failGenStanding:"Może się nie udać zależnie od reputacji u handlarza",
  failGenPlant:"Ma warunek porażki związany z podkładaniem przedmiotów", failGenUse:"Ma warunek porażki związany z użyciem przedmiotów",
  failGenExtract:"Nieudane, jeśli zginiesz lub opuścisz rajd (inaczej niż przez wyjście)", failGenVisit:"Ma warunek porażki", failGenOther:"Ma warunek porażki",
  prepHeader:mjp=>`Lista przed rajdem — ${mjp}`,
  prepEmpty:"Na tej mapie nie potrzebujesz kluczy ani przedmiotów do zebrania (tylko pinezki).",
  prepKeys:"🔑 Klucze do zabrania", prepBring:"📤 Do zabrania (podłożyć/oznaczyć)", prepCollect:"📥 Do znalezienia na miejscu",
  prepHeaderAll:"Lista przed rajdem — wszystkie mapy", prepAllBtn:"Wszystkie mapy", prepOneBtn:"Ta mapa", prepAllTip:"Pokaż, czego potrzebują wszystkie wybrane zadania na wszystkich mapach", prepOneTip:"Wróć do oglądanej mapy",
  prepAnyMap:"Dowolna mapa", prepEmptyAll:"Wybrane zadania nie wymagają kluczy, przedmiotów do zebrania ani wyposażenia.",
  bkNote:"Twój postęp (wybrane i ukończone zadania, poziom itd.) zapisuje się automatycznie tylko w tej przeglądarce. Wyeksportuj go przed przejściem na inne urządzenie lub wyczyszczeniem danych przeglądarki.",
  bkRemind:d=>`Nie robisz kopii od ${d}+ dni. Zapisać postęp teraz?`, bkRemindNow:"Eksportuj", bkRemindLater:"Później",
  bkExportBtn:"Eksportuj kopię", bkImportBtn:"Importuj kopię", bkExported:n=>`Wyeksportowano kopię (pozycji: ${n})`, bkBad:"Tego pliku nie da się odczytać jako kopii zapasowej.", bkConfirm:n=>`Zaimportować kopię (pozycji: ${n})? Obecny wybór, ukończone zadania, poziom, zaznaczenia, własne pinezki itd. zostaną zastąpione zawartością pliku.`, bkReplaced:"Zaimportowano. Przeładowywanie…",
  collapseBtn:"◀ Większa mapa", collapseTip:"Zwiń lewy panel, by powiększyć mapę (gdy jest zwinięty, ▶ w lewym górnym rogu mapy go otwiera)", reopenTip:"Otwórz lewy panel",
  pickTitle:"Wybierz zadania", pkCollapseTip:"Zwiń tylko tę kolumnę (Wybierz zadania)", pkReopenBtn:"🗂 Wybierz zadania", pkReopenTip:"Otwórz kolumnę Wybierz zadania",
  filtSection:"Filtry i wyszukiwanie", settingsSection:"Ustawienia (warstwy, udostępnianie, kopia)", selEmpty:"Tutaj pojawią się wybrane zadania z oznaczeniami A / B / C… (wybierz zadania w kolumnie „Wybierz zadania” po prawej).", chipTip:l=>`Pinezka na mapie „${l}”`,
  mapSumFoldTip:"Kliknij, aby zwinąć / rozwinąć",
  mapSumTitle:"Podsumowanie map (wybrane zadania)", mapSumBest:"Najlepsza", mapSumCount:(t,o)=>`${t} ${pl(t,"zadanie","zadania","zadań")} · ${o} ${pl(o,"cel","cele","celów")}`, mapSumDoable:"Mapy z największą liczbą zadań, które możesz przyjąć teraz:",
  prepGear:"🎯 Wymagania broni i wyposażenia", gearWeapons:"Broń", gearMods:"Wymagane części", gearWear:"Załóż", gearNotWear:n=>`Nie zakładaj wskazanego wyposażenia (${n} szt.)`, gearMore:n=>`+${n} więcej`,
  pinPromptAdd:"Notatka do pinezki (np. uwaga na snajpera / miejsce odpoczynku)",
  pinPromptEdit:"Edytuj notatkę",
  pinPopupMemo:"Notatka", pinPopupEmpty:"<span style='color:#888'>(brak)</span>",
  pinEdit:"Edytuj", pinDelete:"Usuń",
  mapLoading:jp=>`Wczytywanie: ${jp}…`,
  mapAttribution:'Mapa: <a href="https://tarkov.dev" target="_blank">tarkov.dev</a> (CC BY-NC-SA)',
  lighthouseArtCredit:'Grafika mapy Lighthouse: <a href="https://reemr.se/Lighthouse/" target="_blank">re3mr.com</a> (CC BY-NC-SA 4.0)',
  fetchingFirst:"Pobieranie najnowszych danych z json.tarkov.dev… (pierwsze wczytanie chwilę trwa)",
  fetchingData:"Pobieranie najnowszych danych z json.tarkov.dev…",
  fetchFailed:msg=>`<div class="err">Nie udało się pobrać danych.<br>${msg}<br><br>Sprawdź połączenie i naciśnij „Odśwież dane”.</div>`,
  fetchFailedAlert:msg=>`Nie udało się pobrać: ${msg}`,
  staleData:"⚠ Nieaktualne: ", updatedData:"Aktualizacja: ",
  leafletLoadError:'<div class="err">Nie udało się wczytać biblioteki mapy (Leaflet).<br>Sprawdź połączenie z internetem i przeładuj stronę.</div>',
  noTaskData:"Brak danych o zadaniach",
  bodyHead:"Głowa", bodyThorax:"Klatka piersiowa", bodyStomach:"Brzuch", bodyLeftArm:"Lewa ręka", bodyRightArm:"Prawa ręka", bodyLeftLeg:"Lewa noga", bodyRightLeg:"Prawa noga",
  condShoot:parts=>"Trafienia: " + parts.join("/"),
  condDistIn:v=>`z odległości do ${v} m`, condDistOut:v=>`z odległości ponad ${v} m`,
  condWeaponOnly:n=>`tylko określona broń (${n})`, condWearing:"wymagane określone wyposażenie", condNotWearing:"zdejmij określone wyposażenie",
  condTimeRange:(a,b)=>`${a}:00–${b}:00`, condKillCount:n=>`Zabójstwa×${n}`,
  attrErgo:"Ergonomia", attrAccuracy:"Celność (MOA)", attrDurability:"Wytrzymałość", attrRecoilV:"Odrzut pion.",
  attrRecoilH:"Odrzut poz.", attrWeight:"Waga", attrEffDist:"Zasięg skut.", attrMagCap:"Pojemność mag.", attrMuzzleV:"Prędkość wylotowa",
  objVisit:"Odwiedź miejsce", objFindItem:"Znajdź przedmiot", objFindQuestItem:"Znajdź przedmiot zadania",
  objGiveItem:"Oddaj przedmiot", objGiveQuestItem:"Oddaj przedmiot zadania", objPlantItem:"Podłóż przedmiot",
  objPlantQuestItem:"Podłóż przedmiot zadania", objMark:"Oznacz znacznikiem", objShoot:"Wyeliminuj (zabij)",
  objExtract:"Wyjdź z lokacji", objBuildWeapon:"Złóż broń", objUseItem:"Użyj przedmiotu",
  objSellItem:"Wystaw na pchlim targu", objExperience:"Spełnij warunek", objSkill:"Osiągnij poziom umiejętności",
  objTraderLevel:"Poziom lojalności handlarza", objTraderStanding:"Reputacja u handlarza",
  objTaskStatus:"Status innego zadania", objDialogue:"Dialog", objGlobalVariable:"Flaga postępu",
  };
})();
