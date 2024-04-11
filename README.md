# APIclima

# Explicação app.js
##Este código implementa um serviço RESTful simples para obter informações climáticas de uma cidade. O serviço utiliza a API OpenWeatherMap e traduz as descrições climáticas para português.

Requisitos:

Node.js instalado npm ou yarn instalado Instalação:

Clone o repositório ou baixe o código. Instale as dependências com npm install ou yarn install. Execução:

Inicie o servidor com o comando node app.js. Acesse o endpoint /climatempo/:cidade com o nome da cidade desejada. Detalhes do código:

Imports:

express: módulo para criar o servidor web. axios: módulo para realizar requisições HTTP. path: módulo para manipular caminhos de arquivos. cors: módulo para permitir CORS (Cross-Origin Resource Sharing). config.json: arquivo JSON com a chave da API OpenWeatherMap. Variáveis:

app: instância do servidor express. apikey: chave da API OpenWeatherMap. traducaoClima: objeto que mapeia descrições climáticas em inglês para português. Rotas:

/climatempo/:cidade: Obtém o nome da cidade da URL. Faz uma requisição à API OpenWeatherMap. Traduz a descrição do clima para português. Retorna um objeto JSON com as informações climáticas. Observações:

Este código é um exemplo simples e pode ser adaptado de acordo com suas necessidades. A chave da API OpenWeatherMap é gratuita para uso pessoal, mas pode ser necessário adquirir um plano pago para uso comercial. Recursos adicionais:

Documentação da API OpenWeatherMap: https://openweathermap.org/api Módulo express: https://expressjs.com/ Módulo axios: https://github.com/axios/axios

script.js - Front-end
Este código implementa o front-end de um aplicativo que consulta informações climáticas de uma cidade. O aplicativo utiliza a API OpenWeatherMap e apresenta as informações em uma interface amigável.

Requisitos:

HTML CSS JavaScript (ES6) Estrutura do código:

index.html: Arquivo HTML principal que contém a estrutura da página e o código JavaScript. style.css: Arquivo CSS que define os estilos da página. gif/: Pasta que contém os GIFs animados para cada condição climática. icones/: Pasta que contém os ícones utilizados na interface. Funcionalidades:

Consulta de informações climáticas: O usuário pode digitar o nome de uma cidade e o aplicativo consulta a API OpenWeatherMap para obter as informações climáticas. Exibição das informações: As informações climáticas são exibidas na tela, incluindo temperatura, umidade, velocidade do vento, descrição do clima e um GIF animado que representa a condição climática. Tratamento de erros: Se a consulta à API OpenWeatherMap falhar, o aplicativo exibe uma mensagem de erro. Detalhes do código:

Funções:

neblina(): Define a imagem de fundo da página como um GIF de neblina.

sol(): Define a imagem de fundo da página como um GIF de sol.

chuvaleve(): Define a imagem de fundo da página como um GIF de chuva leve.

banhodechuva(): Define a imagem de fundo da página como um GIF de chuva forte.

nublado(): Define a imagem de fundo da página como um GIF de céu nublado.

nuvensseparadas(): Define a imagem de fundo da página como um GIF de céu com nuvens separadas.

neveleve(): Define a imagem de fundo da página como um GIF de neve leve.

tempestade(): Define a imagem de fundo da página como um GIF de tempestade.

primeiraLetraMaiuscula(str): Converte a primeira letra de uma string para maiúscula. Evento submit do formulário:

Obtém o nome da cidade digitada pelo usuário.

Faz uma requisição à API OpenWeatherMap.

Se a requisição for bem-sucedida, exibe as informações climáticas na tela.

Se a requisição falhar, exibe uma mensagem de erro.

Imagens e ícones: As imagens de fundo da página são GIFs animados que representa

# Explicação script.js
## responsável por controlar a interatividade de uma página da web que permite aos usuários consultar o clima de uma cidade e exibir os resultados na página, incluindo uma animação de fundo correspondente às condições climáticas. Aqui está um resumo explicando cada parte do código:

. *Funções para definir o fundo de acordo com as condições climáticas*:
   - As funções neblina, sol, chuvaleve, banhodechuva, nublado, nuvensseparadas, neveleve e tempestade são responsáveis por alterar o fundo da página com imagens animadas correspondentes às diferentes condições climáticas.
   - Cada função seleciona o elemento body da página e define sua propriedade backgroundImage com a URL da imagem correspondente à condição climática.

