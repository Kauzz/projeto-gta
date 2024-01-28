/* 

Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.

    Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuario clicar em cima dele

    Passo 2 - pegar o elemento do conteudo que preicsa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteudo apareça

Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.

    Passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});