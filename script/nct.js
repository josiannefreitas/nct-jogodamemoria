const main = document.getElementById('nct-main')

let click01 = null
let click02 = null
let encontrados = 0

renderizarCartas()

function renderizarCartas() {
  const arrDuplicado = [...membros, ...membros]
  const membrosEmbaralhados = shufleArray(arrDuplicado)
  console.log(membrosEmbaralhados)

  for (let i = 0; i < membrosEmbaralhados.length; i++) {
    let carta = document.createElement('img')
    // let imagem = document.createElement('img')
    // let nome = document.createElement('span')

    carta.id = membrosEmbaralhados[i].id

    carta.addEventListener('click', clickCarta)
    carta.src =
      'https://smtown-cdn.smtown.com/upload/profile/web-detail/a79a358683494dac809a138e5c0a3c3b_2022-02-17-18-42-47.jpg'

    main.appendChild(carta)
    // carta.appendChild(imagem)
    // carta.appendChild(nome)
  }
}

function clickCarta(event) {
  const imgClicada = event.target
  let idClicado = event.target.id

  let membroClicado = membros.find(elemento => elemento.id == idClicado)

  imgClicada.src = membroClicado.img

  if (click01 == null) {
    click01 = imgClicada
  } else {
    click02 = imgClicada
    testPar()
  }
}

function testPar() {
  if (click01.id == click02.id) {
    console.log('Encontrei um par!')
    encontrados++
    click01 = null
    click02 = null

    if (encontrados == membros.length) {
      setTimeout(() => {
        encontrados = 0
        window.location.href = 'index.html'
      }, 500)
    }
  } else {
    setTimeout(() => {
      click01.src =
        'https://smtown-cdn.smtown.com/upload/profile/web-detail/a79a358683494dac809a138e5c0a3c3b_2022-02-17-18-42-47.jpg'
      click02.src =
        'https://smtown-cdn.smtown.com/upload/profile/web-detail/a79a358683494dac809a138e5c0a3c3b_2022-02-17-18-42-47.jpg'
      console.log('Não é par!')
      click01 = null
      click02 = null
    }, 1000)
  }
}

function shufleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
