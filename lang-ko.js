/* 한국어 인터페이스. 퀘스트·아이템·맵·탈출구 등의 이름은 tarkov.dev의 번역을 사용합니다(게임 내 표기와 같음. 번역이 없는 것은 게임에서도 영어).
   화면 문구는 개발자가 기계 번역을 바탕으로 작성했습니다. 어색한 부분은 「의견 보내기」의 「🌐 번역 수정」으로 알려 주세요.
   빠진 문구는 영어로 표시됩니다. */
(function(){
  window.__STR_KO__ = {
  appTitle:"타르코프 퀘스트 맵",
  refresh:"데이터 업데이트", traderAll:"▼ 상인 (전체)", mapAll:"▼ 맵 (전체)",
  followCurrentMap:"[현재 맵 따라가기]", searchPlaceholder:"퀘스트 이름으로 검색…",
  clearSel:"선택 해제", kappaOnly:"카파 필요만 ★", lvLabel:"Lv", showDone:"완료한 퀘스트도 표시",
  supportLink:"☕ Ko-fi로 도구 응원하기", supportBtn:"☕ 응원하기",
  supportBtnTitle:"이용해 주셔서 감사합니다! 이 도구는 앞으로도 무료입니다. 시간을 아끼는 데 도움이 되었다면 Ko-fi 후원은 큰 힘이 됩니다 — 물론 선택 사항입니다.",
  supportBtnSub:"이용해 주셔서 감사합니다 (선택 사항)",
  layersSection:"표시 레이어 / 공유", optTransit:"지역 이동 (다른 맵으로)",
  hintExitBelow:"※ 탈출구는 위의 「탈출구」 항목에서 고릅니다", optHazard:"위험 지역", optLock:"잠긴 문",
  optSwitch:"스위치", optBoss:"보스", optSpawn:"스폰", optIcons:"아이콘",
  optRoute:"경로 번호 (①②③…)", shareCreateBtn:"공유 링크 만들기", shareLoadBtn:"코드 불러오기",
  exitSection:"탈출구", hintFactionSelect:"이번 출격 유형을 선택하세요", showAll:"모두 표시", hideAll:"모두 숨기기",
  exitHint:(shown,total)=>`탈출구 ${total}곳 중 ${shown}곳 표시 중`, noExitData:"이 맵에는 탈출구 데이터가 없습니다",
  brightHead:"밝기 / 대비", brightToggleTitle:"열기 / 닫기 (최소화)",
  brightness:"밝기", brightnessTitle:"맵의 밝기", contrast:"대비", contrastTitle:"맵의 대비",
  reset:"초기화", raidStart:"레이드 시작",
  guideTitle:"처음 오셨나요?",
  guideStep1:"오른쪽 열 <b>「퀘스트 고르기」</b>에서 상인이나 맵으로 걸러 이번 레이드에서 할 퀘스트에 체크하세요. 왼쪽 「선택 중」에 지도의 핀과 같은 A·B·C… 표시와 함께 나열됩니다.",
  guideStep2:"위쪽 탭으로 맵을 바꿉니다. 지도 위 핀에 마우스를 올리면 퀘스트 이름이 나옵니다.",
  guideStep3:"왼쪽 <b>탈출구</b> 항목에서 출격 유형(PMC/Scav)을 고르고, 이번에 쓸 탈출구에 체크하세요 → 그 탈출구만 지도에 표시됩니다(초록=PMC / 파랑=Scav / 주황=공용).",
  guideStep4:"이 창을 보조 모니터로 옮기고 <b>F11</b>로 전체 화면으로 하면 보기 편합니다.",
  guideStep5:"와이프 후나 새 퀘스트가 추가되면 오른쪽 열의 <b>데이터 업데이트</b>를 눌러 주세요.",
  guideStep6:"진행 상황(선택한 퀘스트, 완료, 레벨 등)은 <b>이 브라우저에 자동으로 저장</b>됩니다. 다른 PC로 옮기거나 브라우저 데이터를 지우기 전에는 왼쪽 「설정」의 <b>백업 내보내기</b>로 저장해 두세요.",
  guideM1:"오른쪽 위의 <b>☰ 메뉴</b>를 열고 <b>「퀘스트 고르기」</b>까지 내려가 상인이나 맵으로 걸러 이번 레이드의 퀘스트에 체크하세요.",
  guideM2:"메뉴 바깥(어두운 부분)을 누르면 지도로 돌아갑니다 — 고른 퀘스트가 핀으로 표시됩니다. 핀을 누르면 퀘스트 이름이 나옵니다.",
  guideM3:"위쪽 탭을 옆으로 밀어 맵을 바꿉니다. 이번에 쓸 탈출구는 메뉴의 <b>탈출구</b>에서 고릅니다.",
  guideM4:"진행 상황(선택한 퀘스트, 완료 등)은 <b>이 브라우저에 자동으로 저장</b>됩니다.",
  taskListLink:"📋 전체 퀘스트 목록 (영어)", taskLinkMissing:"이 퀘스트는 현재 모드의 데이터에 없습니다 (PvP / PvE를 바꿔 보세요).",
  guideStart:"시작하기", loadingInitial:"데이터를 불러오는 중…",
  multipleOrNone:"여러 곳 / 없음", doneBadge:"✓ 완료 (나)", markDoneTitle:"완료로 표시",
  searchPrefix:mn=>`검색: ${mn}`, searchResults:"검색 결과", noMatch:"일치하는 항목 없음", selectedHeader:"선택 중",
  filterHint:"위의 「상인」이나 「맵」으로 거르면 퀘스트가 가나다순으로 나옵니다. 이름으로 바로 검색할 수도 있습니다.",
  availableNow:"▶ 지금 받을 수 있는 퀘스트", noQuestsToShow:"표시할 퀘스트가 없습니다 (필터를 확인하세요)",
  labelSep:" / ",
  selCount:n=>`${n}개 퀘스트 선택 중`,
  progressDone:(dn,total)=>`완료 <b>${dn}</b>/${total}`,
  progressKappa:(kapDn,kapAll)=>` ・ 카파 필요 <b>${kapDn}</b>/${kapAll}`,
  progressLK:(lkDn,lkAll)=>` ・ Lightkeeper <b>${lkDn}</b>/${lkAll}`,
  unknownName:"(알 수 없음)", kindPMC:"PMC", kindScav:"Scav", kindShared:"공용", sharedGlyph:"공",
  kindCoop:"협동 (둘 다 필요)", coopListNote:"🟠 「협동」 = PMC와 Scav가 함께 있어야만 쓸 수 있습니다",
  floorNote:floor=>`※ 이 탈출구는 ${floor}에 있습니다 (지금 보고 있는 층이 아님)`,
  extractPopup:(name,kind,fac)=>`<b>탈출구: ${name}</b><br>종류: ${kind} (이번 출격: ${fac==="scav"?"Scav":"PMC"})`,
  transitLabel:"지역 이동", transitPopup:desc=>`<b>지역 이동</b><br>${desc}`,
  hazardSniper:"스나이퍼 Scav 사격 구역", hazardMinefield:"지뢰밭", hazardOther:"위험 지역",
  dangerousAreaPopup:label=>`<b>${label}</b><br><span style="color:#888">위험한 구역입니다</span>`,
  lockedDoor:"잠긴 문", lockType:"종류", needsPower:"※ 전원이 필요합니다", lockGlyph:"잠", routeLabel:"경로", floorLabel:"층:",
  lockPopup:(type,power)=>`<b>잠긴 문</b><br>종류: ${type}${power?"<br>※ 전원이 필요합니다":""}`,
  switchLabel:"스위치", switchPopup:name=>`<b>스위치</b><br><span style="color:#555">${name}</span>`,
  spawnChanceApprox:pct=>`스폰 확률 약 ${pct}%`,
  spawnPoint:"스폰 지점", sideOther:x=>x,
  optionalTag:" (선택)", conditionsLabel:"조건: ",
  noCoordHeader:"이 맵에서 좌표가 없는 목표 (위키를 참고하세요)",
  noQuestSelected:"선택한 퀘스트가 없습니다",
  legendSniper:"스나이퍼 사격 구역", legendMinefield:"지뢰밭", legendOtherHazard:"기타 위험",
  legendLockedDoor:"잠긴 문", legendSwitch:"스위치", legendBoss:"보스 스폰",
  legendPmcSpawn:"PMC 스폰", legendScavSpawn:"Scav 스폰", legendRoute:"— — 경로 (번호 순서)",
  legendToggle:open=>`범례 ${open?"▲":"▼"}`,
  legendExitLine:fac=>`탈출구 (이번 출격: <b>${fac==="scav"?"Scav":"PMC"}</b>): <span class="dot" style="background:var(--ok)"></span>PMC&nbsp; <span class="dot" style="background:var(--scav)"></span>Scav&nbsp; <span class="dot" style="background:var(--shared)"></span>협동 (둘 다 필요) — 「탈출구」에서 체크한 곳만 표시됩니다. 층 배지 = 다른 층에 있는 탈출구`,
  legendMarkerLine:'<span class="dot" style="background:#888"></span>원=퀘스트 목표 (A/B.. 글자)　📌=내 메모 (오른쪽 클릭으로 추가)',
  legendHazardLine:"점선 테두리=위험 지역. 들어가면 위험합니다",
  legendColorLine:"맵 색 (tarkov.dev 기준): 짙은 회색=실내 / 빗금=계단・경사로 / 하늘색=물 / 점선=맵 경계",
  legendLhTitle:"맵 아이콘 (re3mr.com 지도 그림)",
  legendLhAiScav:"AI Scav 스폰", legendLhRogues:"Rogue 스폰", legendLhGoons:"Goons 순찰 구역",
  legendLhPmcSpawn:"PMC 스폰", legendLhCache:"은닉처", legendLhRogueCache:"Rogue 은닉처",
  legendLhBoss:"보스 (Zryachiy)", legendLhBossGuard:"보스 호위", legendLhBtrStop:"BTR 정류장",
  condClimb:items=>`${items} 소지 (인벤토리 어디든 OK) + 방탄복 벗기`,
  condNoBag:"배낭 벗기 (크기와 상관없이 배낭 불가)",
  condHandIn:item=>`탈출구에서 ${item} 건네기`,
  condPay:amt=>`${amt} 지불 (1인당, 최대 4명, 레이드당 1회)`,
  condFlare:item=>`신호 구역에서 초록 신호탄 발사 (${item})`,
  condD2:"지휘 사무실의 레버로 전원을 켠 뒤 문 버튼 누르기",
  condBunker:"바깥 레버로 발전기를 켜고 약 4분 안에 탈출 (경보, Raider 출현)",
  condSaferoom:"변전소에서 전원을 복구한 뒤 Object #11SR 카드로 들어가 문 닫기 (1회용)",
  condLabElev:a=>`전기 박스 사용 (${a}); Raider가 나올 수 있음`,
  condSewage:"제어판으로 물 빼기 (약 80초)",
  condLabGate:a=>`제어판 사용 (${a}). 매 레이드 열리지는 않으며 경보가 울립니다. TerraGroup Labs 출입 카드(노랑)로 미리 경보를 끌 수 있음 (선택)`,
  condTrainReserve:"레이드 후반(남은 시간 약 20〜10분)에 도착해 약 7.5분 머무름",
  condTrain:"정해진 시간에 와서 잠깐만 머무는 열차",
  condWayUp:"레이드 시작 15분 후에 열림",
  condVexLh:"요금 미확인. 차가 매 레이드 있지는 않음. 위치는 지도 그림을 보고 손으로 배치함",
  tcondLabCard:"TerraGroup Labs 출입 카드 1장 필요 (1회용)",
  tcondLabrys:"Labrys 출입 카드 필요 (Resort 서관 지하의 문)",
  tcondTerminal:"게임 시간 21:00〜6:00만 가능. 스토리 진행과 출입 카드(소모)도 필요",
  tcondSudak:"Sudak-Tudak 선박 수리 키트 1개 필요 (1회용)",
  transitTo:d=>`지역 이동 → ${d}`,
  transitRules:"• 레이드 시작 1분 후부터 사용 가능<br>• 사용하면 다른 모든 탈출구가 막힘<br>• 구역 안에 20초 머물면 이동 (벗어나면 30초로 초기화)",
  transitGo:d=>`이 맵 열기: ${d}`,
  transitUnsupported:"이 목적지 맵은 도구에서 지원하지 않습니다",
  condLbl:k=>({climb:"RR+끈", nobag:"배낭 불가", item:"건네기", card:"카드", tool:"도구", flare:"신호탄", pay:"유료", power:"전원", timer:"시간"})[k],
  condNoArmorRow:"방탄복 벗기", condNoBagRow:"배낭 벗기", condFlareRow:"신호 구역에서 발사 (초록만)", condPopupHead:"조건",
  exitCondNote:"배지가 붙은 탈출구·지역 이동에는 조건이 있습니다 (마우스를 올리면 보임). 쓸 곳만 체크하면 필요한 것이 레이드 전 확인에 나옵니다.",
  prepExit:"🚪 사용할 탈출구·지역 이동의 조건",
  legendCondLine:"탈출구·지역 이동 왼쪽 위의 배지 = 조건 있음 (클릭하면 자세히):",
  prereqLabel:"선행: ", nextLabel:"다음: ", andMore:"개 더",
  shareCopiedAlert:"링크를 복사했습니다. 친구에게 보내 주세요.",
  sharePromptCopy:"이 링크를 복사해 친구에게 보내 주세요:",
  sharePromptLoad:"코드(#s= 뒤) 또는 링크 전체를 붙여 넣으세요:",
  shareLoadedAlert:"공유 데이터를 불러왔습니다.",
  shareLoadFailedAlert:msg=>`불러오기 실패: ${msg}`,
  ttBtn:"TarkovTracker에서 가져오기", ttTitle:"TarkovTracker 진행 상황 가져오기",
  ttHow:"<ol><li>TarkovTracker(tarkovtracker.org) 설정에서 진행 상황의 <b>백업(내보내기)</b>을 JSON으로 저장합니다</li><li>아래에서 그 파일을 고르거나 내용을 붙여 넣습니다</li></ol>완료 / 실패한 퀘스트, 달성한 목표, 레벨을 가져올 수 있습니다.",
  ttPrivacy:"🔒 파일은 이 브라우저 안에서만 처리되며 어디에도 전송되지 않습니다.",
  ttPasteLabel:"또는 JSON 내용을 붙여 넣기:",
  ttErrJson:"JSON으로 읽을 수 없습니다. 백업 파일이 맞는지 확인해 주세요.",
  ttErrFormat:"TarkovTracker 백업 파일이 아닙니다.",
  ttErrEmpty:"가져올 수 있는 진행 상황을 찾지 못했습니다.",
  modeLabel:"게임 모드", modePvp:"PvP", modePve:"PvE", modeSeasonal:"시즌",
  modeHintPvp:"일반 PvP 캐릭터입니다. 진행 상황(완료한 퀘스트, 레벨 등)은 모드마다 따로 저장됩니다.",
  modeHintPve:"PvE 캐릭터입니다. PvE의 퀘스트·탈출구·보스로 바뀝니다 (진행 상황은 PvP와 별도).",
  modeHintSeasonal:"시즌 PvP 캐릭터입니다 (시즌마다 와이프). 일반 퀘스트는 PvP와 같은 데이터를 씁니다. 시즌 전용 퀘스트(Kord Breach)는 아직 지원하지 않습니다. 진행 상황은 따로 저장됩니다.",
  ttTarget:(n,cur)=>cur ? `가져올 곳: <b>${n}</b> (지금 보고 있는 모드)` : `가져올 곳: <b>${n}</b> (지금 보고 있는 모드와 다름; 모드를 바꾸면 반영됨)`,
  ttOtherMode:(n)=>`「${n}」 모드에 저장했습니다. 위의 모드 버튼으로 ${n}(으)로 바꾸면 보입니다.`,
  ttEmptyProfile:"이 대상에는 진행 상황이 없습니다. 위의 「가져올 모드」에서 진행 상황이 있는 모드를 고르세요.",
  menuBtn:"☰ 메뉴", closeMenu:"닫기",
  jumpTitle:"지도에서 보기 (퀘스트를 선택하고 알맞은 맵과 층의 핀으로 이동)", jumpNoPins:"표시할 핀이 없습니다 (좌표가 없거나 이미 완료)",
  helpBtn:"도움말", helpTitle:"사용법", helpClose:"닫기",
  fbLink:"💬 의견·요청 보내기", fbSub:"아이디어와 버그 제보 환영 (익명 가능)", fbBtn:"의견 / 버그 제보", fbTitle:"의견 / 버그 제보",
  fbIntro:"원하는 기능, 불편한 점, 발견한 버그를 알려 주세요. 보내신 내용은 <b>개발자만 볼 수 있습니다</b> (공개되지 않음). 로그인·이름·이메일은 필요 없습니다. 개인 정보는 적지 말아 주세요. 답장을 드리지 못할 수도 있습니다.",
  fbTypeIdea:"💡 기능 요청", fbTypeBug:"🐞 버그", fbTypeOther:"💬 기타", fbTypeTr:"🌐 번역 수정", fbMsgPhTr:"예: 「○○」는 「△△」가 더 자연스럽습니다 (가능하면 어디에 나오는지도)", installBtn:"📲 앱으로 설치", installTip:"주소창 없이 자기 창으로 열립니다 — 보조 모니터에 두기 편합니다 (Chrome / Edge)", installDone:"설치했습니다. 바탕화면이나 시작 메뉴에서 열 수 있습니다.",
  fbMsgLabel:"내용", fbMsgPh:"예: ○○ 퀘스트의 핀 위치가 다릅니다 / △△ 기능이 있으면 좋겠습니다",
  fbInfoLabel:"함께 보내지는 정보 (확인할 수 있음)",
  fbCopy:"내용 복사", fbSend:"보내기", fbCopied:"복사했습니다.", fbEmpty:"내용을 입력해 주세요.",
  fbSent:"보냈습니다. 의견 감사합니다!", fbSending:"보내는 중…", fbWait:"잠시 후에 다시 보내 주세요.", fbSendErr:"보내지 못했습니다. 연결을 확인하거나 아래의 「양식 직접 열기」를 이용해 주세요.", fbDirect:"양식 직접 열기",
  guideMore:"자세한 사용법은 사이드바 위쪽의 「도움말」 버튼으로 언제든 볼 수 있습니다.",
  helpBody:`
<details open><summary>1. 빠른 시작</summary><div><ol>
<li>왼쪽 위에서 플레이하는 <b>게임 모드</b>(PvP / PvE / 시즌)를 고릅니다.</li>
<li>사이드바에서 <b>상인</b>이나 <b>맵</b>으로 거르고, <b>이번 레이드의 퀘스트</b>에 체크합니다.</li>
<li>위쪽 탭으로 맵을 바꿉니다. 선택한 퀘스트의 목표가 <b>핀</b>으로 표시됩니다. 핀에 마우스를 올리면 설명, 조건, 앞뒤 퀘스트가 나옵니다.</li>
<li><b>탈출구</b> 항목에서 이번에 쓸 탈출구에 체크합니다 (→ 5.).</li>
<li>창을 보조 모니터로 옮기고 <span class="k">F11</span>로 전체 화면으로 합니다.</li>
</ol></div></details>

<details><summary>2. 게임 모드 (PvP / PvE / 시즌)</summary><div>
<p>게임에서는 모드마다 다른 캐릭터이므로, <b>도구도 진행 상황을 모드별로 저장</b>합니다 (완료/실패한 퀘스트, 레벨, 선택한 퀘스트, 고른 탈출구). 모드를 바꾸면 페이지가 다시 읽힙니다.</p>
<ul>
<li><b>PvP</b>: 일반 PvP 캐릭터.</li>
<li><b>PvE</b>: PvE의 퀘스트([PVE ZONE]), 탈출구, 보스, 스폰으로 바뀝니다.</li>
<li><b>시즌</b>: 시즌 캐릭터 (와이프 있음). 전용 데이터가 없어서 일반 퀘스트는 PvP 데이터를 씁니다. <b>시즌 전용 퀘스트(Kord Breach)는 지원하지 않습니다</b>.</li>
</ul></div></details>

<details><summary>3. 지도 보는 법</summary><div><ul>
<li><b>층 버튼</b> (지도 위): 여러 층이 있는 맵에서 층을 바꿉니다. 위층에서는 아래층이 참고용으로 흐리게 보입니다. 버튼의 숫자는 그 층에 있는 내 핀의 수입니다.</li>
<li><b>핀의 색과 글자</b>: 퀘스트마다 색과 글자(A, B, C…)가 정해져 있고, 퀘스트 목록과 같습니다.</li>
<li><b>📍 버튼</b> (각 퀘스트 줄): 퀘스트를 선택하고, 필요하면 맵과 층을 바꿔 그 핀으로 이동합니다 (주위에 고리가 반짝임).</li>
<li><b>범례</b>: 왼쪽 아래의 「범례 ▼」에서 아이콘과 색을 설명합니다.</li>
<li><b>레이어</b>: 「표시 레이어 / 공유」에서 지역 이동, 위험 지역, 잠긴 문, 스위치, 보스, 스폰을 켜고 끕니다.</li>
<li><b>경로 번호</b>: 켜면 가장 짧은 경로 순서로 핀에 ①②③…이 붙고 선으로 이어집니다.</li>
<li><b>내 핀</b>: 지도를 <b>오른쪽 클릭</b>하면 메모가 달린 핀을 추가합니다 (핀을 클릭하면 수정/삭제).</li>
<li><b>밝기 / 대비</b>: 지도 왼쪽 위의 슬라이더.</li>
</ul></div></details>

<details><summary>4. 퀘스트 목록의 표시와 완료</summary><div><ul>
<li><span class="k">★</span> … 카파 컨테이너에 필요한 퀘스트. 「카파 필요만 ★」으로 그것만 볼 수 있습니다.</li>
<li><b>A / B / C 배지</b>: 「선택 중」(왼쪽 위)의 퀘스트마다 핀과 같은 색·글자의 배지가 붙습니다. 배지를 비교하거나 핀에 마우스를 올려 퀘스트 이름을 확인하세요.</li>
<li><b>지도를 넓게</b>: 왼쪽 위의 「◀ 지도를 넓게」로 왼쪽 패널 전체를 접어 지도를 화면 가득 씁니다. 접은 뒤에는 지도 왼쪽 위의 <b>▶</b>로 다시 엽니다 (기억됨).</li>
<li><b>두 열</b>: 왼쪽은 「선택 중 → 레이드 전 확인 → 탈출구 → 스토리 → 설정」, 오른쪽은 「퀘스트 고르기」(필터·검색 → 퀘스트 목록). 오른쪽 열만 접을 수도 있습니다 (접은 뒤에는 지도 위의 「🗂 퀘스트 고르기」로 다시 엶). 좁은 화면에서는 위아래로 쌓입니다.</li>
<li><b>맵별 요약</b>: 선택한 퀘스트 아래에 맵마다 퀘스트 수와 목표 수가 나옵니다. 가장 많은 맵에는 「추천」 배지가 붙고, 줄을 클릭하면 그 맵으로 바뀝니다. 레벨이나 완료한 퀘스트를 입력하면, 지금 받을 수 있는 퀘스트가 많은 맵도 한 줄로 나옵니다. 맵 탭의 숫자는 그 맵에 있는 선택한 퀘스트의 목표 수입니다 (좌표가 없는 것 포함).</li>
<li><span class="k">○ / ✓</span> … 클릭으로 완료 표시 / 되돌리기. 완료한 퀘스트는 목록에서 자동으로 사라지며, 「완료한 퀘스트도 표시」로 다시 볼 수 있습니다.</li>
<li><span class="k">⚠</span> … 실패 조건이 있는 퀘스트 (마우스를 올리거나 선택하면 보임). <b>서로 배타적인 퀘스트</b>(하나를 끝내면 다른 쪽이 실패)는 그 이름도 함께 나옵니다.</li>
<li><span class="k">✗ 배타로 불가</span> … 배타적인 상대 퀘스트를 이미 끝내서 더는 받을 수 없는 퀘스트. 목록과 「지금 받을 수 있는 퀘스트」에서 숨겨집니다.</li>
<li><span class="k">✗ 실패</span> … 실패한 퀘스트 (TarkovTracker에서 가져올 때 표시됨). 목록과 「지금 받을 수 있는 퀘스트」에서 숨겨집니다.</li>
<li><b>Lv</b>에 레벨을 넣으면 「<b>▶ 지금 받을 수 있는 퀘스트</b>」에 선행 퀘스트를 끝냈고 레벨 조건도 맞는 퀘스트가 나옵니다.</li>
<li>협동 플레이에서는 <b>직접 선택한</b> 퀘스트나 <b>공유 링크로 받은</b> 퀘스트는 완료해도 「✓ 완료」 배지를 달고 계속 보입니다.</li>
</ul></div></details>

<details><summary>5. 탈출구 고르기</summary><div>
<p>「탈출구」 항목에서 먼저 <b>PMC 또는 Scav</b>를 고르고, 이번에 쓸 탈출구에 체크하세요 — 지도에는 <b>체크한 곳만</b> 나옵니다. 「모두 표시 / 모두 숨기기」 버튼도 있습니다. 색: 초록 = PMC, 파랑 = Scav, 주황 = 공용. PvE 모드에서는 PvE의 탈출구가 나옵니다.</p>
<p><b>조건이 있는 탈출구</b>에는 마커 왼쪽 위와 목록에 배지가 붙습니다 (🧗 Red Rebel 얼음도끼 + 파라코드, 방탄복 불가 / 🎒 배낭 불가 / 📜 아이템 건네기 / 💳 카드 / 🎆 초록 신호탄 / 💰 유료 / ⚡ 전원이나 제어판 / ⏱️ 시간 제한). 마우스를 올리면 (휴대폰은 누르면) 자세히 나옵니다. 쓸 탈출구만 체크하면 필요한 것이 레이드 전 확인의 「🚪 사용할 탈출구의 조건」에 나옵니다. 요금과 건넬 아이템은 tarkov.dev 데이터를 쓰고, 나머지는 확인된 정보만 손으로 넣었습니다.</p>
<p><b>지역 이동</b>(보라색 T)은 기본으로 표시됩니다 (「레이어」에서 숨길 수 있음). 클릭하면 목적지, 조건, 주요 규칙과 「이 맵 열기」 버튼이 나옵니다. 카드나 아이템이 필요한 지역 이동에는 같은 배지(💳 / 🔧 / ⏱️)가 붙습니다. 지역 이동은 「탈출구」 목록 끝에도 나오며, 쓸 곳만 체크하면 필요한 카드나 아이템이 레이드 전 확인에 나옵니다.</p>
</div></details>

<details><summary>6. 레이드 전 확인</summary><div>
<p>「레이드 전 확인」 패널에는 선택한 퀘스트에 필요한 것이 나옵니다. 각 줄의 체크는 저장됩니다 (「초기화」로 지움).</p>
<ul><li>🔑 가져갈 열쇠 / 📤 가져가서 설치·표시할 아이템 / 📥 레이드에서 모을 아이템 (FiR = 레이드에서 획득) / 🎯 무기·장비 조건 (쓸 무기, 필요한 부품, 착용할 장비 — 많으면 마우스를 올려 전체 목록 보기)</li></ul>
<p>제목 줄의 <b>「모든 맵」</b>을 누르면 선택한 퀘스트에 필요한 것을 모든 맵에 걸쳐 한 목록으로 봅니다 (수량은 합산, 아이템마다 맵 표시). 「이 맵」으로 돌아갑니다.</p>
<p>지도 위의 <b>레이드 타이머</b>는 맵의 제한 시간을 거꾸로 셉니다 (5분 남으면 노랑, 2분 남으면 빨강).</p>
</div></details>

<details><summary>7. 스토리 챕터</summary><div>
<p>상인 퀘스트 외에 스토리 챕터(Tour / Falling Skies / Batya / The Unheard / Blue Fire / They Are Already Here / Accidental Witness / The Labyrinth / The Ticket / Boreas)의 <b>목표 체크리스트</b>가 있습니다. 사이드바의 <b>「스토리」</b>를 열면 챕터별 목표가 보입니다.</p>
<ul>
<li>목표에 체크해 진행 상황을 기록합니다 (모드별). 「주요 목표 모두 완료」, 「모두 지우기」 버튼도 있습니다.</li>
<li>스토리 목표는 <b>좌표 데이터가 없어서 지도에 핀이 나오지 않습니다</b>. 설명은 영어입니다.</li>
<li>스토리 목표가 필요한 상인 퀘스트에는 <span class="k">📖</span> 표시가 붙습니다 (아직이면 조건이 나오고, 달성하면 ✓).</li>
<li>TarkovTracker에서 가져오면 완료한 챕터도 함께 들어옵니다.</li>
</ul></div></details>

<details><summary>8. TarkovTracker에서 가져오기</summary><div>
<p>이미 TarkovTracker로 진행 상황을 관리하는 분은 완료·실패한 퀘스트, 달성한 목표, 레벨을 한 번에 가져올 수 있습니다.</p>
<ol>
<li>TarkovTracker(tarkovtracker.org) 설정에서 백업(내보내기)을 <b>.json</b>으로 저장합니다.</li>
<li>여기서 「표시 레이어 / 공유」를 열고 <b>TarkovTracker에서 가져오기</b>를 눌러 파일을 고릅니다 (또는 붙여 넣기).</li>
<li>요약을 확인하고 <b>가져오기</b>를 누릅니다. 「추가만 / 덮어쓰기」를 고를 수 있고, 바로 되돌릴 수도 있습니다.</li>
</ol>
<p>파일은 브라우저 안에서만 처리되며 어디에도 전송되지 않습니다. 파일에서 고른 <b>프로필과 같은 모드</b>에 저장됩니다 (PvE 진행은 PvE로; 지금 보는 모드와 다르면 모드를 바꿀 때 반영됨). TarkovTracker를 쓰지 않는다면 무시해도 됩니다 — ○/✓로 직접 완료를 표시할 수도 있습니다.</p>
</div></details>

<details><summary>9. 공유 링크</summary><div>
<p>「공유 링크 만들기」는 지금 상태(모드, 선택한 퀘스트, 완료, 레벨, 내 핀, 맵, 고른 탈출구)를 URL로 복사합니다. 친구가 그 링크를 열거나 「코드 불러오기」에 붙여 넣으면 같은 상태가 됩니다. 실패한 퀘스트와 달성한 목표는 공유되지 않습니다.</p>
<p><b>𝕏에 공유</b>: 선택한 퀘스트(맵 이름과 개수)로 짧은 X 게시물 화면을 엽니다. 올리기 전에 글은 자유롭게 고칠 수 있습니다.</p>
<p><b>📺 방송용 오버레이</b>: OBS 등 방송 화면 위에 겹칠 수 있는 배경이 투명한 화면입니다. 현재 맵에서 선택한 퀘스트의 목표만 나옵니다. 버튼을 누르면 나오는 안내대로 URL을 OBS의 「브라우저」 소스에 붙여 넣으세요. 같은 브라우저의 다른 창으로 열면 선택을 바꿀 때마다 저절로 바뀝니다.</p>
</div></details>

<details><summary>10. 데이터 업데이트와 문제 해결</summary><div><ul>
<li><b>백업</b>: 진행 상황(선택한 퀘스트, 완료, 레벨, 체크, 내 핀 등)은 이 브라우저에만 저장됩니다. 브라우저 데이터를 지우거나 PC를 옮기기 전에 「표시 레이어 / 공유」의 <b>백업 내보내기</b>로 파일로 저장하고, 새 곳에서 <b>백업 가져오기</b>를 누르세요 (지금 데이터가 파일 내용으로 바뀝니다). 진행 상황이 있는데 30일 넘게 백업하지 않았다면 왼쪽 열 위쪽에 작은 알림이 나옵니다 (「나중에」로 14일 숨김).</li>
<li><b>데이터 업데이트</b>: 와이프 후나 새 퀘스트가 나오면 누르세요. 퀘스트, 탈출구, 보스 스폰 등을 새로 받습니다 (하루에 한 번쯤은 자동으로도 업데이트됨).</li>
<li>데이터가 안 읽힐 때: 연결을 확인하고 「데이터 업데이트」를 누르세요. 그래도 안 되면 함께 들어 있는 데이터를 쓰고 「⚠ 오래됨」이라고 표시합니다.</li>
<li>지도가 검게 나올 때: 이미지 서버가 붐비는 것입니다 — 잠시 기다렸다가 다시 읽어 주세요.</li>
<li>지도 그림이 새 구조와 다를 때 (예: Lighthouse): tarkov.dev가 그림을 고칠 때까지 예전 그림이 쓰입니다. 지도 위에 안내가 나옵니다.</li>
<li>퀘스트·아이템·맵·탈출구 이름은 게임처럼 한국어로 나옵니다 (tarkov.dev 번역; 번역이 없는 것은 게임에서도 영어).</li>
<li><b>통계</b>: 무엇을 고칠지 정하기 위해 방문 수, 기능별 사용 횟수, 페이지를 연 대략의 시간만 익명으로 셉니다 (GoatCounter, 쿠키 없음). 고른 퀘스트 이름, 진행 상황, 입력한 글은 절대 보내지 않습니다.</li>
<li>요청·버그·의견은 맵 탭 오른쪽 끝의 「💬 의견·요청 보내기」 버튼(또는 이 창 아래의 버튼)으로 보낼 수 있습니다.</li>
</ul></div></details>

<details><summary>11. 안전성 (밴이 걱정된다면)</summary><div>
<p>이 도구는 <b>완전히 독립된 웹 페이지</b>입니다 — 브라우저로 여는 외부 지도일 뿐이며, tarkov.dev와 같은 종류의 도구입니다.</p>
<ul>
<li>게임 프로그램, 메모리, 파일, 네트워크 통신을 <b>전혀 건드리지 않습니다</b> (읽지도, 바꾸지도, 주입하지도 않음).</li>
<li>화면을 녹화하거나 게임 로그를 읽지 않습니다. 게임에서 아무것도 가져오지 않고 위치도 추적하지 않습니다.</li>
<li><b>tarkov.dev의 공개 데이터와 지도</b>, 그리고 직접 고른 퀘스트만 씁니다. 선택과 진행 상황은 내 브라우저에만 저장됩니다.</li>
<li>설치할 것도 없고, 게임을 조작하거나 자동화하는 기능도 없습니다.</li>
</ul>
<p>게임 데이터를 읽거나 바꾸는 도구(치트)와는 완전히 다르게 작동합니다. 그래도 Battlestate Games(BSG)의 승인을 받지 않은 <b>비공식 팬 메이드 도구</b>이므로 「절대 아무 일도 없다」고 약속할 수는 없습니다 — 걱정된다면 BSG의 공식 약관을 확인해 주세요.</p>
</div></details>

<p class="muted">이 도구는 게임에 전혀 간섭하지 않습니다 (메모리를 읽거나 주입하지 않음). tarkov.dev의 공개 데이터와 지도(지도: CC BY-NC-SA 4.0)를 사용합니다.</p>`,
  ttModeLabel:"가져올 모드:", ttModePvp:"PvP", ttModePve:"PvE", ttModeSeasonal:"시즌",
  ttSummary:(lv,c,cKnown,f,o,st)=>`레벨 <b>${lv||"-"}</b> / 완료한 퀘스트 <b>${c}</b> (이 도구에서 인식 ${cKnown}) / 실패 <b>${f}</b> / 달성한 목표 <b>${o}</b> / 스토리 목표 <b>${st}</b>`,
  storySection:"스토리", storyHint:"스토리 챕터의 목표 체크리스트입니다 (좌표 데이터가 없어 지도에 핀은 없음). 설명은 영어입니다.",
  storyNone:"스토리 데이터를 불러오지 못했습니다 (데이터 업데이트를 눌러 주세요).", storyOptional:"선택",
  storyDoneAll:"주요 목표 모두 완료", storyClear:"모두 지우기", storyReqLabel:"필요한 스토리 목표:",
  ttMerge:"추가만 (이미 완료한 것은 그대로)", ttOverwrite:"덮어쓰기 (TarkovTracker와 똑같이)",
  ttLevelLabel:lv=>`레벨도 가져오기 (Lv ${lv})`,
  ttRun:"가져오기", ttClose:"닫기", ttUndoBtn:"마지막 가져오기 되돌리기",
  ttDoneMsg:(c,f,o,st)=>`가져왔습니다: 완료 ${c} / 실패 ${f} / 목표 ${o} / 스토리 목표 ${st}`,
  ttUndoneMsg:"되돌렸습니다.",
  failBadge:"✗ 실패", lockedBadge:"✗ 배타로 불가",
  failExclusive:(n)=>`다음을 완료하면 이 퀘스트는 실패합니다: ${n}`,
  failGenShoot:"특정 대상을 사살하면 실패하는 조건이 있습니다", failGenStanding:"상인 평판에 따라 실패할 수 있습니다",
  failGenPlant:"아이템 설치에 관한 실패 조건이 있습니다", failGenUse:"아이템 사용에 관한 실패 조건이 있습니다",
  failGenExtract:"사망하거나 탈출하지 못하고 레이드를 나가면 실패합니다", failGenVisit:"실패 조건이 있습니다", failGenOther:"실패 조건이 있습니다",
  prepHeader:mjp=>`레이드 전 확인 — ${mjp}`,
  prepEmpty:"이 맵에서는 가져갈 열쇠나 모을 것이 없습니다 (핀만).",
  prepKeys:"🔑 가져갈 열쇠", prepBring:"📤 가져가기 (설치/표시)", prepCollect:"📥 현장에서 찾기",
  prepHeaderAll:"레이드 전 확인 — 모든 맵 합계", prepAllBtn:"모든 맵", prepOneBtn:"이 맵", prepAllTip:"선택한 모든 퀘스트에 필요한 것을 모든 맵에 걸쳐 보여 줍니다", prepOneTip:"보고 있는 맵으로 돌아가기",
  prepAnyMap:"아무 맵", prepEmptyAll:"선택한 퀘스트에는 열쇠, 모을 아이템, 장비가 필요 없습니다.",
  bkNote:"진행 상황(선택한 퀘스트, 완료, 레벨 등)은 이 브라우저에만 자동으로 저장됩니다. 기기를 바꾸거나 브라우저 데이터를 지우기 전에 내보내 두세요.",
  bkRemind:d=>`${d}일 넘게 백업하지 않았습니다. 지금 진행 상황을 저장할까요?`, bkRemindNow:"내보내기", bkRemindLater:"나중에",
  bkExportBtn:"백업 내보내기", bkImportBtn:"백업 가져오기", bkExported:n=>`백업을 내보냈습니다 (${n}개 항목)`, bkBad:"이 파일은 백업으로 읽을 수 없습니다.", bkConfirm:n=>`백업(${n}개 항목)을 가져올까요? 지금의 선택, 완료한 퀘스트, 레벨, 체크, 내 핀 등이 파일 내용으로 바뀝니다.`, bkReplaced:"가져왔습니다. 다시 읽는 중…",
  collapseBtn:"◀ 지도를 넓게", collapseTip:"왼쪽 패널을 접어 지도를 넓게 씁니다 (접은 뒤에는 지도 왼쪽 위의 ▶로 다시 엶)", reopenTip:"왼쪽 패널 열기",
  pickTitle:"퀘스트 고르기", pkCollapseTip:"이 열(퀘스트 고르기)만 접기", pkReopenBtn:"🗂 퀘스트 고르기", pkReopenTip:"「퀘스트 고르기」 열 열기",
  filtSection:"필터·검색", settingsSection:"설정 (레이어, 공유, 백업)", selEmpty:"선택한 퀘스트가 A / B / C… 배지와 함께 여기에 나옵니다 (오른쪽 「퀘스트 고르기」 열에서 고르세요).", chipTip:l=>`지도의 「${l}」 핀`,
  mapSumFoldTip:"클릭해서 접기 / 펼치기",
  mapSumTitle:"맵별 요약 (선택한 퀘스트)", mapSumBest:"추천", mapSumCount:(t,o)=>`퀘스트 ${t}개 · 목표 ${o}개`, mapSumDoable:"지금 받을 수 있는 퀘스트가 많은 맵:",
  prepGear:"🎯 무기·장비 조건", gearWeapons:"무기", gearMods:"필요한 부품", gearWear:"착용", gearNotWear:n=>`지정된 장비를 착용하지 않기 (${n}개)`, gearMore:n=>`외 ${n}개`,
  pinPromptAdd:"이 핀의 메모 (예: 스나이퍼 주의 / 휴식 지점)",
  pinPromptEdit:"메모 수정",
  pinPopupMemo:"메모", pinPopupEmpty:"<span style='color:#888'>(없음)</span>",
  pinEdit:"수정", pinDelete:"삭제",
  mapLoading:jp=>`${jp} 불러오는 중…`,
  mapAttribution:'지도: <a href="https://tarkov.dev" target="_blank">tarkov.dev</a> (CC BY-NC-SA)',
  lighthouseArtCredit:'Lighthouse 지도 그림: <a href="https://reemr.se/Lighthouse/" target="_blank">re3mr.com</a> (CC BY-NC-SA 4.0)',
  fetchingFirst:"json.tarkov.dev에서 최신 데이터를 받는 중… (처음에는 조금 걸립니다)",
  fetchingData:"json.tarkov.dev에서 최신 데이터를 받는 중…",
  fetchFailed:msg=>`<div class="err">데이터를 받지 못했습니다.<br>${msg}<br><br>연결을 확인하고 「데이터 업데이트」를 눌러 주세요.</div>`,
  fetchFailedAlert:msg=>`불러오기 실패: ${msg}`,
  staleData:"⚠ 오래됨: ", updatedData:"업데이트: ",
  leafletLoadError:'<div class="err">지도 라이브러리(Leaflet)를 불러오지 못했습니다.<br>인터넷 연결을 확인하고 페이지를 다시 읽어 주세요.</div>',
  noTaskData:"퀘스트 데이터가 비어 있습니다",
  bodyHead:"머리", bodyThorax:"흉부", bodyStomach:"복부", bodyLeftArm:"왼팔", bodyRightArm:"오른팔", bodyLeftLeg:"왼다리", bodyRightLeg:"오른다리",
  condShoot:parts=>"명중 부위: " + parts.join("/"),
  condDistIn:v=>`${v}m 이내`, condDistOut:v=>`${v}m 이상 떨어져서`,
  condWeaponOnly:n=>`특정 무기만 (${n})`, condWearing:"특정 장비 착용", condNotWearing:"특정 장비 벗기",
  condTimeRange:(a,b)=>`${a}:00〜${b}:00`, condKillCount:n=>`사살×${n}`,
  attrErgo:"인체공학", attrAccuracy:"정확도 (MOA)", attrDurability:"내구도", attrRecoilV:"수직 반동",
  attrRecoilH:"수평 반동", attrWeight:"무게", attrEffDist:"유효 사거리", attrMagCap:"탄창 용량", attrMuzzleV:"총구 속도",
  objVisit:"장소 방문", objFindItem:"아이템 찾기", objFindQuestItem:"퀘스트 아이템 찾기",
  objGiveItem:"아이템 건네기", objGiveQuestItem:"퀘스트 아이템 건네기", objPlantItem:"아이템 설치",
  objPlantQuestItem:"퀘스트 아이템 설치", objMark:"표시하기", objShoot:"처치 (사살)",
  objExtract:"이 장소에서 탈출", objBuildWeapon:"무기 조립", objUseItem:"아이템 사용",
  objSellItem:"플리마켓에 올리기", objExperience:"조건 달성", objSkill:"스킬 레벨 달성",
  objTraderLevel:"상인 신뢰 레벨", objTraderStanding:"상인 평판",
  objTaskStatus:"다른 퀘스트의 상태", objDialogue:"대화", objGlobalVariable:"진행 표시",
  // 𝕏 で共有・配信用の表示(?obs=1)
  xShareBtn:"𝕏에 공유", xShareTip:"선택한 퀘스트로 X 게시물 화면을 엽니다 (올리기 전에 글을 고칠 수 있음)",
  xShareText:(map, n, first)=>`오늘은 ${map}에서 퀘스트 ${n}개 (${first}${n > 1 ? " 외" : ""}). 목표와 탈출구를 지도 한 장으로 확인 중`,
  xShareGeneric:"타르코프 퀘스트 목표와 탈출구를 지도 한 장으로 확인하고 있습니다", obsBtn:"📺 방송용 오버레이", obsTip:"OBS 등 방송 화면에 겹칠 수 있는 배경이 투명한 화면입니다",
  obsTitle:"방송용 오버레이 (OBS 등)",
  obsHow:`<ol><li>OBS의 「소스 목록」에서 <b>＋</b>를 눌러 <b>브라우저</b>를 추가합니다.</li><li><b>URL</b>에 아래 URL을 붙여 넣고, 너비를 <b>450</b>, 높이를 <b>700</b> 정도로 합니다.</li><li>배경은 투명해지고, 현재 맵에서 선택한 퀘스트의 목표만 나옵니다 (지도 핀과 같은 A·B·C 표시).</li></ol>`,
  obsCopyBtn:"URL 복사", obsCopied:"복사했습니다",
  obsNote:"퀘스트나 맵을 바꾸면 다시 복사해서 OBS의 URL을 바꿔 붙여 주세요 (OBS는 이 브라우저와 저장 공간이 달라 저절로 바뀌지 않습니다).",
  obsWindowBtn:"다른 창으로 열기 (자동 업데이트)",
  obsWindowNote:"이 브라우저의 다른 창으로 열면, 도구에서 퀘스트나 맵을 바꿀 때마다 저절로 바뀝니다. 보조 모니터에 두거나 OBS의 「윈도우 캡처」로 가져올 수 있습니다.",
  obsCount:n=>`퀘스트 ${n}개`, obsEmpty:"이 맵에서 선택한 퀘스트가 없습니다", obsHelpBar:"방송용 오버레이입니다 (OBS 안에서는 이 안내가 나오지 않음. ×로 닫기)",
  // 新しくなったこと・お礼
  newsTip:"새로운 기능", newsThanksTitle:"감사합니다",
  newsThanksBody:"의견, 버그 제보, 번역 수정을 보내 주신 모든 분께 감사드립니다. 보내 주신 내용을 바탕으로 고치고 있습니다.",
  newsTrNote:"일본어와 영어 이외의 화면은 기계 번역을 바탕으로 합니다. 어색한 번역은 의견 양식의 「🌐 번역 수정」으로 알려 주세요.",
  newsNames:"본인의 동의를 받아 이름을 싣습니다:",
  newsThanksHow:"이름(닉네임)을 여기에 실어도 괜찮다면, 의견 양식에 「이름 게재 OK: ___」라고 적어 주세요.",
  news1116:"The Lab 지도가 실제보다 크게 그려져 표시 위치가 어긋나던 문제를 고쳤습니다(모든 층).", news1116b:"Mechanic의 「To the Light」 퀘스트(Trust but Verify 등)는 데이터 출처(tarkov.dev)에 아직 없어서 표시할 수 없습니다. 추가되면 자동으로 표시됩니다.", news1115:"한국어 화면을 추가했습니다.",
  news1114:"「𝕏에 공유」 버튼과 방송용 오버레이(OBS 등에 겹칠 수 있는 투명한 화면)를 추가했습니다.",
  news1112:"스페인어·터키어 화면, 「📲 앱으로 설치」, 의견 양식의 「🌐 번역 수정」을 추가했습니다.", news1104:"독일어 화면을 추가했습니다.",
  news1027:"모든 퀘스트의 목록 페이지(목표·장소·보상; 영어)를 추가하고, 휴대폰 화면을 개선했으며, 폴란드어·포르투갈어를 추가했습니다.",
  news1016:"등대 맵에 「Road to Military Base V-Ex」 탈출구를 추가했습니다.",
  news1013:"조건이 있는 탈출구(등반 장비, 배낭 불가, 유료 등)에 배지를 달고, 지역 이동의 목적지와 조건을 보여 주도록 했습니다.",
  };
})();
