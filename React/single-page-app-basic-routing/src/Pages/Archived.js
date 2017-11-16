import React, { Component } from 'react';
import '../index.css';

class Archived extends Component {
    render() {
        console.log(this.props);
        const  article  = this.props.match.params.article;
        const query = new URLSearchParams( this.props.location.search);
        return (
            <div>
                <h1>Archived ({article})</h1>
                date : {query.get('date')}, filter: {query.get('filter')}
            </div>
        );
    }
}

export default Archived;