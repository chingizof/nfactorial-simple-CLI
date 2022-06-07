const conf = new (require('conf'))()

function team () {
    const playersList = conf.get('team-list')
    if (playersList && playersList.length) {
        playersList.forEach((player, index) => {
            console.log(`${index+1}. ${player.name}`)
        })
    } else {
        console.log(
            'You don\'t have any players yet.'
        )
    }
}
module.exports = team