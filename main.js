var request = require("request");

//0.4 => 1.0, thanks to the guy that pointed it out on GitHub

exports.anime = function(query, offset) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'GET',
            url: 'https://picayune-fishy-python.glitch.me/result?search=' + query + (offset.toString() ? offset : '0'),
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }, function(error, response, body) {
            if (error) {
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}

exports.animeList = function(offset) {
    return new Promise(function(resolve, reject) {
        if (offset === null || offset === undefined) {
            offset = 0
        }
        request({
            method: 'GET',
            url: 'https://picayune-fishy-python.glitch.me/result?search=' + (offset.toString() ? offset : '0'),
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }, function(error, response, body) {
            if (error) {
                reject(Error(error))
            } else {
                var allofit = JSON.parse(body)
                var results = allofit.data
                resolve(results)
            }
        })
    })
}
