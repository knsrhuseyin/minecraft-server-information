const serverHostName = document.createElement('p')
const serverIp = document.createElement('p')
const serverMotd = document.createElement('p')
const serverOnline = document.createElement('p')
const serverPlayers = document.createElement('p')
const serverPort = document.createElement('p')
let notInformation = document.getElementById('notInformations')
const input = document.getElementById('address')

const researchedInformation = document.getElementById('information-researched')
const historyInformation = document.getElementById(
    'informations-server-container'
)

const button = document.getElementById('button')

button.onclick = function () {
    fetch('https://api.mcsrvstat.us/2/' + input.value)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            console.log(researchedInformation, historyInformation)
            serverData(data, researchedInformation, historyInformation)
            dataHistory(data, historyInformation)
        })
}

const addTextWithData = (
    data,
    serverHostName,
    serverIp,
    serverMotd,
    serverOnline,
    serverPlayers,
    serverPort
) => {
    serverPort.className = 'server-port'
    notInformation.innerText = ''
    serverHostName.innerText = 'Hostname : ' + data.hostname
    serverIp.innerText = 'IP : ' + data.ip
    serverMotd.innerHTML = 'MotD : ' + data.motd.html
    serverOnline.innerText = 'Online : ' + data.online
    serverPlayers.innerText =
        'Players : ' + data.players.online + '/' + data.players.max
    serverPort.innerText = 'Port : ' + data.port
}

// information serveur
const serverData = (data, div) => {
    addTextWithData(
        data,
        serverHostName,
        serverIp,
        serverMotd,
        serverOnline,
        serverPlayers,
        serverPort
    )
    const listInformation = [
        serverPort,
        serverPlayers,
        serverOnline,
        serverMotd,
        serverIp,
        serverHostName,
    ]
    for (
        let numberInformation = 0;
        numberInformation < listInformation.length;
        numberInformation++
    ) {
        div.appendChild(listInformation[numberInformation])
    }
}

// Historique de la data
const dataHistory = (data, divHistory) => {
    const serverHostNameHistory = document.createElement('p')
    const serverIpHistory = document.createElement('p')
    const serverMotdHistory = document.createElement('p')
    const serverOnlineHistory = document.createElement('p')
    const serverPlayersHistory = document.createElement('p')
    const serverPortHistory = document.createElement('p')
    addTextWithData(
        data,
        serverHostNameHistory,
        serverIpHistory,
        serverMotdHistory,
        serverOnlineHistory,
        serverPlayersHistory,
        serverPortHistory
    )
    const listInformation = [
        serverPortHistory,
        serverPlayersHistory,
        serverOnlineHistory,
        serverMotdHistory,
        serverIpHistory,
        serverHostNameHistory,
    ]
    for (
        let numberInformation = 0;
        numberInformation < listInformation.length;
        numberInformation++
    ) {
        divHistory.append(listInformation[numberInformation])
    }
}
