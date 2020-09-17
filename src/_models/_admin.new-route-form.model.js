import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Tooltip } from 'reactstrap';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';

const NewRouteForm = inject('adminStore', 'componentStore', 'routingStore')(observer((props) => {

    // Variable declarations
    let componentList;

    // Local Functions
    const toggleManageRoutesTooltip = () => setManageRoutesTooltipOpen(!ManageRoutesTooltipOpen);
    
    // Hooks
    const [ManageRoutesTooltipOpen, setManageRoutesTooltipOpen] = useState(false);


    // Conditional Renders or Operations

    // Routing
    if (props.routingStore.getCurrentRoutes.length > 0) {
        componentList = props.componentStore.createSelectEntries();
    }

    return (   
            <form method="post" action="#" id="#">
                <h5>Add New Route To Component <HelpTwoToneIcon id="manage-routes-tooltip" /></h5>
                    <Tooltip 
                        placement="right" 
                        isOpen={ManageRoutesTooltipOpen} 
                        target="manage-routes-tooltip"                     
                        toggle={toggleManageRoutesTooltip}
                    >
                        <p>Choose a name for your route, this is required, and will not be shown to the user.</p>
                        <p>Enter the path you wish the component to be accessible at and then select the component from the drop down list.</p>
                    </Tooltip>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="new-route-name">Route Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="new-route-name" 
                                        aria-describedby="name-help" 
                                        value={props.adminStore.getRouteName} 
                                        onChange={(e) => {                                            
                                            props.adminStore.setRouteName(e.target.value)                                        
                                        }}
                                    />
                                    <small 
                                        id="name-help" 
                                        className="form-text text-muted"
                                    >
                                        {`Enter a name for your route.`}
                                    </small>
                                </div>
                                <div className="col">
                                    <label htmlFor="new-route-path">Component</label>
                                    <select 
                                        className="form-control"                                 
                                        id="new-route-component-select"                                     
                                        aria-describedby="component-help" 
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                        }}>
                                        {componentList}
                                    </select>
                                    <small 
                                        id="component-help" 
                                        className="form-text text-muted">
                                        {`Choose a component to route to.`}
                                    </small>
                                </div>                              
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="new-route-path">Route Path</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="new-route-path" 
                                        aria-describedby="path-help" 
                                        value={props.adminStore.getRoutePath} 
                                        onChange={(e) => {
                                            props.adminStore.setRoutePath(e.target.value)
                                        }}
                                    />
                                    <small id="path-help" className="form-text text-muted">{`Define the path for your route.`}</small>
                                </div>
                            </div>
                        </div>
            </form>  
    );    
}));

export default NewRouteForm;