const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'search for a users repositories',
        handler: (argv) => {  app.search(argv._[1]) }
    })
    .help('help')
    .argv