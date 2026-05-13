# IPAG - Huambo | Guia de Utilização e Documentação

Este documento fornece uma visão geral e instruções de utilização para o site oficial do **IPAG - Instituto Politécnico de Administração e Gestão do Huambo**.

---

## 🚀 Visão Geral do Site

O site foi desenvolvido para ser uma plataforma informativa moderna, rápida e responsiva, destinada a estudantes, encarregados de educação e a comunidade em geral. O foco principal é a divulgação dos **Cursos Médios Técnicos** oferecidos pela instituição. 

## 📂 Estrutura de Navegação

O site é composto por 5 páginas principais, acessíveis através do menu de navegação (barra superior):

### 1. Início (`index.html`)
*   **Hero Section:** Uma recepção visual com o nome da instituição por cima de uma imagem de fundo académica.
*   **Destaques da Semana:** Cartões informativos sobre eventos importantes, como matrículas e inauguração de laboratórios.
*   **Visão Rápida:** Um resumo sobre o que o IPAG oferece.

### 2. Sobre Nós (`sobre.html`)
*   **História:** Detalhes sobre a fundação e evolução da instituição no Huambo.
*   **Missão e Valores:** Explicação do compromisso do IPAG com o ensino técnico-profissional.
*   **Infraestrutura:** Menção aos laboratórios e corpo docente.

### 3. Cursos Técnicos (`cursos.html`)
*   **Catálogo de Cursos:** Informação detalhada sobre os cursos de nível médio:
    *   Informática e Gestão
    *   Contabilidade
    *   Recursos Humanos
    *   Comércio
    *   Estatística
*   **Corpo Docente:** Uma secção dedicada aos professores de destaque da instituição.

### 4. Notícias (`noticias.html`)
*   **Feed de Atualidades:** Uma lista cronológica de novidades, como datas de exames, olimpíadas de matemática e eventos escolares.

### 5. Contactos (`contacto.html`)
*   **Localização:** Endereço físico e um mapa (representativo).
*   **Canais de Comunicação:** Números de telefone e e-mails oficiais (info@ipag.edu.ao).
*   **Formulário de Contacto:** Permite que os utilizadores enviem mensagens diretamente à escola.

---

## 📱 Responsividade e Acessibilidade

O site foi construído com a abordagem **Mobile-First** (Prioridade Móvel):
*   **Menu Hambúrguer:** Em dispositivos pequenos (telemóveis/tablets), o menu lateral aparece ao clicar no ícone de três barras (☰).
*   **Layout Flexível:** As grelhas (grids) ajustam-se automaticamente de 3 colunas (desktop) para 1 coluna (mobile).
*   **Imagens Adaptáveis:** Todas as imagens possuem `max-width: 100%` para evitar quebras de layout.

---

## 🛠️ Detalhes Técnicos (Para Desenvolvedores)

*   **Linguagens:** HTML5, CSS3 e JavaScript (Vanila).
*   **Estilização:** CSS puro com variáveis para fácil manutenção de cores e sombras.
*   **Semântica:** Uso de tags HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) para melhor SEO.
*   **Links Relativos:** Todas as referências de arquivos (`src/style.css`, `src/script.js`) utilizam caminhos relativos para garantir que o site funcione corretamente ao ser aberto localmente de uma pasta (ex: extraído de um ficheiro .zip).

---

## 📝 Como Atualizar o Conteúdo

Se precisar de alterar alguma informação:
1.  **Imagens:** Procure pela tag `<img>` e mude o atributo `src`.
2.  **Contactos:** O rodapé (footer) aparece em todas as páginas e deve ser atualizado em cada ficheiro `.html` individualmente para manter a consistência.
3.  **Estilo:** Para cores ou espaçamentos globais, edite o ficheiro `src/style.css`.

---
&copy; 2026 IPAG - Huambo. Direitos Reservados.
