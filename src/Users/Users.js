import React, { Component } from 'react';
import axios from 'axios'

class Users extends Component {

  // What's the REST API URL? http://localhost:3000/api/users
  // What is the Http Method? GET
  // What is the REST API Client? npm i axios 

  state = {
    users: []
  }

  componentDidMount() { // lifecycle hook
    console.log('Inside Component Did Mount');
    // ideal place for you to send ajax req
    axios.get('http://localhost:3000/api/users')
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data
        });
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('It is over!');
      });
  }

  render() {
    console.log('Inside Render');
    return (
      <div className="container">
        <h2>Lising Users</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                {
                  this.state.users && this.state.users.length > 0 ?
                    <div>
                      <h5 className="card-title">{this.state.users[0].fullName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{this.state.users[0].email}</h6>
                      <p className="card-text">{this.state.users[0].phone}</p>
                    </div>
                    :
                    <div>Unable to load users</div>
                }

              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }

}

export default Users;


