const
    git = require('./index.js'),
    inquirer = require('inquirer')


// HINT for #4 in Lab
const search = (username) => {
    git.search(username)
        .then(result => {
            console.log(`----Repos of ${username}----`)
            // let i = 1;
            // result.forEach(repo => {
            //     console.log(i + '. ' + repo.name)
            //     i++
            // });
            showRepo(result)
            .then(result => {
                console.log(result)
            })
        })
        .catch(err => console.log(err))
}

const showRepo = (result) => {
    return inquirer.prompt([{
        type: 'list',
        message: 'The Repo to search:',
        name: 'Selecting Repo',
        choices: result.map(function(repo) {
            return `${repo.name}`
        }),
        validate: (answers) => { 
            if (answers.length > 1) {
                return false
            }
            else return true;
        }
    }])
}


module.exports = {
    search
}