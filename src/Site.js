import React, { useEffect, useState } from 'react';
// import Routes from './routing/Routing';
import { BrowserRouter } from 'react-router-dom';
import RoutingService from './services/routing.service';
import _RoutingStore from './stores/_routing.store';
import '../src/css/config.css';
import App from './App';

const Site = (props) => {
    
    const [loaded, setLoaded] = useState();

    useEffect(() => {
        RoutingService.getAllRoutes('5eef442b-a894-4755-965a-e0174ad2d6c0').then(result => {
            console.log('client fetching routes');
            _RoutingStore.setCurrentRoutes(result);
            setLoaded(true);
        });
    }, []);

    if (loaded === true) {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <div>Not loaded</div>
            </BrowserRouter>
        );
    }


}

export default Site;
