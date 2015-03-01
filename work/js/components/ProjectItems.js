var React = require('react/addons');

var ProjectItem = React.createClass({

    render: function() {
        var project = this.props.project,
            classes='columns small-6',
            projectTitle = 'More info on ' + this.props.project.name;

        return (
                <li>
                    <a href={project.url} title={projectTitle}>

                        <div className="project-image">
                            <img src={project.covers[404]} />
                            <div className="project-hover"><div className="background"></div></div>
                        </div>
                        <h5>{project.name}</h5>
                    </a>
                </li>
        )
    }

});

module.exports = ProjectItem;