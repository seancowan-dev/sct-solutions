import React from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../../models/Header.model';
import Login from '../../models/Login.model';
import RoutingTable from '../../_models/routing-table.model';

const Admin = inject('componentStore')(observer((props) => {
    let componentList = props.componentStore.createSelectEntries();
    console.log(componentList);
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
                            <p>Here you can add, delete or modify routes to pre-installed model components.  Installing additional components requires a rebuild of the React codebase.  *put guide on how here*</p>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="new-route-path">Route Path</label>
                                        <input type="text" class="form-control" id="new-route-path" aria-describedby="path-help" />
                                        <small id="path-help" class="form-text text-muted">{`http://sitename.com/<your path data here>`}</small>
                                    </div>
                                    <div class="col">
                                    <label for="new-route-path">Component</label>
                                    <select class="form-control" id="new-route-component-select" aria-describedby="component-help">
                                        {componentList}
                                    </select>
                                    <small id="component-help" class="form-text text-muted">{`Choose from the list of installed model components. <put guide on how to install here>`}</small>
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