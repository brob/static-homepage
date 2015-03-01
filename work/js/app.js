var React = require('react/addons'),
    $ = require('jQuery'),
    App = require('./components/ProjectView.js'),
    ProjectData = require('./components/ProjectData.js'),
    AboutView = require('./components/AboutView.js'),
    NavToggle = require('./components/NavToggle'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    ProjectView = App.ProjectView,
    Projects = App.App;


var Index = React.createClass({

    getInitialState: function() {
        return {
            currentView: "about",
            toggleLink: "portfolio"
        };
    },
    handleRouteClick: function(viewState, toggleState) {
        this.setState({
            currentView: viewState,
            toggleLink: toggleState
        });

    },
    render: function() {
        var displayView, toggleLink;
        switch(this.state.currentView) {

            case "about":
                displayView = <AboutView {...this.state} handleRouteClick={this.handleRouteClick} />,
                toggleLink = "portfolio";
                break;
            case "portfolio":
                toggleLink = "about";
                ProjectData.then(function(projects) {
                    displayView = <ProjectView projects={projects} />
                });
                break;

        }

        return (
            <div className="row">
                <NavToggle {...this.state} handleRouteClick={this.handleRouteClick} toggleLink={this.state.toggleLink} />

                <ReactCSSTransitionGroup component="div" className="row" transitionName="mainSwap">
                    {displayView}
                </ReactCSSTransitionGroup>

            </div>
        )

    }
});
React.render(<Index />, document.getElementById('app'));

