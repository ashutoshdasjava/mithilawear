import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MithilaNavComponent from './MithilaNavComponent';
import MithilaCardComponent from './MithilaCardComponent';
import MithilaProductComponent from './MithilaProductComponent';

class App extends React.Component {







    render(){


        return (


            <div className="App">
                <BrowserRouter>
                    <MithilaNavComponent/>

                    <Route path="/" exact component ={MithilaCardComponent} />
                    <Route path="/products/:id" component = {MithilaProductComponent }/>
                </BrowserRouter>


            </div>
        )

    };

}

export default App;
