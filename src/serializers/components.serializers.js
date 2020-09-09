import moment from 'moment';
import uuid from 'uuid';

const Serializers = {

    _serialize_JSX_upload(name, data) { // prepares error message for HTTP request errors
        return {
            "id": `${uuid.v4()}`,
            "name": `${name}`,
            "component_data": data,
            "created_at": `${moment().format()}`
        }
    },
    _serialize_JS_file(data) { // prepares incoming JS file data for JSON storage
        return {
            "id": `${data.id}`,
            "name": `${data.name}`,
            "component_data": `${data.component_data}`,
            "created_at": `${data.created_at}`,
            "updated_at": `${data.updated_at}`
        }
    }
    
}

export default Serializers;