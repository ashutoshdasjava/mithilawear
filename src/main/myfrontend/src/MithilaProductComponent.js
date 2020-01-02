import React from 'react';

import MithilaBuyingComponent from './MithilaBuyingComponent';

class MithilaProductComponent extends React.Component{

    state ={

        product:{"id": "1",
            "image" : "https://source.unsplash.com/random/300x200",
            "name": "Product 1",
            "title":"title 1",
            "alt_description" : "xyz",
            "urls":{
                "small" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                "regular" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            },
            "user" :{
                "name" : ""
            }
        }
    };



    componentDidMount() {

const productid = this.props.match.params.id;
        fetch(`/api/v1/products/${productid}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("product in Prod Component ",result)
                    this.setState({

                        product: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error ",error)
                    this.setState({

                        product:{"id": "1",
                            "image" : "https://source.unsplash.com/random/300x200",
                            "name": "Product 1",
                            "title":"title 1",
                            "alt_description" : "xyz",
                            "urls":{
                                "small" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                "regular" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                            },
                            "user" :{
                                "name" : ""
                            }
                        }
                    });
                }
            )
    }



    render() {

let product = this.state.product;







        console.log("product =",product);

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
                                    <img className="d-block img-fluid" src={product.urls.regular}
                                         aria-label={product.alt_description}/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src={product.urls.regular}
                                         aria-label={product.alt_description}/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src={product.urls.regular}
                                         aria-label={product.alt_description}/>
                                </div>
                            </div>


                            <a href="#slider3" className="carousel-control-prev" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>

                            <a href="#slider3" className="carousel-control-next" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                        <div className="mb-5">
                            <button className="btn btn-outline-primary" type="button">Add to Cart</button>
                        </div>


                    </div>
                    <div className="col-md-4 " >

                        <div className="card h-100">
                            <div className="card-header">
                                #{product.id}
                            </div>


                            <div className="card-body">
                                <h4 className="card-title">{product.alt_description}</h4>
                                <div className="card-text"> Description : {product.alt_description}</div>
                                <div className="card-text"> Created by : {product.user.name} </div>
                            </div>
                        </div>
                    </div>
                </div>

                <MithilaBuyingComponent itemCode={product.id}/>
            </div>
        )
    }



};

export default MithilaProductComponent;