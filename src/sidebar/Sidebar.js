import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Store from '../Store';
import Folder from './Folder/Folder';
import Button from '../comps/Button/Button';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        const folders = Store.folders.map((folder) => {
            return <NavLink key={folder.id} to={"/folder/" + folder.id}>
                <Folder
                name={folder.name}
                id={folder.id}
                key={Math.random(5)}
            />
            </NavLink>
        });
        return (
            <aside className="folder-sidebar">
                <div className="folders-list">
                    {folders}
                </div>
                <Button 
                className="add-folder-button"
                itemName="add-folder"
                textValue="Add Folder"
                />
            </aside>
        );
    };
};

export default Sidebar;