var express = require ('express');
var cityRouter = express.Router();
var mongodb=require('mongodb').MongoClient;
// var url ="mongodb://localhost:27017"
var url ="mongodb+srv://happy:hapi123@cluster0.yf62c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var menu =[
    {link:'/',name:'Home'},
    {link:'/hotel',name:'Hotels'},
    {link:'/city',name:'City'},
    

]

function router(menu){  
    cityRouter.route('/')
    .get(function(req,res){
         mongodb.connect(url,function(err,dc){
            if(err){
                res.status(501).send("Error while connecting")
            }else{
                const dbo = dc.db('junenode');
                dbo.collection('city').find({}).toArray(function(err,data){
                    if(err){
                        res.render(501).send("Error while fetching")
                    }else{
                        res.render('city',{title:'City Page',cityData:data,menu:menu})
                       
                    }
                })
            }

        })
     
    })
cityRouter.route('/details/:id')
    .get(function(req,res){
        var id=req.params.id
        res.render('cityDetails',{title:`City Details Page ${id}`,menu:menu})
       
    })


return cityRouter


}
module.exports = router