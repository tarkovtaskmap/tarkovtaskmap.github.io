/* 简体中文界面文字。任务名、物品名、地图名、撤离点名等游戏内名称来自 tarkov.dev 的中文翻译（与游戏内一致）。
   界面文字由开发者借助机器翻译制作，如有不自然之处，欢迎通过「反馈」告知。缺少的文字会以英文显示。 */
window.__STR_ZH__ = {
  appTitle:"塔科夫 任务地图",
  refresh:"更新数据", traderAll:"▼ 商人（全部）", mapAll:"▼ 地图（全部）",
  followCurrentMap:"【跟随当前显示的地图】", searchPlaceholder:"搜索任务名…",
  clearSel:"取消选择", kappaOnly:"仅 Kappa ★", lvLabel:"Lv", showDone:"显示已完成",
  supportLink:"☕ 在 Ko-fi 上支持本工具", supportBtn:"☕ 赞助 (Tip)",
  supportBtnTitle:"感谢使用！本工具今后也会一直免费。如果对你有帮助，欢迎在 Ko-fi 上支持我们（完全自愿，量力而行）。",
  supportBtnSub:"感谢使用（自愿）",
  layersSection:"显示图层·分享", optTransit:"传送点（地图间移动）",
  hintExitBelow:"※ 撤离点请在上方的「撤离点」栏中选择", optHazard:"危险区域", optLock:"上锁的门",
  optSwitch:"开关", optBoss:"Boss", optSpawn:"刷新点", optIcons:"图标",
  optRoute:"路线编号（①②③…）", shareCreateBtn:"生成分享链接", shareLoadBtn:"读取代码",
  exitSection:"撤离点", hintFactionSelect:"选择本局的出击类型", showAll:"全部显示", hideAll:"全部隐藏",
  exitHint:(shown,total)=>`正在显示 ${shown} / ${total} 个撤离点`, noExitData:"这张地图没有撤离点数据",
  brightHead:"亮度·对比度", brightToggleTitle:"展开 / 收起（最小化）",
  brightness:"亮度", brightnessTitle:"地图亮度", contrast:"对比度", contrastTitle:"地图对比度",
  reset:"重置", raidStart:"开始战局",
  guideTitle:"新手指南",
  guideStep1:"在右侧栏 <b>「选择任务」</b> 中，按商人或地图筛选，勾选本局要做的任务。它们会以与地图标记相同的 A·B·C… 圆形编号显示在左侧的「已选择」中。",
  guideStep2:"用上方的标签切换地图。把鼠标移到地图标记上，会显示任务名。",
  guideStep3:"在左侧的 <b>撤离点</b> 栏选择出击类型（PMC/Scav），勾选本局要用的撤离点 → 地图上只显示这些撤离点（绿=PMC / 蓝=Scav / 橙=通用）。",
  guideStep4:"把这个窗口移到副显示器，按 <b>F11</b> 全屏，看起来更方便。",
  guideStep5:"重置（Wipe）后或新增任务时，请点击右侧栏的 <b>更新数据</b>。",
  guideStep6:"进度（已选任务、已完成任务、等级等）会<b>自动保存在此浏览器中</b>。换电脑或清除浏览器数据之前，请用左侧「设置」中的 <b>导出备份</b> 保存。",
  guideStart:"开始使用", loadingInitial:"正在加载数据…",
  multipleOrNone:"多个/无", doneBadge:"✓已完成(自己)", markDoneTitle:"标记完成",
  searchPrefix:mn=>`搜索：${mn}`, searchResults:"搜索结果", noMatch:"无匹配结果", selectedHeader:"已选择",
  filterHint:"在上方按「商人」或「地图」筛选，任务会按名称排序显示。也可以直接搜索任务名。",
  availableNow:"▶ 现在可接取", noQuestsToShow:"没有可显示的任务（请检查筛选条件）",
  labelSep:" ／ ",
  selCount:n=>`已选择 ${n} 个任务`,
  progressDone:(dn,total)=>`已完成 <b>${dn}</b>/${total}`,
  progressKappa:(kapDn,kapAll)=>` · Kappa 所需 <b>${kapDn}</b>/${kapAll}`,
  progressLK:(lkDn,lkAll)=>` · Lightkeeper <b>${lkDn}</b>/${lkAll}`,
  unknownName:"（未知）", kindPMC:"PMC", kindScav:"Scav", kindShared:"通用", sharedGlyph:"通",
  kindCoop:"合作（需两方同时在场）", coopListNote:"🟠 「合作」= 只有 PMC 和 Scav 同时在场时才能使用",
  floorNote:floor=>`※ 这个撤离点在${floor}层（与当前查看的楼层不同）`,
  extractPopup:(name,kind,fac)=>`<b>撤离点：${name}</b><br>类型：${kind}（本局：${fac==="scav"?"Scav":"PMC"}）`,
  transitLabel:"传送点", transitPopup:desc=>`<b>传送点</b><br>${desc}`,
  hazardSniper:"Scav 狙击手射界", hazardMinefield:"雷区", hazardOther:"危险区域",
  dangerousAreaPopup:label=>`<b>${label}</b><br><span style="color:#888">这片区域很危险</span>`,
  lockedDoor:"上锁的门", lockType:"类型", needsPower:"※ 需要通电", lockGlyph:"锁", routeLabel:"路线", floorLabel:"楼层：",
  lockPopup:(type,power)=>`<b>上锁的门</b><br>类型：${type}${power?"<br>※ 需要通电":""}`,
  switchLabel:"开关", switchPopup:name=>`<b>开关</b><br><span style="color:#555">${name}</span>`,
  spawnChanceApprox:pct=>`刷新概率约 ${pct}%`,
  spawnPoint:"刷新点", sideOther:s=>s,
  optionalTag:"（可选）", conditionsLabel:"条件：",
  noCoordHeader:"这张地图上没有坐标（请查看 Wiki）",
  noQuestSelected:"未选择任务",
  legendSniper:"狙击手射界", legendMinefield:"雷区", legendOtherHazard:"其他危险",
  legendLockedDoor:"上锁的门", legendSwitch:"开关", legendBoss:"Boss 刷新点",
  legendPmcSpawn:"PMC 刷新点", legendScavSpawn:"Scav 刷新点", legendRoute:"— — 路线（按编号顺序）",
  legendToggle:open=>`图例 ${open?"▲":"▼"}`,
  legendExitLine:fac=>`撤离点（本局：<b>${fac==="scav"?"Scav":"PMC"}</b>）：<span class="dot" style="background:var(--ok)"></span>PMC&nbsp; <span class="dot" style="background:var(--scav)"></span>Scav&nbsp; <span class="dot" style="background:var(--shared)"></span>合作（需两方同时在场）— 只显示在「撤离点」栏中勾选的撤离点。楼层角标 = 该撤离点位于其他楼层`,
  legendMarkerLine:'<span class="dot" style="background:#888"></span>圆圈=任务目标（字母 A/B..）　📌=你的备注（右键添加）',
  legendHazardLine:"虚线轮廓=危险区域。进入会有危险",
  legendColorLine:"地图颜色（来自 tarkov.dev）：深灰=室内 / 斜线=楼梯·坡道 / 浅蓝=水域 / 虚线=地图边界",
  prereqLabel:"前置任务：", nextLabel:"后续任务：", andMore:" 等",
  shareCopiedAlert:"分享链接已复制。请发给你的朋友。",
  sharePromptCopy:"请复制这个分享链接，发给你的朋友：",
  sharePromptLoad:"请粘贴分享代码（#s= 之后的部分）或完整链接：",
  shareLoadedAlert:"已读取分享数据。",
  shareLoadFailedAlert:msg=>`读取失败：${msg}`,
  ttBtn:"导入 TarkovTracker", ttTitle:"导入 TarkovTracker 的进度",
  ttHow:"<ol><li>在 TarkovTracker（tarkovtracker.org）的设置中，保存进度的<b>备份（导出）</b>JSON</li><li>在下方选择该文件，或粘贴其内容</li></ol>可以应用已完成/已失败的任务、已完成的目标和你的等级。",
  ttPrivacy:"🔒 文件只在此浏览器内处理，不会发送到任何地方。",
  ttPasteLabel:"或粘贴 JSON 内容：",
  ttErrJson:"无法作为 JSON 读取。请确认这是备份文件。",
  ttErrFormat:"这不是 TarkovTracker 的备份文件。",
  ttErrEmpty:"没有找到可导入的进度数据。",
  modeLabel:"游戏模式", modePvp:"PvP", modePve:"PvE", modeSeasonal:"赛季",
  modeHintPvp:"普通 PvP 角色。进度（已完成任务、等级等）按模式分别保存。",
  modeHintPve:"PvE 角色。切换为 PvE 专属的任务、撤离点和 Boss 数据（进度与 PvP 分开保存）。",
  modeHintSeasonal:"赛季 PvP 角色（每个赛季重置）。普通任务使用与 PvP 相同的数据；赛季限定的 Kord Breach 任务尚未支持。进度分开保存。",
  ttTarget:(n,cur)=>cur ? `导入到：<b>${n}</b>（当前显示的模式）` : `导入到：<b>${n}</b>（与当前显示的模式不同，切换后生效）`,
  ttOtherMode:(n)=>`已保存到「${n}」模式。用上方的模式按钮切换到 ${n} 即可查看。`,
  ttEmptyProfile:"这个来源里没有进度。请在上方「导入模式」中选择有进度的模式。",
  menuBtn:"☰ 菜单", closeMenu:"关闭",
  jumpTitle:"在地图上显示（选中该任务，并跳到对应地图和楼层的标记处）", jumpNoPins:"没有可显示的标记（没有坐标，或已完成）",
  helpBtn:"帮助", helpTitle:"使用方法", helpClose:"关闭",
  fbLink:"💬 发送反馈 / 建议", fbSub:"欢迎提出想法和报告错误（可匿名）", fbBtn:"反馈 / 错误报告", fbTitle:"反馈 / 错误报告",
  fbIntro:"欢迎告诉我们你想要的功能、遇到的问题或错误。你发送的内容<b>只有开发者能看到</b>（不会公开）。无需登录、姓名或邮箱。请不要填写个人信息。我们可能无法逐一回复。也欢迎指出界面翻译中不自然的地方（用中文或英文均可）。",
  fbTypeIdea:"💡 功能建议", fbTypeBug:"🐞 错误", fbTypeOther:"💬 其他",
  fbMsgLabel:"内容", fbMsgPh:"例：任务 X 的标记位置不对 / 希望增加……功能",
  fbInfoLabel:"一并发送的信息（可查看）",
  fbCopy:"复制文本", fbSend:"发送", fbCopied:"已复制。", fbEmpty:"请输入内容。",
  fbSent:"已发送。感谢你的反馈！", fbSending:"发送中…", fbWait:"请稍等片刻再发送下一条。", fbSendErr:"发送失败。请检查网络，或使用下方的「直接打开表单」。", fbDirect:"直接打开表单",
  guideMore:"随时可以通过侧栏顶部的「帮助」按钮查看详细说明。",
  helpBody:`
<details open><summary>1. 快速开始</summary><div><ol>
<li>把左上角的<b>游戏模式</b>（PvP / PvE / 赛季）设为你正在玩的模式。</li>
<li>在侧栏中按<b>商人</b>或<b>地图</b>筛选，勾选<b>本局要做的任务</b>。</li>
<li>用上方标签切换地图。已选任务的目标会以<b>标记</b>显示。把鼠标移到标记上，可看到说明、条件、前置任务和后续任务。</li>
<li>在<b>撤离点</b>栏中勾选你要使用的撤离点（→ 5.）。</li>
<li>把窗口移到副显示器，按 <span class="k">F11</span> 全屏。</li>
</ol></div></details>

<details><summary>2. 游戏模式（PvP / PvE / 赛季）</summary><div>
<p>每个模式在游戏中是独立的角色，所以本工具会<b>按模式分别保存进度</b>（已完成/已失败的任务、等级、已选任务、撤离点选择）。切换模式会重新加载页面。</p>
<ul>
<li><b>PvP</b>：普通 PvP 角色。</li>
<li><b>PvE</b>：切换为 PvE 专属的任务（[PVE ZONE]）、撤离点、Boss 和刷新点。</li>
<li><b>赛季</b>：赛季（会重置）角色。没有单独的数据源，所以普通任务使用 PvP 数据。<b>赛季限定的 Kord Breach 任务尚未支持</b>。</li>
</ul></div></details>

<details><summary>3. 看懂地图</summary><div><ul>
<li><b>楼层按钮</b>（地图上方）：在多层地图上切换楼层。查看上层时，1 层会淡淡地画在下面作为参照。按钮上的数字是该楼层上你已选标记的数量。</li>
<li><b>标记的颜色和字母</b>：每个任务都有一种颜色和一个字母（A、B、C…），与任务列表中的字母对应。</li>
<li><b>📍 按钮</b>（每个任务行上）：选中该任务，必要时切换到对应的地图和楼层，并把地图移到它的标记处（标记周围会闪出一圈光环）。</li>
<li><b>图例</b>：左下角的「图例 ▼」会说明各种符号和颜色。</li>
<li><b>图层</b>：在「显示图层·分享」中，可开关传送点、危险区域、上锁的门、开关、Boss 和刷新点。</li>
<li><b>路线编号</b>：开启后，标记会按最短路线顺序标上 ①②③…，并用线连起来。</li>
<li><b>自定义标记</b>：在地图上<b>右键</b>可添加带备注的标记（点击标记可编辑/删除）。</li>
<li><b>亮度 / 对比度</b>：地图左上角的滑块。</li>
</ul></div></details>

<details><summary>4. 任务列表的标记与完成</summary><div><ul>
<li><span class="k">★</span> … Kappa 容器所需的任务。「仅 Kappa ★」可只显示这些任务。</li>
<li><b>A / B / C 角标</b>：左上「已选择」中的每个任务，都有与它在地图上的标记相同颜色和字母的角标。对照角标，或把鼠标移到标记上看任务名即可。</li>
<li><b>放大地图</b>：点击左上的「◀ 放大地图」可收起整个左侧面板，让地图占满屏幕。收起后，点地图左上角的 <b>▶</b> 可重新打开（下次会记住）。</li>
<li><b>两列布局</b>：左列是「已选择 → 战前清单 → 撤离点 → 剧情 → 设置」，右列是「选择任务」（筛选与搜索 → 任务列表）。可以只收起右列（收起后，地图上方的「🗂 选择任务」可重新打开）。窄屏幕上会变成一列。</li>
<li><b>按地图汇总</b>：在已选任务下方，每张地图会显示任务数和目标数。目标最多的地图会标上「推荐」；点击某一行可切换到该地图。还会列出可接取任务最多的地图（输入等级或已完成任务后显示）。每个地图标签上的数字是已选任务在该地图上的目标数（包含没有坐标的目标）。</li>
<li><span class="k">○ / ✓</span> … 点击可将任务标记为完成 / 撤销。已完成的任务会自动从列表中隐藏；「显示已完成」可以把它们找回来。</li>
<li><span class="k">⚠</span> … 有失败条件的任务（鼠标悬停，或选中该任务即可查看）。其中包括按名称列出的<b>互斥任务</b>（完成其中一个会导致另一个失败）。</li>
<li><span class="k">✗ 已错过</span> … 你已完成了它的互斥任务，所以这个任务再也无法接取。会从列表和「现在可接取」中隐藏。</li>
<li><span class="k">✗ 已失败</span> … 已失败的任务（由 TarkovTracker 导入设置）。会从列表和「现在可接取」中隐藏。</li>
<li>在 <b>Lv</b> 中输入你的等级，「<b>▶ 现在可接取</b>」会列出前置任务已完成、且满足等级要求的任务。</li>
<li>合作游玩时，<b>你自己选择的</b>或<b>通过分享链接收到的</b>任务，即使已完成也会保持显示，并带有「✓ 已完成」角标。</li>
</ul></div></details>

<details><summary>5. 选择撤离点</summary><div>
<p>在「撤离点」栏中，先选择 <b>PMC 或 Scav</b>，再勾选你要使用的撤离点 —— 地图上<b>只显示勾选的</b>。有「全部显示 / 全部隐藏」按钮。颜色：绿 = PMC，蓝 = Scav，橙 = 通用。PvE 模式下显示 PvE 的撤离点。</p>
</div></details>

<details><summary>6. 战前检查</summary><div>
<p>「战前清单」面板会列出已选任务需要的东西。每行的复选框会被保存（「重置」可清除）。</p>
<ul><li>🔑 要带的钥匙 / 📤 要带的或要放置的物品 / 📥 要在战局中找到的物品（FiR = 必须在战局中找到） / 🎯 武器与装备要求（要使用的武器、必需的配件、要穿戴的装备 —— 数量多时，悬停可看完整列表）</li></ul>
<p>点击标题栏的<b>「全部地图」</b>，可以把已选任务在所有地图上需要的东西合并成一张清单（数量会累加，每个物品会显示对应的地图）。「本图」可切换回来。</p>
<p>地图上方的<b>战局计时器</b>会倒数该地图的时间限制（剩 5 分钟变黄，剩 2 分钟变红）。</p>
</div></details>

<details><summary>7. 剧情章节</summary><div>
<p>除了商人任务，还有<b>剧情章节的目标清单</b>（Tour / Falling Skies / Batya / The Unheard / Blue Fire / They Are Already Here / Accidental Witness / The Labyrinth / The Ticket / Boreas）。在侧栏中打开<b>「剧情」</b>即可查看每个章节的目标。</p>
<ul>
<li>勾选目标即可记录进度（按模式分别保存）。还有「完成全部主线目标」和「全部清除」按钮。</li>
<li>剧情目标<b>没有坐标数据，所以地图上不会出现标记</b>。说明文字与游戏内一样为英文。</li>
<li>需要某个剧情目标的商人任务会带有 <span class="k">📖</span> 标记（未满足的会列出所需条件；满足后显示 ✓）。</li>
<li>TarkovTracker 导入也会应用章节的完成情况。</li>
</ul></div></details>

<details><summary>8. 导入 TarkovTracker</summary><div>
<p>适合已经在 TarkovTracker 上记录进度的人：一次性应用已完成任务、已失败任务、已完成目标和你的等级。</p>
<ol>
<li>在 TarkovTracker（tarkovtracker.org）的设置中，保存备份（导出）的 <b>.json</b> 文件。</li>
<li>在这里打开「显示图层·分享」，点击<b>导入 TarkovTracker</b>并选择该文件（或粘贴其内容）。</li>
<li>确认摘要后点击<b>导入</b>。可以选择「仅添加 / 覆盖」，导入后可立即撤销。</li>
</ol>
<p>文件只在你的浏览器内处理，不会发送到任何地方。它会保存到你在文件中所选<b>档案对应的模式</b>（PvE 的进度会保存到 PvE；如果与当前显示的模式不同，切换后生效）。如果你不使用 TarkovTracker，可以忽略 —— 也可以用 ○/✓ 手动记录完成情况。</p>
</div></details>

<details><summary>9. 分享链接</summary><div>
<p>「生成分享链接」会把当前状态（模式、已选任务、完成情况、等级、自定义标记、地图、撤离点选择）复制为一个 URL。朋友打开它，或粘贴到「读取代码」中，就能得到相同的状态。已失败的任务和已完成的目标不会被分享。</p>
</div></details>

<details><summary>10. 更新数据与故障排除</summary><div><ul>
<li><b>备份</b>：你的进度（已选任务、已完成任务、等级、勾选项、自定义标记等）只保存在此浏览器内。在清除浏览器数据之前，或换到另一台电脑时，请用「显示图层·分享」下的<b>导出备份</b>保存为文件，然后在新的地方点击<b>导入备份</b>（会用文件内容替换当前数据）。如果你有进度但已超过 30 天没有备份，左列顶部会出现一条小提示（点「稍后」会隐藏 14 天）。</li>
<li><b>更新数据</b>：重置（Wipe）后或新增任务时点击它。会更新任务、撤离点、Boss 刷新点等（大约每天也会自动更新一次）。</li>
<li>如果数据无法加载：请检查网络并点击「更新数据」。如果无法获取，会使用内置数据，并显示「⚠ 已过期」。</li>
<li>地图是黑的：图片服务器繁忙，请稍等片刻后重新加载。</li>
<li>地图图片与新布局不一致（例如灯塔）：在 tarkov.dev 更新之前，地图图片会保持旧版；地图上方会显示提示。</li>
<li>任务、物品、地图和撤离点的名称，显示为与游戏内一致的中文名称（来自 tarkov.dev 的翻译；没有翻译的部分显示英文）。</li>
<li><b>使用统计</b>：为了改进工具，我们只匿名统计访问次数、各功能的使用次数，以及页面大约打开了多久（GoatCounter，不使用 Cookie）。你选择的任务名称、你的进度以及你输入的任何内容都不会被发送。</li>
<li>功能建议、错误和反馈，可以通过地图标签右端的「💬 发送反馈 / 建议」按钮（或本窗口底部的按钮）发送。</li>
<li>本界面的中文由开发者借助机器翻译制作。如果有不自然之处，欢迎通过反馈告知。</li>
</ul></div></details>

<details><summary>11. 安全性（担心被封号？）</summary><div>
<p>本工具是与游戏<b>完全独立的网页</b>——只是在浏览器中打开的外部地图工具，和 tarkov.dev 属于同一类工具。</p>
<ul>
<li>它<b>完全不接触</b>游戏的程序、内存、文件和网络通信（不读取、不修改、不注入）。</li>
<li>它不会截取你的屏幕，也不会监视游戏日志。不会从游戏中获取任何东西，也不会追踪你的位置。</li>
<li>它只使用 <b>tarkov.dev 的公开数据和地图</b>，以及你自己选择的任务。你的选择和进度只保存在你自己的浏览器中。</li>
<li>无需安装，也没有任何控制或自动操作游戏的功能。</li>
</ul>
<p>它的工作方式与读取或写入游戏数据的工具（外挂）完全不同。不过，这是<b>非官方的粉丝工具</b>，并未得到 Battlestate Games（BSG）的认可，所以我们无法保证绝对不会发生任何问题 —— 如果你有顾虑，请查阅 BSG 的官方条款。</p>
</div></details>

<p class="muted">本工具不会接触游戏（不读取内存、不注入）。使用 tarkov.dev 的公开数据和地图（地图：CC BY-NC-SA 4.0）。</p>`,
  ttModeLabel:"游戏模式：", ttModePvp:"PvP", ttModePve:"PvE", ttModeSeasonal:"赛季",
  ttSummary:(lv,c,cKnown,f,o,s)=>`等级 <b>${lv||"-"}</b> / 已完成任务 <b>${c}</b>（此处可识别 ${cKnown} 个）/ 已失败 <b>${f}</b> / 已完成目标 <b>${o}</b> / 剧情目标 <b>${s}</b>`,
  storySection:"剧情", storyHint:"剧情章节的目标清单（没有地图标记 —— 没有坐标数据）。说明文字与游戏内一样为英文。",
  storyNone:"无法加载剧情数据（请点击更新数据）。", storyOptional:"可选",
  storyDoneAll:"完成全部主线目标", storyClear:"全部清除", storyReqLabel:"需要剧情目标：",
  ttMerge:"仅添加（保留我现有的完成情况）", ttOverwrite:"覆盖（与 TarkovTracker 完全一致）",
  ttLevelLabel:lv=>`同时应用等级（Lv ${lv}）`,
  ttRun:"导入", ttClose:"关闭", ttUndoBtn:"撤销上次导入",
  ttDoneMsg:(c,f,o,s)=>`已导入：完成 ${c} / 失败 ${f} / 目标 ${o} / 剧情目标 ${s}`,
  ttUndoneMsg:"已恢复。",
  failBadge:"✗ 已失败", lockedBadge:"✗ 已错过",
  failExclusive:(n)=>`如果你完成了以下任务，这个任务会失败：${n}`,
  failGenShoot:"有关于击杀特定目标的失败条件", failGenStanding:"可能因商人声望而失败",
  failGenPlant:"有关于放置物品的失败条件", failGenUse:"有关于使用物品的失败条件",
  failGenExtract:"如果你死亡或离开战局（撤离除外）就会失败", failGenVisit:"有失败条件", failGenOther:"有失败条件",
  prepHeader:mjp=>`战前清单 — ${mjp}`,
  prepEmpty:"这张地图上不需要钥匙或要带走的物品（只有标记）。",
  prepKeys:"🔑 要带的钥匙", prepBring:"📤 要带的物品（放置/标记）", prepCollect:"📥 现场寻找",
  prepHeaderAll:"战前清单 — 全部地图", prepAllBtn:"全部地图", prepOneBtn:"本图", prepAllTip:"显示已选任务在所有地图上需要的东西", prepOneTip:"回到当前查看的地图",
  prepAnyMap:"任意地图", prepEmptyAll:"你选择的任务不需要钥匙、拾取物品或装备。",
  bkNote:"你的进度（已选任务、已完成任务、等级等）只会自动保存在此浏览器中。换设备或清除浏览器数据之前，请先导出备份。",
  bkRemind:d=>`已经超过 ${d} 天没有备份了。现在保存进度吗？`, bkRemindNow:"导出", bkRemindLater:"稍后",
  bkExportBtn:"导出备份", bkImportBtn:"导入备份", bkExported:n=>`已导出备份（${n} 项）`, bkBad:"无法将此文件作为备份读取。", bkConfirm:n=>`要导入备份（${n} 项）吗？你当前的选择、已完成任务、等级、勾选项、自定义标记等，将被文件中的内容替换。`, bkReplaced:"已导入。正在重新加载…",
  collapseBtn:"◀ 放大地图", collapseTip:"收起左侧面板，让地图更大（收起后，点地图左上角的 ▶ 可重新打开）", reopenTip:"打开左侧面板",
  pickTitle:"选择任务", pkCollapseTip:"只收起这一列（选择任务）", pkReopenBtn:"🗂 选择任务", pkReopenTip:"打开「选择任务」列",
  filtSection:"筛选与搜索", settingsSection:"设置（图层、分享、备份）", selEmpty:"你选择的任务会连同 A / B / C… 角标显示在这里（请在右侧的「选择任务」列中选择任务）。", chipTip:l=>`地图标记「${l}」`,
  mapSumFoldTip:"点击折叠 / 展开",
  mapSumTitle:"按地图汇总（已选任务）", mapSumBest:"推荐", mapSumCount:(t,o)=>`${t} 个任务 · ${o} 个目标`, mapSumDoable:"现在可接取任务最多的地图：",
  prepGear:"🎯 武器与装备要求", gearWeapons:"武器", gearMods:"必需配件", gearWear:"穿戴", gearNotWear:n=>`不要穿戴指定的装备（${n} 件）`, gearMore:n=>`另有 ${n} 件`,
  pinPromptAdd:"这个标记的备注（例：有狙击手危险 / 休息点）",
  pinPromptEdit:"编辑备注",
  pinPopupMemo:"备注", pinPopupEmpty:"<span style='color:#888'>（无）</span>",
  pinEdit:"编辑", pinDelete:"删除",
  mapLoading:jp=>`正在加载 ${jp}…`,
  mapAttribution:'地图：<a href="https://tarkov.dev" target="_blank">tarkov.dev</a> (CC BY-NC-SA)',
  fetchingFirst:"正在从 json.tarkov.dev 获取最新数据…（首次加载需要一点时间）",
  fetchingData:"正在从 json.tarkov.dev 获取最新数据…",
  fetchFailed:msg=>`<div class="err">获取数据失败。<br>${msg}<br><br>请检查网络后点击「更新数据」。</div>`,
  fetchFailedAlert:msg=>`获取失败：${msg}`,
  staleData:"⚠ 已过期：", updatedData:"更新于：",
  leafletLoadError:'<div class="err">地图库（Leaflet）加载失败。<br>请检查网络连接后重新加载页面。</div>',
  noTaskData:"任务数据为空",
  bodyHead:"头部", bodyThorax:"胸部", bodyStomach:"腹部", bodyLeftArm:"左臂", bodyRightArm:"右臂", bodyLeftLeg:"左腿", bodyRightLeg:"右腿",
  condShoot:parts=>"命中 " + parts.join("/"),
  condDistIn:v=>`${v}m 以内`, condDistOut:v=>`${v}m 以外`,
  condWeaponOnly:n=>`仅限指定武器（${n} 种）`, condWearing:"必须穿戴指定装备", condNotWearing:"必须脱下指定装备",
  condTimeRange:(a,b)=>`${a}:00–${b}:00`, condKillCount:n=>`击杀×${n}`,
  attrErgo:"人机工效", attrAccuracy:"精度 (MOA)", attrDurability:"耐久", attrRecoilV:"垂直后坐力",
  attrRecoilH:"水平后坐力", attrWeight:"重量", attrEffDist:"有效射程", attrMagCap:"弹匣容量", attrMuzzleV:"枪口初速",
  objVisit:"到达地点", objFindItem:"寻找物品", objFindQuestItem:"寻找任务物品",
  objGiveItem:"上交物品", objGiveQuestItem:"上交任务物品", objPlantItem:"放置物品",
  objPlantQuestItem:"放置任务物品", objMark:"放置标记", objShoot:"消灭（击杀）",
  objExtract:"从地点撤离", objBuildWeapon:"组装武器", objUseItem:"使用物品",
  objSellItem:"在跳蚤市场上架", objExperience:"达成条件", objSkill:"达到技能等级",
  objTraderLevel:"商人忠诚等级", objTraderStanding:"商人声望",
  objTaskStatus:"其他任务状态", objDialogue:"对话", objGlobalVariable:"进度标记",
};
