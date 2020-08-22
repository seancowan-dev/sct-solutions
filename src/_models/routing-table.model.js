import React from 'react';
import { inject, observer } from 'mobx-react';
import RoutingTableRow from './_routing-table-row.model.js';
import uuid from 'uuid';

const RoutingTable = inject('uiStore')(observer((props) => {
    const rows = props.uiStore.getAllRoutes.map((route, index) => {
        return <RoutingTableRow index={index} route_path={route.route_path} route_view={route.component_name} />
    })
    return (
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Path</th>
                    <th scope="col">to View</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );    
}));

export default RoutingTable;