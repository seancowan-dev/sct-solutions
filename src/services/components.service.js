import config from '../config';
import fetchProgress from 'fetch-progress';
import componentStore from '../stores/component.store';

const ComponentsService = {

    _handleErrors(response) { // prepares error message for HTTP request errors
        if (response.ok === true) {
            return response.json();
        } 
        else {
            console.warn(`Code: ${response.status} Message: ${response.statusText}`);
        }
    },
    async uploadJSXComponentFiles(json, component_name) {
        let component = await fetch(`${config.SERVER_URI}/api/comps/create/${component_name}`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
            },
            body: JSON.stringify(json)
        })
        .then(fetchProgress({ // Monitor the post progress
            onProgress(progress) {
                let percent = progress.transferred / progress.total * 100; // Calculate percentage
                componentStore.setLoadedStatus(percent); // Set percentage in store
            }
        }))
        .then(response => {
            return this._handleErrors(response);
        })
        .then(json => {
            console.log(json.comp);
            return json.comp;
        })
        .catch(err => {
            console.warn(err);
        });

        return component;
    },
    async getComponentByName(component_name) {
        let component = await fetch(`${config.SERVER_URI}/api/comps/get/${component_name}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
            }
        })
        .then(response => {
            return this._handleErrors(response);
        })
        .then(json => {
            return json.comp;
        })
        .catch(err => {
            console.warn(err);
        });

        return component;
    },
    async getAllComponents() {
        let components = await fetch(`${config.SERVER_URI}/api/comps/get`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
            }
        })
        .then(response => {
            return this._handleErrors(response);
        })
        .then(json => {
            return json.comps;
        })
        .catch(err => {
            console.warn(err);
        });

        return components;
    }
    
}

export default ComponentsService;