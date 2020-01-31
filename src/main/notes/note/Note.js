import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ErrorHandler from '../../../comps/MakeInput/comps/ErrorHandler';
import MakeInput from '../../../comps/MakeInput/MakeInput';
import './Note.css';

class Note extends Component {
    render() {
        let sampleCss = { "background-color": "brown", };
        return(
            <article className="note" id={this.props.id}>
                <div className="note-info">
                <Link to={`/note/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </Link>
                    <p>{moment(this.props.mod).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <ErrorHandler>
                    <MakeInput 
                            inputType="button"
                            inputClass="delete-note-button"
                            inputName="delete-note"
                            inputContent="Delete"
                            cssInput={{ "backgroundColor": "brown", }}
                        />
                </ErrorHandler>
                </div>
                <div className="note-content">
                    {/* <p>{this.props.content}</p> */}
                </div>
            </article>
        );
    };
};

export default Note;