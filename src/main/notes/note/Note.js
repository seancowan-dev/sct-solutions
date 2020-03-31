import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Note.css';
import { observer, inject } from 'mobx-react';
@inject('valueStore')
@observer

class Note extends Component {
    
    render() {
        return(<>
            <article className="note" id={this.props.id}>
                <div className="note-info">
                <Link to={`/note/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </Link>
                    <p>{moment(this.props.mod).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <div className="note-content">
                        <p>{this.props.isRoute ? this.props.content : " " }</p>
                    </div>
                <input 
                    type="button"
                    id={this.props.id}
                    name={"delete-note"}
                    className={"delete-note-button"}
                    value={"Delete"}
                    onClick={() => { 
                        this.props.valueStore.deleteNote(this.props.id);
                        this.props.history.push("/");
                    }}
                />
                <input 
                    type="button"
                    name={"update-note"}
                    className={"update-note-button"}
                    value={"Update"}
                    onClick={() => { 
                        this.props.history.push("/updateNote/" + this.props.id)
                    }}
                />
                </div>
                
            </article>
        </>
        );
    };
};

Note.propTypes = {
    key: PropTypes.number,
    id: PropTypes.string, 
    name: PropTypes.string,
    mod: PropTypes.string,
    folderId: PropTypes.string,
    content: PropTypes.string
}

export default withRouter(Note);