/* Türkçe arayüz. Görev, eşya, harita, çıkış vb. adları tarkov.dev çevirisinden gelir (oyundaki gibi; çevirisi olmayanlar oyunda da İngilizcedir).
   Arayüz metinlerini geliştirici makine çevirisi yardımıyla çevirdi — garip görünen bir şey olursa «Görüş» üzerinden haber ver.
   Eksik bir metin olursa İngilizcesi gösterilir. */
(function(){
  window.__STR_TR__ = {
  appTitle:"Tarkov — Görev Haritası",
  refresh:"Verileri güncelle", traderAll:"▼ Tüccar (tümü)", mapAll:"▼ Harita (tümü)",
  followCurrentMap:"[Geçerli haritayı takip et]", searchPlaceholder:"Görev adıyla ara…",
  clearSel:"Seçimi temizle", kappaOnly:"Yalnızca Kappa ★", lvLabel:"Lv", showDone:"Tamamlananları göster",
  supportLink:"☕ Aracı Ko-fi'de destekle", supportBtn:"☕ Destekle",
  supportBtnTitle:"Aracı kullandığın için teşekkürler! Her zaman ücretsiz kalacak. Sana zaman kazandırıyorsa Ko-fi'de küçük bir bahşiş beni çok sevindirir — tamamen isteğe bağlı.",
  supportBtnSub:"Kullandığın için teşekkürler! (isteğe bağlı)",
  layersSection:"Katmanlar / Paylaş", optTransit:"Transit (haritalar arası)",
  hintExitBelow:"※ Çıkışlar yukarıdaki «Çıkışlar» bölümünden seçilir", optHazard:"Tehlikeli bölgeler", optLock:"Kilitli kapılar",
  optSwitch:"Şalterler", optBoss:"Bosslar", optSpawn:"Doğma noktaları", optIcons:"Simgeler",
  optRoute:"Rota numaraları (①②③…)", shareCreateBtn:"Bağlantı oluştur", shareLoadBtn:"Kodu yükle",
  exitSection:"Çıkışlar", hintFactionSelect:"Bu baskına ne olarak girdiğini seç", showAll:"Tümünü göster", hideAll:"Tümünü gizle",
  exitHint:(shown,total)=>`${shown} / ${total} çıkış görünüyor`, noExitData:"Bu harita için çıkış verisi yok",
  brightHead:"Parlaklık / Kontrast", brightToggleTitle:"Aç / kapat (küçült)",
  brightness:"Parlaklık", brightnessTitle:"Harita parlaklığı", contrast:"Kontrast", contrastTitle:"Harita kontrastı",
  reset:"Sıfırla", raidStart:"Baskını başlat",
  guideTitle:"İlk kez mi buradasın?",
  guideStep1:"Sağdaki <b>«Görev seç»</b> bölümünde tüccara veya haritaya göre filtrele ve bu baskının görevlerini işaretle. Görevler solda «Seçilenler» altında, haritadaki işaretlerle aynı A / B / C… harfleriyle görünür.",
  guideStep2:"Haritayı üstteki sekmelerden değiştir. Görevin adını görmek için fareyle bir işaretin üzerine gel.",
  guideStep3:"Soldaki <b>Çıkışlar</b> bölümünde ne olarak başladığını (PMC/Scav) seç ve kullanacağın çıkışları işaretle → haritada yalnızca onlar görünür (yeşil=PMC / mavi=Scav / turuncu=ortak).",
  guideStep4:"Bu pencereyi ikinci monitörüne taşı ve tam ekran için <b>F11</b> tuşuna bas — en rahat böyle okunur.",
  guideStep5:"Wipe sonrasında ya da yeni görevler geldiğinde sağdaki <b>Verileri güncelle</b> düğmesine bas.",
  guideStep6:"İlerlemen (seçilen ve tamamlanan görevler, seviye vb.) <b>bu tarayıcıya otomatik olarak kaydedilir</b>. Başka bir bilgisayara geçmeden ya da tarayıcı verilerini silmeden önce soldaki «Ayarlar» bölümünden <b>Yedeği dışa aktar</b> ile yedek al.",
  guideM1:"<b>☰ Menü</b> düğmesini aç (sağ üstte), <b>«Görev seç»</b> bölümüne kadar kaydır, tüccara veya haritaya göre filtrele ve bu baskının görevlerini işaretle.",
  guideM2:"Haritaya dönmek için menünün dışına (karanlık alana) dokun — görevlerin işaret olarak görünür. Görevin adını görmek için bir işarete dokun.",
  guideM3:"Haritayı değiştirmek için üstteki sekmeleri kaydır. Kullanacağın çıkışları menüdeki <b>Çıkışlar</b> bölümünden seç.",
  guideM4:"İlerlemen (seçilen ve tamamlanan görevler vb.) <b>bu tarayıcıya otomatik olarak kaydedilir</b>.",
  taskListLink:"📋 Tüm görevlerin listesi (İngilizce)", taskLinkMissing:"Bu görev geçerli modun verilerinde yok (PvP / PvE arasında geçiş yapmayı dene).",
  guideStart:"Başla", loadingInitial:"Veriler yükleniyor…",
  multipleOrNone:"Birden çok / yok", doneBadge:"✓ tamamlandı (sen)", markDoneTitle:"Tamamlandı olarak işaretle",
  searchPrefix:mn=>`Arama: ${mn}`, searchResults:"Arama sonuçları", noMatch:"Sonuç yok", selectedHeader:"Seçilenler",
  filterHint:"Görevleri alfabetik sırayla listelemek için yukarıda «Tüccar» veya «Harita» filtresini kullan. Doğrudan görev adıyla da arayabilirsin.",
  availableNow:"▶ Şimdi alınabilir", noQuestsToShow:"Gösterilecek görev yok (filtreleri kontrol et)",
  labelSep:" / ",
  selCount:n=>`${n} görev seçildi`,
  progressDone:(dn,total)=>`Tamamlanan <b>${dn}</b>/${total}`,
  progressKappa:(kapDn,kapAll)=>` ・ Kappa için gerekli <b>${kapDn}</b>/${kapAll}`,
  progressLK:(lkDn,lkAll)=>` ・ Lightkeeper <b>${lkDn}</b>/${lkAll}`,
  unknownName:"(bilinmiyor)", kindPMC:"PMC", kindScav:"Scav", kindShared:"Ortak", sharedGlyph:"O",
  kindCoop:"Co-op (ikisi de gerekli)", coopListNote:"🟠 «Co-op» = yalnızca bir PMC ve bir Scav birlikteyken kullanılabilir",
  floorNote:floor=>`※ Bu çıkış başka bir katta: ${floor} (şu an baktığın kat değil)`,
  extractPopup:(name,kind,fac)=>`<b>Çıkış: ${name}</b><br>Tür: ${kind} (bu baskın: ${fac==="scav"?"Scav":"PMC"})`,
  transitLabel:"Transit", transitPopup:desc=>`<b>Transit</b><br>${desc}`,
  hazardSniper:"Keskin nişancı Scav atış alanı", hazardMinefield:"Mayın tarlası", hazardOther:"Tehlikeli bölge",
  dangerousAreaPopup:label=>`<b>${label}</b><br><span style="color:#888">Bu bölge tehlikeli</span>`,
  lockedDoor:"Kilitli kapı", lockType:"Tür", needsPower:"※ Elektrik gerekir", lockGlyph:"K", routeLabel:"Rota", floorLabel:"Kat:",
  lockPopup:(type,power)=>`<b>Kilitli kapı</b><br>Tür: ${type}${power?"<br>※ Elektrik gerekir":""}`,
  switchLabel:"Şalter", switchPopup:name=>`<b>Şalter</b><br><span style="color:#555">${name}</span>`,
  spawnChanceApprox:pct=>`Doğma şansı ~%${pct}`,
  spawnPoint:"Doğma noktası", sideOther:x=>x,
  optionalTag:" (isteğe bağlı)", conditionsLabel:"Koşullar: ",
  noCoordHeader:"Bu haritada koordinat yok (wiki'ye bak)",
  noQuestSelected:"Seçili görev yok",
  legendSniper:"Keskin nişancı atış alanı", legendMinefield:"Mayın tarlası", legendOtherHazard:"Diğer tehlike",
  legendLockedDoor:"Kilitli kapı", legendSwitch:"Şalter", legendBoss:"Boss doğma noktası",
  legendPmcSpawn:"PMC doğma noktası", legendScavSpawn:"Scav doğma noktası", legendRoute:"— — Rota (numaralı sıra)",
  legendToggle:open=>`Lejant ${open?"▲":"▼"}`,
  legendExitLine:fac=>`Çıkışlar (bu baskın: <b>${fac==="scav"?"Scav":"PMC"}</b>): <span class="dot" style="background:var(--ok)"></span>PMC&nbsp; <span class="dot" style="background:var(--scav)"></span>Scav&nbsp; <span class="dot" style="background:var(--shared)"></span>Co-op (ikisi de gerekli) — yalnızca «Çıkışlar» bölümünde işaretlenenler görünür. Kat rozeti = çıkış başka bir katta`,
  legendMarkerLine:'<span class="dot" style="background:#888"></span>Daire=görev hedefi (harf A/B..)　📌=senin notun (eklemek için sağ tık)',
  legendHazardLine:"Kesikli çerçeve=tehlikeli bölge. Girmek tehlikelidir",
  legendColorLine:"Harita renkleri (tarkov.dev'den): koyu gri=iç mekân / taralı=merdiven・rampa / açık mavi=su / kesikli=harita sınırı",
  legendLhTitle:"Harita simgeleri (re3mr.com çizimi)",
  legendLhAiScav:"Yapay zekâ Scav doğma noktası", legendLhRogues:"Rogue doğma noktası", legendLhGoons:"Goons devriye alanı",
  legendLhPmcSpawn:"PMC doğma noktası", legendLhCache:"Zula", legendLhRogueCache:"Rogue zulası",
  legendLhBoss:"Boss (Zryachiy)", legendLhBossGuard:"Boss koruması", legendLhBtrStop:"BTR durağı",
  condClimb:items=>`Yanında bulunsun (envanterin herhangi bir yerinde): ${items}. Zırh yeleğini çıkar`,
  condNoBag:"Sırt çantasını çıkar (hiç çanta olmayacak, boyutu fark etmez)",
  condHandIn:item=>`Çıkışta teslim et: ${item}`,
  condPay:amt=>`Öde: ${amt} (kişi başı, en fazla 4 kişi, baskın başına bir kez)`,
  condFlare:item=>`Sinyal bölgesinde yeşil işaret fişeği at (${item})`,
  condD2:"Komuta ofislerindeki şalterle elektriği aç, sonra kapı düğmesine bas",
  condBunker:"Dışarıdaki şalterle jeneratörü çalıştır, sonra ~4 dk içinde çık (alarm, Raider'lar)",
  condSaferoom:"Santralde elektriği geri getir, Object #11SR kartıyla içeri gir ve kapıyı kilitle (tek kullanımlık)",
  condLabElev:a=>`Elektrik kutusunu kullan (${a}); Raider'lar çıkabilir`,
  condSewage:"Kontrol panelinden suyu boşalt (~80 sn)",
  condLabGate:a=>`Kontrol panelini kullan (${a}). Her baskında çalışmaz ve alarmı tetikler. TerraGroup Labs kartı (sarı) alarmı önceden kapatabilir (isteğe bağlı)`,
  condTrainReserve:"Baskının sonlarına doğru gelir (yaklaşık 20–10 dk kala) ve yaklaşık 7,5 dk kalır",
  condTrain:"Belirli bir saatte gelen ve kısa süre kalan bir tren",
  condWayUp:"Baskın başladıktan 15 dakika sonra açılır",
  condVexLh:"Fiyat henüz doğrulanmadı. Araç her baskında bulunmaz. Konum, harita çizimine göre elle yerleştirildi",
  tcondLabCard:"1 adet TerraGroup Labs giriş kartı gerekir (tek kullanımlık)",
  tcondLabrys:"Labrys giriş kartı gerekir (Resort batı kanadının bodrumundaki kapı)",
  tcondTerminal:"Yalnızca oyun saatiyle 21:00–6:00 arası. Ayrıca hikâye ilerlemesi ve bir giriş kartı gerekir (harcanır)",
  tcondSudak:"1 adet Sudak-Tudak tekne tamir kiti gerekir (tek kullanımlık)",
  transitTo:d=>`Transit → ${d}`,
  transitRules:"• Baskın başladıktan 1 dk sonra kullanılabilir<br>• Kullanınca diğer tüm çıkışlar devre dışı kalır<br>• Geçmek için bölgede 20 sn kal (çıkarsan süre 30 sn'ye sıfırlanır)",
  transitGo:d=>`Haritayı aç: ${d}`,
  transitUnsupported:"Bu hedef harita araç tarafından desteklenmiyor",
  condLbl:k=>({climb:"RR+ip", nobag:"Çantasız", item:"Teslim", card:"Kart", tool:"Alet", flare:"Fişek", pay:"Ödeme", power:"Elektrik", timer:"Saat"})[k],
  condNoArmorRow:"Zırh yeleğini çıkar", condNoBagRow:"Sırt çantasını çıkar", condFlareRow:"Sinyal bölgesinde at (yalnızca yeşil)", condPopupHead:"Gereksinimler",
  exitCondNote:"Rozetli çıkış ve transitlerin gereksinimleri var (görmek için fareyle üzerine gel). Yalnızca kullanacaklarını işaretlersen, gerekenler baskın öncesi kontrolde görünür.",
  prepExit:"🚪 Çıkış ve transitlerinin gereksinimleri",
  legendCondLine:"Bir çıkışın veya transitin sol üstündeki rozet = gereksinimi var (ayrıntılar için tıkla):",
  prereqLabel:"Gerekli: ", nextLabel:"Sonraki: ", andMore:" tane daha",
  shareCopiedAlert:"Bağlantı kopyalandı. Arkadaşına gönder.",
  sharePromptCopy:"Bu bağlantıyı kopyalayıp arkadaşına gönder:",
  sharePromptLoad:"Kodu (#s= sonrasını) ya da bağlantının tamamını yapıştır:",
  shareLoadedAlert:"Paylaşılan veriler yüklendi.",
  shareLoadFailedAlert:msg=>`Yüklenemedi: ${msg}`,
  ttBtn:"TarkovTracker'dan içe aktar", ttTitle:"TarkovTracker'dan ilerlemeyi içe aktar",
  ttHow:"<ol><li>TarkovTracker (tarkovtracker.org) ayarlarından ilerlemenin <b>yedeğini (dışa aktarma)</b> JSON olarak kaydet</li><li>Dosyayı aşağıdan seç ya da içeriğini yapıştır</li></ol>Tamamlanan / başarısız görevler, tamamlanan hedefler ve seviyen aktarılabilir.",
  ttPrivacy:"🔒 Dosya yalnızca bu tarayıcıda işlenir, hiçbir yere gönderilmez.",
  ttPasteLabel:"Ya da JSON içeriğini yapıştır:",
  ttErrJson:"JSON olarak okunamadı. Bunun bir yedek dosyası olduğundan emin ol.",
  ttErrFormat:"Bu bir TarkovTracker yedek dosyası değil.",
  ttErrEmpty:"İçe aktarılabilecek ilerleme bulunamadı.",
  modeLabel:"Oyun modu", modePvp:"PvP", modePve:"PvE", modeSeasonal:"Sezon",
  modeHintPvp:"Normal PvP karakteri. İlerleme (tamamlanan görevler, seviye…) her mod için ayrı kaydedilir.",
  modeHintPve:"PvE karakteri. PvE'deki görevlere, çıkışlara ve bosslara geçer (ilerleme PvP'den ayrıdır).",
  modeHintSeasonal:"Sezonluk PvP karakteri (her sezon wipe). Normal görevler PvP ile aynı verileri kullanır; sezona özel görevler (Kord Breach) henüz kapsanmıyor. İlerleme ayrı kaydedilir.",
  ttTarget:(n,cur)=>cur ? `Aktarılacak mod: <b>${n}</b> (şu an gösterilen mod)` : `Aktarılacak mod: <b>${n}</b> (gösterilen moddan farklı; o moda geçince geçerli olur)`,
  ttOtherMode:(n)=>`«${n}» moduna kaydedildi. Görmek için üstteki mod düğmeleriyle bu moda geç.`,
  ttEmptyProfile:"Bu kaynakta ilerleme yok. Yukarıdaki «İçe aktarma modu» bölümünden ilerlemesi olan bir mod seç.",
  menuBtn:"☰ Menü", closeMenu:"Kapat",
  jumpTitle:"Haritada göster (görevi seçer ve doğru harita ile kattaki işaretlerine gider)", jumpNoPins:"Gösterilecek işaret yok (koordinat yok ya da zaten tamamlandı)",
  helpBtn:"Yardım", helpTitle:"Nasıl kullanılır", helpClose:"Kapat",
  fbLink:"💬 Görüş / istek gönder", fbSub:"Fikirler ve hata bildirimleri memnuniyetle (anonim olabilir)", fbBtn:"Görüş / hata bildir", fbTitle:"Görüş / hata bildir",
  fbIntro:"İstediğin özelliği, çalışmayan bir şeyi ya da bulduğun hatayı yaz. Gönderdiklerini <b>yalnızca geliştirici görür</b> (herkese açık değildir). Giriş, isim ya da e-posta gerekmez. Lütfen kişisel bilgi yazma. Her zaman yanıt verilemeyebilir.",
  fbTypeIdea:"💡 Özellik isteği", fbTypeBug:"🐞 Hata", fbTypeOther:"💬 Diğer", fbTypeTr:"🌐 Çeviri düzeltmesi", fbMsgPhTr:"ör. «○○» yerine «△△» daha doğal olur (nerede gördüğünü yazarsan çok yardımcı olur)", installBtn:"📲 Uygulama olarak yükle", installTip:"Adres çubuğu olmadan kendi penceresinde açılır — ikinci monitörde kullanmak için pratik (Chrome / Edge)", installDone:"Yüklendi. Masaüstünden ya da Başlat menüsünden açabilirsin.",
  fbMsgLabel:"Mesaj", fbMsgPh:"ör. X görevinin işareti yanlış yerde / Şöyle bir özellik isterim…",
  fbInfoLabel:"Birlikte gönderilen bilgiler (kontrol edebilirsin)",
  fbCopy:"Metni kopyala", fbSend:"Gönder", fbCopied:"Kopyalandı.", fbEmpty:"Lütfen bir mesaj yaz.",
  fbSent:"Gönderildi. Görüşün için teşekkürler!", fbSending:"Gönderiliyor…", fbWait:"Tekrar göndermeden önce biraz bekle.", fbSendErr:"Gönderilemedi. Bağlantını kontrol et ya da aşağıdaki «Formu doğrudan aç» düğmesini kullan.", fbDirect:"Formu doğrudan aç",
  guideMore:"Ayrıntılı kılavuzu istediğin zaman kenar çubuğunun üstündeki «Yardım» düğmesinden açabilirsin.",
  helpBody:`
<details open><summary>1. Hızlı başlangıç</summary><div><ol>
<li>Sol üstte <b>oyun modunu</b> (PvP / PvE / Sezon) oynadığın moda ayarla.</li>
<li>Kenar çubuğunda <b>tüccara</b> veya <b>haritaya</b> göre filtrele ve <b>bu baskının görevlerini</b> işaretle.</li>
<li>Haritayı üstteki sekmelerden değiştir. Seçili görevlerin hedefleri <b>işaret</b> olarak görünür. Açıklamayı, koşulları ve önceki/sonraki görevleri görmek için fareyle bir işaretin üzerine gel.</li>
<li><b>Çıkışlar</b> bölümünde kullanacağın çıkışları işaretle (→ 5.).</li>
<li>Pencereyi ikinci monitörüne taşı ve tam ekran için <span class="k">F11</span> tuşuna bas.</li>
</ol></div></details>

<details><summary>2. Oyun modları (PvP / PvE / Sezon)</summary><div>
<p>Oyunda her mod ayrı bir karakterdir, bu yüzden <b>araç ilerlemeyi her mod için ayrı kaydeder</b> (tamamlanan/başarısız görevler, seviye, seçili görevler, seçilen çıkışlar). Mod değiştirince sayfa yeniden yüklenir.</p>
<ul>
<li><b>PvP</b>: normal PvP karakteri.</li>
<li><b>PvE</b>: PvE görevlerine ([PVE ZONE]), çıkışlarına, bosslarına ve doğma noktalarına geçer.</li>
<li><b>Sezon</b>: sezonluk karakter (wipe olur). Kendine ait bir veri kaynağı olmadığı için normal görevler PvP verilerini kullanır. <b>Sezona özel görevler (Kord Breach) kapsanmıyor</b>.</li>
</ul></div></details>

<details><summary>3. Haritayı okumak</summary><div><ul>
<li><b>Kat düğmeleri</b> (haritanın üstünde): çok katlı haritalarda katı değiştirir. Üst katlarda, yön bulman için zemin kat altta soluk olarak gösterilir. Her düğmedeki sayı, o kattaki işaretlerinin sayısıdır.</li>
<li><b>İşaret renkleri ve harfleri</b>: her görevin bir rengi ve harfi (A, B, C…) vardır; görev listesindekiyle aynıdır.</li>
<li><b>📍 düğmesi</b> (her görev satırında): görevi seçer, gerekirse haritayı ve katı değiştirir ve işaretlerine gider (çevresinde bir halka yanıp söner).</li>
<li><b>Lejant</b>: sol alttaki «Lejant ▼» simgeleri ve renkleri açıklar.</li>
<li><b>Katmanlar</b>: «Katmanlar / Paylaş» bölümünden transitleri, tehlikeli bölgeleri, kilitli kapıları, şalterleri, bossları ve doğma noktalarını açıp kapatabilirsin.</li>
<li><b>Rota numaraları</b>: açıkken işaretler en kısa yol sırasına göre ①②③… numarası alır ve bir çizgiyle bağlanır.</li>
<li><b>Kendi işaretlerin</b>: haritaya <b>sağ tıklayınca</b> notlu bir işaret eklenir (düzenlemek/silmek için işarete tıkla).</li>
<li><b>Parlaklık / Kontrast</b>: haritanın sol üstündeki kaydırıcılar.</li>
</ul></div></details>

<details><summary>4. Görev listesindeki işaretler ve tamamlananlar</summary><div><ul>
<li><span class="k">★</span> … Kappa konteyneri için gereken görev. «Yalnızca Kappa ★» yalnızca bunları gösterir.</li>
<li><b>A / B / C rozetleri</b>: sol üstteki «Seçilenler» altındaki her görevin, işaretleriyle aynı renk ve harfte bir rozeti vardır. Rozetleri karşılaştır ya da görev adını görmek için fareyle bir işaretin üzerine gel.</li>
<li><b>Daha büyük harita</b>: sol üstteki «◀ Daha büyük harita» tüm sol paneli daraltır ve harita ekranı doldurur. Daraltılınca haritanın sol üstündeki <b>▶</b> paneli yeniden açar (tercih hatırlanır).</li>
<li><b>İki sütun</b>: solda «Seçilenler → Baskın öncesi kontrol → Çıkışlar → Hikâye → Ayarlar»; sağda «Görev seç» (Filtre ve arama → görev listesi). Yalnızca sağ sütunu daraltabilirsin (daraltılınca haritanın üstündeki «🗂 Görev seç» yeniden açar). Dar ekranlarda alt alta dizilir.</li>
<li><b>Harita özeti</b>: seçili görevlerin altında her harita için görev ve hedef sayısı görünür. En dolu olana «En iyi» rozeti verilir; satıra tıklayınca o haritaya geçilir. Bir satır ayrıca şimdi alabileceğin en çok görevin olduğu haritaları gösterir (seviyeni veya tamamlanan görevlerini girdiğinde). Her harita sekmesindeki sayı, seçili görevlerinin oradaki hedef sayısıdır (koordinatı olmayan hedefler dahil).</li>
<li><span class="k">○ / ✓</span> … bir görevi tamamlandı olarak işaretlemek / geri almak için tıkla. Tamamlanan görevler listeden kendiliğinden kaybolur; «Tamamlananları göster» onları geri getirir.</li>
<li><span class="k">⚠</span> … başarısızlık koşulu olan görev (görmek için fareyle üzerine gel ya da görevi seç). <b>Birbirini dışlayan görevler</b> de buna dahildir (birini tamamlamak diğerini başarısız yapar) — adlarıyla gösterilir.</li>
<li><span class="k">✗ kilitli</span> … dışlayan karşı görevi zaten tamamladın, bu görev artık alınamaz. Listeden ve «Şimdi alınabilir» bölümünden gizlenir.</li>
<li><span class="k">✗ başarısız</span> … başarısız olan görev (TarkovTracker içe aktarmasıyla işaretlenir). Listeden ve «Şimdi alınabilir» bölümünden gizlenir.</li>
<li><b>Lv</b> kutusuna seviyeni yazarsan «<b>▶ Şimdi alınabilir</b>» bölümü, ön koşulları tamamlanmış ve seviye şartını karşıladığın görevleri gösterir.</li>
<li>Co-op'ta <b>kendi seçtiğin</b> ya da <b>bağlantıyla aldığın</b> görevler tamamlansa bile «✓ tamamlandı» rozetiyle görünür kalır.</li>
</ul></div></details>

<details><summary>5. Çıkışları seçmek</summary><div>
<p>«Çıkışlar» bölümünde önce <b>PMC ya da Scav</b> seç, sonra kullanacağın çıkışları işaretle — haritada <b>yalnızca işaretlenenler</b> görünür. «Tümünü göster / Tümünü gizle» düğmeleri de var. Renkler: yeşil = PMC, mavi = Scav, turuncu = ortak. PvE modunda PvE çıkışları gösterilir.</p>
<p><b>Gereksinimi olan çıkışların</b> harita işaretinin sol üstünde ve listede bir rozeti vardır (🧗 Red Rebel buz baltası + paracord, zırh yeleği yok / 🎒 sırt çantası yok / 📜 eşya teslimi / 💳 kart / 🎆 yeşil işaret fişeği / 💰 ödeme / ⚡ elektrik ya da kontrol paneli / ⏱️ zamana bağlı). Ayrıntılar için fareyle üzerine gel (telefonda dokun). Yalnızca kullanacağın çıkışları işaretlersen, gerekenler baskın öncesi kontrolde «🚪 Çıkışlarının gereksinimleri» altında görünür. Fiyatlar ve teslim edilecek eşyalar tarkov.dev verilerinden gelir; geri kalanı yalnızca doğrulanmış bilgilerle elle eklendi.</p>
<p><b>Transitler</b> (mor T) varsayılan olarak görünür («Katmanlar» bölümünden gizleyebilirsin). Tıklayınca hedef, gereksinimler, temel kurallar ve «Haritayı aç» düğmesi görünür. Kart ya da eşya gerektiren transitlerde aynı rozetler bulunur (💳 / 🔧 / ⏱️). Transitler «Çıkışlar» bölümünün sonunda da listelenir — yalnızca kullanacaklarını işaretlersen gereken kart ya da eşyalar baskın öncesi kontrolde görünür.</p>
</div></details>

<details><summary>6. Baskın öncesi kontrol</summary><div>
<p>«Baskın öncesi kontrol» paneli, seçili görevlerinin neye ihtiyaç duyduğunu gösterir. Satırlardaki işaretler kaydedilir («Sıfırla» temizler).</p>
<ul><li>🔑 götürülecek anahtarlar / 📤 götürülecek ya da yerleştirilecek eşyalar / 📥 baskında toplanacak eşyalar (FiR = baskında bulunmuş olmalı) / 🎯 silah ve ekipman gereksinimleri (kullanılacak silahlar, gerekli parçalar, giyilecek ekipman — çok sayıdaysa tüm listeyi görmek için fareyle üzerine gel)</li></ul>
<p>Seçili görevlerinin tüm haritalarda gerektirdiği her şeyi tek listede görmek için başlıktaki <b>«Tüm haritalar»</b> düğmesine bas (miktarlar toplanır, her eşyanın haritaları gösterilir). «Bu harita» geri döner.</p>
<p>Haritanın üstündeki <b>baskın zamanlayıcısı</b> haritanın süre sınırını geri sayar (5 dk'da sarı, 2 dk'da kırmızı).</p>
</div></details>

<details><summary>7. Hikâye bölümleri</summary><div>
<p>Tüccar görevlerinin yanında hikâye bölümleri için bir <b>hedef kontrol listesi</b> de var (Tour / Falling Skies / Batya / The Unheard / Blue Fire / They Are Already Here / Accidental Witness / The Labyrinth / The Ticket / Boreas). Her bölümün hedeflerini görmek için kenar çubuğunda <b>«Hikâye»</b> bölümünü aç.</p>
<ul>
<li>İlerlemeni kaydetmek için hedefleri işaretle (her mod için ayrı). «Tüm ana hedefleri tamamla» ve «Tümünü temizle» düğmeleri de var.</li>
<li>Hikâye hedeflerinin <b>koordinat verisi olmadığı için haritada işaret görünmez</b>. Açıklamalar İngilizcedir.</li>
<li>Bir hikâye hedefini ön koşul olarak isteyen tüccar görevlerinde <span class="k">📖</span> işareti bulunur (karşılanmamışsa ön koşul gösterilir; karşılanınca ✓).</li>
<li>TarkovTracker içe aktarması tamamlanan bölümleri de getirir.</li>
</ul></div></details>

<details><summary>8. TarkovTracker'dan içe aktarma</summary><div>
<p>İlerlemesini zaten TarkovTracker'da tutanlar için: tamamlanan ve başarısız görevleri, tamamlanan hedefleri ve seviyeni tek seferde aktar.</p>
<ol>
<li>TarkovTracker (tarkovtracker.org) ayarlarından yedeği (dışa aktarma) <b>.json</b> olarak kaydet.</li>
<li>Burada «Katmanlar / Paylaş» bölümünü aç, <b>TarkovTracker'dan içe aktar</b> düğmesine bas ve dosyayı seç (ya da yapıştır).</li>
<li>Özeti kontrol et ve <b>İçe aktar</b> düğmesine bas. «Yalnızca ekle / Üzerine yaz» seçebilir ve hemen ardından geri alabilirsin.</li>
</ol>
<p>Dosya yalnızca tarayıcında işlenir ve hiçbir yere gönderilmez. Dosyada seçilen <b>profille aynı moda</b> kaydedilir (PvE ilerlemesi PvE'ye gider; gösterilen moddan farklıysa o moda geçince geçerli olur). TarkovTracker kullanmıyorsan bunu yok say — tamamladıklarını ○/✓ ile elle de işaretleyebilirsin.</p>
</div></details>

<details><summary>9. Paylaşım bağlantıları</summary><div>
<p>«Bağlantı oluştur», mevcut durumu (mod, seçili görevler, tamamlananlar, seviye, kendi işaretlerin, harita, seçilen çıkışlar) URL olarak kopyalar. Bağlantıyı açan ya da «Kodu yükle» bölümüne yapıştıran arkadaşın aynı durumu görür. Başarısız görevler ve tamamlanan hedefler paylaşılmaz.</p>
<p><b>𝕏'te paylaş</b>: seçtiğin görevlerle (harita adı ve sayısı) bir X gönderisi açar. Göndermeden önce metni değiştirebilirsin.</p>
<p><b>📺 Yayın kaplaması</b>: OBS vb. ile yayınının üstüne koyabileceğin şeffaf bir görünüm. Yalnızca geçerli haritadaki seçili görevlerinin hedeflerini gösterir. Penceresindeki adımları izleyip URL'yi OBS'te bir “Tarayıcı” kaynağına yapıştır. Aynı tarayıcıda ayrı bir pencere olarak açarsan, seçimini her değiştirdiğinde kendini günceller.</p>
</div></details>

<details><summary>10. Verileri güncelleme ve sorunlar</summary><div><ul>
<li><b>Yedek</b>: ilerlemen (seçili görevler, tamamlanan görevler, seviye, işaretlemeler, kendi işaretlerin vb.) yalnızca bu tarayıcıda saklanır. Tarayıcı verilerini silmeden ya da bilgisayar değiştirmeden önce «Katmanlar ve paylaşım» bölümündeki <b>Yedeği dışa aktar</b> ile bir dosyaya kaydet ve yeni yerde <b>Yedeği içe aktar</b> düğmesine bas (mevcut veriler dosyanın içeriğiyle değiştirilir). İlerlemen varsa ama 30+ gündür yedek almadıysan, sol sütunun üstünde küçük bir hatırlatma çıkar («Sonra» 14 gün gizler).</li>
<li><b>Verileri güncelle</b>: wipe sonrasında ya da yeni görevler geldiğinde bas. Görevleri, çıkışları, boss doğma noktalarını vb. günceller (ayrıca kabaca günde bir kez kendiliğinden güncellenir).</li>
<li>Veriler yüklenmezse: bağlantını kontrol et ve «Verileri güncelle» düğmesine bas. Yüklenemezse araçla gelen veriler kullanılır ve «⚠ Eski» gösterilir.</li>
<li>Harita siyah görünüyor: görsel sunucusu yoğun — biraz bekleyip sayfayı yenile.</li>
<li>Harita çizimi yeni düzene uymuyor (ör. Lighthouse): tarkov.dev güncelleyene kadar çizim eski kalır; haritanın üstünde bir uyarı görünür.</li>
<li>Görev, eşya, harita ve çıkış adları oyundaki gibi Türkçe görünür (tarkov.dev çevirisi; çevirisi olmayanlar — oyunda da olduğu gibi — İngilizce).</li>
<li><b>İstatistikler</b>: neyin geliştirilmesi gerektiğini görmek için yalnızca ziyaretleri, her özelliğin kaç kez kullanıldığını ve sayfanın yaklaşık ne kadar açık kaldığını anonim olarak sayıyoruz (GoatCounter, çerezsiz). Seçtiğin görevlerin adları, ilerlemen ve yazdığın hiçbir şey gönderilmez.</li>
<li>Özellik isteklerini, hataları ve görüşlerini harita sekmelerinin sağ ucundaki «💬 Görüş / istek gönder» düğmesinden (ya da bu pencerenin altındaki düğmeden) gönderebilirsin.</li>
</ul></div></details>

<details><summary>11. Güvenlik (ban yemekten mi korkuyorsun?)</summary><div>
<p>Bu araç <b>tamamen ayrı bir web sayfasıdır</b> — tarayıcıda açtığın harici bir harita, tarkov.dev ile aynı türde bir araç.</p>
<ul>
<li>Oyunun programına, belleğine, dosyalarına ya da ağ trafiğine <b>asla dokunmaz</b> (okuma, değiştirme, enjeksiyon yok).</li>
<li>Ekranını kaydetmez, oyun kayıtlarını okumaz. Oyundan hiçbir şey almaz ve konumunu takip etmez.</li>
<li>Yalnızca <b>tarkov.dev'in herkese açık verilerini ve haritalarını</b> ve senin seçtiğin görevleri kullanır. Seçimin ve ilerlemen yalnızca kendi tarayıcında saklanır.</li>
<li>Kurulacak bir şey yok; oyunu kontrol eden ya da otomatikleştiren hiçbir özellik yok.</li>
</ul>
<p>Oyun verilerini okuyan ya da değiştiren araçlardan (hileler) tamamen farklı çalışır. Yine de Battlestate Games (BSG) onayı olmayan <b>resmî olmayan bir hayran aracıdır</b>, bu yüzden hiçbir şey olmayacağına söz veremeyiz — emin değilsen lütfen BSG'nin resmî koşullarını oku.</p>
</div></details>

<p class="muted">Bu araç oyuna asla müdahale etmez (bellek okuma ya da enjeksiyon yok). tarkov.dev'in herkese açık verilerini ve haritalarını kullanır (haritalar: CC BY-NC-SA 4.0).</p>`,
  ttModeLabel:"Oyun modu:", ttModePvp:"PvP", ttModePve:"PvE", ttModeSeasonal:"Sezon",
  ttSummary:(lv,c,cKnown,f,o,st)=>`Seviye <b>${lv||"-"}</b> / tamamlanan görevler <b>${c}</b> (burada tanınan: ${cKnown}) / başarısız <b>${f}</b> / tamamlanan hedefler <b>${o}</b> / hikâye hedefleri <b>${st}</b>`,
  storySection:"Hikâye", storyHint:"Hikâye bölümlerinin hedef listesi (haritada işaret yok — koordinat verisi yok). Açıklamalar İngilizcedir.",
  storyNone:"Hikâye verileri yüklenemedi (Verileri güncelle düğmesine bas).", storyOptional:"isteğe bağlı",
  storyDoneAll:"Tüm ana hedefleri tamamla", storyClear:"Tümünü temizle", storyReqLabel:"Gerekli hikâye hedefi:",
  ttMerge:"Yalnızca ekle (tamamladıklarımı koru)", ttOverwrite:"Üzerine yaz (TarkovTracker ile aynı)",
  ttLevelLabel:lv=>`Seviyeyi de aktar (Lv ${lv})`,
  ttRun:"İçe aktar", ttClose:"Kapat", ttUndoBtn:"Son içe aktarmayı geri al",
  ttDoneMsg:(c,f,o,st)=>`Aktarıldı: ${c} tamamlanan / ${f} başarısız / ${o} hedef / ${st} hikâye hedefi`,
  ttUndoneMsg:"Geri yüklendi.",
  failBadge:"✗ başarısız", lockedBadge:"✗ kilitli",
  failExclusive:(n)=>`Şunu tamamlarsan bu görev başarısız olur: ${n}`,
  failGenShoot:"Belirli hedefleri öldürmeyle ilgili bir başarısızlık koşulu var", failGenStanding:"Tüccardaki itibarına göre başarısız olabilir",
  failGenPlant:"Eşya yerleştirmeyle ilgili bir başarısızlık koşulu var", failGenUse:"Eşya kullanmayla ilgili bir başarısızlık koşulu var",
  failGenExtract:"Ölürsen ya da baskından çıkış yapmadan ayrılırsan başarısız olur", failGenVisit:"Bir başarısızlık koşulu var", failGenOther:"Bir başarısızlık koşulu var",
  prepHeader:mjp=>`Baskın öncesi kontrol — ${mjp}`,
  prepEmpty:"Bu haritada anahtar gerekmiyor ve toplaman gereken bir şey yok (yalnızca işaretler).",
  prepKeys:"🔑 Götürülecek anahtarlar", prepBring:"📤 Götür (yerleştir/işaretle)", prepCollect:"📥 Orada bul",
  prepHeaderAll:"Baskın öncesi kontrol — tüm haritalar", prepAllBtn:"Tüm haritalar", prepOneBtn:"Bu harita", prepAllTip:"Seçili tüm görevlerin tüm haritalarda neye ihtiyaç duyduğunu gösterir", prepOneTip:"Gösterilen haritaya dön",
  prepAnyMap:"Herhangi bir harita", prepEmptyAll:"Seçili görevlerin anahtar, toplanacak eşya ya da ekipman gerektirmiyor.",
  bkNote:"İlerlemen (seçilen ve tamamlanan görevler, seviye vb.) otomatik olarak yalnızca bu tarayıcıya kaydedilir. Cihaz değiştirmeden ya da tarayıcı verilerini silmeden önce dışa aktar.",
  bkRemind:d=>`${d}+ gündür yedek alınmadı. İlerlemeyi şimdi yedeklemek ister misin?`, bkRemindNow:"Dışa aktar", bkRemindLater:"Sonra",
  bkExportBtn:"Yedeği dışa aktar", bkImportBtn:"Yedeği içe aktar", bkExported:n=>`Yedek dışa aktarıldı (${n} öğe)`, bkBad:"Bu dosya yedek olarak okunamıyor.", bkConfirm:n=>`Yedek içe aktarılsın mı (${n} öğe)? Mevcut seçimin, tamamlanan görevlerin, seviyen, işaretlemelerin, kendi işaretlerin vb. dosyanın içeriğiyle değiştirilecek.`, bkReplaced:"İçe aktarıldı. Yeniden yükleniyor…",
  collapseBtn:"◀ Daha büyük harita", collapseTip:"Haritayı büyütmek için sol paneli daralt (daraltılınca haritanın sol üstündeki ▶ yeniden açar)", reopenTip:"Sol paneli aç",
  pickTitle:"Görev seç", pkCollapseTip:"Yalnızca bu sütunu daralt (Görev seç)", pkReopenBtn:"🗂 Görev seç", pkReopenTip:"«Görev seç» sütununu aç",
  filtSection:"Filtre ve arama", settingsSection:"Ayarlar (katmanlar, paylaşım, yedek)", selEmpty:"Seçtiğin görevler burada A / B / C… rozetleriyle görünür (sağdaki «Görev seç» sütunundan görev seç).", chipTip:l=>`Harita işareti «${l}»`,
  mapSumFoldTip:"Daraltmak / genişletmek için tıkla",
  mapSumTitle:"Harita özeti (seçili görevler)", mapSumBest:"En iyi", mapSumCount:(t,o)=>`${t} görev · ${o} hedef`, mapSumDoable:"Şimdi alabileceğin en çok görevin olduğu haritalar:",
  prepGear:"🎯 Silah ve ekipman gereksinimleri", gearWeapons:"Silahlar", gearMods:"Gerekli parçalar", gearWear:"Giy", gearNotWear:n=>`Belirtilen ekipmanı giyme (${n} parça)`, gearMore:n=>`+${n} tane daha`,
  pinPromptAdd:"Bu işaret için not (ör. keskin nişancıya dikkat / mola noktası)",
  pinPromptEdit:"Notu düzenle",
  pinPopupMemo:"Not", pinPopupEmpty:"<span style='color:#888'>(yok)</span>",
  pinEdit:"Düzenle", pinDelete:"Sil",
  mapLoading:jp=>`Yükleniyor: ${jp}…`,
  mapAttribution:'Harita: <a href="https://tarkov.dev" target="_blank">tarkov.dev</a> (CC BY-NC-SA)',
  lighthouseArtCredit:'Lighthouse harita çizimi: <a href="https://reemr.se/Lighthouse/" target="_blank">re3mr.com</a> (CC BY-NC-SA 4.0)',
  fetchingFirst:"En güncel veriler json.tarkov.dev'den yükleniyor… (ilk seferde biraz sürer)",
  fetchingData:"En güncel veriler json.tarkov.dev'den yükleniyor…",
  fetchFailed:msg=>`<div class="err">Veriler yüklenemedi.<br>${msg}<br><br>Bağlantını kontrol et ve «Verileri güncelle» düğmesine bas.</div>`,
  fetchFailedAlert:msg=>`Yüklenemedi: ${msg}`,
  staleData:"⚠ Eski: ", updatedData:"Güncellendi: ",
  leafletLoadError:'<div class="err">Harita kütüphanesi (Leaflet) yüklenemedi.<br>İnternet bağlantını kontrol edip sayfayı yenile.</div>',
  noTaskData:"Görev verileri boş",
  bodyHead:"Kafa", bodyThorax:"Göğüs", bodyStomach:"Karın", bodyLeftArm:"Sol kol", bodyRightArm:"Sağ kol", bodyLeftLeg:"Sol bacak", bodyRightLeg:"Sağ bacak",
  condShoot:parts=>"İsabet: " + parts.join("/"),
  condDistIn:v=>`${v} m içinden`, condDistOut:v=>`${v} m'den uzaktan`,
  condWeaponOnly:n=>`yalnızca belirli silahlar (${n})`, condWearing:"belirli ekipmanı giy", condNotWearing:"belirli ekipmanı çıkar",
  condTimeRange:(a,b)=>`${a}:00–${b}:00`, condKillCount:n=>`Öldürme×${n}`,
  attrErgo:"Ergonomi", attrAccuracy:"İsabet (MOA)", attrDurability:"Dayanıklılık", attrRecoilV:"Dikey geri tepme",
  attrRecoilH:"Yatay geri tepme", attrWeight:"Ağırlık", attrEffDist:"Etkili menzil", attrMagCap:"Şarjör kapasitesi", attrMuzzleV:"Namlu çıkış hızı",
  objVisit:"Bir yeri ziyaret et", objFindItem:"Eşya bul", objFindQuestItem:"Görev eşyası bul",
  objGiveItem:"Eşya teslim et", objGiveQuestItem:"Görev eşyası teslim et", objPlantItem:"Eşya yerleştir",
  objPlantQuestItem:"Görev eşyası yerleştir", objMark:"İşaretle", objShoot:"Etkisiz hale getir (öldür)",
  objExtract:"Bölgeden çık", objBuildWeapon:"Silah topla", objUseItem:"Eşya kullan",
  objSellItem:"Bit Pazarı'nda sat", objExperience:"Bir koşulu yerine getir", objSkill:"Beceri seviyesine ulaş",
  objTraderLevel:"Tüccar sadakat seviyesi", objTraderStanding:"Tüccardaki itibar",
  objTaskStatus:"Başka bir görevin durumu", objDialogue:"Diyalog", objGlobalVariable:"İlerleme işareti",
  // 𝕏 で共有・配信用の表示(?obs=1)
  xShareBtn:"𝕏'te paylaş", xShareTip:"Seçtiğin görevlerle ilgili bir X gönderisi açar (göndermeden önce metni değiştirebilirsin)",
  xShareText:(map, n, first)=>`Bugün ${map} haritasında ${n} görev (${first}${n > 1 ? " ve diğerleri" : ""}). Hedefler ve çıkışlar tek haritada`,
  xShareGeneric:"Tarkov görevlerimi planlıyorum: hedefler ve çıkışlar tek haritada", obsBtn:"📺 Yayın kaplaması", obsTip:"OBS ve diğer yayın programları için şeffaf kaplama",
  obsTitle:"Yayın kaplaması (OBS vb.)",
  obsHow:`<ol><li>OBS'te “Kaynaklar” altındaki <b>+</b> düğmesine bas ve bir <b>Tarayıcı</b> kaynağı ekle.</li><li>Aşağıdaki URL'yi <b>URL</b> alanına yapıştır ve boyutu yaklaşık <b>450</b> × <b>700</b> yap.</li><li>Arka plan şeffaftır. Yalnızca geçerli haritadaki seçili görevlerinin hedefleri görünür (haritadaki işaretlerle aynı A, B, C harfleriyle).</li></ol>`,
  obsCopyBtn:"URL'yi kopyala", obsCopied:"Kopyalandı",
  obsNote:"Görevleri veya haritayı değiştirirsen URL'yi yeniden kopyalayıp OBS'te değiştir (OBS verilerini bu tarayıcıdan ayrı tutar, bu yüzden kendiliğinden güncellenmez).",
  obsWindowBtn:"Ayrı pencerede aç (kendini günceller)",
  obsWindowNote:"Bu tarayıcıda ayrı bir pencere olarak açarsan, araçta görevleri veya haritayı her değiştirdiğinde o da değişir. İkinci monitöre koyabilir ya da OBS'te “Pencere Yakalama” ile alabilirsin.",
  obsCount:n=>`${n} görev`, obsEmpty:"Bu haritada seçili görev yok", obsHelpBar:"Yayın kaplaması (OBS içinde bu not görünmez; kapatmak için ×)",
  };
})();
