 var express = require ('express')
 var app =express();
 var dotenv = require('dotenv')
dotenv.config()
var morgan = require ('morgan')
var fs = require ('fs');
var chalk = require ('chalk');
 var port = process.env.PORT || 9000;
 
 var menu=[
     {link:'/',name:'Home'},
     {link:'/hotel',name:'Home'},
     {link:'/city',name:'City'}
 ]

//  var hotelRoute = require('./src/route/cityRoute');
//  var cityRoute= require('./src/route/hotelRoute');
var cityRoute = require('./src/router/cityRoutes');
var hotelRoute = require('./src/router/hotelRoutes');

//static File path
app.use(express.static(__dirname+'/public'))
//html file
app.set('views','./src/views');
//view engine
app.set('view engine','ejs')
  
// morgan('tiny')
app.use(morgan('dev'))
 app.use(morgan('dev',{stream: fs.createWriteStream('./app.log',{flags:'a'})}))



 app.get('/',function(req,res){
   //res.send("Hii from express")
   res.render('index',{title:'Home Page',memu:menu})
 })
 cityRoute.route('/')
 .get(function(req,res){
     res.send(city)
 })
 cityRoute.route('/details')
 .get(function(req,res){
     res.send('city details')
})
 hotelRoute.route('/')
.get(function(req,res){
    res.send(hotels)
})
app.use('/hotel',hotelRoute)
app.use('/city',cityRoute)

hotelRoute.route('/details')
.get(function(req,res){
    res.send('hotel details')
})


app.listen(port,function(err){
    if(err) throw err;
    else{
        console.log(chalk.blue("Server is running on port"+port))
    }
})