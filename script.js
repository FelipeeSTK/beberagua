const copospequenos = document.querySelectorAll('.cup-small')
const litros = document.getElementById('litros')
const porcentagem = document.getElementById('porcentagem')
const restante = document.getElementById('restante')

updateBigCup()

copospequenos.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx===7 && copospequenos[idx].classList.contains("full")) idx--;
    else if(copospequenos[idx].classList.contains('full') && !copospequenos[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    copospequenos.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const copos_cheios = document.querySelectorAll('.cup-small.full').length
    const copos = copospequenos.length

    if(copos_cheios === 0) {
        porcentagem.style.visibility = 'hidden'
        porcentagem.style.height = 0
    } else {
        porcentagem.style.visibility = 'visible'
        porcentagem.style.height = `${copos_cheios / copos * 330}px`
        porcentagem.innerText = `${copos_cheios / copos * 100}%`
    }

    if(copos_cheios === copos) {
        restante.style.visibility = 'hidden'
        restante.style.height = 0
    } else {
        restante.style.visibility = 'visible'
        litros.innerText = `${2.5 - (250 * copos_cheios / 1000)}L`
    }
}