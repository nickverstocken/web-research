import React, { Component } from 'react';
import '../index.css';
import Article from '../Components/Article/Article'
class Archived extends Component {
    render() {
        const  article  = this.props.match.params.article;
        const query = new URLSearchParams( this.props.location.search);

        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
        ].map((title, i) => <Article title={title} key={i} />);
        return (
            <div>
                <h1>Archived ({article})</h1>
                date : {query.get('date')}, filter: {query.get('filter')}
                <div className="row">
                    {Articles}
                </div>
            </div>
        );
    }
}

export default Archived;