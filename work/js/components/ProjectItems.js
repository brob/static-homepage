var React = require('react');

var ProjectItem = React.createClass({

    render: function() {
        var project = this.props.project;

        return (
            <div>
            {project.name}<br />
            <img src={project.covers[404]} />
            </div>
        )
    }

});

module.exports = ProjectItem;