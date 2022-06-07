#! /usr/bin/env node
const { program } = require('commander')
const team = require('./commands/team')
const add = require('./commands/add')
const btc = require('./commands/btc.js')


program
    .command('add <player>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('team')
    .description('Add TODO task')
    .action(team)

program
    .command('price')
    .description('search for BTC price')
    .action(btc)

program.parse()

