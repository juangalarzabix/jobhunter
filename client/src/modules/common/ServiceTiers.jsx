import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServiceTiers extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.tiers = props.tiers;
    }
  
    render() {
        return (
<main style={{ padding: "1rem 0" }}>

<div class="container">
  <div class="card-deck mb-3 text-center">
  {[...this.tiers].map((item, i) =>
    <div class="card mb-4 shadow-sm">
        <div class="card-header">
            <h4 class="my-0 font-weight-normal">{item.name}</h4>
        </div>
        <div class="card-body">
            <h1 class="card-title pricing-card-title">${item.price} <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li><b>{item.description}</b></li>
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
            </ul>
            <Link to='/services/checkout'>
                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Buy now</button>
            </Link>
        </div>
    </div>
)}

  </div>
  {this.state.apiResponse}
</div>
</main>
        );
    }
}

export default ServiceTiers;