const
    app = require('./app'),
    yargs = require('yargs')
    chalk = require('chalk')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: `Search for repositories by the owner's account name. This can be either the username or organization name.`,
        handler: (argv) => {
            let search = argv._[1];
            if (!search) {
                console.log(chalk.red("Search term cannot be empty."));
                return;
            }
            app.search(argv._[1])
        }
    })
    .help('help')
    .argv