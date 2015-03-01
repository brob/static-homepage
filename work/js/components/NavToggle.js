var React = require('react');

var NavToggle = React.createClass({

    render: function() {

        var nextView = this.props.toggleLink,
            currentView = this.props.currentView,
            toggleHref = "#" + nextView,
            toggleTitle;

        switch(nextView) {
            case "about":
                toggleTitle = "Back to About"
                break;
            case "portfolio":
                toggleTitle = "View My Portfolio"
                break;
        }

            return (
            <p><a onClick={this.props.handleRouteClick.bind(null, nextView, currentView)} className={nextView} title={toggleTitle}>{toggleTitle}</a></p>


        );
    }

});

module.exports = NavToggle;

