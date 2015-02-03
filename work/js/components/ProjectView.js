var React = require('react');
var $ = require('jQuery'),
    ProjectData = require('./ProjectData.js'),
    ProjectFilters = require('./ProjectFilters.js'),
    ProjectItem = require('./ProjectItems.js');

var ProjectView = React.createClass({

    render: function() {
        var projectList = []

        this.props.projects.projects.forEach(function(project) {
            projectList.push(<ProjectItem project={project} key={project.name} />);
        })

        return (
            <div>
                <ProjectFilters />
                {projectList}
            </div>
        )
    }
});

module.exports = {
    ProjectView,
    ProjectData
};

