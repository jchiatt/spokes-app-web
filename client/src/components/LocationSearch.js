import React, { Component } from 'react';

export default class LocationSearch extends Component {
  constructor() {
    super();
    
    this.state = {
      zip: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( event ) {
    this.setState( { zip: event.target.value });
  }

  handleSubmit( event ) {
    alert('A ZIP was submitted: ' + this.state.zip);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Zip code:
            <input type="text" value={this.state.zip} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};
