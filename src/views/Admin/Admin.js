import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../../models/Header.model';
import Login from '../../models/Login.model';
import RoutingTable from '../../_models/routing-table.model';
import NewRouteForm from '../../_models/_admin.new-route-form.model';
import { Tooltip } from 'reactstrap';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';

const Admin = observer((props) => {
    // Variable declarations

    // Local Functions
    const toggleRoutingTooltip = () => setRoutingTooltipOpen(!RoutingTooltipOpen);

    // Hooks
    const [RoutingTooltipOpen, setRoutingTooltipOpen] = useState(false);

    // Conditional Renders or Operations

    // Routing

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
                        <h2>Routing <HelpTwoToneIcon id="routing-tooltip" /></h2>
                        <Tooltip 
                            placement="right"
                            autohide={false} 
                            isOpen={RoutingTooltipOpen} 
                            target="routing-tooltip"                     
                            toggle={toggleRoutingTooltip}
                        >
                            <p>Configure static routes for the site, you can select installed components and enter the route you want them to be accessible at.  It is important to note that these are not for nav-bars that actually appear on the site, as not all pages will always appear on the nav bar.  If you wanted to create a nav bar click *here*.</p>
                        </Tooltip>
                        <RoutingTable/>
                        <NewRouteForm/>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );    
});

export default Admin;