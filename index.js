const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Test is OK!')
})

/**
 * Eli Koyuncu
 * Sputnik Technology, 2021
 * 
 * Mongo Test
 */
app.get('/mongotest', (req, res) => {

    var mongo = require('mongodb');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    res.status = 200;
    res.contentType = "text/plain";
    res.send('Testing...');

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("userView");

        var query = [
            { $match: { product_id: new mongo.ObjectId("61437b65a3cf5b4f88b043fa") } },
            {
                $group: {
                    _id: { $month: "$view_datetime" }, count: { $count: {} },
                    uniqueValues: { $addToSet: "$user_id" }
                }
            }

        ];

        dbo.collection("userViews").aggregate(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });

   //res.send("ok");

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
)

app.get('/getTotalNumberOfCustomers/:product_id', (req, res) => {

    var mongo = require('mongodb');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    res.status = 200;
    res.contentType = "text/plain";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("userView");

        var query = [
            { $match: { product_id: new mongo.ObjectId(req.params.product_id) } },
            {
                $group: {
                    _id: { $month: "$view_datetime" }, count: { $count: {} }
                   // ,uniqueValues: { $addToSet: "$user_id" }
                }
            }

        ];

        dbo.collection("userViews").aggregate(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
    });

   

})

app.get('/getTotalNumberOfDistinctCustomers/:product_id', (req, res) => {

    var mongo = require('mongodb');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    res.status = 200;
    res.contentType = "text/plain";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("userView");

        var query = [
            { $match: { product_id: new mongo.ObjectId(req.params.product_id) } },
            {
                $group: {
                    _id: { $month: "$view_datetime" }, count: { $sum: 1 }
                    //,uniqueValues: { $addToSet: "$user_id" }
                }
            }

        ];

        dbo.collection("userViews").aggregate(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
    });



})