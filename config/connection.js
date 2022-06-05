const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log("Error with MongoDB's connectivity");
        console.log(error);
    }
    else {
        console.log("Successful connection with MongoDB Server");
    }
});
// mongoose.set('useCreateIndex', true);

