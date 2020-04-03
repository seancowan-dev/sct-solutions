import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Folder from './Folder/Folder';
import Button from '../comps/Button/Button';
import './Sidebar.css';
import { observer, inject } from 'mobx-react';
@inject('valueStore')
@observer

class Sidebar extends Component {

    render() {
        let folders;
        if (this.props.valueStore.done === true) {
            folders = this.props.valueStore.folders.map((folder) => {
                return <a key={Math.random()} onClick={(e) => {
                    e.preventDefault()
                    this.props.valueStore.folderIsUpdating = null;
                    this.props.history.push(`/folder/${folder.folder_id}`)
                }}>
                    <Folder
                        name={folder.name}
                        id={folder.folder_id}
                        key={Math.random(5)}
                    />
                </a>
            });
        }
        
        return (
            <aside className="folder-sidebar">
                <div className="folders-list">
                    {folders}
                </div>
                <Button 
                className="add-folder-button"
                itemName="add-folder"
                textValue="Add Folder"
                onClick={(e) => { 
                    this.props.history.push("/addFolder");
                }}
                />
                <Button 
                className="update-folder-button"
                itemName="update-folder"
                textValue="Update Folder"
                onClick={(e) => { 
                    this.props.history.push("/updateFolder");
                }}
                />
            </aside>
        );
    };
};

export default withRouter(Sidebar);