const
    git = require('./index.js'),
    inquirer = require('inquirer'),
    chalk = require('chalk')

const search = (username) => {
    git.search(username)
        .then(result => {
            if (!result) {
                console.log(chalk.red("Username does not exist."));
                return;
            }
            console.log();            
            console.log(`------ Repositores owned by ${username} ------`)
            showRepos(result)
        })
        .catch(err => console.log(err))
}

const showRepos = (result) => {
    return inquirer.prompt([{
        type: 'list',
        message: 'Select a repo to diplay more information:',
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
        git.branches(repo.owner.login, repo.name)
            .then (result =>  printRepo(repo, result))
            .catch(err => console.log(err))

    })
    .catch(err => console.log(err))
}

const printRepo = (repo, branches) => {
    console.log();
    console.log(`------ Information for ${repo.name} ------`)
    console.log(chalk.cyan("Name: \t\t\t") + `${repo.name}`)
    console.log(chalk.cyan("Created on: \t\t") + `${repo.created_at}`)
    console.log(chalk.cyan("Owner: \t\t\t") + `${repo.owner.login}`)
    console.log(chalk.cyan("Description: \t\t") + `${repo.description}`)
    console.log(chalk.cyan("URL: \t\t\t") + chalk.blue(`${repo.html_url}`))
    console.log(chalk.cyan("Fork Count: \t\t") + `${repo.forks_count}`)
    console.log(chalk.cyan("Repo Size: \t\t") + `${repo.size} KB`)
    console.log(chalk.cyan("Branches: \t\t") + `${branches.length}`)
    console.log();
}

module.exports = {
    search
}