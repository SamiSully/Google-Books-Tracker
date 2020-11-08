import React from 'react';
import Card from "../../components/Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
    return (
        <div>
            <h1>This is the search page</h1>
            <div className="card">
                <div className="sm-col-4">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Save</a><a href="#" className="btn btn-primary">Delete</a>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Search;