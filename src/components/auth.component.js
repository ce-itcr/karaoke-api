const { getConnection } = require('../shared/connection');
const { isCorrectPassword } = require('../shared/auth/auth.functions');


const verifyUser = (req, res) => {
    console.log(req.body)
    const { userId, password } = req.body;

    const databaseConnection = getConnection();
    databaseConnection.collection('users').findOne({ userId }, (error, user) => {
        if(error) {
            res.status(400).send('⛔️ An error occurred verifying the user ... \n[Error]: ' + error);  
        } else if (!user) {
            res.status(401).send('⚠️ There are no users with the specified specifications ... \n[Error]: Incorrect userId');
        } 
        else {
            let response = isCorrectPassword(password, user.password);
            if(!response) {
                res.status(401).send('⚠️ There are no users with the specified specifications ... \n[Error]: Incorrect userId or password');
            } else {
                res.status(200).send('Welcome to karaoke!');
            }
        }
    })
};

const getSingleUser = (req, res) => {
    let userId = req.params.userId;
    console.log(userId)
    const databaseConnection = getConnection();
    databaseConnection.collection("users").findOne({"userId": userId}, { projection: { _id:0 } }, 
        function(error, data) {
            if (error) {
                res.status(400).send('⛔️ An error occurred getting single users ... \n[Error]: ' + error);
            } else {
                if(data === null){
                    res.status(404).send('⚠️ There are no users with the specified specifications ...');
                } else{
                    res.status(200).send(data);
                }
            }
      });
};


const updateFavorites = (req, res) => {
    let userId = req.params.userId;
    var newData = { $set: req.body };

    const databaseConnection = getConnection();
    databaseConnection.collection('users').updateOne({'userId': userId}, newData, 
        function(error) {
            if(error) {
                res.status(400).send('⛔️ An error occurred updating favorites ... \n[Error]: ' + error);  
            } else {
                res.status(200).send('☑️ The favorite list was modified successfully ... ');
            }
    });
};



module.exports = { verifyUser, getSingleUser,updateFavorites }