const url = 'https://raw.githubusercontent.com/KauaoLiveira06/2024-Api-3b-dados-cidades/refs/heads/main/cidades_mais_visitadas_brasil.json'

async function visualizarInfo() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)

    const cidadesVotadas = Object.keys(dados)
    const votos = Object.values(dados)
    const cidadeMaisVotada = cidadesVotadas[0]
    const quantidadeDeVotos = votos[0]

    console.log(votos)

    let paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Nessa pesquisa buscou-se compreender qual as cidades mais bonitas votadas pelos alunos do ensino fundamental e médio. ${cidadeMaisVotada} foi a cidade mais votada entre todos, com um total de ${quantidadeDeVotos} votos.`

    let container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInfo()