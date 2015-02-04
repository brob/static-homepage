var React = require('react'),
    $ = require('jQuery'),
    App = require('./components/ProjectView.js'),
    ProjectData = require('./components/ProjectData.js'),
    ProjectView = App.ProjectView,
    Projects = App.App;

ProjectData.then(function(projects) {
    React.render(<ProjectView projects={projects} />, document.getElementById('footer'));
})

