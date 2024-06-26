const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employeemodel = require('./models/model');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/login', (req,res)=>{ 
    const {username,password} = req.body;
    Employeemodel.findOne({username : username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json({message: 'Success'})
            }else{
                res.json({message: 'Password is incorrect'})
            }
        } else {
            res.json({message: 'User not registered'})
        }
    })
});

app.post('/register', (req, res) => {
    Employeemodel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
})