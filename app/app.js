const
    git = require('./index.js'),
    inquirer = require('inquirer')


// HINT for #4 in Lab
const search = (username) => {
    git.search(username)
        .then(result => {
            console.log(`----Repos of ${username}----`)
            //  let i = 1;
            //  result.forEach(repo => {
            //      console.log(i + '. ' + repo.name + " "  + repo.id)
            //      i++
            // });
            showRepo(result)
        })
        .catch(err => console.log(err))
}

const showRepo = (result) => {
    return inquirer.prompt([{
        type: 'list',
        message: 'The Repo to search:',
        name: 'repo',
        choices: () => {
            let repos = []
            result.forEach(repo => {
                repos.push({name: `${repo.name}`, value: `${repo.id}`})
            })
            return repos
        }
    }])
    .then (answer => {
        result.forEach(repo => {
            if (answer.repo == repo.id) {
                console.log(`------Information of ${repo.name}------`)
                console.log(`Name: ${repo.name}`)
                console.log(`Description: ${repo.description}`)
            }
        })
    })
    .catch(err => console.log(err))
}

module.exports = {
    search
}