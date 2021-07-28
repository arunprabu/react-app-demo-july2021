import React, { Component } from 'react';
import axios from 'axios'

class Users extends Component {

    // What's the REST API URL? http://localhost:3000/api/users
    // What is the Http Method? GET
    // What is the REST API Client? npm i axios 

    componentDidMount(){ // lifecycle hooks
        console.log('Inside Component Did Mount');
        // ideal place for you to send ajax req
        axios.get('http://localhost:3000/api/users')
            .then( (res) => {
                console.log(res);
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                console.log('It is over!');
            });
    }

    render(){
        console.log('Inside Render');
        return(
            <div className="container">
                <h2>Lising Users</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }

}

export default Users;


