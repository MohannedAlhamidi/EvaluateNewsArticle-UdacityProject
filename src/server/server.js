const app = require('./app');

app.listen(5000, function(){
    console.log("Server starts on port 5000");
    console.log(`Your API key is ${process.env.API_KEY}`);
});
