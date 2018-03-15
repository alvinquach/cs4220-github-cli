const
    git = require('./index.js'),
    inquirer = require('inquirer')


// HINT for #4 in Lab
const getRepos = (username) => {
    git.getRepos(username)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))
}

module.exports = {
    getRepos
}

