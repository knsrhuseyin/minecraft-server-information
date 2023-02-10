let inputBeforeValue
const notInformation = document.getElementById('notInformations')
const emptyHistoryText = document.getElementById('empty-history')
const input = document.getElementById('address')
const researchedInformationContainer = document.getElementById(
    'information-researched-container'
)
const historyInformation = document.getElementById(
    'informations-history-server-container'
)

const loading = (boolean) => {
    if (boolean) {
        button.innerHTML = `Recherchez <spinning-dots />`
    } else {
        button.innerHTML = `<span>Recherchez</span>`
    }
}

if (isNotEmpty()) {
    emptyHistoryText.remove()
}

const resetButtonTest = document.getElementById('reset-button')
const button = document.getElementById('button')

historyDisplay(historyInformation)

resetButtonTest.onclick = function () {
    localStorage.clear()
    window.location.reload()
}

button.onclick = function () {
    notInformation.remove()
    loading(true)
    if (input.value === '') {
        loading(false)
        adressNotFound(
            'Veuillez entrer une adresse !',
            'notFound',
            'p',
            researchedInformationContainer
        )
        return
    } else if (input.value == inputBeforeValue) {
        loading(false)
        return
    }
    fetch('https://api.mcsrvstat.us/2/' + input.value)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            try {
                saveHistory(data)
                addHistoryToDisplay(historyInformation)
                emptyHistoryText.remove()
                serverData(researchedInformationContainer)
                inputBeforeValue = input.value
                loading(false)
            } catch (e) {
                loading(false)
                inputBeforeValue = input.value
                adressNotFound(
                    'Adresse Introuvable !',
                    'notFound',
                    'p',
                    researchedInformationContainer
                )
                return
            }
        })
}
