# SMALL NodeJS PROJECT: User Views

By Ali (Eli) Koyuncu, Sputnik Technology, 2021

## Customer Requirements

To design and write small program (Node.js and Mongo) to find total users and total unique users who viewed a product on daily/weekly/monthly/Custom date from the following collection.

String : UserId;
Date : ViewDate;
String : ProductId;

It has million of documents in a collection name - userView and it gets populated whenever a user view a product on some site.

## Technical Stack

- Node.JS v14.17.6
- Visual Studio 2017 Professional Edition
- Node.JS Express v4.17.1
- Node.JS mongoDb v4.1.2
- MongoDB -- Local Server v4.4*

## MongoDb-related Configuration

- Db Name: userView
- Collections

### Users

```
db.users.insert([
	{
		user_id:"alik",
		name:"ali",
		surname:"koyuncu",
		gender:"man",
		email:"user1@somehost.com"
	},
	{
		user_id:"x",
		name:"ddd",
		surname:"koyuncu",
		gender:"female",
		email:"user2@somehost.com"
	},
	{
		user_id:"y",
		name:"ddddd",
		surname:"koyuncu",
		gender:"female",
		email:"user3@somehost.com"
	},
	{
		user_id:"z",
		name:"ddd",
		surname:"koyuncu",
		gender:"female",
		email:"user4@somehost.com"
	},
	{
		user_id:"k",
		name:"ddddd",
		surname:"koyuncu",
		gender:"female",
		email:"user5@somehost.com"
	},
	{
		user_id:"dd",
		name:"d",
		surname:"ddd",
		gender:"female",
		email:"user6@somehost.com"
	},
	{
		user_id:"dddd",
		name:"s",
		surname:"dd",
		gender:"female",
		email:"user7@somehost.com"
	},
	{
		user_id:"aek",
		name:"eren",
		surname:"ddd",
		gender:"man",
		email:"user8@somehost.com"
	}
]);
```

### Products

```
db.products.insert(
[{
	product_name:"some food",
	product_type:"food",
	product_price:10.3,
	product_company:"global foods"
},
{
	product_name:"some other food",
	product_type:"food",
	product_price:12.3,
	product_company:"global foods"
},
{
	product_name:"some jacket",
	product_type:"textile",
	product_price:30.4,
	product_company:"igs"
},
{
	product_name:"some hat",
	product_type:"hat",
	product_price:7.93,
	product_company:"igs"
},
{
	product_name:"ninja turtle",
	product_type:"toy",
	product_price:33.6,
	product_company:"global toys"
},
{
	product_name:"noodle",
	product_type:"food",
	product_price:1.0,
	product_company:"global foods"
}]);
```

### User Views -- Sample Data

```
db.userViews.insert([
{
	user_id:ObjectId("61437e87a3cf5b4f88b04407"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fa"),
	view_datetime:new Date("2021-09-15 14:30:31.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440a"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fa"),
	view_datetime:new Date("2021-09-14 09:41:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440c"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fa"),
	view_datetime:new Date("2021-09-15 13:32:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b04406"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fa"),
	view_datetime:new Date("2021-08-15 13:32:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b04406"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fb"),
	view_datetime:new Date("2021-08-13 12:32:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440c"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fb"),
	view_datetime:new Date("2021-08-13 11:32:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b04409"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fb"),
	view_datetime:new Date("2021-09-08 13:32:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440d"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fb"),
	view_datetime:new Date("2021-09-08 03:42:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440d"),
	product_id: ObjectId("61437b65a3cf5b4f88b043fc"),
	view_datetime:new Date("2021-09-07 03:42:21.001")
},

{
	user_id:ObjectId("61437e87a3cf5b4f88b0440d"),
	product_id: ObjectId("61437e4da3cf5b4f88b04405"),
	view_datetime:new Date("2021-07-11 13:42:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b04409"),
	product_id: ObjectId("61437e4da3cf5b4f88b04405"),
	view_datetime:new Date("2021-07-11 13:32:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440d"),
	product_id: ObjectId("61437e4da3cf5b4f88b04405"),
	view_datetime:new Date("2021-09-11 23:32:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440b"),
	product_id: ObjectId("61437e4da3cf5b4f88b04405"),
	view_datetime:new Date("2021-09-11 08:33:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440d"),
	product_id: ObjectId("61437b65a3cf5b4f88b043ff"),
	view_datetime:new Date("2021-09-01 08:33:21.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b04408"),
	product_id: ObjectId("61437b65a3cf5b4f88b043ff"),
	view_datetime:new Date("2021-09-02 09:12:31.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b04406"),
	product_id: ObjectId("61437b65a3cf5b4f88b043ff"),
	view_datetime:new Date("2021-09-16 19:22:51.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440d"),
	product_id: ObjectId("61437e4da3cf5b4f88b04400"),
	view_datetime:new Date("2021-09-16 14:32:31.001")
},
{
	user_id:ObjectId("61437e87a3cf5b4f88b0440c"),
	product_id: ObjectId("61437e4da3cf5b4f88b04400"),
	view_datetime:new Date("2021-07-22 19:12:31.001")
}
]);
```
** P.S.:** Please notice that user_id and product_id fields are based on __users__ and __products__ collections. So, you need to create this collection after creating (i.e. inserting data into) these two collections.

## Queries

### To Find Total Number of Users who Viewed the Specified Product

```
db.userViews.aggregate([
	{$match: {product_id:ObjectId("61437b65a3cf5b4f88b043fa")}},	
	{$group: {
		_id: {$month:"$view_datetime"}, count: { $count: {}}
		}
	}

])
```

### To Find Total Number of Distinct Users who Viewed the Specified Product

```
db.userViews.aggregate([
	{$match: {product_id:ObjectId("61437b65a3cf5b4f88b043fa")}},	
	{$group: {
		_id: {$month:"$view_datetime"}, count: { $sum:1}
		}
	}

])
```

# API Guide

## Get Total Number of Customers Who Viewed the Product

- Method: GET /getTotalNumberOfCustomers/:product_id'
- Content: application/json

Where, product_id is the unique key of the specified record in products collection.

Response: 

```
{ "_id" : 9, "count" : 3 }
{ "_id" : 8, "count" : 1 }
```

Where, {"_id",: <month>, "count": <total count>}
	
## Get Total Number of Distinct Customers Who Viewed the Product

- Method: GET /getTotalNumberOfDistinctCustomers/:product_id'
- Content: application/json

Where, product_id is the unique key of the specified record in products collection.

Response: 

```
{ "_id" : 9, "count" : 3 }
{ "_id" : 8, "count" : 1 }
```

Where, {"_id",: <month>, "count": <total count>}
		
