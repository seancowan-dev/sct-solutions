# About this Boilerplate

This boilerplate was created to ensure a stable and working implementation of React + MobX is always available for my use.  I maintain this boilerplate to ensure the most seamless and integration of MobX into the React Hooks API.  By utilizing these in combination I am able to produce fast, reliable and simple state management for my React sites.  Feel free to use this boilerplate if you like.

In particular the boilerplate has been configured to enable ES6 decorators so as to use the MobX syntax convetions as shown in its documentation.  And also so that a coding style consistent with the React Hooks API is used for state management as well.

## Why MobX?

I prefer MobX over Flux or Redux for a variety of reasons; but the primary reaason is that for a large number of general purpose websites, Flux and Redux are simply too verbose.  They provide unncessarily fine-grained control for simple state updates.  Granted these libraries have their place, but I think they are overly complex for doing something simple such as implementing controlled form components in React.  As such I created this implementation of MobX to streamline state management for the cases in which a more complex solution isn't required.

### How does it work?

While I encourage you to read the [full documentation](https://mobx.js.org/README.html) for MobX for truly understanding the full depth of the software, I provide here a brief explanation of how I have implemented MobX.

My use of MobX revolves primarily around the [provider/inject API](https://mobx.js.org/refguide/inject.html).  As such handling state is very simple.

1. First declare your state variable, setter, and getter in some file like shown below.  I like to use the convetion `<filename>.store.js`

```
//sample.store.js//
import React from 'react';
import { observable, action, computed, set } from 'mobx';

class SampleStore { // Be sure to create a class for the MobX store!

  // Declare the state variable
  @observable myNewStateVariable = "";  // You could set a default value if desired

  // Configure the getter
  @computed get getMyNewStateVariable() {
    return this.myNewStateVariable;
  }
  
  // Configure a setter action 
  // There are several ways to set a state variable with MobX, but this is how I like to do it
  @action setMyNewStateVariable = (newState) => {
    this.myNewStateVariable = newState;
  }
  
}

export default new SampleStore(); // Be sure to export as a new instace of the class
```

2. Next in the root source folder of your React app create a file called `DomainStore.js` this will be the primary store file to wire up to the React
```
// Be sure to import each store file you have created
import SampleStore from './stores/sample.store';

class DomainStore{
  // Import external stores
  constructor() {
    this.sampleStore = SampleStore; // Note the change from Title Case to Camel Case
  }
}
export default new DomainStore(); // Be sure to export as a new instace of the class
```

3. Inside the top level file of your React App (typically `App.js`) import the DomainStore and instantiate it.
```
import React from 'react';
import DomainStore from './DomainStore'

const store = {
  sampleStore: DomainStore.sampleStore,
}


const App = (props) => {
  
  return(
        // Hook in your routes here, in this example the route is passed in from a higher-level component by hookrouter
        // But you could just as easily include routes from some other route handler as well here
        {props.routes}
    );
};

export default App;
```

4.  Next wrap your routed components with the MobX provider to ensure that all components within a route of your domain have access to the store
```
import React from 'react';
import DomainStore from './DomainStore'
import { Provider } from "mobx-react"; // Import the provider

const store = {
  sampleStore: DomainStore.sampleStore,
}


const App = (props) => {
  
  return(
    <Provider {...store}> // Wrap your routed components in the Provider HOC and then destruct the store constant into it
          {props.routes}
    </Provider>
    );
};

export default App;
```

5.  That's it you're set up to use MobX now, simply inject whichever store you need into a React Functional component like so
```
import React from 'react';
import { inject, observer } from 'mobx-react';

// Inject each store you need to acess, and only those you need to access
// Using the Camel Cased name set earlier in the Domain Store
const Test = inject('sampleStore')(observer((props) => {
  return (
      <div>
        My First MobX Page
      </div>
  );
  
}));

export default Test;
```

6.  Now it is very simple to create controlled form inputs with state management
```
import React from 'react';
import { inject, observer } from 'mobx-react';

const Test = inject('sampleStore')(observer((props) => {
  return (
      <div>
        // Access the setter and getter for your state variable via props.camelCasedStoreName
        <input 
          className="mobx-test-input" 
          type="text" 
          value={props.sessionStore.getMyNewStateVariable}
          onChange={(e) => {
            props.sessionStore.setMyNewStateVariable(e.target.value); // Set the variable when the input changes
          }}
        />
      </div>
  );
  
}));

export default Test;
```

This is by no means an exhaustive explanation of the different ways in which MobX can help you manage state, but this is the simplest and to the point example of how you can create controlled form inputs quite easily with minimal boilerplate.

