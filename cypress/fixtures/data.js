export const CREDENTIALS = {
        VALID_USER : {
            email : "testuser@example.com",
            password : "test123"
        },
        INVALID_USER : {
            email : "user@example.com",
            password : "test1",
            email_empty : "",
            password_empty : ""
        }     
}
export const MESSAGES = {
    INVALID_LOGIN_ERROR : {
        message : 'The username or password are incorrect'
    },
    INVALID_NOTE_ERROR : {
        message : 'Title should not be empty'
    }
}