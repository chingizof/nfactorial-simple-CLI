const conf = new (require('conf'))()

function add (player) {
    //get the current todo-list
    let playersList = conf.get('team-list')

    if (!playersList) {
        //default value for todos-list
        playersList = []
    }

    //push the new task to the todos-list
    playersList.push({
        name: player,
        done: false
    })

    //set todos-list in conf
    conf.set('team-list', playersList)

    //display message to user
    console.log('Player has been added successfully!')
}

module.exports = add