. *Função primeiraLetraMaiuscula*:
   - Esta função recebe uma string como entrada e retorna a mesma string com a primeira letra em maiúscula. Ela é utilizada para garantir que o nome da cidade seja exibido corretamente na página.

. *Evento de submissão do formulário*:
   - O código captura o evento de submissão do formulário com o id formclima.
   - Uma função anônima é executada quando o formulário é submetido.
   - A função previne o comportamento padrão do formulário para evitar o recarregamento da página.
   - O valor inserido no campo de entrada cityInput é capturado.
   - Uma requisição fetch é feita para o endpoint /climatempo/${city} com o nome da cidade como parâmetro.
   - Os dados da resposta são convertidos em JSON.
   - Os detalhes do clima, como temperatura, umidade e velocidade do vento, são exibidos na página.
   - Dependendo do tipo de clima retornado pela API, a função correspondente para alterar o fundo da página é chamada.

Este código torna a página interativa, permitindo que os usuários consultem o clima de uma cidade e visualizem os resultados de forma dinâmica, com a animação de fundo refletindo as condições climáticas atuais.

# Explicação index.html
## consiste em uma estrutura básica de uma página web para consultar o clima. Ele inclui:

 -Um formulário para inserir o nome da cidade que será consultada.
 -Um botão para enviar o formulário.
 -Um ícone de lupa que permite recarregar a página.
 -Uma seção para exibir os resultados da consulta do clima, que inclui:
 -Uma div para exibir a descrição do clima.
 -Uma div para exibir os detalhes do clima, como temperatura, umidade e velocidade do vento.
 -Referências a recursos externos, como uma folha de estilo personalizada e fontes do Google Fonts.
 -Um arquivo JavaScript (script.js) que é responsável por adicionar interatividade à página, como enviar a consulta do clima e exibir os resultados.
 -Em resumo, o código HTML define a estrutura e o conteúdo da página web para consultar o clima, enquanto o JavaScript adiciona a funcionalidade de interação com o usuário.

# Explicação style.css
##é responsável por estilizar uma página da web que permite aos usuários consultar o clima de uma cidade. Aqui está um resumo explicando cada parte do código:

. *Estilo do contêiner principal do formulário (forminteiro)*:
   - Define um fundo transparente com um efeito de desfoque.
   - Adiciona uma borda sólida com cantos arredondados.
   - Define altura e largura fixas, e centraliza o conteúdo.
   - Define cor, fonte e sombra para o texto.
   - Aplica uma transição suave para animações.

. *Estilo para os cabeçalhos (h1)*:
   - Define a cor e a fonte para os cabeçalhos dentro do formulário.
   - Centraliza horizontalmente o texto.

. *Estilo para o formulário de consulta (#formclima)*:
   - Define espaçamento interno e alinhamento central para o conteúdo.
   - Adiciona uma transição suave para animações.

. *Estilo para o corpo da página (body)*:
   - Define uma imagem de fundo animada e ajusta seu posicionamento e tamanho para cobrir toda a página.
   - Define a cor do texto.

. *Estilo para a fonte "Kdam Thmor Pro"*:
   - Define a fonte e suas características.

. *Estilo para os botões (button)*:
   - Define a aparência dos botões, incluindo largura, altura, borda arredondada, cor de fundo, sombra e cursor.
   - Aplica uma transição para animações.

. *Estilo para os ícones (#cityIcon, #temperaturaIcon, #umidadeIcon, #ventoIcon)*:
   - Define a altura dos ícones.

. *Estilo para o contêiner e os ícones dos detalhes do clima (#climaResult, .icons)*:
   - Define a disposição dos itens e a distribuição do espaço entre eles.

. *Estilo para a descrição do clima (descricao)*:
   - Define o alinhamento do texto e dos ícones, além do tamanho da fonte.

. *Estilo para o ícone de recarregar a página (lupa)*:
   - Define a exibição como oculta por padrão.
   - Alinha os itens à direita e ao topo.

 *Estilo para a seção de descrição do clima (#descricao1)*:
   - Define a exibição como oculta por padrão e adiciona uma transição suave.

Este conjunto de estilos proporciona uma experiência visual atraente e coesa para os usuários ao interagirem com a página de consulta de clima.

