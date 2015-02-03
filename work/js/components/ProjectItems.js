var React = require('react');

var ProjectItem = React.createClass({

    render: function() {
        var project = this.props.project;
        console.log(project);

        return (
            <div>{project.name}</div>
        )
    }

});

module.exports = ProjectItem;