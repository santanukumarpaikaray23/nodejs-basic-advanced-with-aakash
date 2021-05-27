var express = require ('express')
var hotelRoute = express.Router();
var hotels=[
   {
      "userId": 9,
      "id": 171,
      "title": "fugiat aut voluptatibus corrupti deleniti velit iste odio",
      "completed": true
    },
    {
      "userId": 9,
      "id": 172,
      "title": "et provident amet rerum consectetur et voluptatum",
      "completed": false
    },
    {
      "userId": 9,
      "id": 173,
      "title": "harum ad aperiam quis",
      "completed": false
    },
    {
      "userId": 9,
      "id": 174,
      "title": "similique aut quo",
      "completed": false
    },
    {
      "userId": 9,
      "id": 175,
      "title": "laudantium eius officia perferendis provident perspiciatis asperiores",
      "completed": true
    },
    {
      "userId": 9,
      "id": 176,
      "title": "magni soluta corrupti ut maiores rem quidem",
      "completed": false
    },
    {
      "userId": 9,
      "id": 177,
      "title": "et placeat temporibus voluptas est tempora quos quibusdam",
      "completed": false
    },
    {
      "userId": 9,
      "id": 178,
      "title": "nesciunt itaque commodi tempore",
      "completed": true
    },
    {
      "userId": 9,
      "id": 179,
      "title": "omnis consequuntur cupiditate impedit itaque ipsam quo",
      "completed": true
    },
    {
      "userId": 9,
      "id": 180,
      "title": "debitis nisi et dolorem repellat et",
      "completed": true
    },
    {
      "userId": 10,
      "id": 181,
      "title": "ut cupiditate sequi aliquam fuga maiores",
      "completed": false
    },
    {
      "userId": 10,
      "id": 182,
      "title": "inventore saepe cumque et aut illum enim",
      "completed": true
    },
    {
      "userId": 10,
      "id": 183,
      "title": "omnis nulla eum aliquam distinctio",
      "completed": true
    },
    {
      "userId": 10,
      "id": 184,
      "title": "molestias modi perferendis perspiciatis",
      "completed": false
    },
    {
      "userId": 10,
      "id": 185,
      "title": "voluptates dignissimos sed doloribus animi quaerat aut",
      "completed": false
    },
    {
      "userId": 10,
      "id": 186,
      "title": "explicabo odio est et",
      "completed": false
    },
    {
      "userId": 10,
      "id": 187,
      "title": "consequuntur animi possimus",
      "completed": false
    },
    {
      "userId": 10,
      "id": 188,
      "title": "vel non beatae est",
      "completed": true
    },
    {
      "userId": 10,
      "id": 189,
      "title": "culpa eius et voluptatem et",
      "completed": true
    },
    {
      "userId": 10,
      "id": 190,
      "title": "accusamus sint iusto et voluptatem exercitationem",
      "completed": true
    },
    {
      "userId": 10,
      "id": 191,
      "title": "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
      "completed": true
    },
    {
      "userId": 10,
      "id": 192,
      "title": "ut quas possimus exercitationem sint voluptates",
      "completed": false
    },
    {
      "userId": 10,
      "id": 193,
      "title": "rerum debitis voluptatem qui eveniet tempora distinctio a",
      "completed": true
    },
    {
      "userId": 10,
      "id": 194,
      "title": "sed ut vero sit molestiae",
      "completed": false
    },
    {
      "userId": 10,
      "id": 195,
      "title": "rerum ex veniam mollitia voluptatibus pariatur",
      "completed": true
    },
    {
      "userId": 10,
      "id": 196,
      "title": "consequuntur aut ut fugit similique",
      "completed": true
    },
    {
      "userId": 10,
      "id": 197,
      "title": "dignissimos quo nobis earum saepe",
      "completed": true
    },
    {
      "userId": 10,
      "id": 198,
      "title": "quis eius est sint explicabo",
      "completed": true
    },
    {
      "userId": 10,
      "id": 199,
      "title": "numquam repellendus a magnam",
      "completed": true
    },
    {
      "userId": 10,
      "id": 200,
      "title": "ipsam aperiam voluptates qui",
      "completed": false
    }
  ]


hotelRoute.route('/')
.get(function(req,res){
    // res.send(hotels)
    res.render('hotel',{title:'Hotels Page',hotelData:hotels})
})
hotelRoute.route('/details')
.get(function(req,res){
    res.send('hotel details')
})
module.exports=hotelRoute
