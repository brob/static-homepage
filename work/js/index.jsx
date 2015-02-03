var React = require('react');
var $ = require('jQuery');
var Be = require('./lib/be.js', function(be) {
    be('o7ttoWgQDgJ03RcfR3vdp7gUfdGnJTR6');
});


var App = React.createClass({

    render: function() {
        return (
            <footer>
                <span>&copy; Something Something 2014</span>
            </footer>
        )
    }
});

module.exports = App;

