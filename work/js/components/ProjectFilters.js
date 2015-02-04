var React = require('react');

var ProjectFilters = React.createClass({

    setActive: function() {

    },

    render: function() {
        var filter = this.props.filter;



        return (
            <div>
                <a
                data-filter-name={filter}
                onClick={this.props.onUserInput.bind(null, filter)}>
                    {filter}
                </a>
            </div>
        )
    }

});

module.exports = ProjectFilters;