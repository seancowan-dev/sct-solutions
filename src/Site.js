import React, { lazy, useState, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingService from './services/routing.service';
import ComponentsService from './services/components.service';
import _RoutingStore from './stores/_routing.store';
import componentStore from './stores/component.store';
import uuid from 'uuid'
import '../src/css/config.css';
import App from './App';

const Site = (props) => {
    
    const [loaded, setLoaded] = useState();
    const toBinString = (bytes) => bytes.reduce((str, byte) => str + byte.toString(2).padStart(8, '0'), '');

    // Fetch any data the site may need in one go
    Promise.all([RoutingService.getAllRoutes('5eef442b-a894-4755-965a-e0174ad2d6c0'), ComponentsService.getAllComponents()]).then(result => {
        _RoutingStore.setCurrentRoutes(result[0]); // Store the routes
        componentStore.setAllComponents(result[1]); // Store the component data
        // let routes = {};
        let currentRoutes =  _RoutingStore.getCurrentRoutes;
        currentRoutes.forEach((element, index) => {
            let compData = componentStore.getComponentDataByName(element.component_name + '.js');
            console.log(compData);
            
            let jsx = '';
            let byteStr = '';
            for (let i = 0; i < compData.length; i++) {
              jsx += String.fromCharCode(compData[i]);
              byteStr += compData[i];
            }
            
            let b64 = btoa(byteStr);
            let someotherblob = new Blob([jsx], {type:"text/javascript"});
            console.log(someotherblob);
            let path = window.URL.createObjectURL(someotherblob);
            console.log(path);

            componentStore.setComponentBlobData(element.component_name + '.js', b64); // Set the blob path in the store

            if (index === (currentRoutes.length - 1)) { // If this is the end of the array
                setLoaded(true); // Loading done
            }
            // let byteStr = toBinString(bytes);

            // let blob = new Blob([byteStr], {type: "text/javascript"});
            // console.log(blob);
            // let pathPath = URL.createObjectURL(blob);
            // console.log(pathPath);

            // let someotherblob = new Blob([bytes], {type:"text/javascript"});
            // console.log(someotherblob);
            // let path = URL.createObjectURL(someotherblob);
            // console.log(path);

            // if (compData !== undefined) {
            //   let file = new File(compData, element.component_name + '.js', {
            //     type: 'application/binary',
            //     endings: 'native'
            //   });
                        // const Component = loadable(props => import(`${path}`));
                          // const LocalComponent = lazy(() => import(`../src/views/${element.component_name}/${element.component_name}`));
                          // console.log(<Component key={uuid.v4()}/>);
                         //  console.log(<LocalComponent key={uuid.v4()}/>);

            //   let stream = file.stream();
            //   let reader = stream.getReader();
            //    reader.read();
            // file.text().then(stream => {
    
            //   });
      
            // }
            // const Component = lazy(() => import(`../src/views/${element.component_name}/${element.component_name}`));
            // console.log(<Component key={uuid.v4()} />);
            // routes[element.route_path] = () => <Suspense fallback={<div>Loading...</div>}><Component key={uuid.v4()} /></Suspense>;
        });

    });
    
    // This is for reference only during development
        // RoutingService.getAllRoutes('5eef442b-a894-4755-965a-e0174ad2d6c0').then(result => { // Get the routes for the site
        //     _RoutingStore.setCurrentRoutes(result); // Store the routes
        //     setLoaded(true); // Routes loaded, suspense should start loading the page as routes fill
        // });

        // ComponentsService.getAllComponents().then(comps => {
        //     componentStore.setAllComponents(comps);
        //     setLoaded(true); // Components loaded
        // })



    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </BrowserRouter>
    );

}

export default Site;
