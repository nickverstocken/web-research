import React, {Component} from 'react';
import FilterLink from './FilterLink';
class Footer extends Component {
    filterApply(filter){
        console.log(this.props);
        this.props.applyFilter(filter);
    }
    removeCompleted(){
        console.log(this.props);
        this.props.clearCompleted();
    }
    render() {
        return (
            <div>
            <footer className="footer">
                <div></div>
                <span className="todo-count"><strong>{this.props.count}</strong> item{this.props.count > 1 || this.props.count === 0 ? 's' : ''} left</span>
                <ul className="filters">
                    <li>
                        <FilterLink onFilter={this.filterApply.bind(this)} filterAction="all" linkText="All"/>
                    </li>
                    <li>
                        <FilterLink onFilter={this.filterApply.bind(this)} filterAction="active" linkText="Active"/>
                    </li>
                    <li>
                        <FilterLink onFilter={this.filterApply.bind(this)} filterAction="completed" linkText="Completed"/>
                    </li>
                </ul>

                {this.props.hasCompleted ? <button className="clear-completed" onClick={this.removeCompleted.bind(this)}>Clear completed</button> : ''}
            </footer>
            </div>
        );
    }
}

export default Footer;
