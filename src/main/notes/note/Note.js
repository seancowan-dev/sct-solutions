import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SiteContext from '../../Context';
import moment from 'moment';
import ErrorHandler from '../../../comps/MakeInput/comps/ErrorHandler';
import MakeInput from '../../../comps/MakeInput/MakeInput';
import './Note.css';

class Note extends Component {
    static contextType = SiteContext
    
    render() {
        let sampleCss = { "background-color": "brown", };

        return(
            <article className="note" id={this.props.id}>
                <div className="note-info">
                <Link to={`/note/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </Link>
                    <p>{moment(this.props.mod).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <input 
                type="button"
                id={this.props.id}
                name={"delete-note"}
                className={"delete-note-button"}
                value={"Delete"}
                onClick={() => { 
                    this.context.deleteNote(this.props.id);
                    this.props.history.push("/");
                }}
                />
                </div>
                <div className="note-content">
                    {/* <p>{this.props.content}</p> */}
                </div>
            </article>
        );
    };
};

export default withRouter(Note);