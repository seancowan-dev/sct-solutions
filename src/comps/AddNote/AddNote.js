import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SiteContext from '../../main/Context';
import './AddNote.css';

class AddNote extends Component {
    static contextType = SiteContext
    
    render() {
        let opts = [];
        for (let i = 0; i < this.context.folders.length; i++) {
            opts.push(<option value={this.context.folders[i].name} id={this.context.folders[i].id} key={Math.random(40)}>{this.context.folders[i].name}</option>);
        }
        return (<form className="add-note-form">
                        <label htmlFor="add-note-title" className="add-note-title-label">
                        Note title: </label>
                        <input
                            type="text" 
                            name="add-note-title"
                            className="add-note-title" 
                            id={Math.random(4*10/2)} 
                        />
                        
                        <label htmlFor="select-note-folder" className="add-note-select-label">
                        Select folder: </label> 
                        <select name="select-note-folder" className="add-note-select">
                            {opts}
                        </select>
                          
                        <br />
                        <label htmlFor="add-note-content" className="textarea-column-label">
                        Enter your note: </label>
                        <textarea
                            name="add-note-content"
                            className="textarea-column" 
                            id={Math.random(4*10/2)} 
                        />
                         <br/>
                        <input type="submit" name="add-new-note" id={Math.random(55)} className="add-note-submit" value="Add Note" onClick={(e) => {
   
                            this.context.addNote(e);
                            this.props.history.push("/");
                        }}/>
                    </form>
                    );
                }
            }
    

export default withRouter(AddNote);