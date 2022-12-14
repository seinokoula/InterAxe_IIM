const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')


function getChoice(e) {
    console.log(e.target.id)
    if (document.getElementById('img').src.includes('dashboard') && e.target.id === 'choice1') {
        goodChoice()
    } else if (document.getElementById('img').src.includes('box') && e.target.id === 'choice3') {
        goodChoice()
    } else if (document.getElementById('img').src.includes('chaise') && e.target.id === 'choice2') {
        goodChoice()
    } else if (document.getElementById('img').src.includes('clavier') && e.target.id === 'choice3') {
        goodChoice()
    } else if (document.getElementById('img').src.includes('lampe') && e.target.id === 'choice1') {
        goodChoice()
    } else {
        wrongChoice()
    }
}

function goodChoice() {
    if (document.getElementById('img').src.includes('dashboard')) {
        showGoodButton()
        setTimeout(function () {
            document.getElementById('img').src = './img/box0001-0100.gif'
        }, 600)
    } else if (document.getElementById('img').src.includes('box')) {
        showGoodButton()
        setTimeout(function() {
            document.getElementById('img').src = './img/chaise0001-0100_1.gif'
        }, 600)
    } else if (document.getElementById('img').src.includes('chaise')) {
        showGoodButton()
        setTimeout(function() {
            document.getElementById('img').src = './img/clavier0001-0100.gif'
        }, 600)
    } else if (document.getElementById('img').src.includes('clavier')) {
        showGoodButton()
        setTimeout(function() {
            document.getElementById('img').src = './img/lampe0001-0100.gif'
        }, 600)
    } else {
        if (window.location.pathname.includes('InterAxe_IIM')) {
            document.location.href = '/InterAxe_IIM/jvsucceed.html'
          }
            document.location.href = '/jvsucceed.html'
    }
}

function showGoodButton() {
    document.getElementById('goodChoice').classList.add('active')
    setTimeout(function () {
        document.getElementById('goodChoice').classList.remove('active')
    }, 600)
}

function wrongChoice() {
    document.getElementById('wrongChoice').classList.add('active')
    setTimeout(function () { 
        document.getElementById('wrongChoice').classList.remove('active')
      }, 600);
}


choice2.addEventListener('click', (e) => {
    getChoice(e)
})

choice3.addEventListener('click', (e) => {
    getChoice(e)
})

choice1.addEventListener('click', (e) => {
    getChoice(e)
})