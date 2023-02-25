document.getElementById('tirar-carta').addEventListener('click', () => {
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmBaralhado() {
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return json = await resposta.json()
}

async function tirarUmaCarta(deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmBaralhado()

    //console(baralho)
    const carta = await tirarUmaCarta(baralho.deck_id)

    //console.log(carta.cards[0].image)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta

}

tirarUmaCartaAleatoriaDoBaralho()