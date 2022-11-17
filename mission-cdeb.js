if (document.getElementById('select1') !== null) {
    let checked1 = false
    let checked2 = false
    let checked3 = false
    let checked4 = false
    let checked5 = false

    const select1 = document.getElementById('select1')
    const select2 = document.getElementById('select2')
    const select3 = document.getElementById('select3')
    const select4 = document.getElementById('select4')
    const select5 = document.getElementById('select5')

    select1.addEventListener('change', () => {
        if (select1.value === 'FR') {
            checked1 = true
            toggleClass()
        }
    })

    select2.addEventListener('change', () => {
        if (select2.value === 'Terre') {
            checked2 = true
            toggleClass()
        }
    })

    select3.addEventListener('change', () => {
        if (select3.value === 'Ondes radio') {
            checked3 = true
            toggleClass()
        }
    })

    select4.addEventListener('change', () => {
        if (select4.value === 'Gamma') {
            checked4 = true
            toggleClass()
        }
    })

    select5.addEventListener('change', () => {
        if (select5.value === 'Mobile') {
            checked5 = true
            toggleClass()
        }
    })

function toggleClass() {
    if (checked1 && checked2 && checked3 && checked4 && checked5 ) {
        document.getElementById('nextButton').classList.add('active')
    }
}
}

if (document.getElementById('checkboxAge') !== null) {
    let good1 = false
    let good2 = false
    let good3 = false
    
    const checkboxAge1 = document.getElementById('checkboxAge')
    const checkboxAge2 = document.getElementById('checkboxAge2')
    const checkboxAge3 = document.getElementById('checkboxAge3')
    const $age = document.querySelectorAll(".age");

    [...$age].map(ele => {
        ele.addEventListener("click", () => {
          // La case cliquée change de couleur
          if (checkboxAge1.checked === true &&
            checkboxAge2.checked === true &&
            checkboxAge3.checked === true) {
            good1 = true
        }
        });
      });

    const genre1 = document.getElementById('genre1')
    const genre2 = document.getElementById('genre2')
    const genre3 = document.getElementById('genre3')
    const $genre = document.querySelectorAll('.genre');

    [...$genre].map(ele => {
        ele.addEventListener('click', () => {
            if (genre1.checked === true && genre2.checked === true && genre3.checked === true) {
                good2 = true
            }
        })
    })

    const reseau1 = document.getElementById('reseau1')
    const reseau2 = document.getElementById('reseau2')
    const reseau3 = document.getElementById('reseau3')
    const reseau4 = document.getElementById('reseau4')
    const reseau5 = document.getElementById('reseau5')
    const $reseau = document.querySelectorAll('.reseau');

    [...$reseau].map(ele => {
        ele.addEventListener('click', () => {
            if (reseau1.checked === true &&
                reseau2.checked === true &&
                reseau3.checked === true &&
                reseau4.checked === true &&
                reseau5.checked === false) {
                console.log('lala')
                good3 = true
            }
        })
    })

    window.addEventListener('click', () => {
        if (good1 && good2 && good3) {
            document.getElementById('next_page').classList.add('active')
        }
    })

    document.getElementById('next_page').addEventListener('click', () => {
        if (good1 && good2 && good3) {
            if (window.location.pathname.includes('InterAxe_IIM')) {
                document.getElementById('next_page').addEventListener('click', () => {
                  document.location.href = '/InterAxe_IIM/mission-cdeb-3.html'
                })
              }
              document.getElementById('next_page').addEventListener('click', () => {
                document.location.href = '/mission-cdeb-3.html'
              })
        }
    })
}
    

