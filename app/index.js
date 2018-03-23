const
     superagent = require('superagent')
     url = "https://api.github.com"

const _fetch = (command) => {
    return superagent.get(`${url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

exports.search = (username) => {
    return _fetch(`users/${username}/repos`)
}

exports.runGetUrl = (getUrl, paramName = "", paramValue = "") =>  {
    return superagent.get(getUrl.replace(paramName, paramValue))
        .then(response => response.body)
        .catch(error => error.response.body)
}
