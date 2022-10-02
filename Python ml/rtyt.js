var request = require('request');
 function updateClient(postData){
    
            var clientServerOptions = {
                // http:flaskserverurl:port/route
                uri: 'http://127.0.0.1:5000/arraysum',
                body: JSON.stringify(postData),
        
                // Automatically stringifies
                // the body to JSON
                json: true,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            request(clientServerOptions, function (error, response) {
                console.log(error,response.body);
                return;
            });
        }
        var data = {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }

        updateClient(data);