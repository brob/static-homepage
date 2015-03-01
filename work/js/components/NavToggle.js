var React = require('react');

var NavToggle = React.createClass({

    render: function() {

        var nextView = this.props.toggleLink,
            currentView = this.props.currentView,
            toggleHref = "#" + nextView,
            toggleTitle = "View " + nextView;

        return (
            <p><a onClick={this.props.handleRouteClick.bind(null, nextView, currentView)} className={nextView} title={toggleTitle}>{toggleTitle}</a></p>


        );
    }

});

module.exports = NavToggle;

