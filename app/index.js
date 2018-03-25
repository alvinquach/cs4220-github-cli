const
     superagent = require('superagent')
     config = require('./config')

exports.search = (username) => {
    return superagent.get(`${config.url}/users/${username}/repos`)
        .then(response => response.body)
        .catch(error => error.body)
}

exports.branches = (username, repo) =>  {
    return superagent.get(`${config.url}/repos/${username}/${repo}/branches`)
        .then(response => response.body)
        .catch(error => error.body)
}
