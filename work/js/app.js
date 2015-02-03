var React = require('react'),
    $ = require('jQuery'),
    App = require('./components/ProjectView.js'),
    ProjectView = App.ProjectView,
    Projects = App.App;


React.render(<ProjectView projects={App.ProjectData} />, document.getElementById('footer'));