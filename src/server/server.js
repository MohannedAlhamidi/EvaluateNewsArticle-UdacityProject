const app = require('./app');

app.listen(8080, function(){
    console.log("Server starts on port 8080");
    console.log(`Your API key is ${process.env.API_KEY}`);
});
