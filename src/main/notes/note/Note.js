import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '../../../comps/Button/Button';
import './Note.css';

class Note extends Component {
    render() {
        return(
            <article className="note" id={this.props.id}>
                <div className="note-info">
                <Link to={`/note/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </Link>
                    <p>{moment(this.props.mod).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <Button 
                        className="delete-note-button"
                        itemName="delete-note"
                        textValue="Delete"
                    />
                </div>
                <div className="note-content">
                    {/* <p>{this.props.content}</p> */}
                </div>
            </article>
        );
    };
};

export default Note;