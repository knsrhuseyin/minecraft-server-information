const localStorageHistory = localStorage.getItem('history')

let historyList = localStorageHistory ? JSON.parse(localStorageHistory) : []

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

        addTextWithData(
            historyItem,
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
        for (let number = 0; number < listInformation.length; number++) {
            divHistory.appendChild(listInformation[number])
        }
    }
}

const saveHistory = (data) => {
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

const addHistoryToDisplay = (divHistory) => {
    const serverHostNameHistory = document.createElement('p')
    const serverIpHistory = document.createElement('p')
    const serverMotdHistory = document.createElement('p')
    const serverOnlineHistory = document.createElement('p')
    const serverPlayersHistory = document.createElement('p')
    const serverPortHistory = document.createElement('p')
    const historyItem = historyList[historyList.length - 1]

    addTextWithData(
        historyItem,
        serverHostNameHistory,
        serverIpHistory,
        serverMotdHistory,
        serverOnlineHistory,
        serverPlayersHistory,
        serverPortHistory
    )
    console.log('Motd = ', historyItem.motd)
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

const isNotEmpty = () => {
    return localStorage.getItem('history') != null
}
