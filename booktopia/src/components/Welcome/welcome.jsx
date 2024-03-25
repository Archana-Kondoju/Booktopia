import React, { Component } from 'react';
class Welcome extends Component {
    // state = {  } 
    render() { 
        return (
            <div >

    <section className="py-0 text-center container">
        <div className="row py-lg-0">
        <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome To Booktopia</h1>
            <p className="lead text-body-secondary">All catergories of books are available here.<br/> Read and get the knowledge of it as per your interests and requirement</p>
            {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p> */}
        </div>
        </div>
    </section>
    </div>
        );
    }
}
 
export default Welcome;