import React, { Component } from 'react';
import '../index.css';
import Article from '../Components/Article/Article'
class Featured extends Component {
    render() {
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
           <h1>Featured</h1>
                <div className="row">
                    {Articles}
                </div>
            </div>
        );
    }
}

export default Featured;