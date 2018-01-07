// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const request = require('request');
const root = 'https://jsonplaceholder.typicode.com';

function triggerCall() {
    request({
        url: root + '/posts/1',
        method: 'GET'
    }, (err, req, body) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(body);
            request({
                url: root + '/posts/2',
                method: 'GET'
            }, (err, req, body) => {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    console.log(body);
                }
            })
        }
    })
}

window.addEventListener("load", function() {
    document.querySelector("#sendRequest").addEventListener("click", function() {
        triggerCall();
    });
});