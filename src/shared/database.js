// connection with mongodb 
let uri = 'mongodb+srv://prueba:prueba123@cluster0.ftfng.mongodb.net/Test?retryWrites=true&w=majority';
let mongoose = require('mongoose');
mongoose.connect(uri, () => console.log('DB conectada'));

let userSchema = new mongoose.Schema({
    Name : {type : String, required : true},
    LastName : String,
    Age : Number
}, { collection: 'TestCN' });

let user = mongoose.model('User', userSchema);

/*user.create({ Name: 'Albert', LastName: 'Bezos', Age: 32 }, function (err, data) {
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/

find = () => {
    user.findOne({Name : 'John'}, (error, data) =>
    {
    if(error){
        console.log(error);
    }else{
        console.log(data)
    }
})
}



module.exports = {find}