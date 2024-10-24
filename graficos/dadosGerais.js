const url = 'https://raw.githubusercontent.com/KauaoLiveira06/2024-Api-3b-cidades/refs/heads/main/cidades_mais_visitadas_brasil.json'

async function visualizarInfo() {
    const res = await fetch(url)
    const dados = await res.json()
    
    const cidades = Object.keys(dados)
    const cidadesMaisVisitadas = cidades(0)
    const quantidadeDeVisitantes = Object.values(dados)(0)

    console.log(cidadesMaisVisitadas)
    console.log(quantidadeDeVisitantes)
}

visualizarInfo()