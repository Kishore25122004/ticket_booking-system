const mongoose = require('mongoose');

const Database = mongoose.Schema({
    name:{

    }, 
    age:{

    }, 
    gender:{

    }
});

module.exports = mongoose.model("data", Database);