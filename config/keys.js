if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: "mongodb+srv://hansgut:123123123@cluster0-xf0pe.mongodb.net/test?retryWrites=true&w=majority",
        secret: 'secret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost/visits",
        secret: 'secret'
    }
}