import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import SiteContext from '../../main/Context';
import './AddFolder.css';

class AddFolder extends Component {
    static contextType = SiteContext
    
    componentWillUnmount() {
        console.log("im unmounting now");
    }

    componentDidMount() {
        console.log("sup I mounted");
    }

    render() {

        return (
            <form className="add-folder-form">
                <label htmlFor="add-folder-title" className="add-folder-label">
                    Folder title:</label>
                    <input type="text" name="add-folder-title" id={Math.random(30)} className="add-folder-title"/>
                

                <input type="submit" name="add-new-folder" id={Math.random(55)} className="add-folder-submit" value="Add Folder" onClick={(e) => { 
                            this.context.addFolder(e);
                            this.props.history.push("/");
                            }}/>
            </form>
        );
    };
   };

export default withRouter(AddFolder);