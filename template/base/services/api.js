var post = async(api,data={}) => {
    return new Promise((resolve, reject) => {
        fetch('/api/'+api, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                resolve(data)
            });
    }).then(res => {
        console.log('post /api/'+api,JSON.stringify(data),res)
        return res
    })
}

var get = async(api,data={}) => {
	var data_url = Object.keys(data).length>=1? '?'+Object.keys(data).map(key=>key + '=' + data[key]).join('&') : '';
    return new Promise((resolve, reject) => {
        fetch('/api/'+api+data_url)
            .then(response => response.json())
            .then(data => {
                resolve(data)
            });
    }).then(res => {
        console.log('get /api/'+api+data_url,res)
        return res
    })
}

export default {
    post,
    get
};

