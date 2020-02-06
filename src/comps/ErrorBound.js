import React, { Component } from 'react';

class ErrorBound extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
      }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
      render() {
        if (this.state.hasError) {      
          return (
            <h2>There was an error fetching data.  Please check the endpoint(s) and fetch calls.</h2>
          );
        }
        return this.props.children;
      }  
}

export default ErrorBound;