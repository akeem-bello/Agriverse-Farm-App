const farmerModel = require('../models/farmer.model');
const exporterModel = require('../models/exporter.model');
const produceModel = require('../models/farmProduce.model');
const orderModel = require('../models/exporterOrder.model');
const messagesModel = require('../models/messages.model')
const SECRET = process.env.SECRET;
const SECRET2 = process.env.SECRET_TWO;
const jwt = require('jsonwebtoken');

const registerFarmer = (req, res)=>{
    const farmerDetails = req.body;
    const email = farmerDetails.email;
    farmerModel.findOne({email:email}, (err, result)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error', status:false})
        }else{
            if(result){
                res.send({message: 'Email already exists'})
            }else{
                let form = new farmerModel(farmerDetails);
                form.save((err)=>{
                    if(err){
                        res.status(500).send({message: 'Unable to create account, please try again later', status:false})
                    }else{
                        res.send({message: 'Sign up successful. Kindly log in to validate your account', status:true})
                    }
                })
            }
        }
    })
}

const farmerSignIn = (req, res)=>{
    const farmerDetails = req.body;
    const email = farmerDetails.email;
    const password = farmerDetails.password;
    farmerModel.findOne({email:email}, (err, user)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error', status:false})
        }else{
            if(!user){
                res.send({message: 'Email does not exist, kindly create an account'})
            }else{
                user.validatePassword(password, (err, same)=>{
                    if(err){
                        res.status(500).send({message:'Internal Server Error', status:false})
                    }else{
                        if(!same){
                            res.send({message:'Your password is incorrect', status:false})
                        }else{
                            const token = jwt.sign({email}, SECRET, {expiresIn: '1h'})
                            res.send({message: 'Sign in successful', status:true, token})
                        }
                    }
                })
            }
        }
    })
}

const getFarmerDashboard = (req, res)=>{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, SECRET, (err, result)=>{
        if(err){
            res.send({message: 'jwt failed', err, status:false})
        }else{
            const email = result.email
            farmerModel.findOne({email:email}, (err, result)=>{
                res.send({message: 'congrats', status:true, result})
            }) 
        } 
    })
}

const registerExporter = (req, res)=>{
    const exporterDetails = req.body;
    const email = exporterDetails.email;
    exporterModel.findOne({email:email}, (err, result)=>{
        if(err){
            res.status(500).send({message:'Internal Server Error', status:false})
        }else{
            if(result){
                res.send({message:'Email already exists'})
            }else{
                let form = new exporterModel(exporterDetails);
                form.save((err)=>{
                    if(err){
                        res.status(500).send({message: 'Unable to create account, please try again later', status:false})
                    }else{
                        res.send({message: 'Sign up successful. Kindly log in to validate your account', status:true})
                    }
                })
            }
        }
    })
}

const exporterSignIn = (req, res)=>{
    const exporterDetails = req.body;
    const email = exporterDetails.email;
    const password = exporterDetails.password;
    exporterModel.findOne({email:email}, (err, user)=>{
        if(err){
            res.status(500).send({message: 'Internal Server Error', status:false})
        }else{
            if(!user){
                res.send({message: 'Email does not exist, kindly create an account'})
            }else{
                user.validatePassword(password, (err, same)=>{
                    if(err){
                        res.status(500).send({message:'Internal Server Error', status:false})
                    }else{
                        if(!same){
                            res.send({message:'Your password is incorrect', status:false})
                        }else{
                            const token2 = jwt.sign({email}, SECRET2, {expiresIn: '1h'})
                            res.send({message: 'Sign in successful', status:true, token2})
                        }
                    }
                })
            }
        }
    })
}

const getExporterDashboard = (req, res)=>{
    const token2 = req.headers.authorization.split(' ')[1];
    jwt.verify(token2, SECRET2, (err, result)=>{
        if(err){
            res.send({message: 'jwt failed', err, status:false})
        }else{
            const email = result.email
            exporterModel.findOne({email:email}, (err, result)=>{
                res.send({message: 'congrats', status:true, result})
            }) 
        } 
    })
}

const uploadFarmProduce = (req, res)=>{
    const produceDetails = req.body;
    let form = new produceModel(produceDetails);
    form.save((err)=>{
        if(err){
            res.status(500).send({message: 'An error occured, please try again.', status:false})
        }else{
            res.send({status:true})
        }
    })
}

const uploadExporterOrder = (req, res)=>{
    const orderDetails = req.body
    let form = new orderModel(orderDetails);
    form.save((err)=>{
        if(err){
            res.status(500).send({message: 'An error occured, please try again', status:false})
        }else{
            res.send({status:true})
        }
    })
}

const displayProduce = (req, res)=>{
    produceModel.find((err, produce)=>{
        if(err){
            console.log('Could not fetch data')
        }else{
            res.send({produce})
        }
    })
}

const displayOrders = (req, res)=>{
    orderModel.find((err, orders)=>{
        if(err){
            console.log('Could not fetch orders')
        }else{
            res.send({orders})
        }
    })
}

const deleteProduce = (req, res)=>{
    let produceIndex = req.body.id;
    produceModel.deleteOne({_id:produceIndex}, (err, result)=>{
        if(err){
            console.log('Could not be deleted')
        }else{
            res.send({result})
        }
    })
}

const uploadMessages = (req, res)=>{
    const contactUs = req.body;
    let form = new messagesModel(contactUs);
    form.save((err)=>{
        if(err){
            res.status(500).send({message: 'An error occured, please try again', status:false})
        }else{
            res.send({status:true})
        }
    })
}

const displayMessages = (req, res)=>{
    messagesModel.find((err, inquiry)=>{
        if(err){
            console.log('Could not fetch messages')
        }else{
            res.send({inquiry})
        }
    })
}
module.exports = {
    registerFarmer, 
    farmerSignIn, 
    getFarmerDashboard, 
    registerExporter, 
    exporterSignIn, 
    getExporterDashboard, 
    uploadFarmProduce, 
    uploadExporterOrder, 
    displayProduce, 
    displayOrders, 
    deleteProduce, 
    uploadMessages, 
    displayMessages}