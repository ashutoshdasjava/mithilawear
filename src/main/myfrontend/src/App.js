import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MithilaNavComponent from './MithilaNavComponent';
import MithilaCardComponent from './MithilaCardComponent';

class App extends React.Component {

    state ={
        message : 'Ashapur',
        products : []
    };



    componentDidMount() {


        /*fetch("/hello")
            .then(res => res.text())
            .then(
                (result) => {
                    console.log("result ",result)
                    this.setState({

                        message: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error ",error)
                    this.setState({

                        error
                    });
                }
            )*/


        fetch("/products")
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

                        error
                    });
                }
            )
    }

componentDidUpdate() {
    console.log("Updated");
}

    render(){


        return (


            <div className="App">
                <MithilaNavComponent />
            <MithilaCardComponent cards={this.state.products}/>
            </div>
        )

    };

}

export default App;
