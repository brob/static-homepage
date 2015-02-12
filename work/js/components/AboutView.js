var React = require('react');

var AboutView = React.createClass({

    render: function() {

        return (
                <div className="large-10 large-centered columns">
                    <p>Hello there! I'm Bryan Robinson, and &mdash; you know what &mdash; I'm a design and development strategist with a strong focus on my end user's goals. You can visit me where I live on the web below, and YES, the icons wiggle. Sue me, css3 keyframes are fun. </p>
                    <p><a onClick={this.props.handleRouteClick.bind(null, "portfolio")} className="button" href="#portfolio" title="View Bryan's portfolio pieces">Portfolio</a></p>
                </div>


            );
    }

});

module.exports = AboutView;

