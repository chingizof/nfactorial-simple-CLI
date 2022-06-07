#! /usr/bin/env node
const { program } = require('commander')
const team = require('./commands/team')
const add = require('./commands/add')
const btc = require('./commands/btc.js')


program
    .command('add <player>')
    .description('Add a new player')
    .action(add)

program
    .command('team')
    .description('посмотреть состав команды')
    .action(team)

program
    .command('price <coin>')
    .description('search for BTC price')
    .action(btc)

program.parse()

