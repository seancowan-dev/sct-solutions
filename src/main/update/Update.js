import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import ValidationError from '../../comps/validationErr';
import buildInnerFormFolder from './composites/buildInnerFormFolder';
import buildInnerFormNote from './composites/buildInnerFormNote';
import buildBaseForm from './composites/buildBaseForm';
import { withRouter } from 'react-router-dom';
import './Update.css';
import { observer, inject } from 'mobx-react';
@inject('valueStore')
@observer

class Update extends Component {

    validateForm(type) {
        if (type === 'note') {

        }
        if (type === 'folder') {
            
        }
    }

    render() {
        let innerForm;
        let form;

        if (this.props.updateType === "folder") {
            innerForm = buildInnerFormFolder(this.props.valueStore, this.props.history);
            form = buildBaseForm(this.props.valueStore.folderNotes);
        }
        if (this.props.updateType === "note") {
            innerForm = buildInnerFormNote(this.props.valueStore, this.props);      
        }
        return (
            <>
                <ValidationError message={this.context.errorMsg} />
                    <Container>
                        <form className="update-entry-form">
                            {innerForm}
                        </form>

                        {form}
                    </Container>
            </>
        )
    }
}

export default withRouter(Update);