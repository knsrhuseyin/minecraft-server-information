const serverHostName = document.createElement('p')
const serverIp = document.createElement('p')
const serverMotd = document.createElement('p')
const serverOnline = document.createElement('p')
const serverPlayers = document.createElement('p')
const serverPort = document.createElement('p')

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
