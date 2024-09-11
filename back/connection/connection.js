const mongoose =require('mongoose')

const url = "mongodb+srv://customer:1234asdf@cluster0.mc2tttw.mongodb.net/game?retryWrites=true&w=majority&appName=Cluster0";

const Connection =()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log("Connection Error",err)
    })
}

module.exports = Connection;