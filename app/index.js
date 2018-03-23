const
     superagent = require('superagent')
     url = "https://api.github.com"

const _fetch = (command) => {
    return superagent.get(`${url}/${command}`)
        .then(response => response.body)
        .catch(error => error.body)
}

exports.search = (username) => {
    return _fetch(`users/${username}/repos`)
}

exports.branches = (username, repo) =>  {
    return superagent.get(`${url}/repos/${username}/${repo}/branches`)
        .then(response => response.body)
        .catch(error => error.body)
}
