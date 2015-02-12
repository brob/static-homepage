var React = require('react/addons');

var ProjectItem = React.createClass({

    render: function() {
        var project = this.props.project,
            classes='columns small-6',
            projectTitle = 'More info on ' + this.props.project.name;

        return (
                <li>
                    <a href={project.url} title={projectTitle}>
                        {project.name}<br />
                        <div className="project-image">
                            <img src={project.covers[404]} />
                            <div className="project-hover"><div className="background"></div></div>
                        </div>
                    </a>
                </li>
        )
    }

});

module.exports = ProjectItem;