var $ = require('jQuery');
    module.exports = $.ajax({
        type: 'GET',
        url: 'https://www.behance.net/v2/users/bryanlrobinson/projects?api_key=o7ttoWgQDgJ03RcfR3vdp7gUfdGnJTR6&callback=myCallbackFunction',
        async: false,
        jsonpCallback: 'myCallbackFunction',
        contentType: "application/json",
        dataType: 'jsonp'
    });



