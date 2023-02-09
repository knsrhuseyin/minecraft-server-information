const localStorageHistory = localStorage.getItem('history')

let historyList = localStorageHistory ? JSON.parse(localStorageHistory) : []

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
    ) {}
}

const historyDisplay = (divHistory) => {
    for (let number = 0; number < historyList.length; number++) {
        const serverHostNameHistory = document.createElement('p')
        const serverIpHistory = document.createElement('p')
        const serverMotdHistory = document.createElement('p')
        const serverOnlineHistory = document.createElement('p')
        const serverPlayersHistory = document.createElement('p')
        const serverPortHistory = document.createElement('p')
        const historyItem = historyList[number]

        console.log('historyList', historyList)
        console.log('historyItem', historyItem)

        serverPortHistory.className = 'server-port'
        serverHostNameHistory.innerText = 'Hostname : ' + historyItem.hostname
        serverIpHistory.innerText = 'IP : ' + historyItem.ip
        serverMotdHistory.innerHTML = 'MotD : ' + historyItem.motd
        serverOnlineHistory.innerText = 'Online : ' + historyItem.online
        serverPlayersHistory.innerText =
            'Players : ' +
            historyItem.players.online +
            '/' +
            historyItem.players.max
        serverPortHistory.innerText = 'Port : ' + historyItem.port

        const listInformation = [
            serverPortHistory,
            serverPlayersHistory,
            serverOnlineHistory,
            serverMotdHistory,
            serverIpHistory,
            serverHostNameHistory,
        ]
        for (let number = 0; number < listInformation.length; number++) {
            divHistory.appendChild(listInformation[number])
        }
    }
}

const saveHistory = (data) => {
    const localStorageHistory = localStorage.getItem('history')
    const serverInformationList = {
        hostname: data.hostname,
        ip: data.ip,
        motd: data.motd.html,
        online: data.online,
        players: {
            max: data.players.max,
            online: data.players.online,
        },
        port: data.port,
    }

    historyList.push(serverInformationList)

    localStorage.setItem('history', JSON.stringify(historyList))
}

const isNotEmpty = () => {
    if (localStorage.getItem('history') != null) {
        return true
    } else {
        return false
    }
}
