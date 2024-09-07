function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (campoPesquisa=="") {

section.innerHTML = "<p> você não digitou um nome de jogador</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()
    // Imprime no console o elemento encontrado para fins de depuração.
    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos com as propriedades 'apresentacao', 'titulo', 'descricao' e 'link').
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Concatena uma nova div com a classe "item-resultado" à string 'resultados'.
        // A div contém:
        // - Um título com um link para a apresentação (abre em nova aba).
        // - Uma descrição formatada como um parágrafo.
        // - Um link para mais informações (abre em nova aba).

if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)||tags.includes(campoPesquisa) ){
// cria um novo elemento
resultados += `
            <div class="item-resultado">
                <h2> <a href=${dado.apresentacao} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}
                <a href=${dado.link} target="_blank">Mais Informações</a>
                </div>`;
}

    
    }

    if(!resultados) {
        resultados = "<p>Jogador não foi encontrado.</p>" //para ao apertar o buttom com o campo com um jogador não registrado não exibir resultado nenhum
    }

    // Atribui o conteúdo HTML gerado à propriedade innerHTML da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}