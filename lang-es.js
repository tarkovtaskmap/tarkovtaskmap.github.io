/* Interfaz en español. Los nombres de misiones, objetos, mapas, extracciones, etc. vienen de la traducción de tarkov.dev (como en el juego).
   Los textos de la interfaz los tradujo el desarrollador con ayuda de traducción automática — si algo suena raro, avísanos desde «Comentarios».
   Si falta algún texto, se muestra en inglés. */
(function(){
  const s = (n, one, many) => n === 1 ? one : many;
  window.__STR_ES__ = {
  appTitle:"Tarkov — Mapa de misiones",
  refresh:"Actualizar datos", traderAll:"▼ Comerciante (todos)", mapAll:"▼ Mapa (todos)",
  followCurrentMap:"[Seguir el mapa actual]", searchPlaceholder:"Buscar por nombre de misión…",
  clearSel:"Borrar selección", kappaOnly:"Solo Kappa ★", lvLabel:"Nv", showDone:"Mostrar completadas",
  supportLink:"☕ Apoya la herramienta en Ko-fi", supportBtn:"☕ Apoyar",
  supportBtnTitle:"¡Gracias por usar la herramienta! Siempre será gratis. Si te ahorra tiempo, una propina en Ko-fi me alegraría — totalmente opcional.",
  supportBtnSub:"¡Gracias por usarla! (opcional)",
  layersSection:"Capas / Compartir", optTransit:"Tránsito (entre mapas)",
  hintExitBelow:"※ Las extracciones se eligen arriba, en la sección «Extracciones»", optHazard:"Zonas peligrosas", optLock:"Puertas cerradas",
  optSwitch:"Interruptores", optBoss:"Jefes", optSpawn:"Apariciones", optIcons:"Iconos",
  optRoute:"Números de ruta (①②③…)", shareCreateBtn:"Crear enlace", shareLoadBtn:"Cargar código",
  exitSection:"Extracciones", hintFactionSelect:"Elige con qué entras en esta incursión", showAll:"Mostrar todas", hideAll:"Ocultar todas",
  exitHint:(shown,total)=>`${shown} / ${total} extracciones visibles`, noExitData:"No hay datos de extracciones para este mapa",
  brightHead:"Brillo / Contraste", brightToggleTitle:"Abrir / cerrar (minimizar)",
  brightness:"Brillo", brightnessTitle:"Brillo del mapa", contrast:"Contraste", contrastTitle:"Contraste del mapa",
  reset:"Restablecer", raidStart:"Iniciar incursión",
  guideTitle:"¿Primera vez aquí?",
  guideStep1:"En <b>«Elegir misiones»</b> (a la derecha), filtra por comerciante o mapa y marca las misiones de esta incursión. Aparecen a la izquierda en «Seleccionadas» con las letras A / B / C…, igual que los pines del mapa.",
  guideStep2:"Cambia de mapa con las pestañas de arriba. Pasa el ratón sobre un pin para ver el nombre de la misión.",
  guideStep3:"En la sección <b>Extracciones</b> de la izquierda, elige con qué entras (PMC/Scav) y marca las extracciones que vas a usar → solo esas aparecen en el mapa (verde=PMC / azul=Scav / naranja=compartida).",
  guideStep4:"Mueve esta ventana a tu segundo monitor y pulsa <b>F11</b> para pantalla completa — así se lee mejor.",
  guideStep5:"Tras un wipe o cuando salgan misiones nuevas, pulsa <b>Actualizar datos</b> a la derecha.",
  guideStep6:"Tu progreso (misiones seleccionadas y completadas, nivel, etc.) <b>se guarda automáticamente en este navegador</b>. Antes de cambiar de PC o borrar los datos del navegador, guárdalo con <b>Exportar copia</b> en «Ajustes» a la izquierda.",
  guideM1:"Abre el <b>☰ Menú</b> (arriba a la derecha), baja hasta <b>«Elegir misiones»</b>, filtra por comerciante o mapa y marca las misiones de esta incursión.",
  guideM2:"Toca fuera del menú (la zona oscura) para volver al mapa — tus misiones aparecen como pines. Toca un pin para ver el nombre de la misión.",
  guideM3:"Desliza las pestañas de arriba para cambiar de mapa. Las extracciones que vas a usar se eligen en el menú, en <b>Extracciones</b>.",
  guideM4:"Tu progreso (misiones seleccionadas y completadas, etc.) <b>se guarda automáticamente en este navegador</b>.",
  taskListLink:"📋 Lista de todas las misiones (en inglés)", taskLinkMissing:"Esta misión no está en los datos del modo actual (prueba a cambiar entre PvP / PvE).",
  guideStart:"Empezar", loadingInitial:"Cargando datos…",
  multipleOrNone:"Varios / ninguno", doneBadge:"✓ completada (tú)", markDoneTitle:"Marcar como completada",
  searchPrefix:mn=>`Búsqueda: ${mn}`, searchResults:"Resultados", noMatch:"Sin resultados", selectedHeader:"Seleccionadas",
  filterHint:"Filtra arriba por «Comerciante» o «Mapa» para ver las misiones en orden alfabético. También puedes buscar directamente por nombre.",
  availableNow:"▶ Disponibles ahora", noQuestsToShow:"No hay misiones que mostrar (revisa los filtros)",
  labelSep:" / ",
  selCount:n=>`${n} ${s(n,"misión seleccionada","misiones seleccionadas")}`,
  progressDone:(dn,total)=>`Completadas <b>${dn}</b>/${total}`,
  progressKappa:(kapDn,kapAll)=>` ・ Necesarias para Kappa <b>${kapDn}</b>/${kapAll}`,
  progressLK:(lkDn,lkAll)=>` ・ Lightkeeper <b>${lkDn}</b>/${lkAll}`,
  unknownName:"(desconocido)", kindPMC:"PMC", kindScav:"Scav", kindShared:"Compartida", sharedGlyph:"C",
  kindCoop:"Co-op (hacen falta ambos)", coopListNote:"🟠 «Co-op» = solo se puede usar si hay un PMC y un Scav",
  floorNote:floor=>`※ Esta extracción está en la planta ${floor} (no en la que estás viendo)`,
  extractPopup:(name,kind,fac)=>`<b>Extracción: ${name}</b><br>Tipo: ${kind} (esta incursión: ${fac==="scav"?"Scav":"PMC"})`,
  transitLabel:"Tránsito", transitPopup:desc=>`<b>Tránsito</b><br>${desc}`,
  hazardSniper:"Zona de tiro del Scav francotirador", hazardMinefield:"Campo de minas", hazardOther:"Zona peligrosa",
  dangerousAreaPopup:label=>`<b>${label}</b><br><span style="color:#888">Esta zona es peligrosa</span>`,
  lockedDoor:"Puerta cerrada", lockType:"Tipo", needsPower:"※ Necesita electricidad", lockGlyph:"P", routeLabel:"Ruta", floorLabel:"Planta:",
  lockPopup:(type,power)=>`<b>Puerta cerrada</b><br>Tipo: ${type}${power?"<br>※ Necesita electricidad":""}`,
  switchLabel:"Interruptor", switchPopup:name=>`<b>Interruptor</b><br><span style="color:#555">${name}</span>`,
  spawnChanceApprox:pct=>`Probabilidad de aparición ~${pct}%`,
  spawnPoint:"Punto de aparición", sideOther:x=>x,
  optionalTag:" (opcional)", conditionsLabel:"Condiciones: ",
  noCoordHeader:"Sin coordenadas en este mapa (consulta la wiki)",
  noQuestSelected:"No hay misiones seleccionadas",
  legendSniper:"Zona de tiro del francotirador", legendMinefield:"Campo de minas", legendOtherHazard:"Otro peligro",
  legendLockedDoor:"Puerta cerrada", legendSwitch:"Interruptor", legendBoss:"Aparición de jefe",
  legendPmcSpawn:"Aparición de PMC", legendScavSpawn:"Aparición de Scav", legendRoute:"— — Ruta (orden numerado)",
  legendToggle:open=>`Leyenda ${open?"▲":"▼"}`,
  legendExitLine:fac=>`Extracciones (esta incursión: <b>${fac==="scav"?"Scav":"PMC"}</b>): <span class="dot" style="background:var(--ok)"></span>PMC&nbsp; <span class="dot" style="background:var(--scav)"></span>Scav&nbsp; <span class="dot" style="background:var(--shared)"></span>Co-op (hacen falta ambos) — solo se ven las marcadas en «Extracciones». Distintivo de planta = la extracción está en otra planta`,
  legendMarkerLine:'<span class="dot" style="background:#888"></span>Círculo=objetivo de misión (letra A/B..)　📌=tu nota (clic derecho para añadir)',
  legendHazardLine:"Borde discontinuo=zona peligrosa. Entrar es peligroso",
  legendColorLine:"Colores del mapa (de tarkov.dev): gris oscuro=interiores / rayado=escaleras・rampas / azul claro=agua / discontinuo=límite del mapa",
  legendLhTitle:"Iconos del mapa (gráfico de re3mr.com)",
  legendLhAiScav:"Aparición de Scav IA", legendLhRogues:"Aparición de Rogues", legendLhGoons:"Zona de patrulla de los Goons",
  legendLhPmcSpawn:"Aparición de PMC", legendLhCache:"Alijo", legendLhRogueCache:"Alijo de Rogues",
  legendLhBoss:"Jefe (Zryachiy)", legendLhBossGuard:"Escolta del jefe", legendLhBtrStop:"Parada del BTR",
  condClimb:items=>`Llevar ${items} (en cualquier lugar del inventario) y quitarse el chaleco antibalas`,
  condNoBag:"Quitarse la mochila (nada de mochila, de ningún tamaño)",
  condHandIn:item=>`Entregar ${item} en la salida`,
  condPay:amt=>`Pagar ${amt} (por persona, hasta 4, una vez por incursión)`,
  condFlare:item=>`Disparar una bengala verde en la zona de señal (${item})`,
  condD2:"Activar la electricidad con la palanca de las oficinas de mando y luego pulsar el botón de la puerta",
  condBunker:"Arrancar el generador con la palanca de fuera y salir en ~4 min (alarma, Raiders)",
  condSaferoom:"Restablecer la electricidad en la central, entrar con la tarjeta Object #11SR y cerrar la puerta (de un solo uso)",
  condLabElev:a=>`Usar la caja eléctrica (en ${a}); pueden aparecer Raiders`,
  condSewage:"Vaciar el agua desde el panel de control (~80 s)",
  condLabGate:a=>`Usar el panel de control (${a}). No funciona en todas las incursiones y activa la alarma. Una tarjeta TerraGroup Labs (amarilla) puede desactivar la alarma antes (opcional)`,
  condTrainReserve:"Llega tarde en la incursión (con unos 20–10 min restantes) y se queda unos 7,5 min",
  condTrain:"Un tren que llega a una hora fija y se queda poco tiempo",
  condWayUp:"Se abre 15 minutos después del inicio de la incursión",
  condVexLh:"Precio aún no confirmado. El coche no está en todas las incursiones. Posición colocada a mano según el gráfico del mapa",
  tcondLabCard:"Necesita 1 tarjeta de acceso de TerraGroup Labs (de un solo uso)",
  tcondLabrys:"Necesita una tarjeta de acceso de Labrys (puerta en el sótano del ala oeste del Resort)",
  tcondTerminal:"Solo de 21:00 a 6:00 (hora del juego). También necesita progreso de la historia y una tarjeta de acceso (se consume)",
  tcondSudak:"Necesita 1 kit de reparación de barco Sudak-Tudak (de un solo uso)",
  transitTo:d=>`Tránsito → ${d}`,
  transitRules:"• Se puede usar desde 1 min después del inicio<br>• Usarlo desactiva todas las demás extracciones<br>• Quédate 20 s en la zona para cambiar (salir reinicia a 30 s)",
  transitGo:d=>`Abrir mapa: ${d}`,
  transitUnsupported:"La herramienta no admite este mapa de destino",
  condLbl:k=>({climb:"RR+cuerda", nobag:"Sin mochila", item:"Entrega", card:"Tarjeta", tool:"Herramienta", flare:"Bengala", pay:"Pago", power:"Electricidad", timer:"Hora"})[k],
  condNoArmorRow:"Quitarse el chaleco", condNoBagRow:"Quitarse la mochila", condFlareRow:"Disparar en la zona de señal (solo verde)", condPopupHead:"Requisitos",
  exitCondNote:"Las extracciones y tránsitos con distintivo tienen requisitos (pasa el ratón para verlos). Marca solo los que vas a usar y lo que necesitas aparecerá en la revisión previa.",
  prepExit:"🚪 Requisitos de tus extracciones y tránsitos",
  legendCondLine:"Distintivo arriba a la izquierda de una extracción o tránsito = tiene requisitos (clic para ver detalles):",
  prereqLabel:"Requiere: ", nextLabel:"Después: ", andMore:" más",
  shareCopiedAlert:"Enlace copiado. Envíaselo a tu amigo.",
  sharePromptCopy:"Copia este enlace y envíaselo a tu amigo:",
  sharePromptLoad:"Pega el código (después de #s=) o el enlace completo:",
  shareLoadedAlert:"Datos compartidos cargados.",
  shareLoadFailedAlert:msg=>`Error al cargar: ${msg}`,
  ttBtn:"Importar de TarkovTracker", ttTitle:"Importar progreso de TarkovTracker",
  ttHow:"<ol><li>En los ajustes de TarkovTracker (tarkovtracker.org), guarda una <b>copia de seguridad (exportar)</b> de tu progreso como JSON</li><li>Elige el archivo abajo o pega su contenido</li></ol>Se pueden importar misiones completadas / fallidas, objetivos completados y tu nivel.",
  ttPrivacy:"🔒 El archivo se procesa solo en este navegador y no se envía a ningún sitio.",
  ttPasteLabel:"O pega el contenido JSON:",
  ttErrJson:"No se pudo leer como JSON. Comprueba que sea un archivo de copia de seguridad.",
  ttErrFormat:"No es un archivo de copia de seguridad de TarkovTracker.",
  ttErrEmpty:"No se encontró progreso que se pueda importar.",
  modeLabel:"Modo de juego", modePvp:"PvP", modePve:"PvE", modeSeasonal:"Temporada",
  modeHintPvp:"Personaje normal de PvP. El progreso (misiones completadas, nivel…) se guarda por separado en cada modo.",
  modeHintPve:"Personaje de PvE. Cambia a las misiones, extracciones y jefes de PvE (progreso separado del de PvP).",
  modeHintSeasonal:"Personaje de PvP de temporada (wipe cada temporada). Las misiones normales usan los mismos datos que PvP; las misiones exclusivas de temporada (Kord Breach) aún no están cubiertas. El progreso se guarda por separado.",
  ttTarget:(n,cur)=>cur ? `Importar en: <b>${n}</b> (el modo que estás viendo)` : `Importar en: <b>${n}</b> (distinto del modo que estás viendo; se aplica al cambiar)`,
  ttOtherMode:(n)=>`Guardado en el modo «${n}». Cambia a ${n} con los botones de modo de arriba para verlo.`,
  ttEmptyProfile:"No hay progreso en esta fuente. Elige arriba, en «Modo de importación», un modo que tenga progreso.",
  menuBtn:"☰ Menú", closeMenu:"Cerrar",
  jumpTitle:"Mostrar en el mapa (selecciona la misión y salta a sus pines en el mapa y la planta correctos)", jumpNoPins:"No hay pines que mostrar (sin coordenadas o ya completada)",
  helpBtn:"Ayuda", helpTitle:"Cómo se usa", helpClose:"Cerrar",
  fbLink:"💬 Enviar comentario / petición", fbSub:"Ideas e informes de errores bienvenidos (puede ser anónimo)", fbBtn:"Comentarios / informar de un error", fbTitle:"Comentarios / informar de un error",
  fbIntro:"Cuéntanos qué función te gustaría, qué no funciona o qué error has encontrado. Lo que envíes <b>solo lo ve el desarrollador</b> (no es público). No hace falta iniciar sesión, nombre ni correo. Por favor, no incluyas datos personales. No siempre es posible responder.",
  fbTypeIdea:"💡 Petición de función", fbTypeBug:"🐞 Error", fbTypeOther:"💬 Otro", fbTypeTr:"🌐 Corregir traducción", fbMsgPhTr:"p. ej. «○○» sonaría más natural como «△△» (si puedes, di dónde aparece)", installBtn:"📲 Instalar como app", installTip:"Se abre en su propia ventana sin barra de direcciones — práctico en un segundo monitor (Chrome / Edge)", installDone:"Instalada. Puedes abrirla desde el escritorio o el menú Inicio.",
  fbMsgLabel:"Mensaje", fbMsgPh:"p. ej. El pin de la misión X está en un sitio equivocado / Me gustaría una función que…",
  fbInfoLabel:"Información que se envía (puedes revisarla)",
  fbCopy:"Copiar texto", fbSend:"Enviar", fbCopied:"Copiado.", fbEmpty:"Escribe un mensaje.",
  fbSent:"Enviado. ¡Gracias por tu comentario!", fbSending:"Enviando…", fbWait:"Espera un momento antes de enviar otra vez.", fbSendErr:"No se pudo enviar. Revisa la conexión o usa «Abrir el formulario directamente» abajo.", fbDirect:"Abrir el formulario directamente",
  guideMore:"Encontrarás la guía completa en cualquier momento con el botón «Ayuda» de la parte superior de la barra lateral.",
  helpBody:`
<details open><summary>1. Inicio rápido</summary><div><ol>
<li>Arriba a la izquierda, pon el <b>modo de juego</b> (PvP / PvE / Temporada) en el que juegas.</li>
<li>En la barra lateral, filtra por <b>comerciante</b> o <b>mapa</b> y marca las <b>misiones de esta incursión</b>.</li>
<li>Cambia de mapa con las pestañas de arriba. Los objetivos de las misiones seleccionadas aparecen como <b>pines</b>. Pasa el ratón sobre un pin para ver la descripción, las condiciones y las misiones anteriores y siguientes.</li>
<li>En la sección <b>Extracciones</b>, marca las extracciones que vas a usar (→ 5.).</li>
<li>Mueve la ventana a tu segundo monitor y pulsa <span class="k">F11</span> para pantalla completa.</li>
</ol></div></details>

<details><summary>2. Modos de juego (PvP / PvE / Temporada)</summary><div>
<p>En el juego, cada modo es un personaje distinto, así que <b>la herramienta guarda el progreso por modo</b> (misiones completadas/fallidas, nivel, misiones seleccionadas, extracciones elegidas). Al cambiar se recarga la página.</p>
<ul>
<li><b>PvP</b>: el personaje normal de PvP.</li>
<li><b>PvE</b>: cambia a las misiones de PvE ([PVE ZONE]), extracciones, jefes y apariciones.</li>
<li><b>Temporada</b>: el personaje de temporada (con wipe). No tiene fuente de datos propia, así que las misiones normales usan los datos de PvP. <b>Las misiones exclusivas de temporada (Kord Breach) no están cubiertas</b>.</li>
</ul></div></details>

<details><summary>3. Cómo leer el mapa</summary><div><ul>
<li><b>Botones de planta</b> (encima del mapa): cambian de planta en los mapas de varios pisos. En las plantas superiores, la planta baja se muestra tenue debajo como referencia. El número de cada botón es la cantidad de tus pines en esa planta.</li>
<li><b>Colores y letras de los pines</b>: cada misión tiene un color y una letra (A, B, C…), igual que en la lista de misiones.</li>
<li><b>Botón 📍</b> (en cada fila de misión): selecciona la misión, cambia de mapa y planta si hace falta y salta a sus pines (un anillo parpadea alrededor).</li>
<li><b>Leyenda</b>: «Leyenda ▼» abajo a la izquierda explica los iconos y colores.</li>
<li><b>Capas</b>: en «Capas / Compartir» activas o desactivas tránsitos, zonas peligrosas, puertas cerradas, interruptores, jefes y apariciones.</li>
<li><b>Números de ruta</b>: al activarlos, los pines reciben ①②③… en el orden del camino más corto, unidos por una línea.</li>
<li><b>Pines propios</b>: <b>clic derecho</b> en el mapa añade un pin con una nota (clic en el pin para editar/borrar).</li>
<li><b>Brillo / Contraste</b>: controles arriba a la izquierda del mapa.</li>
</ul></div></details>

<details><summary>4. Marcas de la lista de misiones y completadas</summary><div><ul>
<li><span class="k">★</span> … misión necesaria para el contenedor Kappa. «Solo Kappa ★» muestra solo esas.</li>
<li><b>Distintivos A / B / C</b>: cada misión en «Seleccionadas» (arriba a la izquierda) tiene un distintivo del mismo color y letra que sus pines. Compara los distintivos o pasa el ratón sobre un pin para ver el nombre de la misión.</li>
<li><b>Mapa más grande</b>: «◀ Mapa más grande» arriba a la izquierda pliega todo el panel izquierdo para que el mapa ocupe la pantalla. Plegado, <b>▶</b> arriba a la izquierda del mapa lo vuelve a abrir (se recuerda).</li>
<li><b>Dos columnas</b>: a la izquierda «Seleccionadas → Revisión previa → Extracciones → Historia → Ajustes»; a la derecha «Elegir misiones» (Filtros y búsqueda → lista de misiones). Puedes plegar solo la columna derecha (plegada, «🗂 Elegir misiones» encima del mapa la vuelve a abrir). En pantallas estrechas se apilan.</li>
<li><b>Resumen por mapa</b>: bajo las misiones seleccionadas, cada mapa muestra el número de misiones y objetivos. El más lleno recibe el distintivo «Mejor»; un clic en la fila cambia a ese mapa. Una fila muestra además los mapas con más misiones que puedes aceptar ahora (en cuanto introduces nivel o misiones completadas). El número de cada pestaña de mapa es la cantidad de objetivos de tus misiones seleccionadas allí (incluidos los que no tienen coordenadas).</li>
<li><span class="k">○ / ✓</span> … clic para marcar una misión como completada / deshacer. Las completadas desaparecen solas de la lista; «Mostrar completadas» las recupera.</li>
<li><span class="k">⚠</span> … misión con condición de fallo (pasa el ratón o selecciónala para verla). Incluye las <b>misiones mutuamente excluyentes</b> (completar una hace fallar la otra), con su nombre.</li>
<li><span class="k">✗ bloqueada</span> … ya completaste la misión excluyente, así que esta ya no se puede aceptar. Se oculta de la lista y de «Disponibles ahora».</li>
<li><span class="k">✗ fallida</span> … misión fallida (marcada al importar de TarkovTracker). Se oculta de la lista y de «Disponibles ahora».</li>
<li>Escribe tu nivel en <b>Nv</b> y la sección «<b>▶ Disponibles ahora</b>» mostrará las misiones cuyos requisitos previos están completados y cuyo nivel cumples.</li>
<li>En co-op, las misiones que <b>seleccionaste tú</b> o que <b>recibiste por enlace</b> siguen visibles aunque estén completadas, con el distintivo «✓ completada».</li>
</ul></div></details>

<details><summary>5. Elegir extracciones</summary><div>
<p>En la sección «Extracciones», elige primero <b>PMC o Scav</b> y luego marca las extracciones que vas a usar — en el mapa aparecen <b>solo las marcadas</b>. Hay botones «Mostrar todas / Ocultar todas». Colores: verde = PMC, azul = Scav, naranja = compartida. En el modo PvE se muestran las extracciones de PvE.</p>
<p><b>Las extracciones con requisitos</b> llevan un distintivo arriba a la izquierda del marcador y en la lista (🧗 piolet Red Rebel + paracord, sin chaleco / 🎒 sin mochila / 📜 entregar un objeto / 💳 tarjeta / 🎆 bengala verde / 💰 pago / ⚡ electricidad o panel de control / ⏱️ con horario). Pasa el ratón (o toca en el móvil) para ver los detalles. Si marcas solo las extracciones que vas a usar, lo que necesitas aparece en la revisión previa, en «🚪 Requisitos de tus extracciones». Los precios y objetos de entrega vienen de los datos de tarkov.dev; lo demás se añadió a mano solo con información comprobada.</p>
<p><b>Los tránsitos</b> (T morada) se ven por defecto (ocúltalos en «Capas»). Un clic muestra el destino, los requisitos, las reglas principales y un botón «Abrir mapa». Los tránsitos que necesitan tarjeta u objeto llevan los mismos distintivos (💳 / 🔧 / ⏱️). Los tránsitos también aparecen al final de la sección «Extracciones» — marca solo los que vas a usar y las tarjetas u objetos necesarios aparecerán en la revisión previa.</p>
</div></details>

<details><summary>6. Revisión previa a la incursión</summary><div>
<p>El panel «Revisión previa» muestra lo que necesitan tus misiones seleccionadas. Las casillas de cada fila se guardan («Restablecer» las borra).</p>
<ul><li>🔑 llaves que llevar / 📤 objetos que llevar o colocar / 📥 objetos que recoger en la incursión (FiR = encontrado en incursión) / 🎯 requisitos de armas y equipo (armas que usar, accesorios necesarios, equipo que llevar puesto — si hay muchos, pasa el ratón para ver la lista completa)</li></ul>
<p>Pulsa <b>«Todos los mapas»</b> en la cabecera para ver en una sola lista todo lo que necesitan tus misiones seleccionadas en todos los mapas (las cantidades se suman y cada objeto muestra sus mapas). «Este mapa» vuelve atrás.</p>
<p>El <b>temporizador de incursión</b> encima del mapa cuenta hacia atrás el tiempo límite del mapa (amarillo a los 5 min, rojo a los 2 min).</p>
</div></details>

<details><summary>7. Capítulos de la historia</summary><div>
<p>Además de las misiones de comerciantes, hay una <b>lista de objetivos</b> para los capítulos de la historia (Tour / Falling Skies / Batya / The Unheard / Blue Fire / They Are Already Here / Accidental Witness / The Labyrinth / The Ticket / Boreas). Abre <b>«Historia»</b> en la barra lateral para ver los objetivos de cada capítulo.</p>
<ul>
<li>Marca los objetivos para llevar tu progreso (separado por modo). También hay botones «Completar todos los objetivos principales» y «Borrar todo».</li>
<li>Los objetivos de la historia <b>no tienen coordenadas, así que no aparecen pines en el mapa</b>. Las descripciones están en inglés.</li>
<li>Las misiones de comerciantes que requieren un objetivo de la historia llevan la marca <span class="k">📖</span> (las no cumplidas muestran el requisito; ✓ cuando está cumplido).</li>
<li>La importación de TarkovTracker también trae los capítulos completados.</li>
</ul></div></details>

<details><summary>8. Importar de TarkovTracker</summary><div>
<p>Para quienes ya llevan su progreso en TarkovTracker: importa de una vez las misiones completadas y fallidas, los objetivos completados y tu nivel.</p>
<ol>
<li>En los ajustes de TarkovTracker (tarkovtracker.org), guarda la copia de seguridad (exportar) como <b>.json</b>.</li>
<li>Aquí, abre «Capas / Compartir», pulsa <b>Importar de TarkovTracker</b> y elige el archivo (o pégalo).</li>
<li>Revisa el resumen y pulsa <b>Importar</b>. Puedes elegir «Solo añadir / Sobrescribir» y deshacerlo justo después.</li>
</ol>
<p>El archivo se procesa solo en tu navegador y no se envía a ningún sitio. Se guarda en el <b>mismo modo que el perfil elegido</b> del archivo (el progreso de PvE va a PvE; si es distinto del modo que estás viendo, se aplica al cambiar). Si no usas TarkovTracker, ignora esto — también puedes marcar lo completado a mano con ○/✓.</p>
</div></details>

<details><summary>9. Enlaces para compartir</summary><div>
<p>«Crear enlace» copia el estado actual (modo, misiones seleccionadas, completadas, nivel, pines propios, mapa, extracciones elegidas) como URL. Un amigo que lo abra o lo pegue en «Cargar código» recibe el mismo estado. Las misiones fallidas y los objetivos completados no se comparten.</p>
<p><b>Compartir en 𝕏</b>: abre una publicación de X con tus misiones seleccionadas (nombre del mapa y cantidad). Puedes editar el texto antes de publicar.</p>
<p><b>📺 Overlay para stream</b>: una vista transparente que puedes poner encima de tu stream en OBS, etc. Solo muestra los objetivos de tus misiones seleccionadas en el mapa actual. Sigue los pasos de su ventana y pega la URL en una fuente «Navegador» de OBS. Abierta como otra ventana en el mismo navegador, se actualiza sola cada vez que cambias tu selección.</p>
</div></details>

<details><summary>10. Actualizar datos y problemas</summary><div><ul>
<li><b>Copia de seguridad</b>: tu progreso (misiones seleccionadas, completadas, nivel, casillas, pines propios, etc.) solo se guarda en este navegador. Antes de borrar los datos del navegador o cambiar de PC, guárdalo en un archivo con <b>Exportar copia</b> en «Capas y compartir» y pulsa <b>Importar copia</b> en el nuevo sitio (sustituye los datos actuales por el contenido del archivo). Si tienes progreso pero llevas 30+ días sin copia, aparece un pequeño aviso arriba en la columna izquierda («Más tarde» lo oculta 14 días).</li>
<li><b>Actualizar datos</b>: púlsalo tras un wipe o cuando salgan misiones nuevas. Actualiza misiones, extracciones, apariciones de jefes, etc. (además se actualiza solo una vez al día, más o menos).</li>
<li>Si los datos no cargan: revisa la conexión y pulsa «Actualizar datos». Si no se pueden cargar, se usan los datos incluidos y se muestra «⚠ desactualizado».</li>
<li>El mapa se ve negro: el servidor de imágenes está saturado — espera un poco y recarga.</li>
<li>El gráfico del mapa no coincide con el nuevo diseño (p. ej. Lighthouse): el gráfico seguirá siendo el antiguo hasta que tarkov.dev lo actualice; aparece un aviso encima del mapa.</li>
<li>Los nombres de misiones, objetos, mapas y extracciones aparecen en español, como en el juego (traducción de tarkov.dev; donde no la hay, en inglés).</li>
<li><b>Estadísticas</b>: para saber qué mejorar, contamos de forma anónima solo las visitas, cuántas veces se usa cada función y aproximadamente cuánto tiempo está abierta la página (GoatCounter, sin cookies). Los nombres de las misiones que eliges, tu progreso y lo que escribes nunca se envían.</li>
<li>Puedes enviar peticiones, errores y comentarios con el botón «💬 Enviar comentario / petición» a la derecha, al final de las pestañas de mapas (o con el botón de abajo de esta ventana).</li>
</ul></div></details>

<details><summary>11. Seguridad (¿miedo a un baneo?)</summary><div>
<p>Esta herramienta es una <b>página web totalmente independiente</b> — un mapa externo que simplemente abres en el navegador, el mismo tipo de herramienta que tarkov.dev.</p>
<ul>
<li><b>Nunca toca</b> el programa del juego, su memoria, sus archivos ni su tráfico de red (no lee, no modifica, no inyecta nada).</li>
<li>No graba tu pantalla ni lee los registros del juego. No saca nada del juego ni sigue tu posición.</li>
<li>Solo usa <b>datos y mapas públicos de tarkov.dev</b> y las misiones que tú eliges. Tu selección y tu progreso se guardan solo en tu propio navegador.</li>
<li>No hay nada que instalar ni ninguna función que controle o automatice el juego.</li>
</ul>
<p>Funciona de forma completamente distinta a las herramientas que leen o modifican los datos del juego (trampas). Aun así, es una <b>herramienta no oficial hecha por fans</b>, sin aprobación de Battlestate Games (BSG), así que no podemos prometer que nunca pase nada — si tienes dudas, lee los términos oficiales de BSG.</p>
</div></details>

<p class="muted">Esta herramienta nunca interfiere con el juego (no lee la memoria ni inyecta nada). Usa datos y mapas públicos de tarkov.dev (mapas: CC BY-NC-SA 4.0).</p>`,
  ttModeLabel:"Modo de juego:", ttModePvp:"PvP", ttModePve:"PvE", ttModeSeasonal:"Temporada",
  ttSummary:(lv,c,cKnown,f,o,st)=>`Nivel <b>${lv||"-"}</b> / misiones completadas <b>${c}</b> (${cKnown} reconocidas aquí) / fallidas <b>${f}</b> / objetivos completados <b>${o}</b> / objetivos de historia <b>${st}</b>`,
  storySection:"Historia", storyHint:"Lista de objetivos de los capítulos de la historia (sin pines en el mapa — no hay datos de coordenadas). Las descripciones están en inglés.",
  storyNone:"No se pudieron cargar los datos de la historia (pulsa Actualizar datos).", storyOptional:"opcional",
  storyDoneAll:"Completar todos los objetivos principales", storyClear:"Borrar todo", storyReqLabel:"Requiere objetivo de historia:",
  ttMerge:"Solo añadir (mantener lo que ya completé)", ttOverwrite:"Sobrescribir (igual que TarkovTracker)",
  ttLevelLabel:lv=>`Importar también el nivel (Nv ${lv})`,
  ttRun:"Importar", ttClose:"Cerrar", ttUndoBtn:"Deshacer la última importación",
  ttDoneMsg:(c,f,o,st)=>`Importado: ${c} completadas / ${f} fallidas / ${o} objetivos / ${st} objetivos de historia`,
  ttUndoneMsg:"Restaurado.",
  failBadge:"✗ fallida", lockedBadge:"✗ bloqueada",
  failExclusive:(n)=>`Esta misión falla si completas: ${n}`,
  failGenShoot:"Tiene una condición de fallo por matar ciertos objetivos", failGenStanding:"Puede fallar según tu reputación con el comerciante",
  failGenPlant:"Tiene una condición de fallo al colocar objetos", failGenUse:"Tiene una condición de fallo al usar objetos",
  failGenExtract:"Falla si mueres o sales de la incursión sin extraer", failGenVisit:"Tiene una condición de fallo", failGenOther:"Tiene una condición de fallo",
  prepHeader:mjp=>`Revisión previa — ${mjp}`,
  prepEmpty:"En este mapa no necesitas llaves ni tienes que recoger nada (solo pines).",
  prepKeys:"🔑 Llaves que llevar", prepBring:"📤 Llevar (colocar/marcar)", prepCollect:"📥 Encontrar allí",
  prepHeaderAll:"Revisión previa — todos los mapas", prepAllBtn:"Todos los mapas", prepOneBtn:"Este mapa", prepAllTip:"Muestra lo que necesitan todas las misiones seleccionadas en todos los mapas", prepOneTip:"Volver al mapa que estás viendo",
  prepAnyMap:"Cualquier mapa", prepEmptyAll:"Tus misiones seleccionadas no necesitan llaves, objetos que recoger ni equipo.",
  bkNote:"Tu progreso (misiones seleccionadas y completadas, nivel, etc.) se guarda automáticamente solo en este navegador. Expórtalo antes de cambiar de dispositivo o borrar los datos del navegador.",
  bkRemind:d=>`Llevas ${d}+ días sin copia de seguridad. ¿Guardar el progreso ahora?`, bkRemindNow:"Exportar", bkRemindLater:"Más tarde",
  bkExportBtn:"Exportar copia", bkImportBtn:"Importar copia", bkExported:n=>`Copia exportada (${n} ${s(n,"elemento","elementos")})`, bkBad:"Este archivo no se puede leer como copia de seguridad.", bkConfirm:n=>`¿Importar la copia (${n} ${s(n,"elemento","elementos")})? Tu selección actual, misiones completadas, nivel, casillas, pines propios, etc. se sustituirán por el contenido del archivo.`, bkReplaced:"Importado. Recargando…",
  collapseBtn:"◀ Mapa más grande", collapseTip:"Plegar el panel izquierdo para agrandar el mapa (plegado, ▶ arriba a la izquierda del mapa lo vuelve a abrir)", reopenTip:"Abrir el panel izquierdo",
  pickTitle:"Elegir misiones", pkCollapseTip:"Plegar solo esta columna (Elegir misiones)", pkReopenBtn:"🗂 Elegir misiones", pkReopenTip:"Abrir la columna «Elegir misiones»",
  filtSection:"Filtros y búsqueda", settingsSection:"Ajustes (capas, compartir, copia de seguridad)", selEmpty:"Aquí aparecen tus misiones seleccionadas con los distintivos A / B / C… (elige misiones en la columna «Elegir misiones» de la derecha).", chipTip:l=>`Pin del mapa «${l}»`,
  mapSumFoldTip:"Clic para plegar / desplegar",
  mapSumTitle:"Resumen por mapa (misiones seleccionadas)", mapSumBest:"Mejor", mapSumCount:(t,o)=>`${t} ${s(t,"misión","misiones")} · ${o} ${s(o,"objetivo","objetivos")}`, mapSumDoable:"Mapas con más misiones que puedes aceptar ahora:",
  prepGear:"🎯 Requisitos de armas y equipo", gearWeapons:"Armas", gearMods:"Accesorios necesarios", gearWear:"Llevar puesto", gearNotWear:n=>`No llevar el equipo indicado (${n} ${s(n,"pieza","piezas")})`, gearMore:n=>`+${n} más`,
  pinPromptAdd:"Nota para este pin (p. ej. cuidado con el francotirador / punto de descanso)",
  pinPromptEdit:"Editar nota",
  pinPopupMemo:"Nota", pinPopupEmpty:"<span style='color:#888'>(ninguna)</span>",
  pinEdit:"Editar", pinDelete:"Borrar",
  mapLoading:jp=>`Cargando ${jp}…`,
  mapAttribution:'Mapa: <a href="https://tarkov.dev" target="_blank">tarkov.dev</a> (CC BY-NC-SA)',
  lighthouseArtCredit:'Gráfico del mapa de Lighthouse: <a href="https://reemr.se/Lighthouse/" target="_blank">re3mr.com</a> (CC BY-NC-SA 4.0)',
  fetchingFirst:"Cargando los datos más recientes de json.tarkov.dev… (la primera vez tarda un poco)",
  fetchingData:"Cargando los datos más recientes de json.tarkov.dev…",
  fetchFailed:msg=>`<div class="err">No se pudieron cargar los datos.<br>${msg}<br><br>Revisa la conexión y pulsa «Actualizar datos».</div>`,
  fetchFailedAlert:msg=>`Error al cargar: ${msg}`,
  staleData:"⚠ Desactualizado: ", updatedData:"Actualizado: ",
  leafletLoadError:'<div class="err">No se pudo cargar la biblioteca del mapa (Leaflet).<br>Revisa tu conexión a internet y recarga la página.</div>',
  noTaskData:"Los datos de misiones están vacíos",
  bodyHead:"Cabeza", bodyThorax:"Tórax", bodyStomach:"Estómago", bodyLeftArm:"Brazo izquierdo", bodyRightArm:"Brazo derecho", bodyLeftLeg:"Pierna izquierda", bodyRightLeg:"Pierna derecha",
  condShoot:parts=>"Impacto: " + parts.join("/"),
  condDistIn:v=>`a menos de ${v} m`, condDistOut:v=>`a más de ${v} m`,
  condWeaponOnly:n=>`solo ciertas armas (${n})`, condWearing:"llevar cierto equipo", condNotWearing:"quitarse cierto equipo",
  condTimeRange:(a,b)=>`${a}:00–${b}:00`, condKillCount:n=>`Bajas×${n}`,
  attrErgo:"Ergonomía", attrAccuracy:"Precisión (MOA)", attrDurability:"Durabilidad", attrRecoilV:"Retroceso vert.",
  attrRecoilH:"Retroceso horiz.", attrWeight:"Peso", attrEffDist:"Alcance efectivo", attrMagCap:"Capacidad del cargador", attrMuzzleV:"Velocidad de salida",
  objVisit:"Visitar un lugar", objFindItem:"Encontrar objeto", objFindQuestItem:"Encontrar objeto de misión",
  objGiveItem:"Entregar objeto", objGiveQuestItem:"Entregar objeto de misión", objPlantItem:"Colocar objeto",
  objPlantQuestItem:"Colocar objeto de misión", objMark:"Marcar", objShoot:"Eliminar (matar)",
  objExtract:"Extraer del lugar", objBuildWeapon:"Montar arma", objUseItem:"Usar objeto",
  objSellItem:"Publicar en el Mercadillo", objExperience:"Cumplir una condición", objSkill:"Alcanzar nivel de habilidad",
  objTraderLevel:"Nivel de lealtad del comerciante", objTraderStanding:"Reputación con el comerciante",
  objTaskStatus:"Estado de otra misión", objDialogue:"Diálogo", objGlobalVariable:"Marca de progreso",
  // 𝕏 で共有・配信用の表示(?obs=1)
  xShareBtn:"Compartir en 𝕏", xShareTip:"Abre una publicación de X sobre tus misiones seleccionadas (puedes editar el texto antes de publicar)",
  xShareText:(map, n, first)=>`Hoy ${n} ${s(n,"misión","misiones")} en ${map} (${first}${n > 1 ? " y más" : ""}). Objetivos y extracciones en un solo mapa`,
  xShareGeneric:"Planeando mis misiones de Tarkov: objetivos y extracciones en un solo mapa", obsBtn:"📺 Overlay para stream", obsTip:"Overlay transparente para OBS y otros programas de streaming",
  obsTitle:"Overlay para stream (OBS, etc.)",
  obsHow:`<ol><li>En OBS, pulsa <b>+</b> en «Fuentes» y añade una fuente de <b>Navegador</b>.</li><li>Pega la URL de abajo en <b>URL</b> y pon un tamaño de unos <b>450</b> × <b>700</b>.</li><li>El fondo es transparente. Solo muestra los objetivos de tus misiones seleccionadas en el mapa actual (con las mismas letras A, B, C que los marcadores del mapa).</li></ol>`,
  obsCopyBtn:"Copiar URL", obsCopied:"Copiada",
  obsNote:"Si cambias de misiones o de mapa, vuelve a copiar la URL y reemplázala en OBS (OBS guarda sus datos aparte de este navegador, así que no se actualiza solo).",
  obsWindowBtn:"Abrir en otra ventana (se actualiza sola)",
  obsWindowNote:"Abierta como otra ventana en este navegador, cambia cada vez que cambias de misiones o de mapa en la herramienta. Ponla en un segundo monitor o captúrala en OBS con «Captura de ventana».",
  obsCount:n=>`${n} ${s(n,"misión","misiones")}`, obsEmpty:"No hay misiones seleccionadas en este mapa", obsHelpBar:"Overlay para stream (este aviso no aparece dentro de OBS; × para cerrar)",
  };
})();
