import React, { Component } from 'react';

    const Article = ({title}) => (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <h2 style={{textAlign:"center"}}>{title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
            <a className="btn btn-default">More info</a>
        </div>
    )

export default Article;