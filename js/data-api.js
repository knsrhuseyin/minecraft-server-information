const serverHostName = document.createElement('p')
const serverIp = document.createElement('p')
const serverMotd = document.createElement('p')
const serverOnline = document.createElement('p')
const serverPlayers = document.createElement('p')
const serverVersion = document.createElement('p')
const serverPort = document.createElement('p')

const addTextWithData = (
    historyList,
    serverHostName,
    serverIp,
    serverMotd,
    serverOnline,
    serverPlayers,
    serverVersion,
    serverPort
) => {
    serverPort.className = 'server-port'
    notInformation.innerText = ''
    serverHostName.innerText = 'Hostname : ' + historyList.hostname
    serverIp.innerText = 'IP : ' + historyList.ip
    serverMotd.innerHTML = 'MotD : ' + historyList.motd
    if (historyList.online == true) {
        serverOnline.innerText = 'Online : True'
    } else {
        serverOnline.innerText = 'Online : False'
    }
    serverPlayers.innerText =
        'Players : ' +
        historyList.players.online +
        '/' +
        historyList.players.max
    serverVersion.innerText = 'Version : ' + historyList.version
    serverPort.innerText = 'Port : ' + historyList.port
}

// information serveur
const serverData = (divContainer, newDiv) => {
    const newDivId = document.getElementById('div-information')
    const divErrorId = document.getElementById('div-error')
    if (divErrorId != undefined) {
        divErrorId.remove()
    }
    if (newDivId == undefined) {
        newDiv = document.createElement('div')
        newDiv.id = 'div-information'
    }
    const historyItem = historyList[historyList.length - 1]
    addTextWithData(
        historyItem,
        serverHostName,
        serverIp,
        serverMotd,
        serverOnline,
        serverPlayers,
        serverVersion,
        serverPort
    )
    const listInformation = [
        serverHostName,
        serverIp,
        serverMotd,
        serverOnline,
        serverPlayers,
        serverVersion,
        serverPort,
    ]
    for (
        let numberInformation = 0;
        numberInformation < listInformation.length;
        numberInformation++
    ) {
        newDiv.appendChild(listInformation[numberInformation])
    }
    divContainer.appendChild(newDiv)
}

const adressNotFound = (message, className, type, divContainer) => {
    const divInformation = document.getElementById('div-information')
    element = document.createElement(type)
    element.id = 'div-error-text'
    const divError = document.createElement('div')
    divError.id = 'div-error'
    const divErrorId = document.getElementById('div-error')
    element.className = className
    element.innerText = message
    if (divErrorId != undefined && divInformation != undefined) {
        divInformation.remove()
        divErrorId.remove()

        divError.appendChild(element)
        divContainer.appendChild(divError)
    } else if (divErrorId == undefined && divInformation != undefined) {
        divInformation.remove()

        divError.appendChild(element)
        divContainer.appendChild(divError)
    } else if (divErrorId == undefined && divInformation == undefined) {
        divError.appendChild(element)
        divContainer.appendChild(divError)
    }
}
