import React, { Component } from 'react';
import SiteContext from '../../main/Context';

class AddFolder extends Component {
    static contextType = SiteContext
    render() {
        return (
            <form className="add-folder-form">
                <label htmlFor="add-folder-title">
                    Folder title:
                    <input type="text" name="add-folder-title" id={Math.random(30)} className="add-folder-title"/>
                </label>

                <input type="submit" name="add-new-folder" id={Math.random(55)} className="add-folder-submit" value="Add Folder" onClick={(e) => { 
                            this.context.addFolder(e);
                        }}/>
            </form>
        );
    };
   };

export default AddFolder;