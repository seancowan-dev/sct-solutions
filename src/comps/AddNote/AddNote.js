import React, { Component } from 'react';
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
                        <label htmlFor="add-note-title">
                        Note title: 
                        <input
                            type="text" 
                            name="add-note-title"
                            className="add-note-inputs" 
                            id={Math.random(4*10/2)} 
                        />
                        </label>
                        <label htmlFor="select-note-folder">
                        Select folder: 
                        <select name="select-note-folder">
                            {opts}
                        </select>
                        </label>   
                        <br />
                        <label htmlFor="add-note-content" className="textarea-column">
                        Enter your note below <br/>
                        <textarea
                            name="add-note-content"
                            className="textarea-column" 
                            id={Math.random(4*10/2)} 
                        />
                        </label> <br/>
                        <input type="submit" name="add-new-note" id={Math.random(55)} className="add-note-submit" value="Add Note" onClick={(e) => { 
                            this.context.addNote(e);
                        }}/>
                    </form>
                    );
                }
            }
    

export default AddNote;