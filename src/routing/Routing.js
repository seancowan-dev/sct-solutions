import React from 'react';
import Primary from '../views/Primary/Primary';
import Admin from '../views/Admin/Admin';

const routes = {
    "/": () => <Primary />,
    "/admin": () => <Admin />,
};

export default routes;