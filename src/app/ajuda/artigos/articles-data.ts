export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  content: string;
  relatedArticles?: string[];
  lastUpdated: string;
}

export const articlesData: Article[] = [
  // Primeiros Passos
  {
    slug: "como-criar-uma-conta",
    title: "Como criar uma conta",
    description: "Guia completo para criar sua conta e começar a usar o ProntoAI",
    category: "Primeiros Passos",
    categoryColor: "from-blue-500 to-cyan-400",
    lastUpdated: "2024-01-15",
    content: `
# Como criar uma conta no ProntoAI

Criar sua conta no ProntoAI é rápido e fácil. Siga este guia passo a passo:

## Passo 1: Baixe o aplicativo

- **iOS**: Acesse a App Store e busque por "ProntoAI"
- **Android**: Acesse a Google Play Store e busque por "ProntoAI"
- Toque em "Instalar" ou "Obter"

## Passo 2: Abra o aplicativo

Após a instalação, toque no ícone do ProntoAI na tela inicial do seu dispositivo.

## Passo 3: Escolha o método de cadastro

Você tem três opções para criar sua conta:

### Opção 1: Email
1. Toque em "Criar conta com Email"
2. Digite seu endereço de email
3. Crie uma senha forte (mínimo 8 caracteres)
4. Confirme sua senha
5. Toque em "Criar Conta"

### Opção 2: Google
1. Toque em "Continuar com Google"
2. Selecione sua conta Google
3. Autorize o acesso
4. Pronto! Sua conta está criada

### Opção 3: Apple
1. Toque em "Continuar com Apple"
2. Use Face ID, Touch ID ou senha do iCloud
3. Escolha compartilhar ou ocultar seu email
4. Autorize o acesso
5. Conta criada com sucesso!

## Passo 4: Confirme seu email (se aplicável)

Se você criou conta com email:
1. Verifique sua caixa de entrada
2. Abra o email de confirmação do ProntoAI
3. Clique no link de verificação
4. Seu email está confirmado!

**Dica**: Não recebeu o email? Verifique a pasta de spam ou lixo eletrônico.

## Passo 5: Complete seu perfil

1. Adicione uma foto de perfil (opcional)
2. Digite seu nome completo
3. Escolha seu nome de usuário
4. Defina suas preferências iniciais
5. Toque em "Concluir"

## Pronto para começar!

Agora você já pode:
- ✅ Enviar seu primeiro screenshot
- ✅ Receber sugestões de resposta
- ✅ Personalizar suas configurações
- ✅ Explorar todos os recursos

## Problemas ao criar conta?

Se você encontrou algum problema:
- Verifique sua conexão com a internet
- Certifique-se de que o email é válido
- Tente outro método de cadastro
- Entre em contato com nosso suporte

**Próximo passo**: Aprenda a [enviar seu primeiro screenshot](#como-enviar-primeiro-screenshot)
    `,
    relatedArticles: [
      "como-enviar-primeiro-screenshot",
      "personalizando-tom-respostas",
      "configuracoes-conta"
    ]
  },
  {
    slug: "como-enviar-primeiro-screenshot",
    title: "Como enviar seu primeiro screenshot",
    description: "Aprenda a capturar e enviar conversas para análise",
    category: "Primeiros Passos",
    categoryColor: "from-blue-500 to-cyan-400",
    lastUpdated: "2024-01-15",
    content: `
# Como enviar seu primeiro screenshot

Enviar um screenshot para análise no ProntoAI é simples e rápido. Veja como fazer:

## Passo 1: Capture a conversa

### No Android:
- Pressione **Power + Volume Down** simultaneamente
- Ou use o gesto de três dedos (se disponível)
- O screenshot será salvo na galeria

### No iPhone:
- **iPhone com Face ID**: Pressione **Power + Volume Up**
- **iPhone com botão Home**: Pressione **Power + Home**
- O screenshot aparecerá no canto da tela

**Dica importante**: Certifique-se de capturar:
- As últimas 3-5 mensagens da conversa
- A mensagem que você precisa responder
- Contexto suficiente para a IA entender a situação

## Passo 2: Abra o ProntoAI

Toque no ícone do ProntoAI na tela inicial do seu dispositivo.

## Passo 3: Inicie uma nova análise

Você tem duas opções:

### Opção 1: Botão principal
1. Toque no grande botão **"+"** na tela inicial
2. Ou toque em **"Nova Análise"**

### Opção 2: Menu rápido
1. Toque no ícone de câmera no canto superior direito
2. Selecione "Analisar Screenshot"

## Passo 4: Selecione o screenshot

1. Sua galeria será aberta automaticamente
2. Navegue até a pasta de screenshots
3. Toque no screenshot que você acabou de tirar
4. Confirme a seleção

**Permissões**: Na primeira vez, o app pedirá permissão para acessar suas fotos. Toque em "Permitir".

## Passo 5: Aguarde a análise

- A IA processará o screenshot em **3-5 segundos**
- Você verá uma animação de carregamento
- O contexto da conversa será analisado automaticamente

## Passo 6: Receba as sugestões

Você receberá **3 sugestões de resposta**:

1. **Resposta Casual** 😊
   - Tom amigável e descontraído
   - Ideal para amigos e família

2. **Resposta Equilibrada** ⚖️
   - Tom neutro e versátil
   - Funciona em qualquer situação

3. **Resposta Formal** 👔
   - Tom profissional e polido
   - Perfeito para trabalho

## Passo 7: Use a resposta

Para cada sugestão, você pode:
- **Copiar**: Toque no botão "Copiar" e cole no app de mensagem
- **Editar**: Personalize a resposta antes de copiar
- **Favoritar**: Salve para usar depois
- **Compartilhar**: Envie para outro app

## Dicas para melhores resultados

✅ **Faça**:
- Inclua contexto suficiente (3-5 mensagens)
- Certifique-se que o texto está legível
- Use boa iluminação ao capturar
- Mostre quem está falando

❌ **Evite**:
- Screenshots cortados ou incompletos
- Imagens muito escuras ou com brilho
- Capturas borradas
- Texto muito pequeno

## Problemas comuns

### "Não consegui selecionar o screenshot"
- Verifique se deu permissão para acessar fotos
- Tente tirar o screenshot novamente
- Reinicie o app

### "A análise está demorando muito"
- Verifique sua conexão com a internet
- Aguarde até 30 segundos
- Se persistir, tente novamente

### "As sugestões não fazem sentido"
- Certifique-se de incluir mais contexto
- Tire um screenshot mais completo
- Verifique se o texto está legível

## Próximos passos

Agora que você sabe enviar screenshots:
- Aprenda a [escolher a resposta ideal](#como-escolher-resposta-ideal)
- Descubra [melhores práticas para screenshots](#melhores-praticas-screenshots)
- Personalize o [tom das respostas](#personalizando-tom-respostas)

**Dúvidas?** Entre em contato com nosso [suporte](#contato).
    `,
    relatedArticles: [
      "melhores-praticas-screenshots",
      "como-escolher-resposta-ideal",
      "entendendo-sugestoes-resposta"
    ]
  },
  {
    slug: "entendendo-sugestoes-resposta",
    title: "Entendendo as sugestões de resposta",
    description: "Como interpretar e usar as respostas geradas pela IA",
    category: "Primeiros Passos",
    categoryColor: "from-blue-500 to-cyan-400",
    lastUpdated: "2024-01-15",
    content: `
# Entendendo as sugestões de resposta

O ProntoAI analisa o contexto da sua conversa e gera 3 tipos diferentes de resposta. Entenda cada uma:

## Os 3 tipos de resposta

### 1. Resposta Casual 😊

**Características**:
- Tom amigável e descontraído
- Uso moderado de emojis
- Linguagem informal
- Expressões coloquiais

**Quando usar**:
- Conversas com amigos próximos
- Família
- Colegas de trabalho informais
- Apps de dating (fase inicial)
- Grupos de WhatsApp pessoais

**Exemplo**:
> "Opa! Adorei a ideia! 😄 Que tal a gente se encontrar no sábado à tarde? Podemos ir naquele café novo que você mencionou!"

### 2. Resposta Equilibrada ⚖️

**Características**:
- Tom neutro e versátil
- Poucos ou nenhum emoji
- Linguagem clara e direta
- Profissional mas não rígido

**Quando usar**:
- Conhecidos
- Networking profissional
- Primeiros contatos
- Situações incertas
- LinkedIn
- Clientes (contexto informal)

**Exemplo**:
> "Olá! Fico feliz com a proposta. Sábado à tarde funciona bem para mim. O café que você sugeriu parece ótimo. Confirmo presença!"

### 3. Resposta Formal 👔

**Características**:
- Tom profissional e polido
- Sem emojis
- Linguagem corporativa
- Estrutura clara e objetiva

**Quando usar**:
- Emails corporativos
- Gestores e superiores
- Clientes importantes
- Situações formais
- Documentação oficial
- Comunicação institucional

**Exemplo**:
> "Prezado(a), agradeço pela proposta. Confirmo minha disponibilidade para sábado à tarde. O local sugerido é adequado. Aguardo confirmação dos detalhes."

## Como a IA analisa o contexto

O ProntoAI considera vários fatores:

### 1. Conteúdo da conversa
- Assunto principal
- Tom usado pela outra pessoa
- Urgência da mensagem
- Perguntas feitas

### 2. Contexto emocional
- Sentimento geral (positivo, neutro, negativo)
- Nível de formalidade
- Intimidade aparente
- Situação (celebração, problema, convite, etc.)

### 3. Histórico (se disponível)
- Mensagens anteriores
- Padrão de comunicação
- Relacionamento estabelecido

### 4. Suas preferências
- Tom padrão configurado
- Nível de criatividade
- Tamanho preferido de resposta
- Uso de emojis

## Personalizando as sugestões

Você pode editar qualquer resposta antes de usar:

### Como editar:
1. Toque na resposta que mais gostou
2. Clique em "Editar"
3. Faça suas alterações
4. Copie a versão personalizada

### Dicas de personalização:
- Adicione detalhes específicos
- Inclua referências pessoais
- Ajuste o tom se necessário
- Corrija informações
- Adicione ou remova emojis

## Salvando respostas favoritas

Se você gostou muito de uma sugestão:

1. Toque no ícone de **estrela** ⭐
2. Adicione tags (ex: #trabalho, #desculpa)
3. Adicione uma nota (opcional)
4. Salve em "Favoritos"

**Benefícios**:
- Reutilize em situações similares
- Crie templates personalizados
- Economize tempo
- Mantenha consistência

## Combinando respostas

Você pode combinar elementos de diferentes sugestões:

**Exemplo**:
- Use o início da resposta Casual
- Adicione o meio da resposta Equilibrada
- Finalize com o tom da resposta Formal

Isso cria uma resposta única e personalizada!

## Entendendo limitações

A IA é poderosa, mas tem limites:

### O que a IA faz bem:
✅ Analisa contexto geral
✅ Sugere respostas apropriadas
✅ Mantém tom consistente
✅ Oferece variedade de opções

### O que você deve fazer:
⚠️ Revisar antes de enviar
⚠️ Adicionar detalhes pessoais
⚠️ Verificar informações factuais
⚠️ Ajustar para sua personalidade

## Feedback para melhorar

Ajude a IA a melhorar:

1. **Avalie as sugestões**:
   - 👍 Gostei
   - 👎 Não gostei

2. **Reporte problemas**:
   - Resposta inadequada
   - Erro de contexto
   - Tom incorreto

3. **Compartilhe sugestões**:
   - O que funcionou bem
   - O que poderia melhorar

## Próximos passos

Agora que você entende as sugestões:
- Aprenda a [escolher a resposta ideal](#como-escolher-resposta-ideal)
- Descubra [melhores práticas](#melhores-praticas-screenshots)
- Configure suas [preferências de resposta](#preferencias-resposta)

**Dúvidas?** Consulte nosso [FAQ](#faq) ou entre em [contato](#contato).
    `,
    relatedArticles: [
      "como-escolher-resposta-ideal",
      "personalizando-tom-respostas",
      "salvando-reutilizando-respostas"
    ]
  },
  {
    slug: "personalizando-tom-respostas",
    title: "Personalizando o tom das respostas",
    description: "Configure o estilo de comunicação que combina com você",
    category: "Primeiros Passos",
    categoryColor: "from-blue-500 to-cyan-400",
    lastUpdated: "2024-01-15",
    content: `
# Personalizando o tom das respostas

Configure o ProntoAI para gerar respostas que combinam perfeitamente com seu estilo de comunicação.

## Acessando as configurações

1. Abra o ProntoAI
2. Toque no ícone de **Configurações** ⚙️
3. Selecione **"Preferências de Resposta"**
4. Ajuste as opções conforme sua preferência

## Opções de personalização

### 1. Tom padrão

Escolha o tom que será usado por padrão:

#### Casual 😊
- **Características**: Amigável, descontraído, uso de emojis
- **Ideal para**: Amigos, família, conversas informais
- **Exemplo**: "Opa! Tudo certo? 😄 Adorei sua ideia!"

#### Equilibrado ⚖️
- **Características**: Neutro, versátil, profissional mas acessível
- **Ideal para**: Conhecidos, networking, situações incertas
- **Exemplo**: "Olá! Tudo bem? Achei sua proposta interessante."

#### Formal 👔
- **Características**: Profissional, polido, sem emojis
- **Ideal para**: Trabalho, clientes, situações formais
- **Exemplo**: "Prezado(a), agradeço pelo contato. Sua proposta é interessante."

**Dica**: Você pode mudar o tom a qualquer momento, mesmo após a análise!

### 2. Nível de criatividade

Controle o quão criativas e únicas serão as respostas:

#### Conservador 🛡️
- Respostas seguras e previsíveis
- Menor risco de mal-entendidos
- Linguagem mais comum
- **Use quando**: Situações formais, primeiros contatos

#### Moderado ⚖️
- Equilíbrio entre segurança e criatividade
- Respostas interessantes mas apropriadas
- **Use quando**: Maioria das situações (recomendado)

#### Criativo 🎨
- Respostas únicas e originais
- Maior uso de expressões criativas
- Mais personalidade
- **Use quando**: Amigos próximos, situações descontraídas

### 3. Tamanho das respostas

Defina o comprimento preferido:

#### Curta 📝
- 1-2 frases
- Direto ao ponto
- Rápido de ler e enviar
- **Ideal para**: Respostas rápidas, confirmações, mensagens casuais

**Exemplo**:
> "Combinado! Nos vemos lá às 15h. 👍"

#### Média 📄
- 3-5 frases
- Balanceado e completo
- Cobre os pontos principais
- **Ideal para**: Maioria das situações (recomendado)

**Exemplo**:
> "Ótima ideia! Sábado às 15h funciona perfeitamente para mim. Vou confirmar com mais detalhes até amanhã. Obrigado pelo convite!"

#### Longa 📋
- Parágrafo completo
- Detalhado e elaborado
- Cobre todos os aspectos
- **Ideal para**: Emails, explicações, situações complexas

**Exemplo**:
> "Agradeço imensamente pelo convite. Sábado às 15h é um horário excelente para mim. Estou ansioso para conhecer o local que você sugeriu, pois tenho ouvido ótimas recomendações. Vou confirmar todos os detalhes até amanhã pela manhã. Caso surja algum imprevisto, aviso com antecedência. Mais uma vez, obrigado pela consideração!"

### 4. Uso de emojis

Configure a frequência de emojis nas respostas:

#### Nunca 🚫
- Sem emojis
- Texto puro
- Mais formal e profissional

#### Moderado 😊
- 1-2 emojis por resposta
- Uso estratégico
- Balanceado (recomendado)

#### Frequente 🎉
- 3+ emojis
- Mais expressivo
- Casual e amigável

## Criando perfis personalizados

Para situações específicas, crie perfis customizados:

### Como criar um perfil:

1. Vá em **Configurações > Contextos**
2. Toque em **"Novo Contexto"**
3. Dê um nome (ex: "Trabalho", "Dating", "Família")
4. Configure:
   - Tom preferido
   - Nível de criatividade
   - Tamanho das respostas
   - Uso de emojis
5. Salve o contexto

### Exemplos de perfis úteis:

#### Perfil "Trabalho" 💼
- Tom: Formal
- Criatividade: Conservador
- Tamanho: Média
- Emojis: Nunca

#### Perfil "Amigos" 🎉
- Tom: Casual
- Criatividade: Criativo
- Tamanho: Curta
- Emojis: Frequente

#### Perfil "Dating" 💕
- Tom: Casual
- Criatividade: Moderado
- Tamanho: Média
- Emojis: Moderado

#### Perfil "Família" 👨‍👩‍👧‍👦
- Tom: Casual
- Criatividade: Moderado
- Tamanho: Média
- Emojis: Frequente

## Usando perfis na análise

Ao analisar um screenshot:

1. Envie o screenshot normalmente
2. Antes de ver as sugestões, selecione o perfil
3. Toque em **"Contexto"** no topo
4. Escolha o perfil apropriado
5. As sugestões serão regeneradas

**Dica**: O app aprende com suas escolhas e sugere o perfil automaticamente!

## Ajuste fino por situação

Mesmo com perfis, você pode ajustar:

### Durante a análise:
- Mude o tom com um toque
- Ajuste o tamanho
- Adicione/remova emojis
- Regenere com novas configurações

### Após receber sugestões:
- Edite manualmente
- Combine elementos de diferentes respostas
- Adicione detalhes pessoais

## Dicas de personalização

### Para conversas profissionais:
✅ Tom formal ou equilibrado
✅ Criatividade conservadora
✅ Sem emojis ou muito poucos
✅ Tamanho médio ou longo

### Para amigos e família:
✅ Tom casual
✅ Criatividade moderada ou alta
✅ Emojis frequentes
✅ Tamanho curto ou médio

### Para dating:
✅ Tom casual ou equilibrado
✅ Criatividade moderada
✅ Emojis moderados
✅ Tamanho médio

### Para networking:
✅ Tom equilibrado
✅ Criatividade moderada
✅ Poucos emojis
✅ Tamanho médio

## Salvando configurações

Suas configurações são:
- ✅ Salvas automaticamente
- ✅ Sincronizadas entre dispositivos
- ✅ Aplicadas imediatamente
- ✅ Reversíveis a qualquer momento

## Resetando para padrão

Se quiser voltar às configurações originais:

1. Vá em **Configurações > Preferências**
2. Role até o final
3. Toque em **"Restaurar Padrões"**
4. Confirme a ação

## Próximos passos

Agora que você personalizou suas preferências:
- Aprenda a [usar em diferentes apps](#usando-diferentes-apps)
- Descubra [dicas para respostas melhores](#dicas-respostas-melhores)
- Explore [recursos avançados](#recursos-avancados)

**Dúvidas?** Consulte nosso [FAQ](#faq) ou entre em [contato](#contato).
    `,
    relatedArticles: [
      "contextos-personalizados",
      "como-escolher-resposta-ideal",
      "configuracoes-conta"
    ]
  },

  // Usando o ProntoAI
  {
    slug: "melhores-praticas-screenshots",
    title: "Melhores práticas para screenshots",
    description: "Dicas para obter as melhores sugestões de resposta",
    category: "Usando o ProntoAI",
    categoryColor: "from-purple-500 to-pink-400",
    lastUpdated: "2024-01-15",
    content: `
# Melhores práticas para screenshots

Aprenda a capturar screenshots que geram as melhores sugestões de resposta possíveis.

## O que incluir no screenshot

### ✅ Contexto suficiente

**Inclua as últimas 3-5 mensagens**:
- Mostra o fluxo da conversa
- Ajuda a IA entender o contexto
- Gera respostas mais precisas

**Exemplo bom**:
\`\`\`
João: E aí, vamos no cinema sábado?
Você: Qual filme você quer ver?
João: Pensei naquele novo de ação
Você: Que horas?
João: Que tal às 19h?
[Esta é a mensagem que você precisa responder]
\`\`\`

**Exemplo ruim**:
\`\`\`
João: Que tal às 19h?
[Sem contexto anterior]
\`\`\`

### ✅ A mensagem a responder

- Certifique-se que a última mensagem está visível
- Deve estar completa, não cortada
- Inclua timestamp se relevante

### ✅ Nome/foto do contato

- Ajuda a IA entender o relacionamento
- Permite personalização melhor
- Opcional mas recomendado

### ✅ Indicadores visuais

- Status de leitura (visto, entregue)
- Hora da mensagem
- Tipo de chat (grupo, individual)

## O que evitar

### ❌ Screenshots cortados

**Problema**: Informação incompleta
**Solução**: Capture a tela inteira ou ajuste o enquadramento

### ❌ Texto ilegível

**Problemas comuns**:
- Fonte muito pequena
- Baixa resolução
- Imagem borrada
- Muito escuro ou claro

**Soluções**:
- Aumente o zoom antes de capturar
- Use boa iluminação
- Limpe a tela do celular
- Ajuste o brilho

### ❌ Informações sensíveis visíveis

**Cuidado com**:
- Números de telefone
- Endereços completos
- Dados bancários
- Informações confidenciais

**Dica**: Cubra informações sensíveis antes de enviar

### ❌ Múltiplas conversas

- Foque em uma conversa por vez
- Não inclua notificações de outros apps
- Evite capturas da lista de chats

## Qualidade técnica

### Resolução ideal

**Recomendado**:
- Mínimo: 720p (HD)
- Ideal: 1080p (Full HD)
- Máximo: 4K (pode ser lento)

**Como verificar**:
- Abra a imagem na galeria
- Dê zoom para ver se está nítida
- Se estiver pixelizada, tire novamente

### Formato de arquivo

**Aceitos**:
- PNG (recomendado - melhor qualidade)
- JPG/JPEG (bom)
- HEIC (iOS - convertido automaticamente)

**Tamanho máximo**: 10MB

### Iluminação

**Dicas**:
- Evite reflexos na tela
- Use brilho adequado (50-70%)
- Prefira luz natural ou ambiente bem iluminado
- Evite contraluz

## Screenshots por tipo de app

### WhatsApp

✅ **Inclua**:
- Nome do contato no topo
- Últimas 3-5 mensagens
- Hora das mensagens
- Status de leitura (✓✓)

❌ **Evite**:
- Capturar a lista de conversas
- Incluir notificações de outros chats

### Instagram DM

✅ **Inclua**:
- Nome de usuário
- Foto de perfil
- Contexto da conversa
- Stories/posts referenciados (se relevante)

❌ **Evite**:
- Capturar stories não relacionados
- Incluir feed do Instagram

### Email (Gmail, Outlook)

✅ **Inclua**:
- Assunto do email
- Remetente
- Corpo completo da mensagem
- Assinatura (se relevante)

❌ **Evite**:
- Capturar lista de emails
- Incluir sidebar com outras pastas

### LinkedIn

✅ **Inclua**:
- Nome e cargo da pessoa
- Empresa
- Contexto profissional
- Mensagem completa

❌ **Evite**:
- Capturar feed do LinkedIn
- Incluir notificações não relacionadas

### Tinder/Bumble

✅ **Inclua**:
- Nome e idade
- Bio (se visível)
- Últimas mensagens
- Fotos do perfil (opcional)

❌ **Evite**:
- Capturar lista de matches
- Incluir outros perfis

## Situações especiais

### Conversas em grupo

**Dicas**:
- Inclua nome do grupo
- Mostre quem está falando
- Capture contexto suficiente
- Indique se é uma resposta geral ou para alguém específico

### Mensagens de voz

**Como proceder**:
1. Ouça a mensagem
2. Transcreva o conteúdo principal
3. Envie como texto para análise
4. Ou use a função de transcrição do app (se disponível)

### Imagens e mídias

**Se a conversa inclui imagens**:
- Capture a imagem também
- Ou descreva o conteúdo brevemente
- Isso ajuda a IA a entender o contexto

### Conversas longas

**Para conversas muito longas**:
1. Capture múltiplos screenshots
2. Envie o mais recente primeiro
3. Ou resuma o contexto anterior manualmente

## Checklist antes de enviar

Antes de enviar seu screenshot, verifique:

- [ ] Contexto suficiente (3-5 mensagens)?
- [ ] Mensagem a responder está completa?
- [ ] Texto está legível?
- [ ] Sem informações sensíveis expostas?
- [ ] Boa qualidade de imagem?
- [ ] Nome/foto do contato visível?
- [ ] Sem notificações irrelevantes?

## Exemplos práticos

### Exemplo 1: Screenshot ideal

**Características**:
✅ 4 mensagens de contexto
✅ Nome do contato visível
✅ Texto legível
✅ Boa iluminação
✅ Sem informações sensíveis
✅ Mensagem completa

**Resultado**: Sugestões precisas e contextualizadas

### Exemplo 2: Screenshot problemático

**Problemas**:
❌ Apenas 1 mensagem
❌ Texto cortado
❌ Imagem borrada
❌ Sem contexto

**Resultado**: Sugestões genéricas ou imprecisas

## Dicas avançadas

### Para melhores resultados:

1. **Capture em momento adequado**:
   - Não durante notificações
   - Não com teclado aberto
   - Não com menus sobrepostos

2. **Use modo retrato**:
   - Mais fácil de ler
   - Melhor para conversas
   - Formato natural

3. **Limpe a tela**:
   - Remove impressões digitais
   - Melhora legibilidade
   - Aumenta qualidade

4. **Ajuste configurações**:
   - Tamanho de fonte adequado
   - Tema claro ou escuro (preferência)
   - Modo de economia de dados desligado

### Truques profissionais:

- **Zoom antes de capturar**: Para textos pequenos
- **Modo avião**: Remove notificações temporariamente
- **Edição rápida**: Cubra informações sensíveis antes de enviar
- **Múltiplos screenshots**: Para conversas complexas

## Problemas comuns e soluções

### "A IA não entendeu o contexto"
**Solução**: Inclua mais mensagens anteriores

### "As sugestões são muito genéricas"
**Solução**: Adicione mais detalhes visuais (nome, foto, etc.)

### "Texto está ilegível"
**Solução**: Aumente o zoom ou tire novo screenshot

### "Análise falhou"
**Solução**: Verifique tamanho do arquivo e qualidade

## Próximos passos

Agora que você sabe capturar screenshots perfeitos:
- Aprenda a [escolher a resposta ideal](#como-escolher-resposta-ideal)
- Descubra [como usar em diferentes apps](#usando-diferentes-apps)
- Explore [dicas para respostas melhores](#dicas-respostas-melhores)

**Dúvidas?** Consulte nosso [FAQ](#faq) ou entre em [contato](#contato).
    `,
    relatedArticles: [
      "como-enviar-primeiro-screenshot",
      "como-escolher-resposta-ideal",
      "usando-diferentes-apps"
    ]
  },

  // Planos e Pagamentos
  {
    slug: "planos-disponiveis",
    title: "Planos Disponíveis",
    description: "Conheça todos os planos do ProntoAI e escolha o ideal para você",
    category: "Planos e Pagamentos",
    categoryColor: "from-green-500 to-emerald-400",
    lastUpdated: "2024-01-15",
    content: `
# Planos Disponíveis no ProntoAI

Escolha o plano que melhor se adapta às suas necessidades e aproveite todos os recursos do ProntoAI.

## Visão Geral dos Planos

Oferecemos **3 planos principais** para atender diferentes perfis de usuários:

### 🆓 Plano Gratuito
**Perfeito para experimentar o ProntoAI**

**Recursos inclusos**:
- ✅ 10 análises de screenshots por mês
- ✅ 3 sugestões de resposta por análise
- ✅ Todos os 3 tons de resposta (Casual, Equilibrado, Formal)
- ✅ Histórico de 7 dias
- ✅ Suporte por email

**Limitações**:
- ❌ Análises limitadas (10/mês)
- ❌ Sem análise de contexto avançado
- ❌ Sem perfis personalizados
- ❌ Sem prioridade no suporte

**Ideal para**:
- Usuários que querem testar o app
- Uso ocasional
- Avaliar funcionalidades básicas

**Preço**: **Gratuito** (sempre!)

---

### 💎 Plano Premium Mensal
**Para quem usa regularmente**

**Recursos inclusos**:
- ✅ **Análises ilimitadas** de screenshots
- ✅ 3 sugestões de resposta por análise
- ✅ Todos os tons de resposta
- ✅ **Análise de contexto avançado**
- ✅ **Perfis personalizados ilimitados**
- ✅ **Histórico completo** (sem limite de tempo)
- ✅ **Respostas favoritas** ilimitadas
- ✅ **Suporte prioritário** (chat 24/7)
- ✅ **Sem anúncios**
- ✅ **Acesso antecipado** a novos recursos

**Preços por região**:
- 🇧🇷 Brasil: **R$ 29,90/mês**
- 🇺🇸 EUA: **$9.99/mês**
- 🇪🇺 Europa: **€8.99/mês**
- 🇬🇧 Reino Unido: **£7.99/mês**
- 🇲🇽 México: **$199.00 MXN/mês**
- 🇦🇷 Argentina: **$2,990 ARS/mês**

**Ideal para**:
- Uso diário do app
- Profissionais que precisam responder muitas mensagens
- Quem quer testar antes de comprometer-se anualmente

**Economia**: Nenhuma (preço padrão mensal)

---

### 🏆 Plano Premium Anual
**Melhor custo-benefício - Economize 40%!**

**Recursos inclusos**:
- ✅ **TODOS os recursos do Plano Mensal**
- ✅ Análises ilimitadas
- ✅ Contexto avançado
- ✅ Perfis personalizados
- ✅ Histórico completo
- ✅ Suporte prioritário
- ✅ Sem anúncios
- ✅ **40% de desconto** vs mensal
- ✅ **Acesso vitalício** a recursos lançados no ano
- ✅ **Badge exclusivo** de membro anual

**Preços por região**:
- 🇧🇷 Brasil: **R$ 299,00/ano** (equivale a R$ 24,92/mês)
  - *Economia: R$ 59,80/ano*
- 🇺🇸 EUA: **$99.99/ano** (equivale a $8.33/mês)
  - *Economia: $19.89/ano*
- 🇪🇺 Europa: **€89.99/ano** (equivale a €7.50/mês)
  - *Economia: €17.89/ano*
- 🇬🇧 Reino Unido: **£79.99/ano** (equivale a £6.67/mês)
  - *Economia: £15.89/ano*
- 🇲🇽 México: **$1,999.00 MXN/ano** (equivale a $166.58 MXN/mês)
  - *Economia: $389.00 MXN/ano*
- 🇦🇷 Argentina: **$29,900 ARS/ano** (equivale a $2,491.67 ARS/mês)
  - *Economia: $5,980 ARS/ano*

**Ideal para**:
- Usuários comprometidos com o app
- Quem quer economizar no longo prazo
- Profissionais que dependem do app diariamente
- Melhor investimento

**Economia**: **40% vs Plano Mensal** (2 meses grátis!)

---

## Comparação Detalhada

| Recurso | Gratuito | Premium Mensal | Premium Anual |
|---------|----------|----------------|---------------|
| **Análises/mês** | 10 | Ilimitadas | Ilimitadas |
| **Sugestões por análise** | 3 | 3 | 3 |
| **Tons de resposta** | 3 | 3 | 3 |
| **Contexto avançado** | ❌ | ✅ | ✅ |
| **Perfis personalizados** | ❌ | Ilimitados | Ilimitados |
| **Histórico** | 7 dias | Ilimitado | Ilimitado |
| **Respostas favoritas** | 5 | Ilimitadas | Ilimitadas |
| **Suporte** | Email | Chat 24/7 | Chat 24/7 |
| **Anúncios** | Sim | Não | Não |
| **Acesso antecipado** | ❌ | ✅ | ✅ |
| **Badge exclusivo** | ❌ | ❌ | ✅ |
| **Preço (BRL)** | Grátis | R$ 29,90/mês | R$ 299,00/ano |
| **Preço (USD)** | Grátis | $9.99/mês | $99.99/ano |
| **Preço (EUR)** | Grátis | €8.99/mês | €89.99/ano |
| **Preço (GBP)** | Grátis | £7.99/mês | £79.99/ano |
| **Preço (MXN)** | Grátis | $199.00/mês | $1,999.00/ano |
| **Preço (ARS)** | Grátis | $2,990/mês | $29,900/ano |

## Recursos Detalhados

### Análises de Screenshots
**Plano Gratuito**: 10 análises por mês
**Planos Premium**: Ilimitadas

- Envie quantos screenshots quiser
- Sem preocupação com limites
- Perfeito para uso intensivo

### Contexto Avançado
**Apenas Premium**

A IA analisa:
- Histórico de conversas anteriores
- Padrões de comunicação
- Relacionamento com o contato
- Situações similares passadas

**Resultado**: Sugestões ainda mais precisas e personalizadas

### Perfis Personalizados
**Apenas Premium**

Crie perfis para diferentes situações:
- 💼 Trabalho
- 👨‍👩‍👧‍👦 Família
- 💕 Dating
- 🎉 Amigos
- 🤝 Networking

Cada perfil com:
- Tom preferido
- Nível de criatividade
- Tamanho de resposta
- Uso de emojis

### Histórico Completo
**Gratuito**: 7 dias
**Premium**: Ilimitado

- Acesse todas as análises passadas
- Reutilize respostas antigas
- Acompanhe evolução
- Nunca perca dados

### Suporte Prioritário
**Apenas Premium**

- Chat ao vivo 24/7
- Resposta em minutos
- Suporte técnico especializado
- Resolução rápida de problemas

## Como Escolher Seu Plano

### Escolha o Plano Gratuito se você:
- ✅ Quer testar o app primeiro
- ✅ Usa ocasionalmente (menos de 10x/mês)
- ✅ Não precisa de recursos avançados
- ✅ Está avaliando o serviço

### Escolha o Plano Mensal se você:
- ✅ Usa o app regularmente
- ✅ Precisa de análises ilimitadas
- ✅ Quer testar antes de comprometer-se anualmente
- ✅ Prefere flexibilidade mensal

### Escolha o Plano Anual se você:
- ✅ Usa o app diariamente
- ✅ Quer economizar 40%
- ✅ Está comprometido com o app
- ✅ Busca o melhor custo-benefício

## Perguntas Frequentes

### \"Posso mudar de plano depois?\"
✅ Sim! Você pode fazer upgrade ou downgrade a qualquer momento.

### \"O que acontece se eu cancelar?\"
- **Mensal**: Acesso até o fim do período pago
- **Anual**: Acesso até o fim do ano pago
- Seus dados são mantidos por 30 dias

### \"Posso testar o Premium antes de pagar?\"
✅ Sim! Oferecemos **7 dias grátis** de teste Premium para novos usuários.

### \"Há desconto para estudantes?\"
✅ Sim! Estudantes têm **20% de desconto** com email .edu verificado.

### \"Empresas têm planos especiais?\"
✅ Sim! Entre em contato para planos corporativos personalizados.

### \"Posso pagar em outra moeda?\"
✅ Sim! Aceitamos pagamento em múltiplas moedas. O app detecta automaticamente sua região.

### \"Há taxa de cancelamento?\"
❌ Não! Cancele a qualquer momento sem taxas adicionais.

### \"Posso compartilhar minha conta?\"
❌ Não. Cada conta é individual. Para uso em equipe, consulte planos corporativos.

## Formas de Pagamento

Aceitamos:
- 💳 Cartão de crédito (Visa, Mastercard, Amex)
- 💳 Cartão de débito
- 📱 Apple Pay
- 📱 Google Pay
- 🏦 PIX (Brasil)
- 🏦 Boleto bancário (Brasil)
- 💰 PayPal

**Segurança**: Todos os pagamentos são processados de forma segura e criptografada.

## Política de Reembolso

- ⏰ **Prazo**: Até 3 dias após a compra
- 💰 **Valor**: Proporcional aos dias não utilizados
- 📋 **Processo**: Simples e rápido via app

[Saiba mais sobre nossa Política de Reembolso](#politica-reembolso)

## Como Assinar

### Passo 1: Escolha seu plano
1. Abra o app ProntoAI
2. Vá em **Configurações** ⚙️
3. Toque em **\"Planos e Assinatura\"**
4. Escolha o plano desejado

### Passo 2: Selecione o período
- Mensal ou Anual
- Veja a economia do plano anual

### Passo 3: Método de pagamento
- Adicione seu cartão ou escolha outro método
- Informações são criptografadas e seguras

### Passo 4: Confirme
- Revise os detalhes
- Confirme a assinatura
- Pronto! Acesso imediato aos recursos Premium

## Teste Grátis

**Novos usuários**: Ganhe **7 dias grátis** de Premium!

**Como ativar**:
1. Crie sua conta
2. Escolha o plano Premium
3. Adicione método de pagamento
4. Teste grátis por 7 dias
5. Cancele antes se não quiser continuar

**Sem compromisso**: Cancele a qualquer momento durante o teste.

## Ofertas Especiais

### 🎓 Desconto Estudante
- **20% OFF** em qualquer plano
- Válido com email .edu verificado
- Renovação automática com desconto

### 👥 Plano Familiar (em breve)
- Até 5 contas
- 1 pagamento único
- Economia de 50%

### 🏢 Plano Corporativo
- A partir de 10 usuários
- Gestão centralizada
- Suporte dedicado
- Preços personalizados

**Interessado?** Entre em contato: vendas@prontoai.com

## Garantia de Satisfação

**Nossa promessa**:
- ✅ 7 dias de teste grátis
- ✅ Reembolso em até 3 dias
- ✅ Suporte sempre disponível
- ✅ Transparência total

**Não gostou?** Devolvemos seu dinheiro, sem perguntas.

## Próximos Passos

- [Como Assinar um Plano](#como-assinar-plano)
- [Formas de Pagamento](#formas-pagamento)
- [Política de Reembolso](#politica-reembolso)
- [Cancelar Assinatura](#cancelar-assinatura)

**Dúvidas?** Entre em [contato](#contato) - estamos aqui para ajudar!
    `,
    relatedArticles: [
      "politica-reembolso",
      "como-assinar-plano",
      "formas-pagamento"
    ]
  },
  {
    slug: "politica-reembolso",
    title: "Política de Reembolso",
    description: "Entenda como funciona nossa política de reembolso",
    category: "Planos e Pagamentos",
    categoryColor: "from-green-500 to-emerald-400",
    lastUpdated: "2024-01-15",
    content: `
# Política de Reembolso do ProntoAI

Entenda como funciona nossa política de reembolso e quais são as condições para solicitar.

## Planos Elegíveis para Reembolso

O reembolso está disponível **apenas** para os seguintes planos:

### ✅ Plano Mensal
- Assinatura mensal recorrente
- Elegível para reembolso dentro do prazo estabelecido
- Valor proporcional aos dias não utilizados

### ✅ Plano Anual
- Assinatura anual com pagamento único
- Elegível para reembolso dentro do prazo estabelecido
- Valor proporcional aos dias não utilizados

### ❌ Planos NÃO Elegíveis
- Plano Gratuito (não há pagamento)
- Créditos avulsos já utilizados
- Promoções especiais (verificar termos específicos)

## Prazo para Solicitar Reembolso

⏰ **IMPORTANTE**: O reembolso deve ser solicitado em **até 3 dias** após a data da compra.

### Contagem de Dias
- **Dia 1**: Data da compra/renovação
- **Dia 2**: Primeiro dia completo
- **Dia 3**: Segundo dia completo
- **Prazo limite**: Final do terceiro dia (23:59)

### Exemplos Práticos

**Exemplo 1 - Dentro do Prazo**:
- Compra: 10 de janeiro às 14:00
- Solicitação: 12 de janeiro às 18:00
- Status: ✅ **Elegível** (dentro de 3 dias)

**Exemplo 2 - Fora do Prazo**:
- Compra: 10 de janeiro às 14:00
- Solicitação: 14 de janeiro às 10:00
- Status: ❌ **Não elegível** (após 3 dias)

## Cálculo do Reembolso

O valor do reembolso é calculado de forma proporcional aos dias utilizados.

### Fórmula de Cálculo

**Para Plano Mensal**:
\`\`\`
Valor do Reembolso = Valor Pago - (Valor Diário × Dias Utilizados)
Valor Diário = Valor do Plano ÷ 30 dias
\`\`\`

**Para Plano Anual**:
\`\`\`
Valor do Reembolso = Valor Pago - (Valor Diário × Dias Utilizados)
Valor Diário = Valor do Plano ÷ 365 dias
\`\`\`

### Exemplos de Cálculo em Diferentes Moedas

#### 🇧🇷 Brasil (BRL - Real)

**Exemplo 1: Plano Mensal**
- **Valor pago**: R$ 29,90
- **Dias utilizados**: 2 dias
- **Valor diário**: R$ 29,90 ÷ 30 = R$ 1,00
- **Desconto**: R$ 1,00 × 2 = R$ 2,00
- **Reembolso**: R$ 29,90 - R$ 2,00 = **R$ 27,90**

**Exemplo 2: Plano Anual**
- **Valor pago**: R$ 299,00
- **Dias utilizados**: 3 dias
- **Valor diário**: R$ 299,00 ÷ 365 = R$ 0,82
- **Desconto**: R$ 0,82 × 3 = R$ 2,46
- **Reembolso**: R$ 299,00 - R$ 2,46 = **R$ 296,54**

#### 🇺🇸 Estados Unidos (USD - Dólar)

**Exemplo 1: Plano Mensal**
- **Valor pago**: $9.99
- **Dias utilizados**: 2 dias
- **Valor diário**: $9.99 ÷ 30 = $0.33
- **Desconto**: $0.33 × 2 = $0.66
- **Reembolso**: $9.99 - $0.66 = **$9.33**

**Exemplo 2: Plano Anual**
- **Valor pago**: $99.99
- **Dias utilizados**: 3 dias
- **Valor diário**: $99.99 ÷ 365 = $0.27
- **Desconto**: $0.27 × 3 = $0.81
- **Reembolso**: $99.99 - $0.81 = **$99.18**

#### 🇪🇺 Europa (EUR - Euro)

**Exemplo 1: Plano Mensal**
- **Valor pago**: €8.99
- **Dias utilizados**: 2 dias
- **Valor diário**: €8.99 ÷ 30 = €0.30
- **Desconto**: €0.30 × 2 = €0.60
- **Reembolso**: €8.99 - €0.60 = **€8.39**

**Exemplo 2: Plano Anual**
- **Valor pago**: €89.99
- **Dias utilizados**: 3 dias
- **Valor diário**: €89.99 ÷ 365 = €0.25
- **Desconto**: €0.25 × 3 = €0.75
- **Reembolso**: €89.99 - €0.75 = **€89.24**

#### 🇬🇧 Reino Unido (GBP - Libra)

**Exemplo 1: Plano Mensal**
- **Valor pago**: £7.99
- **Dias utilizados**: 2 dias
- **Valor diário**: £7.99 ÷ 30 = £0.27
- **Desconto**: £0.27 × 2 = £0.54
- **Reembolso**: £7.99 - £0.54 = **£7.45**

**Exemplo 2: Plano Anual**
- **Valor pago**: £79.99
- **Dias utilizados**: 3 dias
- **Valor diário**: £79.99 ÷ 365 = £0.22
- **Desconto**: £0.22 × 3 = £0.66
- **Reembolso**: £79.99 - £0.66 = **£79.33**

#### 🇲🇽 México (MXN - Peso Mexicano)

**Exemplo 1: Plano Mensal**
- **Valor pago**: $199.00 MXN
- **Dias utilizados**: 2 dias
- **Valor diário**: $199.00 ÷ 30 = $6.63
- **Desconto**: $6.63 × 2 = $13.26
- **Reembolso**: $199.00 - $13.26 = **$185.74 MXN**

**Exemplo 2: Plano Anual**
- **Valor pago**: $1,999.00 MXN
- **Dias utilizados**: 3 dias
- **Valor diário**: $1,999.00 ÷ 365 = $5.48
- **Desconto**: $5.48 × 3 = $16.44
- **Reembolso**: $1,999.00 - $16.44 = **$1,982.56 MXN**

#### 🇦🇷 Argentina (ARS - Peso Argentino)

**Exemplo 1: Plano Mensal**
- **Valor pago**: $2,990 ARS
- **Dias utilizados**: 2 dias
- **Valor diário**: $2,990 ÷ 30 = $99.67
- **Desconto**: $99.67 × 2 = $199.34
- **Reembolso**: $2,990 - $199.34 = **$2,790.66 ARS**

**Exemplo 2: Plano Anual**
- **Valor pago**: $29,900 ARS
- **Dias utilizados**: 3 dias
- **Valor diário**: $29,900 ÷ 365 = $81.92
- **Desconto**: $81.92 × 3 = $245.76
- **Reembolso**: $29,900 - $245.76 = **$29,654.24 ARS**

## Como Solicitar Reembolso

### Passo 1: Verifique a Elegibilidade

Antes de solicitar, confirme:
- [ ] Está dentro do prazo de 3 dias?
- [ ] Seu plano é Mensal ou Anual?
- [ ] Você tem o comprovante de pagamento?

### Passo 2: Acesse a Área de Suporte

1. Abra o aplicativo ProntoAI
2. Vá em **Configurações** ⚙️
3. Toque em **"Ajuda e Suporte"**
4. Selecione **"Solicitar Reembolso"**

### Passo 3: Preencha o Formulário

Forneça as seguintes informações:
- Email da conta
- Data da compra
- Valor pago
- Motivo do reembolso (opcional)
- Comprovante de pagamento (anexo)

### Passo 4: Aguarde a Análise

- **Prazo de análise**: Até 5 dias úteis
- **Notificação**: Por email e no app
- **Status**: Acompanhe em "Minhas Solicitações"

### Passo 5: Receba o Reembolso

Se aprovado:
- **Método de pagamento original**: Cartão de crédito, débito, etc.
- **Prazo para estorno**: 5-10 dias úteis (depende da operadora)
- **Confirmação**: Email com detalhes do reembolso

## Motivos Comuns para Reembolso

### ✅ Motivos Aceitos
- Insatisfação com o serviço
- Dificuldades técnicas não resolvidas
- Compra acidental
- Mudança de planos pessoais
- Funcionalidades não atenderam expectativas

### ⚠️ Situações Especiais
- **Problemas técnicos**: Entre em contato primeiro - podemos resolver!
- **Dúvidas sobre funcionalidades**: Consulte nosso suporte antes
- **Comparação com concorrentes**: Teste nosso período gratuito primeiro

## Condições e Restrições

### Restrições Importantes

❌ **Não é possível reembolso se**:
- Passou o prazo de 3 dias
- Plano já foi cancelado anteriormente
- Violação dos Termos de Uso
- Uso abusivo ou fraudulento
- Múltiplas solicitações de reembolso

### Política de Uso Justo

Para manter a sustentabilidade do serviço:
- **Limite**: 1 reembolso por conta a cada 12 meses
- **Múltiplas solicitações**: Podem resultar em análise adicional
- **Fraude**: Resulta em bloqueio permanente da conta

## Cancelamento vs Reembolso

### Diferença Entre Cancelamento e Reembolso

**Cancelamento**:
- Interrompe renovações futuras
- Você mantém acesso até o fim do período pago
- Não há devolução de valores
- Pode ser feito a qualquer momento

**Reembolso**:
- Devolve valor proporcional
- Acesso é encerrado imediatamente
- Deve ser solicitado em até 3 dias
- Desconta dias utilizados

### Quando Escolher Cada Opção

**Escolha Cancelamento se**:
- Quer usar até o fim do período pago
- Não tem urgência para parar
- Pode mudar de ideia depois

**Escolha Reembolso se**:
- Está dentro do prazo de 3 dias
- Não pretende mais usar o serviço
- Quer recuperar o valor investido

## Perguntas Frequentes

### "Posso solicitar reembolso após 3 dias?"
❌ Não. O prazo de 3 dias é rígido e não pode ser estendido.

### "O reembolso é integral?"
❌ Não. Os dias utilizados serão descontados do valor total.

### "Quanto tempo demora para receber?"
⏰ 5 dias úteis para análise + 5-10 dias úteis para estorno (depende do banco).

### "Posso solicitar reembolso mais de uma vez?"
⚠️ Sim, mas há limite de 1 reembolso a cada 12 meses por conta.

### "E se eu tiver problemas técnicos?"
💡 Entre em contato com o suporte primeiro! Podemos resolver sem necessidade de reembolso.

### "O que acontece com meus dados após o reembolso?"
🗑️ Seus dados são mantidos por 30 dias caso queira retornar. Após isso, são excluídos permanentemente.

### "Posso reativar minha conta após reembolso?"
✅ Sim! Você pode criar uma nova assinatura a qualquer momento.

## Alternativas ao Reembolso

Antes de solicitar reembolso, considere:

### 1. Suporte Técnico
- Problemas podem ser resolvidos rapidamente
- Equipe disponível para ajudar
- Chat ao vivo e email

### 2. Período de Teste
- Teste recursos premium gratuitamente
- Entenda melhor as funcionalidades
- Sem compromisso

### 3. Downgrade de Plano
- Mude para plano mais básico
- Mantenha funcionalidades essenciais
- Economize sem perder acesso

### 4. Pausa Temporária
- Congele sua assinatura por até 3 meses
- Não perde histórico e configurações
- Retome quando quiser

## Contato para Reembolso

### Canais de Atendimento

**Email**:
- reembolso@prontoai.com
- Resposta em até 24 horas

**Chat no App**:
- Disponível 24/7
- Resposta imediata

**Formulário Web**:
- prontoai.com/reembolso
- Preencha e envie online

### Informações Necessárias

Tenha em mãos:
- Email da conta
- Data da compra
- Comprovante de pagamento
- Motivo do reembolso (opcional)

## Compromisso com Transparência

No ProntoAI, valorizamos:
- ✅ Processos claros e transparentes
- ✅ Respeito ao consumidor
- ✅ Agilidade no atendimento
- ✅ Política justa de reembolso

**Nossa promessa**: Analisamos todas as solicitações com atenção e respeito.

## Próximos Passos

- Consulte nossos [Planos e Preços](#planos-precos)
- Entenda como [Cancelar Assinatura](#cancelar-assinatura)
- Veja os [Termos de Uso](#termos-uso)
- Entre em [Contato](#contato) para dúvidas

**Precisa de ajuda?** Nossa equipe está pronta para atender você!
    `,
    relatedArticles: [
      "planos-precos",
      "cancelar-assinatura",
      "formas-pagamento"
    ]
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articlesData.filter(article => article.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(articlesData.map(article => article.category)));
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return articlesData.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.description.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery)
  );
}
