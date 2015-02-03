var $ = require('jQuery'),
    Projects = $.ajax({
        type: 'GET',
        url: '/scripts/data.jsonp',
        async: false,
        jsonpCallback: 'myCallbackFunction',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            module.exports = json;
        },
        error: function(e) {
            console.log(e.message);
        }
    });



