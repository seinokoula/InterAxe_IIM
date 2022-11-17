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
        if (select5.value === 'Desktop') {
            checked5 = true
            toggleClass()
        }
    })

function toggleClass() {
    if (checked1 && checked2 && checked3 && checked4 && checked5 ) {
        document.getElementById('nextButton').classList.add('active')
    }
}

    