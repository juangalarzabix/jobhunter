import React, { Component } from 'react';
import ServiceTiers from '../common/ServiceTiers';

class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
  
    callAPI() {
        fetch('http://localhost:9000/testAPI?moduleName=' + this.getName())
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
  
    componentDidMount() {
        this.callAPI();
    }

    getName() {
        return '';
    }

    render() {
        const { apiResponse } = this.state;
        if (!apiResponse) return;
        const moduleData = JSON.parse(apiResponse);
        return (
    <main style={{ padding: "1rem 0" }}>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">{moduleData.name}</h1>
      <p class="lead">{moduleData.description}</p>
    </div>
        <ServiceTiers tiers={moduleData.tiers} />
    </main>
        );
      }
    }

export default BaseComponent;