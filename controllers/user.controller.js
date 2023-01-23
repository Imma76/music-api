import User from '../model/user.model.js';

class UserController{

    async createUser(req,res){
        const create  = User.create({name:req.body.name,password:req.body.password, email:req.body.email}).then(val=>{
            res.status(201).send({ status: true, message: 'user created successfully' });
        }).catch(err=>{
            req.status(500).send({status:false, message:`${err}`})
        })
    }
}

export default new UserController();