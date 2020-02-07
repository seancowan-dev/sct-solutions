import React, { Component } from 'react';
import ValidationError from '../validationErr';
import $ from 'jquery';
import { withRouter } from 'react-router-dom'; 
import SiteContext from '../../main/Context';
import './AddFolder.css';

class AddFolder extends Component {
    static contextType = SiteContext

    validateForm() {
        let titleVal = $('.add-folder-title').val();

        if (titleVal === '' || typeof(titleVal) !== 'string') {
            this.context.errorMsg = "Please enter a title and make sure that it is plain text.";
            return false;
        } else {
                return true;
            }
    }

    render() {

        return ( <>
        <ValidationError message={this.context.errorMsg} />
            <form className="add-folder-form">
                <label htmlFor="add-folder-title" className="add-folder-label">
                    Folder title:</label>
                    <input type="text" name="add-folder-title" id={Math.random(30)} className="add-folder-title"/>
                

                <input type="submit" name="add-new-folder" id={Math.random(55)} className="add-folder-submit" value="Add Folder" onClick={(e) => 
                {   
                    e.preventDefault();
                    $('.error').empty();
                    let isValid = this.validateForm();
                    if (isValid === true) {        
                        this.context.addFolder(e);
                        this.props.history.push("/");
                    } else {
                    $('.error').append(this.context.errorMsg);
                    }        
                            }}/>
            </form>
            </>
        );
    };
   };

export default withRouter(AddFolder);