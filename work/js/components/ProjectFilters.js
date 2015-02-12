var React = require('react/addons');

var ProjectFilters = React.createClass({


    render: function() {
        var cx = React.addons.classSet,
            filter = this.props.filter,
            filterClass = cx({
                'active': this.props.activeFilter == filter
            });




        return (
            <li>
                <a
                data-filter-name={filter}
                onClick={this.props.onUserInput.bind(null, filter)}
                className={filterClass}>
                    {filter}
                </a>
            </li>
        )
    }

});

module.exports = ProjectFilters;