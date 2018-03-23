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


exports.searchFurthur = (username, repo) => {
    return _fetch(`/search/repositories/?q=${repo}`)
    //     .then(response => response.body)
    //     .catch(error => error.response.body)

    // console.log(username)
    // return _fetch(`users/${username}/${repo}`)
}