let notInformation = document.getElementById('notInformations')
const input = document.getElementById('address')
const researchedInformation = document.getElementById('information-researched')
const historyInformation = document.getElementById(
    'informations-server-container'
)

const resetButtonTest = document.getElementById('reset-button-test')
const button = document.getElementById('button')

resetButtonTest.onclick = function () {
    console.log(localStorage.getItem('history'))
    localStorage.clear()
    console.log(
        'History reseted ! Content : ' + localStorage.getItem('history')
    )
}

button.onclick = function () {
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
            serverData(data, researchedInformation, historyInformation)
            historyDisplay(historyInformation)
        })
}
