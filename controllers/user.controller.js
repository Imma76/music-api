import User from '../model/user.model.js';
import bcrypt from 'bcrypt';
import _ from 'lodash';
class UserController{

    async createUser(req, res) {
      
        const create  = User.create({name:req.body.name,password:bcrypt.hashSync(req.body.password,10), email:req.body.email}).then(val=>{
            return res.status(201).send({ status: true, message: 'user created successfully' });
        }).catch(err=>{
           return  res.status(500).send({status:false, message:`${err}`})
        })
    }

    async loginUser(req, res) {
        const login = User.findOne({ where: { email: req.body.email } }).then(val => {
            if(val===null){
                return res.status(200).send({ status: false, message: 'user does not exist' });
            }
            const verify = bcrypt.compareSync(req.body.password, val.password);
            if(!verify){
                return res.status(403).send({ status: false, message: 'invalid email or password' });
            }
            console.log(val)
            const user = _.omit(val.dataValues,"password");
            return res.status(200).send({ status: true ,message:user});
        }).catch(err => {
            return res.status(500).send({ status: false, messsage: `${err}` });
        })
    }
   
}

export default new UserController();