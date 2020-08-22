import React from 'react';
import { observer } from 'mobx-react';
import uuid from 'uuid';

const RoutingTableRow = observer((props) => {
    return (   
        <tr>
            <th scope="row">{props.index}</th>
            <td>{props.route_path}</td>
            <td>{props.route_view}</td>
            <td>action here</td>
        </tr>
    );    
});

export default RoutingTableRow;