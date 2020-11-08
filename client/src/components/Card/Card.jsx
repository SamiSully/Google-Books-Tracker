import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
    return (
        <div>
            <h1>This is the search page</h1>
            <div className="card">
                <div className="sm-col-4">
        <div className="card-body">
          <h5 className="card-title">This is a Book</h5>
          <p className="card-text">Book info goes here yay</p>
          <a href="#" className="btn btn-primary">Save</a><a href="#" className="btn btn-primary">Delete</a>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Card;