import React from 'react';

import MithilaBuyingComponent from './MithilaBuyingComponent';

const MithilaProductComponent = prop =>{


    return(

        <div className="container mt-5 ">

            <div className="card-columns ">
                <div className="card-body">
                    <h4 className="card-title"></h4>
                    <p className="card-text"> </p>

                </div>
            </div>

            <div className="row  mb-5" >
                <div className="col-md-8 "  >
                <div id="slider3" className="carousel slide mb-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li className="active" data-target="#slider3" data-slide-to="0"></li>
                        <li data-target="#slider3" data-slide-to="1"></li>
                        <li data-target="#slider3" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src="https://source.unsplash.com/wgq4eit198Q/700x400"
                                 alt="First Slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="https://source.unsplash.com/WLUHO9A_xik/700x400"
                                 alt="Second Slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="https://source.unsplash.com/4yta6mU66dE/700x400"
                                 alt="Third Slide"/>
                        </div>
                    </div>


                    <a href="#slider3" className="carousel-control-prev" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>

                    <a href="#slider3" className="carousel-control-next" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
                    <div className="">
                        <button className="btn btn-outline-primary" type="button">Add to Cart</button>
                    </div>


            </div>
                <div className="col-md-4 " >

                    <div className="card h-100">
                        <div className="card-header">
                            Name : Product 1
                        </div>


                        <div className="card-body">
                            <h4 className="card-title"> Title 1</h4>
                            <div className="card-text"> Description : jbhjsbjkdh kjhjkhjkh  kjhjkhjkhdsfsdf </div>
                            <div className="card-text"> Created by : Someone </div>
                        </div>
                    </div>
                </div>
            </div>

            <MithilaBuyingComponent/>
        </div>
    )

};

export default MithilaProductComponent;