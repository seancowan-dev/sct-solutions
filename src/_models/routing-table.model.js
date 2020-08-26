import React from 'react';
import { inject, observer } from 'mobx-react';
import RoutingTableRow from './_routing-table-row.model.js';
import uuid from 'uuid';

const RoutingTable = inject('routingStore')(observer((props) => {
    const rows = props.routingStore.getCurrentRoutes.map(route => {
        return <RoutingTableRow key={uuid.v4()} name={route.name} route_path={route.route_path} route_view={route.component_name} />
    })
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Path</th>
                    <th scope="col">to View</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );    
}));

export default RoutingTable;