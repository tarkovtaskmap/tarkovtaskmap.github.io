/* Interface em português. Nomes de tarefas, itens, mapas, extrações etc. vêm da tradução do tarkov.dev (como no jogo).
   Os textos da interface foram traduzidos pelo autor com ajuda de tradução automática — se algo soar estranho, avise pelo “Feedback”.
   Quando falta um texto, aparece em inglês. */
(function(){
  const s = (n, one, many) => n === 1 ? one : many;
  window.__STR_PT__ = {
  appTitle:"Tarkov — Mapa de Tarefas",
  refresh:"Atualizar dados", traderAll:"▼ Comerciante (todos)", mapAll:"▼ Mapa (todos)",
  followCurrentMap:"[Seguir o mapa atual]", searchPlaceholder:"Buscar nome da tarefa…",
  clearSel:"Limpar seleção", kappaOnly:"Só Kappa ★", lvLabel:"Nv", showDone:"Mostrar concluídas",
  supportLink:"☕ Apoie a ferramenta no Ko-fi", supportBtn:"☕ Apoiar",
  supportBtnTitle:"Obrigado por usar! A ferramenta vai continuar sempre grátis. Se ela te poupa tempo, uma gorjeta no Ko-fi ajuda muito — totalmente opcional.",
  supportBtnSub:"Obrigado por usar! (opcional)",
  layersSection:"Camadas / compartilhar", optTransit:"Trânsito (entre mapas)",
  hintExitBelow:"※ Escolha as extrações na seção “Extrações” acima", optHazard:"Áreas de perigo", optLock:"Portas trancadas",
  optSwitch:"Interruptores", optBoss:"Chefes", optSpawn:"Spawns", optIcons:"Ícones",
  optRoute:"Numeração da rota (①②③…)", shareCreateBtn:"Criar link", shareLoadBtn:"Carregar código",
  exitSection:"Extrações", hintFactionSelect:"Escolha como você entra nesta raid", showAll:"Mostrar todas", hideAll:"Ocultar todas",
  exitHint:(shown,total)=>`Mostrando ${shown} / ${total} extrações`, noExitData:"Sem dados de extração para este mapa",
  brightHead:"Brilho / contraste", brightToggleTitle:"Abrir / fechar (minimizar)",
  brightness:"Brilho", brightnessTitle:"Brilho do mapa", contrast:"Contraste", contrastTitle:"Contraste do mapa",
  reset:"Redefinir", raidStart:"Iniciar raid",
  guideTitle:"Primeira vez aqui?",
  guideStep1:"Na coluna da direita <b>“Escolher tarefas”</b>, filtre por comerciante ou mapa e marque as tarefas que vai fazer nesta raid. Elas aparecem à esquerda em “Selecionadas” com as letras A / B / C… iguais aos pinos do mapa.",
  guideStep2:"Troque de mapa nas abas no topo. Passe o mouse sobre um pino para ver o nome da tarefa.",
  guideStep3:"Na seção <b>Extrações</b> à esquerda, escolha como entra (PMC/Scav) e marque as extrações que vai usar → só elas aparecem no mapa (verde=PMC / azul=Scav / laranja=compartilhada).",
  guideStep4:"Leve esta janela para o segundo monitor e aperte <b>F11</b> (tela cheia) — fica bem mais fácil de ler.",
  guideStep5:"Depois de um wipe ou de novas tarefas, aperte <b>Atualizar dados</b> na coluna da direita.",
  guideStep6:"Seu progresso (tarefas selecionadas e concluídas, nível etc.) é <b>salvo automaticamente neste navegador</b>. Antes de trocar de computador ou limpar os dados do navegador, salve com <b>Exportar backup</b> em “Configurações” à esquerda.",
  guideM1:"Abra o <b>☰ Menu</b> (canto superior direito), role até <b>“Escolher tarefas”</b>, filtre por comerciante ou mapa e marque as tarefas desta raid.",
  guideM2:"Toque fora do menu (na área escura) para voltar ao mapa — as tarefas aparecem como pinos. Toque num pino para ver o nome da tarefa.",
  guideM3:"Deslize as abas no topo para trocar de mapa. Escolha as extrações que vai usar na seção <b>Extrações</b> do menu.",
  guideM4:"Seu progresso (tarefas selecionadas e concluídas etc.) é <b>salvo automaticamente neste navegador</b>.",
  taskListLink:"📋 Lista de todas as tarefas (em inglês)", taskLinkMissing:"Esta tarefa não está nos dados do modo atual (tente trocar PvP / PvE).",
  guideStart:"Começar", loadingInitial:"Carregando dados…",
  multipleOrNone:"Várias / nenhuma", doneBadge:"✓ concluída (você)", markDoneTitle:"Marcar como concluída",
  searchPrefix:mn=>`Buscar: ${mn}`, searchResults:"Resultados", noMatch:"Nada encontrado", selectedHeader:"Selecionadas",
  filterHint:"Filtre por “Comerciante” ou “Mapa” acima para listar as tarefas em ordem alfabética. Você também pode buscar direto pelo nome da tarefa.",
  availableNow:"▶ Disponíveis agora", noQuestsToShow:"Nenhuma tarefa para mostrar (confira os filtros)",
  labelSep:" / ",
  selCount:n=>`${n} ${s(n,"tarefa selecionada","tarefas selecionadas")}`,
  progressDone:(dn,total)=>`Concluídas <b>${dn}</b>/${total}`,
  progressKappa:(kapDn,kapAll)=>` ・ Necessárias p/ Kappa <b>${kapDn}</b>/${kapAll}`,
  progressLK:(lkDn,lkAll)=>` ・ Lightkeeper <b>${lkDn}</b>/${lkAll}`,
  unknownName:"(desconhecido)", kindPMC:"PMC", kindScav:"Scav", kindShared:"Compartilhada", sharedGlyph:"C",
  kindCoop:"Co-op (precisa dos dois)", coopListNote:"🟠 “Co-op” = só funciona com um PMC e um Scav presentes",
  floorNote:floor=>`※ Esta extração fica no andar ${floor} (diferente do que você está vendo)`,
  extractPopup:(name,kind,fac)=>`<b>Extração: ${name}</b><br>Tipo: ${kind} (esta raid: ${fac==="scav"?"Scav":"PMC"})`,
  transitLabel:"Trânsito", transitPopup:desc=>`<b>Trânsito</b><br>${desc}`,
  hazardSniper:"Linha de tiro do scav sniper", hazardMinefield:"Campo minado", hazardOther:"Área de perigo",
  dangerousAreaPopup:label=>`<b>${label}</b><br><span style="color:#888">Esta área é perigosa</span>`,
  lockedDoor:"Porta trancada", lockType:"Tipo", needsPower:"※ Precisa de energia", lockGlyph:"T", routeLabel:"Rota", floorLabel:"Andar:",
  lockPopup:(type,power)=>`<b>Porta trancada</b><br>Tipo: ${type}${power?"<br>※ Precisa de energia":""}`,
  switchLabel:"Interruptor", switchPopup:name=>`<b>Interruptor</b><br><span style="color:#555">${name}</span>`,
  spawnChanceApprox:pct=>`Chance de spawn ~${pct}%`,
  spawnPoint:"Ponto de spawn", sideOther:x=>x,
  optionalTag:" (opcional)", conditionsLabel:"Condições: ",
  noCoordHeader:"Sem coordenadas neste mapa (veja a Wiki)",
  noQuestSelected:"Nenhuma tarefa selecionada",
  legendSniper:"Linha de tiro do sniper", legendMinefield:"Campo minado", legendOtherHazard:"Outro perigo",
  legendLockedDoor:"Porta trancada", legendSwitch:"Interruptor", legendBoss:"Spawn de chefe",
  legendPmcSpawn:"Spawn de PMC", legendScavSpawn:"Spawn de Scav", legendRoute:"— — Rota (ordem numerada)",
  legendToggle:open=>`Legenda ${open?"▲":"▼"}`,
  legendExitLine:fac=>`Extrações (esta raid: <b>${fac==="scav"?"Scav":"PMC"}</b>): <span class="dot" style="background:var(--ok)"></span>PMC&nbsp; <span class="dot" style="background:var(--scav)"></span>Scav&nbsp; <span class="dot" style="background:var(--shared)"></span>Co-op (precisa dos dois) — só aparecem as extrações marcadas em “Extrações”. Selo de andar = a extração fica em outro andar`,
  legendMarkerLine:'<span class="dot" style="background:#888"></span>Círculo=objetivo da tarefa (letra A/B..)　📌=sua anotação (clique direito para adicionar)',
  legendHazardLine:"Contorno tracejado=área de perigo. Entrar é perigoso",
  legendColorLine:"Cores do mapa (do tarkov.dev): cinza-escuro=interiores / hachurado=escadas・rampas / azul-claro=água / tracejado=limite do mapa",
  legendLhTitle:"Símbolos do mapa (arte de re3mr.com)",
  legendLhAiScav:"Spawn de Scav (IA)", legendLhRogues:"Spawn de Rogues", legendLhGoons:"Área de patrulha dos Goons",
  legendLhPmcSpawn:"Spawn de PMC", legendLhCache:"Esconderijo", legendLhRogueCache:"Esconderijo dos Rogues",
  legendLhBoss:"Chefe (Zryachiy)", legendLhBossGuard:"Guarda do chefe", legendLhBtrStop:"Parada do BTR",
  condClimb:items=>`Leve ${items} (em qualquer lugar do inventário) e tire o colete balístico`,
  condNoBag:"Tire a mochila (nenhuma mochila, de qualquer tamanho)",
  condHandIn:item=>`Entregue ${item} na saída`,
  condPay:amt=>`Pague ${amt} (por pessoa, até 4, uma vez por raid)`,
  condFlare:item=>`Dispare um sinalizador verde na zona de sinal (${item})`,
  condD2:"Ligue a energia com a alavanca nos escritórios de comando e depois aperte o botão da porta",
  condBunker:"Ligue o gerador com a alavanca do lado de fora e extraia em ~4 min (alarme, Raiders)",
  condSaferoom:"Restaure a energia na usina, entre com o cartão Object #11SR e tranque a porta (uso único)",
  condLabElev:a=>`Use o painel de energia (perto de ${a}); podem aparecer Raiders`,
  condSewage:"Drene a água pelo painel (~80 s)",
  condLabGate:a=>`Use o painel de controle (${a}). Nem sempre funciona e dispara um alarme. Um cartão TerraGroup Labs (amarelo) pode desligar o alarme antes (opcional)`,
  condTrainReserve:"Chega no fim da raid (faltando uns 20–10 min) e fica cerca de 7,5 min",
  condTrain:"Um trem que chega num horário fixo e fica pouco tempo",
  condWayUp:"Abre 15 minutos depois do início da raid",
  condVexLh:"Valor ainda não confirmado. O carro não aparece em toda raid. Posição colocada à mão pela arte do mapa",
  tcondLabCard:"Precisa de 1 cartão de acesso TerraGroup Labs (uso único)",
  tcondLabrys:"Precisa de um cartão de acesso Labrys (porta no porão da ala oeste do Resort)",
  tcondTerminal:"Só das 21:00 às 6:00 no jogo. Também exige progresso na história e um cartão de entrada (é consumido)",
  tcondSudak:"Precisa de 1 kit de reparo naval Sudak-Tudak (uso único)",
  transitTo:d=>`Trânsito → ${d}`,
  transitRules:"• Disponível a partir de 1 min após o início da raid<br>• Usar desativa todas as outras extrações<br>• Fique na zona 20 s para ir (sair da zona volta para 30 s)",
  transitGo:d=>`Abrir mapa: ${d}`,
  transitUnsupported:"Este mapa de destino não é suportado pela ferramenta",
  condLbl:k=>({climb:"RR+corda", nobag:"Sem mochila", item:"Entrega", card:"Cartão", tool:"Ferramenta", flare:"Sinalizador", pay:"Pagar", power:"Energia", timer:"Horário"})[k],
  condNoArmorRow:"Tire o colete balístico", condNoBagRow:"Tire a mochila", condFlareRow:"Dispare dentro da zona de sinal (só verde)", condPopupHead:"Requisitos",
  exitCondNote:"Extrações e trânsitos marcados têm requisitos (passe o mouse para ver). Marque só os que vai usar para listar o que precisa na checagem pré-raid.",
  prepExit:"🚪 Requisitos das suas extrações e trânsitos",
  legendCondLine:"Selo no canto superior esquerdo de uma extração ou trânsito = tem requisitos (clique para detalhes):",
  prereqLabel:"Requer: ", nextLabel:"Próxima: ", andMore:" a mais",
  shareCopiedAlert:"Link copiado. Mande para o seu amigo.",
  sharePromptCopy:"Copie este link e mande para o seu amigo:",
  sharePromptLoad:"Cole o código (depois de #s=) ou o link inteiro:",
  shareLoadedAlert:"Dados compartilhados carregados.",
  shareLoadFailedAlert:msg=>`Falha ao carregar: ${msg}`,
  ttBtn:"Importar do TarkovTracker", ttTitle:"Importar progresso do TarkovTracker",
  ttHow:"<ol><li>Nas configurações do TarkovTracker (tarkovtracker.org), salve o <b>backup (exportação)</b> do progresso em JSON</li><li>Escolha esse arquivo abaixo ou cole o conteúdo</li></ol>Dá para aplicar tarefas concluídas / falhadas, objetivos concluídos e o seu nível.",
  ttPrivacy:"🔒 O arquivo é processado só neste navegador e nunca é enviado para lugar nenhum.",
  ttPasteLabel:"Ou cole o conteúdo do JSON:",
  ttErrJson:"Não foi possível ler como JSON. Confira se é um arquivo de backup.",
  ttErrFormat:"Este não é um arquivo de backup do TarkovTracker.",
  ttErrEmpty:"Nenhum progresso para importar foi encontrado.",
  modeLabel:"Modo de jogo", modePvp:"PvP", modePve:"PvE", modeSeasonal:"Sazonal",
  modeHintPvp:"Personagem PvP normal. O progresso (tarefas concluídas, nível…) é salvo separadamente para cada modo.",
  modeHintPve:"Personagem PvE. Troca para as tarefas, extrações e chefes do PvE (progresso separado do PvP).",
  modeHintSeasonal:"Personagem PvP sazonal (wipe a cada temporada). As tarefas normais usam os mesmos dados do PvP; as tarefas só da temporada (Kord Breach) ainda não são cobertas. Progresso salvo separadamente.",
  ttTarget:(n,cur)=>cur ? `Importar para: <b>${n}</b> (o modo mostrado agora)` : `Importar para: <b>${n}</b> (diferente do modo mostrado agora; vale quando você trocar)`,
  ttOtherMode:(n)=>`Salvo no modo “${n}”. Troque para ${n} nos botões de modo acima para ver.`,
  ttEmptyProfile:"Esta origem não tem progresso. Escolha acima, em “Modo da importação”, um modo que tenha progresso.",
  menuBtn:"☰ Menu", closeMenu:"Fechar",
  jumpTitle:"Mostrar no mapa (seleciona a tarefa e vai até os pinos no mapa e andar certos)", jumpNoPins:"Nenhum pino para mostrar (sem coordenadas ou já concluída)",
  helpBtn:"Ajuda", helpTitle:"Como usar", helpClose:"Fechar",
  fbLink:"💬 Enviar feedback / pedido", fbSub:"Ideias e relatos de bugs são bem-vindos (pode ser anônimo)", fbBtn:"Feedback / relatar bug", fbTitle:"Feedback / relatar bug",
  fbIntro:"Conte que recurso você quer, um problema ou um bug. Só o <b>desenvolvedor vê</b> o que você envia (não é público). Não precisa de login, nome nem e-mail. Não inclua dados pessoais. Nem sempre será possível responder.",
  fbTypeIdea:"💡 Pedido de recurso", fbTypeBug:"🐞 Bug", fbTypeOther:"💬 Outro",
  fbMsgLabel:"Mensagem", fbMsgPh:"ex.: O pino da tarefa X está no lugar errado / queria um recurso que…",
  fbInfoLabel:"Informações enviadas junto (você pode conferir)",
  fbCopy:"Copiar texto", fbSend:"Enviar", fbCopied:"Copiado.", fbEmpty:"Escreva uma mensagem.",
  fbSent:"Enviado. Obrigado pelo feedback!", fbSending:"Enviando…", fbWait:"Espere um pouco antes de enviar outra.", fbSendErr:"Não foi possível enviar. Confira a conexão ou use “Abrir o formulário direto” abaixo.", fbDirect:"Abrir o formulário direto",
  guideMore:"Você pode ler o guia completo a qualquer hora no botão “Ajuda” no topo da barra lateral.",
  helpBody:`
<details open><summary>1. Início rápido</summary><div><ol>
<li>No canto superior esquerdo, ajuste o <b>Modo de jogo</b> (PvP / PvE / Sazonal) para o que você joga.</li>
<li>Na barra lateral, filtre por <b>Comerciante</b> ou <b>Mapa</b> e marque as <b>tarefas que vai fazer nesta raid</b>.</li>
<li>Troque de mapa nas abas do topo. Os objetivos das tarefas selecionadas aparecem como <b>pinos</b>. Passe o mouse sobre um pino para ver a descrição, as condições e as tarefas anteriores e seguintes.</li>
<li>Na seção <b>Extrações</b>, marque as extrações que vai usar (→ 5.).</li>
<li>Leve a janela para o segundo monitor e aperte <span class="k">F11</span> (tela cheia).</li>
</ol></div></details>

<details><summary>2. Modos de jogo (PvP / PvE / Sazonal)</summary><div>
<p>No jogo cada modo é um personagem separado, então a ferramenta <b>salva o progresso por modo</b> (tarefas concluídas/falhadas, nível, tarefas selecionadas, escolha de extrações). Trocar de modo recarrega a página.</p>
<ul>
<li><b>PvP</b>: o personagem PvP normal.</li>
<li><b>PvE</b>: troca para as tarefas ([PVE ZONE]), extrações, chefes e spawns do PvE.</li>
<li><b>Sazonal</b>: o personagem sazonal (com wipe). Não existe fonte de dados própria, então as tarefas normais usam os dados do PvP. <b>As tarefas só da temporada (Kord Breach) não são cobertas</b>.</li>
</ul></div></details>

<details><summary>3. Lendo o mapa</summary><div><ul>
<li><b>Botões de andar</b> (acima do mapa): trocam de andar em mapas com vários níveis. Num andar superior, o térreo aparece fraco por baixo para orientar. O número em cada botão é a quantidade de pinos seus naquele andar.</li>
<li><b>Cores e letras dos pinos</b>: cada tarefa tem uma cor e uma letra (A, B, C…), iguais às da lista de tarefas.</li>
<li><b>Botão 📍</b> (em cada linha de tarefa): seleciona a tarefa, troca para o mapa e o andar certos se preciso e leva o mapa até os pinos (um anel pisca em volta deles).</li>
<li><b>Legenda</b>: “Legenda ▼” no canto inferior esquerdo explica os símbolos e as cores.</li>
<li><b>Camadas</b>: em “Camadas / compartilhar”, ligue ou desligue trânsitos, áreas de perigo, portas trancadas, interruptores, chefes e spawns.</li>
<li><b>Numeração da rota</b>: ligada, os pinos ganham ①②③… na ordem do caminho mais curto, ligados por uma linha.</li>
<li><b>Pinos próprios</b>: clique com o <b>botão direito</b> no mapa para adicionar um pino com anotação (clique no pino para editar/apagar).</li>
<li><b>Brilho / contraste</b>: controles no canto superior esquerdo do mapa.</li>
</ul></div></details>

<details><summary>4. Marcas da lista de tarefas e conclusão</summary><div><ul>
<li><span class="k">★</span> … tarefa necessária para o contêiner Kappa. “Só Kappa ★” filtra só essas.</li>
<li><b>Selos A / B / C</b>: cada tarefa em “Selecionadas”, no canto superior esquerdo, tem um selo com a mesma cor e letra dos seus pinos no mapa. Compare os selos ou passe o mouse sobre um pino para ver o nome da tarefa.</li>
<li><b>Mapa maior</b>: “◀ Mapa maior” no canto superior esquerdo recolhe todo o painel esquerdo para o mapa ocupar a tela. Recolhido, o <b>▶</b> no canto superior esquerdo do mapa abre de novo (a ferramenta lembra).</li>
<li><b>Duas colunas</b>: a esquerda é “Selecionadas → Checagem pré-raid → Extrações → História → Configurações”; a direita é “Escolher tarefas” (Filtros e busca → Lista de tarefas). Dá para recolher só a coluna da direita (recolhida, “🗂 Escolher tarefas” acima do mapa abre de novo). Em telas estreitas elas ficam uma embaixo da outra.</li>
<li><b>Resumo por mapa</b>: abaixo das tarefas selecionadas, cada mapa mostra o número de tarefas e objetivos. O mais cheio ganha o selo “Melhor”; clique na linha para ir até esse mapa. Uma linha também mostra os mapas com mais tarefas que você pode aceitar agora (depois de informar o nível ou as tarefas concluídas). O número em cada aba de mapa é a quantidade de objetivos das tarefas selecionadas nele (inclusive objetivos sem coordenadas).</li>
<li><span class="k">○ / ✓</span> … clique para marcar a tarefa como concluída / desfazer. As concluídas somem da lista sozinhas; “Mostrar concluídas” traz de volta.</li>
<li><span class="k">⚠</span> … tarefa com condição de falha (passe o mouse ou selecione a tarefa para ver). Inclui <b>tarefas mutuamente exclusivas</b> (concluir uma faz a outra falhar), com o nome.</li>
<li><span class="k">✗ bloqueada</span> … você já concluiu a tarefa exclusiva correspondente, então esta não pode mais ser aceita. Fica oculta na lista e em “Disponíveis agora”.</li>
<li><span class="k">✗ falhou</span> … tarefa que falhou (definida pela importação do TarkovTracker). Fica oculta na lista e em “Disponíveis agora”.</li>
<li>Informe seu nível em <b>Nv</b> e a seção “<b>▶ Disponíveis agora</b>” mostra as tarefas com pré-requisitos concluídos e nível suficiente.</li>
<li>Jogando em grupo, as tarefas <b>que você mesmo selecionou</b> ou <b>recebeu por link</b> continuam visíveis com o selo “✓ concluída”, mesmo concluídas.</li>
</ul></div></details>

<details><summary>5. Escolhendo extrações</summary><div>
<p>Na seção “Extrações”, escolha primeiro <b>PMC ou Scav</b> e depois marque as extrações que vai usar — <b>só as marcadas</b> aparecem no mapa. Há botões “Mostrar todas / Ocultar todas”. Cores: verde = PMC, azul = Scav, laranja = compartilhada. No modo PvE aparecem as extrações do PvE.</p>
<p><b>Extrações com requisitos</b> ganham um selo no canto superior esquerdo do marcador no mapa e na lista (🧗 picareta Red Rebel + Paracord, sem colete / 🎒 sem mochila / 📜 entregar um item / 💳 cartão / 🎆 sinalizador verde / 💰 pagamento / ⚡ energia ou painel / ⏱️ com horário). Passe o mouse (ou toque no celular) para ver os detalhes. Se marcar só as extrações que vai usar, o que precisa aparece em “🚪 Requisitos das suas extrações” na checagem pré-raid. Preços e itens de entrega vêm dos dados do tarkov.dev; o resto foi adicionado à mão, só com informação conferida.</p>
<p><b>Trânsitos</b> (T roxo) aparecem por padrão (dá para ocultar em “Camadas”). Clique num deles para ver o destino, os requisitos, as regras principais e um botão “Abrir mapa”. Trânsitos que pedem cartão ou item ganham os mesmos selos (💳 / 🔧 / ⏱️). Os trânsitos também ficam no fim da seção “Extrações” — marque só os que vai usar e os cartões ou itens necessários aparecem na checagem pré-raid.</p>
</div></details>

<details><summary>6. Checagem pré-raid</summary><div>
<p>O painel “Checagem pré-raid” lista o que as tarefas selecionadas precisam. As caixas de cada linha ficam salvas (“Redefinir” limpa).</p>
<ul><li>🔑 chaves para levar / 📤 itens para levar ou plantar / 📥 itens para coletar na raid (FiR = precisa ser encontrado na raid) / 🎯 requisitos de arma e equipamento (armas, peças obrigatórias, equipamento para vestir — passe o mouse para ver a lista completa quando é longa)</li></ul>
<p>Aperte <b>“Todos os mapas”</b> no cabeçalho para ver numa lista só tudo o que as tarefas selecionadas precisam em todos os mapas (as quantidades são somadas e cada item mostra seus mapas). “Este mapa” volta.</p>
<p>O <b>cronômetro da raid</b> acima do mapa faz a contagem regressiva do tempo do mapa (amarelo com 5 min, vermelho com 2 min).</p>
</div></details>

<details><summary>7. Capítulos da história</summary><div>
<p>Além das tarefas dos comerciantes, há uma <b>lista de objetivos</b> dos capítulos da história (Tour / Falling Skies / Batya / The Unheard / Blue Fire / They Are Already Here / Accidental Witness / The Labyrinth / The Ticket / Boreas). Abra <b>“História”</b> na barra lateral para ver os objetivos de cada capítulo.</p>
<ul>
<li>Marque os objetivos para registrar o progresso (separado por modo). Também há os botões “Concluir todos os objetivos principais” e “Limpar tudo”.</li>
<li>Os objetivos da história <b>não têm dados de coordenadas, então não aparecem pinos no mapa</b>. As descrições ficam em inglês, como no jogo.</li>
<li>Tarefas de comerciantes que exigem um objetivo da história ganham a marca <span class="k">📖</span> (as não cumpridas mostram o requisito; ✓ quando cumprido).</li>
<li>A importação do TarkovTracker também aplica a conclusão dos capítulos.</li>
</ul></div></details>

<details><summary>8. Importar do TarkovTracker</summary><div>
<p>Para quem já acompanha o progresso no TarkovTracker: aplique de uma vez as tarefas concluídas e falhadas, os objetivos concluídos e o seu nível.</p>
<ol>
<li>Nas configurações do TarkovTracker (tarkovtracker.org), salve o backup (exportação) <b>.json</b>.</li>
<li>Abra “Camadas / compartilhar” aqui, aperte <b>Importar do TarkovTracker</b> e escolha o arquivo (ou cole).</li>
<li>Confira o resumo e aperte <b>Importar</b>. Dá para escolher “Só adicionar / Sobrescrever” e desfazer logo em seguida.</li>
</ol>
<p>O arquivo é processado só no seu navegador e nunca é enviado. Ele salva no <b>mesmo modo do perfil que você escolher</b> no arquivo (progresso de PvE vai para o PvE; se for diferente do modo mostrado agora, vale quando você trocar). Se você não usa o TarkovTracker, ignore — dá para marcar a conclusão à mão com ○/✓.</p>
</div></details>

<details><summary>9. Links de compartilhamento</summary><div>
<p>“Criar link” copia o estado atual (modo, tarefas selecionadas, conclusões, nível, pinos próprios, mapa, escolha de extrações) como URL. Um amigo que abrir o link, ou colar em “Carregar código”, fica com o mesmo estado. Tarefas falhadas e objetivos concluídos não são compartilhados.</p>
</div></details>

<details><summary>10. Atualizar dados e problemas</summary><div><ul>
<li><b>Backup</b>: seu progresso (tarefas selecionadas, tarefas concluídas, nível, marcações, pinos próprios etc.) fica salvo só neste navegador. Antes de limpar os dados do navegador ou ao trocar de computador, use <b>Exportar backup</b> em “Camadas e compartilhar” para salvar num arquivo e depois aperte <b>Importar backup</b> no lugar novo (substitui os dados atuais pelo conteúdo do arquivo). Se você tem progresso e está há 30+ dias sem backup, aparece um aviso pequeno no topo da coluna esquerda (“Depois” esconde por 14 dias).</li>
<li><b>Atualizar dados</b>: aperte depois de um wipe ou quando entram tarefas novas. Atualiza tarefas, extrações, spawns de chefes etc. (também atualiza sozinho mais ou menos uma vez por dia).</li>
<li>Se os dados não carregam: confira a conexão e aperte “Atualizar dados”. Se não der para baixar, são usados os dados incluídos na ferramenta e aparece “⚠ desatualizado”.</li>
<li>Mapa preto: o servidor de imagens está ocupado — espere um pouco e recarregue.</li>
<li>A arte do mapa não bate com o layout novo (ex.: Lighthouse): a arte fica antiga até o tarkov.dev atualizar; aparece um aviso acima do mapa.</li>
<li>Os nomes de tarefas, itens, mapas e extrações aparecem em português, como no jogo (tradução do tarkov.dev; onde não há tradução, em inglês).</li>
<li><b>Estatísticas</b>: para saber o que melhorar, contamos de forma anônima só as visitas, quantas vezes cada recurso é usado e mais ou menos quanto tempo a página fica aberta (GoatCounter, sem cookies). Os nomes das tarefas que você escolhe, seu progresso e o que você digita nunca são enviados.</li>
<li>Pedidos de recursos, bugs e feedback podem ser enviados pelo botão “💬 Enviar feedback / pedido” no fim das abas de mapa (ou pelo botão no fim desta janela).</li>
</ul></div></details>

<details><summary>11. Segurança (medo de ban?)</summary><div>
<p>Esta ferramenta é uma <b>página da web totalmente separada</b> do jogo — um mapa externo que você só abre no navegador, do mesmo tipo que o tarkov.dev.</p>
<ul>
<li>Ela <b>nunca mexe</b> no programa do jogo, na memória, nos arquivos nem no tráfego de rede (sem leitura, sem alteração, sem injeção).</li>
<li>Não captura a tela nem observa os logs do jogo. Não pega nada do jogo e não rastreia sua posição.</li>
<li>Usa só <b>dados e mapas públicos do tarkov.dev</b> e as tarefas que você escolhe. Suas escolhas e seu progresso ficam salvos só no seu navegador.</li>
<li>Não precisa instalar nada e não tem nenhum recurso que controle ou automatize o jogo.</li>
</ul>
<p>Funciona de um jeito completamente diferente das ferramentas que leem ou alteram dados do jogo (cheats). Mesmo assim, é uma <b>ferramenta não oficial feita por fã</b>, sem aprovação da Battlestate Games (BSG), então não dá para prometer que nada nunca vai acontecer — se tiver dúvida, confira os termos oficiais da BSG.</p>
</div></details>

<p class="muted">Esta ferramenta nunca mexe no jogo (sem leitura de memória nem injeção). Usa dados e mapas públicos do tarkov.dev (mapas: CC BY-NC-SA 4.0).</p>`,
  ttModeLabel:"Modo de jogo:", ttModePvp:"PvP", ttModePve:"PvE", ttModeSeasonal:"Sazonal",
  ttSummary:(lv,c,cKnown,f,o,st)=>`Nível <b>${lv||"-"}</b> / tarefas concluídas <b>${c}</b> (${cKnown} reconhecidas aqui) / falhadas <b>${f}</b> / objetivos concluídos <b>${o}</b> / objetivos da história <b>${st}</b>`,
  storySection:"História", storyHint:"Lista de objetivos dos capítulos da história (sem pinos no mapa — não há dados de coordenadas). As descrições ficam em inglês, como no jogo.",
  storyNone:"Não foi possível carregar os dados da história (aperte Atualizar dados).", storyOptional:"opcional",
  storyDoneAll:"Concluir todos os objetivos principais", storyClear:"Limpar tudo", storyReqLabel:"Requer objetivo da história:",
  ttMerge:"Só adicionar (manter minhas conclusões)", ttOverwrite:"Sobrescrever (igual ao TarkovTracker)",
  ttLevelLabel:lv=>`Aplicar também o nível (Nv ${lv})`,
  ttRun:"Importar", ttClose:"Fechar", ttUndoBtn:"Desfazer a última importação",
  ttDoneMsg:(c,f,o,st)=>`Importado: ${c} concluídas / ${f} falhadas / ${o} objetivos / ${st} objetivos da história`,
  ttUndoneMsg:"Restaurado.",
  failBadge:"✗ falhou", lockedBadge:"✗ bloqueada",
  failExclusive:(n)=>`Esta tarefa falha se você concluir: ${n}`,
  failGenShoot:"Tem condição de falha sobre matar certos alvos", failGenStanding:"Pode falhar dependendo da reputação com o comerciante",
  failGenPlant:"Tem condição de falha sobre plantar itens", failGenUse:"Tem condição de falha sobre usar itens",
  failGenExtract:"Falha se você morrer ou sair da raid (sem ser por extração)", failGenVisit:"Tem condição de falha", failGenOther:"Tem condição de falha",
  prepHeader:mjp=>`Checagem pré-raid — ${mjp}`,
  prepEmpty:"Neste mapa você não precisa de chaves nem de itens para coletar (só pinos).",
  prepKeys:"🔑 Chaves para levar", prepBring:"📤 Para levar (plantar/marcar)", prepCollect:"📥 Achar no local",
  prepHeaderAll:"Checagem pré-raid — todos os mapas", prepAllBtn:"Todos os mapas", prepOneBtn:"Este mapa", prepAllTip:"Mostra o que todas as tarefas selecionadas precisam, em todos os mapas", prepOneTip:"Voltar para o mapa que você está vendo",
  prepAnyMap:"Qualquer mapa", prepEmptyAll:"As tarefas selecionadas não precisam de chaves, itens para coletar nem equipamento.",
  bkNote:"Seu progresso (tarefas selecionadas e concluídas, nível etc.) é salvo automaticamente só neste navegador. Exporte antes de trocar de aparelho ou limpar os dados do navegador.",
  bkRemind:d=>`Você está há ${d}+ dias sem backup. Salvar o progresso agora?`, bkRemindNow:"Exportar", bkRemindLater:"Depois",
  bkExportBtn:"Exportar backup", bkImportBtn:"Importar backup", bkExported:n=>`Backup exportado (${n} ${s(n,"item","itens")})`, bkBad:"Este arquivo não pode ser lido como backup.", bkConfirm:n=>`Importar um backup (${n} ${s(n,"item","itens")})? Sua seleção atual, tarefas concluídas, nível, marcações, pinos próprios etc. serão substituídos pelo conteúdo do arquivo.`, bkReplaced:"Importado. Recarregando…",
  collapseBtn:"◀ Mapa maior", collapseTip:"Recolher o painel esquerdo para aumentar o mapa (recolhido, o ▶ no canto superior esquerdo do mapa abre de novo)", reopenTip:"Abrir o painel esquerdo",
  pickTitle:"Escolher tarefas", pkCollapseTip:"Recolher só esta coluna (Escolher tarefas)", pkReopenBtn:"🗂 Escolher tarefas", pkReopenTip:"Abrir a coluna Escolher tarefas",
  filtSection:"Filtros e busca", settingsSection:"Configurações (camadas, compartilhar, backup)", selEmpty:"As tarefas selecionadas aparecem aqui com os selos A / B / C… (escolha tarefas na coluna “Escolher tarefas” à direita).", chipTip:l=>`Pino do mapa “${l}”`,
  mapSumFoldTip:"Clique para recolher / expandir",
  mapSumTitle:"Resumo por mapa (tarefas selecionadas)", mapSumBest:"Melhor", mapSumCount:(t,o)=>`${t} ${s(t,"tarefa","tarefas")} · ${o} ${s(o,"objetivo","objetivos")}`, mapSumDoable:"Mapas com mais tarefas que você pode aceitar agora:",
  prepGear:"🎯 Requisitos de arma e equipamento", gearWeapons:"Armas", gearMods:"Peças obrigatórias", gearWear:"Vestir", gearNotWear:n=>`Não use o equipamento indicado (${n} ${s(n,"item","itens")})`, gearMore:n=>`+${n} a mais`,
  pinPromptAdd:"Anotação deste pino (ex.: cuidado com sniper / ponto de descanso)",
  pinPromptEdit:"Editar anotação",
  pinPopupMemo:"Anotação", pinPopupEmpty:"<span style='color:#888'>(nenhuma)</span>",
  pinEdit:"Editar", pinDelete:"Apagar",
  mapLoading:jp=>`Carregando ${jp}…`,
  mapAttribution:'Mapa: <a href="https://tarkov.dev" target="_blank">tarkov.dev</a> (CC BY-NC-SA)',
  lighthouseArtCredit:'Arte do mapa Lighthouse: <a href="https://reemr.se/Lighthouse/" target="_blank">re3mr.com</a> (CC BY-NC-SA 4.0)',
  fetchingFirst:"Baixando os dados mais recentes de json.tarkov.dev… (a primeira vez demora um pouco)",
  fetchingData:"Baixando os dados mais recentes de json.tarkov.dev…",
  fetchFailed:msg=>`<div class="err">Falha ao baixar os dados.<br>${msg}<br><br>Confira a conexão e aperte “Atualizar dados”.</div>`,
  fetchFailedAlert:msg=>`Falha ao baixar: ${msg}`,
  staleData:"⚠ Desatualizado: ", updatedData:"Atualizado: ",
  leafletLoadError:'<div class="err">Falha ao carregar a biblioteca do mapa (Leaflet).<br>Confira a conexão com a internet e recarregue a página.</div>',
  noTaskData:"Os dados de tarefas estão vazios",
  bodyHead:"Cabeça", bodyThorax:"Tórax", bodyStomach:"Estômago", bodyLeftArm:"Braço esquerdo", bodyRightArm:"Braço direito", bodyLeftLeg:"Perna esquerda", bodyRightLeg:"Perna direita",
  condShoot:parts=>"Acertar " + parts.join("/"),
  condDistIn:v=>`a até ${v} m`, condDistOut:v=>`a mais de ${v} m`,
  condWeaponOnly:n=>`só armas específicas (${n})`, condWearing:"precisa vestir equipamento específico", condNotWearing:"precisa tirar equipamento específico",
  condTimeRange:(a,b)=>`${a}:00–${b}:00`, condKillCount:n=>`Abates×${n}`,
  attrErgo:"Ergonomia", attrAccuracy:"Precisão (MOA)", attrDurability:"Durabilidade", attrRecoilV:"Recuo vert.",
  attrRecoilH:"Recuo horiz.", attrWeight:"Peso", attrEffDist:"Alcance efetivo", attrMagCap:"Cap. do carregador", attrMuzzleV:"Velocidade de saída",
  objVisit:"Visitar local", objFindItem:"Achar item", objFindQuestItem:"Achar item de tarefa",
  objGiveItem:"Entregar item", objGiveQuestItem:"Entregar item de tarefa", objPlantItem:"Plantar item",
  objPlantQuestItem:"Plantar item de tarefa", objMark:"Colocar marcador", objShoot:"Eliminar (matar)",
  objExtract:"Extrair do local", objBuildWeapon:"Montar arma", objUseItem:"Usar item",
  objSellItem:"Anunciar no mercado de pulgas", objExperience:"Cumprir condição", objSkill:"Atingir nível de habilidade",
  objTraderLevel:"Nível de lealdade do comerciante", objTraderStanding:"Reputação com o comerciante",
  objTaskStatus:"Status de outra tarefa", objDialogue:"Diálogo", objGlobalVariable:"Marcador de progresso",
  };
})();
