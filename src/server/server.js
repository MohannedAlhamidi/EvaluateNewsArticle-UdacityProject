const app = require('./app');

app.listen(8081, function(){
    console.log("Server starts on port 8081");
    console.log(`Your API key is ${process.env.APP_KEY}`);
});
