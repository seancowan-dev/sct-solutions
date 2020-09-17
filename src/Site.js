import React, { lazy, useState, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingService from './services/routing.service';
import _RoutingStore from './stores/_routing.store';
import '../src/css/config.css';
import App from './App';

const Site = (props) => {
    
    const [loaded, setLoaded] = useState();
    const toBinString = (bytes) => bytes.reduce((str, byte) => str + byte.toString(2).padStart(8, '0'), '');

    // Fetch any data the site may need in one go
    Promise.all([RoutingService.getAllRoutes('5eef442b-a894-4755-965a-e0174ad2d6c0')]).then(result => {
        _RoutingStore.setCurrentRoutes(result[0]); // Store the routes
        setLoaded(true); // Loading done
    });

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </BrowserRouter>
    );

}

export default Site;
