# ReactFullStackBackEnd

This is the Backend to ReactFullStack

Installing MongoDB

- After Install :
- Terminal: "sudo mkdir -p /data/db"
- Terminal: "sudo chown -R `id -un` data/db"
- Start Server: mongod
- Start db: mongo
- create new db: use my-app
- mongodb has a or many collection -> any numb of json objects --> each object called documents

## -Added to db array of objects

db.articles.insert([{
name: 'learn-react',
... upvotes: 0,
... comments: [],
... }, {
... name: 'learn-react',
... upvotes: 0,
... comments: [],
... }, {
... name: 'learn-node',
... upvotes: 0,
... comments: [],
... }])

---

commands inside db:

db.articles.find({}).pretty()
db.articles.find({name: 'learn-react'}).pretty()

---------Adding MongoDB to Express--------

cmd: npm install --save mongodb

- package allows us to connect to our express server and make changes to our local db from our express server.


- Import {MongoClient} from Mongdb
- Inside callback :
  



------- Adding Mongodb to Express ---------


