import React from 'react';
import { Link} from 'react-router-dom';

class MithilaCardComponent extends React.Component{

    state ={
        message : 'Ashapur',
        products:[{"id": "1",
            "image" : "https://source.unsplash.com/random/300x200",
            "name": "Product 1",
            "title":"title 1",
            "urls":{
                "small" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                "regular" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            }
        }]
    };



    componentDidMount() {


        fetch("/api/v1/products")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("result ",result)
                    this.setState({

                        products: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error ",error)
                    this.setState({

                        products:[{"id": "1",
                            "image" : "https://source.unsplash.com/random/300x200",
                            "name": "Product 1",
                            "title":"title 1",
                            "alt_description" : "",
                                "urls":{
                            "small" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                            "regular" : "https://images.unsplash.com/photo-1526010900697-bf1e1d70ae5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                        }
                        }]
                    });
                }
            )
    }

    componentDidUpdate() {
        console.log("Updated");
    }
render(){

    let productList =[];

    productList = this.state.products.map(card =>{

        return (
            <div className="card">
                <div className="card-header">
                    Item Code : #{card.id}
                </div>
                <img className="card-img-top img-fluid" src= {card.urls.small} alt=""/>

                <div className="card-body">
                    <h4 className="card-title"> {card.alt_description}</h4>
                    <p className="card-text"> {card.alt_description} </p>
                    <Link to={`/products/${card.id}`} className="btn btn-success btn-block" href="#">Order</Link>
                </div>
            </div>
        )
    });

    return(
        <div className="container mt-5">

            <div className="card-columns ">
                <div className="card-body">
                    <h4 className="card-title"></h4>
                    <p className="card-text"> </p>

                </div>
            </div>

            <div className="card-columns">
                {productList}
            </div>

        </div>

    )
}



};

export default MithilaCardComponent;