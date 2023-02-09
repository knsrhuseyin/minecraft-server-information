const serverHostName = document.createElement('p')
const serverIp = document.createElement('p')
const serverMotd = document.createElement('p')
const serverOnline = document.createElement('p')
const serverPlayers = document.createElement('p')
const serverPort = document.createElement('p')

const addTextWithData = (
    historyList,
    serverHostName,
    serverIp,
    serverMotd,
    serverOnline,
    serverPlayers,
    serverPort
) => {
    serverPort.className = 'server-port'
    notInformation.innerText = ''
    serverHostName.innerText = 'Hostname : ' + historyList.hostname
    serverIp.innerText = 'IP : ' + historyList.ip
    serverMotd.innerHTML = 'MotD : ' + historyList.motd
    serverOnline.innerText = 'Online : ' + historyList.online
    serverPlayers.innerText =
        'Players : ' +
        historyList.players.online +
        '/' +
        historyList.players.max
    serverPort.innerText = 'Port : ' + historyList.port
}

// information serveur
const serverData = (div) => {
    const historyItem = historyList[historyList.length - 1]
    addTextWithData(
        historyItem,
        serverHostName,
        serverIp,
        serverMotd,
        serverOnline,
        serverPlayers,
        serverPort
    )
    const listInformation = [
        serverHostName,
        serverIp,
        serverMotd,
        serverOnline,
        serverPlayers,
        serverPort,
    ]
    for (
        let numberInformation = 0;
        numberInformation < listInformation.length;
        numberInformation++
    ) {
        div.appendChild(listInformation[numberInformation])
    }
}
