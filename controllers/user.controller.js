import User from '../model/user.model.js';

class UserController{

    async createUser(req, res) {
        console.log('jeyyy');
        const create  = User.create({name:req.body.name,password:req.body.password, email:req.body.email}).then(val=>{
            return res.status(201).send({ status: true, message: 'user created successfully' });
        }).catch(err=>{
           return  res.status(500).send({status:false, message:`${err}`})
        })
    }
}

export default new UserController();