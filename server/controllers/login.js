const jwt = require('jsonwebtoken')
module.exports = (req, res) =>{
    console.log(req.body)
    console.log(process.env.PASSWORD)
    if (req.body.password === process.env.PASSWORD){
        const token = jwt.sign({
            userId: 1
            
        }, process.env.SECRET)
        res.json({
            token,
        });
    }else{
        res.status(401).send('Wrong Password')
    }
}