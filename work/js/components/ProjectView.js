var React = require('react');
var $ = require('jQuery'),
    ProjectFilters = require('./ProjectFilters.js'),
    ProjectItem = require('./ProjectItems.js');

var ProjectView = React.createClass({

    getInitialState: function() {
        return {
            activeFilter: '',
            projects: this.props.projects.projects
        };
    },

    handleClick: function(filterName) {
        console.log(filterName);
        var filterProducts = this.props.projects.projects.filter(function(project) {
            return project.fields.indexOf(filterName) > -1
        });

        this.setState({
            projects: filterProducts,
            activeFilter: filterName
        })
    },

    render: function() {
        var projectList = [],
            filters = [],
            filterList = [];

        this.props.projects.projects.forEach(function(project) {
            project.fields.forEach(function(field) {
                if(filters.indexOf(field) === -1) {
                    filters.push(field)
                }
            });

        });

        filters.forEach(function(filter) {

            filterList.push(<ProjectFilters filter={filter} key={filter} onUserInput={this.handleClick} />)
        }.bind(this));

        this.state.projects.forEach(function(project) {

            projectList.push(<ProjectItem project={project} key={project.name} />);
        });



        return (
            <div>
                {filterList}
                {projectList}
            </div>
        )
    }
});

module.exports = {
    ProjectView
};

