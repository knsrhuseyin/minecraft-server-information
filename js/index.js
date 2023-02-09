let notInformation = document.getElementById('notInformations')
const input = document.getElementById('address')
const researchedInformation = document.getElementById('information-researched')
const historyInformation = document.getElementById(
    'informations-server-container'
)

const resetButtonTest = document.getElementById('reset-button-test')
const button = document.getElementById('button')

if (isNotEmpty()) {
    historyDisplay(historyInformation)
} else {
    let historyList = localStorage.getItem('history')
        ? JSON.parse(localStorage.getItem('history'))
        : []
    historyDisplay(historyInformation)
}

resetButtonTest.onclick = function () {
    console.log(isNotEmpty)
    console.log(localStorage.getItem('history'))
    localStorage.clear()
    console.log(
        'History reseted ! Content : ' + localStorage.getItem('history')
    )
    window.location.reload()
}

button.onclick = function () {
    console.log(isNotEmpty)
    const localStorageHistory = localStorage.getItem('history')
    console.log(input.value)
    if (input.value === '') {
        return
    }
    fetch('https://api.mcsrvstat.us/2/' + input.value)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            console.log(researchedInformation, historyInformation)
            saveHistory(data)
            addHistoryToDisplay(historyInformation)
            serverData(researchedInformation)
        })
}
