import config from '../config';

const CommentsService = {

    // async getAllRoutes(site_id) {
    //     return await fetch(`${config.SERVER_URI}/api/data/nav/get/:site'`)
    // }
    // async getMovieComments(id) {  // Returns comments based on movie ID
    //     return await fetch(`${config.API_ENDPOINT}/comments/get/movie/${id}?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'GET',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //     .then(res => { 
    //         return Helpers.handleErrors(res);
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     })
    // },
    // async getCommentById(id) {  // Returns a single comment by ID

    //     let replyObject = await fetch(`${config.API_ENDPOINT}/comments/reply/get/${id}?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'GET',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //     .then(res => {
    //         return Helpers.handleErrors(res);
    //     })
    //     .then(res => {
    //         return res
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     });

    //     let commentObject = await fetch(`${config.API_ENDPOINT}/comments/get/${id}?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'GET',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //     .then(res => { 
    //         return Helpers.handleErrors(res);
    //     })
    //     .then(res => {
    //        return res;
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     });
        
    //     let returnObject = {
    //         comments: commentObject,
    //         replies: replyObject
    //     }
    //     return returnObject;
    // },
    // async getUserComments(id) {  // Returns all of a user's comments by ID
    //     return await fetch(`${config.API_ENDPOINT}/comments/get/user/${id}?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'GET',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //     .then(res => { 
    //         return Helpers.handleErrors(res);
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     })        
    // },
    // async addComment(newComment) {  // Inserts a new comment into the database
    //     return await fetch(`${config.API_ENDPOINT}/comments/add?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'POST',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    //     .then(res => { 
    //         return Helpers.handleErrors(res);
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     })
    // },    
    // async deleteComment(id) {  // Deletes an existing user comment
    //     return await fetch(`${config.API_ENDPOINT}/comments/delete/${id}?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //     .then(res => {
    //         return Helpers.handleErrors(res);
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     })
    // },
    // async deleteReply(id) {  // Deletes an existing user comment
    //     return await fetch(`${config.API_ENDPOINT}/comments/delete/reply/${id}?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         }
    //     })
    //     .then(res => {
    //         return Helpers.handleErrors(res);
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     })
    // },
    // async updateComment(newComment, id) {  // Deletes an existing user comment
    //     return await fetch(`${config.API_ENDPOINT}/comments/update/${id}?api_key=${config.CLIENT_API_KEY}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${TokenService.getAuthToken()}`
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    //     .then(res => {
    //         return Helpers.handleErrors(res);
    //     })
    //     .catch(err => {
    //         console.warn(err);
    //     })
    // }
}

export default CommentsService;