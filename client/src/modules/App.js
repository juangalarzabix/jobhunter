import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <main role="main">

<div class="jumbotron">
  <div class="container">
    <h1 class="display-3">Hello, world!</h1>
    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
    <p>
    </p>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h2>Resume Writing</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><Link class='btn btn-secondary' role='button' to="/services/resume">View details &raquo;</Link> |{" "}</p>
    </div>
    <div class="col-md-4">
      <h2>Career Coaching</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><Link class='btn btn-secondary' role='button' to="/services/career">View details &raquo;</Link> |{" "}</p>
    </div>
    <div class="col-md-4">
      <h2>LinkedIn profile update</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p><Link class='btn btn-secondary' role='button' to="/services/linkedin">View details &raquo;</Link> |{" "}</p>
    </div>
  </div>

  <hr />

</div>

</main>
        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
