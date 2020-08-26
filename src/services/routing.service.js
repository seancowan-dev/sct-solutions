import config from '../config';

const RoutingService = {

    _handleErrors(response) { // prepares error message for HTTP request errors
        if (response.ok === true) {
            return response.json();
        } 
        else {
            console.warn(`Code: ${response.status} Message: ${response.statusText}`);
        }
    },
    async getAllRoutes(site_id) { // Get all the routes for a specified site
        let routeData = await fetch(`${config.SERVER_URI}/api/data/nav/get/${site_id}`, {
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
            return json.links;
        })
        .catch(err => {
            console.warn(err);
        });

        return routeData;
    }
}

export default RoutingService;