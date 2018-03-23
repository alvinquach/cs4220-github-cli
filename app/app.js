const
    git = require('./index.js'),
    inquirer = require('inquirer'),
    chalk = require('chalk')

const search = (username) => {
    git.search(username)
        .then(result => {
            console.log();            
            console.log(`------ Repositores owned by ${username} ------`)
            showRepos(result)
        })
        .catch(err => console.log(err))
}

const showRepos = (result) => {
    return inquirer.prompt([{
        type: 'list',
        message: 'The Repo to search:',
        name: 'repo',
        choices: () => {
            let repos = []
            result.forEach(repo => {
                repos.push({name: repo.name, value: repo})
            })
            return repos
        }
    }])
    .then (answer => {
        const repo = answer.repo;

        // Get the branches
        git.runGetUrl(repo.branches_url, "{/branch}")
            .then (result =>  printRepo(repo, result))
            .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
}

const printRepo = (repo, branches) => {
    console.log();
    console.log(`------ Information for ${repo.name} ------`)
<<<<<<< HEAD
    console.log(chalk.cyan("Name: \t\t\t") + `${repo.name}`)
    console.log(chalk.cyan("Created on: \t\t") + `${repo.created_at}`)
    console.log(chalk.cyan("Owner: \t\t\t") + `${repo.owner.login}`)
    console.log(chalk.cyan("Description: \t\t") + `${repo.description}`)
    console.log(chalk.cyan("URL: \t\t\t") + chalk.blue(`${repo.html_url}`))
    console.log(chalk.cyan("Fork Count: \t\t") + `${repo.forks_count}`)
    console.log(chalk.cyan("Repo Size: \t\t") + `${repo.size} KB`)
    console.log(chalk.cyan("Branches: \t\t") + `${branches.length}`)
=======
    console.log(`Name: \t\t\t${repo.name}`)
    console.log(`Created on: \t\t${repo.created_at}`)
    console.log(`Owner: \t\t\t${repo.owner.login}`)
    console.log(`Description: \t\t${repo.description}`)
    console.log(`URL: \t\t\t${repo.html_url}`)
    console.log(`Fork Count: \t\t${repo.forks_count}`)
    console.log(`Repo Size: \t\t${repo.size} KB`)
    console.log(`Branches: \t\t${branches.length}`)
>>>>>>> c5a3fb5fea65a87283088cccd2dc07c04c7c1656
    console.log();
}

module.exports = {
    search
}