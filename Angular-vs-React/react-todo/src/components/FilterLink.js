import React, {Component} from 'react';
import PropTypes from 'prop-types';
class FilterLink extends Component {
    applyFilter(event){
        event.preventDefault();
        const active = document.querySelector('.selected');
        if(active){
            active.classList.remove('selected');
        }
       this.props.onFilter(this.props.filterAction);
       event.target.classList += ' selected';
    }
    render() {
        return (
           <a className={this.props.filterAction} onClick={this.applyFilter.bind(this)}>
               {this.props.linkText}
           </a>
        );
    }
}
FilterLink.propTypes = {
    filterAction: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}

export default FilterLink;
