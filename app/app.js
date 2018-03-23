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
                console.log(`Name: \t\t\t${repo.name}`)
                console.log(`Created on: \t\t${repo.created_at}`)
                console.log(`Owner: \t\t\t${repo.owner.login}`)
                console.log(`Description: \t\t${repo.description}`)
                console.log(`URL: \t\t\t${repo.html_url}`)
                console.log(`Fork Count: \t\t${repo.forks_count}`)
                console.log(`Repo Size: \t\t${repo.size} KB`)
            }
        })
    })
    .catch(err => console.log(err))
}

module.exports = {
    search
}