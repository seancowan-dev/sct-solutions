import React from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../../models/Header.model';
import Login from '../../models/Login.model';
import RoutingTable from '../../_models/routing-table.model';

const Admin = inject('adminStore', 'componentStore', 'routingStore')(observer((props) => {
    let componentList;

    if (props.routingStore.getCurrentRoutes.length > 0) {
        componentList = props.componentStore.createSelectEntries();
    }

    return (
        <div className="main-container">
            <Login />
            <Header />
            <div className="jumbo-admin jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Admin Panel</h1>
                    <p className="lead">Here you will find all the configuration options for administration of the site.</p>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="admin-card">
                    <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Routing and Navigation
                        </button>
                    </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="container card-body">
                        <h2>Routing</h2>
                        <form>
                            <h5>Add New Route To Component</h5>
                            <p>Here you can add, delete or modify routes to pre-installed model components.  Need a component not listed? *put guide on how to install or build more here*</p>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="new-route-name">Route Name</label>
                                        <input type="text" className="form-control" id="new-route-name" aria-describedby="name-help" value={props.adminStore.getRouteName} onChange={(e) => {props.adminStore.setRouteName(e.target.value)}}/>
                                        <small id="name-help" className="form-text text-muted">{`Enter a name for your route.`}</small>
                                    </div>
                                    <div className="col">
                                    <label htmlFor="new-route-path">Component</label>
                                    <select className="form-control" id="new-route-component-select" aria-describedby="component-help" onChange={(e) => {
                                        console.log(e.target.value);
                                    }}>
                                        {componentList}
                                    </select>
                                    <small id="component-help" className="form-text text-muted">{`Choose a component to route to.`}</small>
                                    </div>                              
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="new-route-path">Route Path</label>
                                        <input type="text" className="form-control" id="new-route-path" aria-describedby="path-help" value={props.adminStore.getRoutePath} onChange={(e) => {props.adminStore.setRoutePath(e.target.value)}}/>
                                        <small id="path-help" className="form-text text-muted">{`Define the path for your route.`}</small>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <RoutingTable/>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );    
}));

export default Admin;