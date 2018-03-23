const
     superagent = require('superagent')
     config = require('./config')

const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.body)
}

exports.search = (username) => {
    return _fetch(`users/${username}/repos`)
}

exports.branches = (username, repo) =>  {
    return superagent.get(`${config.url}/repos/${username}/${repo}/branches`)
        .then(response => response.body)
        .catch(error => error.body)
}
