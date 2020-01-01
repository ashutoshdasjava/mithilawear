import React from 'react';

const MithilaCardComponent = (props)=>{

    const  products = props.cards.map(card =>{

        return (
            <div className="card">
                <div className="card-header">
                    {card.name}
                </div>
                <img className="card-img-top img-fluid" src= {card.image} alt=""/>

                <div className="card-body">
                <h4 className="card-title"> {card.title}</h4>
                <p className="card-text"> {card.text} </p>
                <a className="btn btn-success btn-block" href="#">Read More</a>
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
            {products}
            </div>

        </div>
    )
};

export default MithilaCardComponent;