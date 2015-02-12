var React = require('react'),
    $ = require('jQuery'),
    App = require('./components/ProjectView.js'),
    ProjectData = require('./components/ProjectData.js'),
    AboutView = require('./components/AboutView.js'),
    ProjectView = App.ProjectView,
    Projects = App.App;


var Index = React.createClass({

    getInitialState: function() {
        return {
            currentView: "about"
        };
    },
    handleRouteClick: function(viewState) {
        this.setState({
            currentView: viewState
        });

    },
    render: function() {
        var displayView;
        switch(this.state.currentView) {

            case "about":
                displayView = <AboutView {...this.state} handleRouteClick={this.handleRouteClick} />;
                break;
            case "portfolio":
                ProjectData.then(function(projects) {
                    displayView = <ProjectView projects={projects} />;
                });
                break;

        }

        return (
            <div className="row">
                {displayView}
            </div>
        )

    }
});
React.render(<Index />, document.getElementById('app'));

