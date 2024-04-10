# APIclima

# Explicação do script.js
##Nas 47 primeiras linhas, criamos uma funções que definem a imagem do fundo e ajusta o tamanho das paginas para evitar repetições, apos criar a função criamos uma variavel 'body' para consegurimos selecionar a tag, em seguida vamos utilizar o backgroundImage ele quando colocado a url define a imagem de fundo,backgroundSize é responsavel para ajustar o tamanho da imagem, backgroundRepeat evita que a imagem se repita;

apos isso criaremos uma função para capitalizar a primeira letra de uma string;
-Capitalizar a primeira letra de uma string significa converter a primeira letra da string em maiúscula, mantendo as outras letras em minúsculas.

lógo apos iremos adiciona um evento de envio de formulário para obter dados meteorológicos;
-Adicionar um evento de envio de formulário para obter dados meteorológicos envolve a criação de um evento personalizado no Gerenciador de tags do Google que dispare uma tag quando um formulário for enviado. 

feito isso criaremos umas const chamada TempoResult, para nos mostar os dados metereológicos encontrado;

Atualizar os elementos HTML com os dados meteorológicos;
para fazer uma solicitação à API e obter os dados meteorológicos, que podem então ser exibidos em um elemento HTML usando o método innerHTML.

Exibe os resultados e esconde o formulário;

Criaremos outra const para selecionar os elementos dos icones;

Após, vamos definir as fontes dos ícones, que aparecerá quando recebermos os resultados das buscas;

Por fim, finalizaremos com um codigo que atualiza o fundo da página com base no clima relatado;

# Explicação do app.js

Este código implementa um serviço RESTful simples para obter informações climáticas de uma cidade. O serviço utiliza a API OpenWeatherMap e traduz as descrições climáticas para português.

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
