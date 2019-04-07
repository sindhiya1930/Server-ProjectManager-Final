const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
// Connection URL
const url = 'mongodb+srv://admin:admin>@cluster0-vbdhc.mongodb.net/test?retryWrites=true';

// Database Name
const dbName = 'ProjectManager';

function connect(callback){
    //MongoClient.connect("mongodb+srv://admin:admin@cluster0-vbdhc.mongodb.net/test?retryWrites=true/dbName", { 
       MongoClient.connect("mongodb://localhost:27017/dbName", { 
        
    useNewUrlParser: true },function(err, client) {
      assert.equal(null, err);
      //console.log("Connected successfully to server");
      if(err)
      {
          callback(err,null)

      }
      else{  callback(null,client)}
      db = client.db(dbName);
      db.createCollection("Parent_Tasks", function(err, res) {
          if (err) throw err;
          console.log("Collection created!");
  
        });
 
    });
}
//User
//Insert user
function insertuser(user,callback){
    
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('Users');
         //Insert one document
    collection.insertOne(user,(err,result) => {
        
        console.log("Inserted the repo")
        client.close();
        callback(result);
    }) ;

})

}

//Get User
function finduser(callback){
connect((err,client)=>{const db = client.db(dbName);
    const collection = db.collection('Users');
   
   
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      client.close();
     callback(null,docs);
    });
   })
   
}

//Delete User
function deleteuser(user_id,callback){
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('Users');
         //delete one document
         collection.deleteOne({ "_id": new ObjectId(user_id) }, function(err, result) {

            console.log("Removed the document with the field a equal to ");
            callback(result);
    }) ;
})
}

//Update User
function updateuser(body,user_id,callback){
    connect((err,client)=>{

        const db = client.db(dbName);
        const collection = db.collection('Users');
        //collection.find({'a': 3}).toArray(function(err, docs) {
            //console.log(docs);
          //});
        //update one document
        collection.updateOne({_id:new ObjectId(user_id)}
           , { $set: { First_Name:body.First_Name,Last_Name:body.Last_Name,Employee_ID:body.Employee_ID} }, function(err, result) {
            console.log("Updated the document");
            console.log(result)
            callback(result);
        });  
       
       
    })
}

//Find user on id
function finduserspecific(user_id,callback){
    console.log(user_id)
    
    connect((err,client)=>{const db = client.db(dbName);
        const collection = db.collection('Users');
       
       
        // Find some documents
        collection.find({"_id": new ObjectId(user_id)}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          client.close();
         callback(null,docs);
        });
       })
       
    }



//Project
//Insert project
function insertproject(project,callback){
    
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('Projects');
         //Insert one document
    collection.insertOne(project,(err,result) => {
        
        console.log("Inserted the repo")
        client.close();
        callback(result);
    }) ;

})

}
    //Get project
function findproject(callback){
    connect((err,client)=>{const db = client.db(dbName);
        const collection = db.collection('Projects');
       
       
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          client.close();
         callback(null,docs);
        });
       })
       
    }
    
    //Delete project
    function deleteproject(project_id,callback){
        connect((err,client)=>{
            const db = client.db(dbName);
            const collection = db.collection('Projects');
             //delete one document
             collection.deleteOne({ "_id": new ObjectId(project_id) }, function(err, result) {
    
                console.log("Removed the document with the field a equal to ");
                callback(result);
        }) ;
    })
    }
    
    //Update project
    function updateproject(body,project_id,callback){
        connect((err,client)=>{
    
            const db = client.db(dbName);
            const collection = db.collection('Projects');
            //collection.find({'a': 3}).toArray(function(err, docs) {
                //console.log(docs);
              //});
            //update one document
            collection.updateOne({_id:new ObjectId(project_id)}
               , { $set: { Project:body.Project,Start_Date:body.Start_Date,End_Date:body.End_Date,Priority:body.Priority,User:body.User} }, function(err, result) {
                console.log("Updated the document");
                console.log(result)
                callback(result);
            });  
           
           
        })
    }
    
    //Find project on id
    function findprojectspecific(project_id,callback){
        console.log(project_id)
        
        connect((err,client)=>{const db = client.db(dbName);
            const collection = db.collection('Projects');
           
           
            // Find some documents
            collection.find({"_id": new ObjectId(project_id)}).toArray(function(err, docs) {
              assert.equal(err, null);
              console.log("Found the following records");
              client.close();
             callback(null,docs);
            });
           })
           
        }


        //Project
//Insert project
function insertproject(project,callback){
    
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('Projects');
         //Insert one document
    collection.insertOne(project,(err,result) => {
        
        console.log("Inserted the repo")
        client.close();
        callback(result);
    }) ;

})

}
    //Get project
function findproject(callback){
    connect((err,client)=>{const db = client.db(dbName);
        const collection = db.collection('Projects');
       
       
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          client.close();
         callback(null,docs);
        });
       })
       
    }
    
    //Delete project
    function deleteproject(project_id,callback){
        connect((err,client)=>{
            const db = client.db(dbName);
            const collection = db.collection('Projects');
             //delete one document
             collection.deleteOne({ "_id": new ObjectId(project_id) }, function(err, result) {
    
                console.log("Removed the document with the field a equal to ");
                callback(result);
        }) ;
    })
    }
    
    //Update project
    function updateproject(body,project_id,callback){
        connect((err,client)=>{
    
            const db = client.db(dbName);
            const collection = db.collection('Projects');
            //collection.find({'a': 3}).toArray(function(err, docs) {
                //console.log(docs);
              //});
            //update one document
            collection.updateOne({_id:new ObjectId(project_id)}
               , { $set: { Project:body.Project,Start_Date:body.Start_Date,End_Date:body.End_Date,Priority:body.Priority,Users:body.Users,Status:body.Status} }, function(err, result) {
                console.log("Updated the document");
                console.log(result)
                callback(result);
            });  
           
           
        })
    }
    
    //Find project on id
    function findprojectspecific(project_id,callback){
        console.log(project_id)
        
        connect((err,client)=>{const db = client.db(dbName);
            const collection = db.collection('Projects');
           
           
            // Find some documents
            collection.find({"_id": new ObjectId(project_id)}).toArray(function(err, docs) {
              assert.equal(err, null);
              console.log("Found the following records");
              client.close();
             callback(null,docs);
            });
           })
           
        }

//Task
//Insert task
function inserttask(task,callback){
    
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('Tasks');
            //Insert one document
    collection.insertOne(task,(err,result) => {
        
        console.log("Inserted the repo")
        client.close();
        callback(result);
    }) ;

})

}
    //Get task
function findtask(callback){
    connect((err,client)=>{const db = client.db(dbName);
        const collection = db.collection('Tasks');
        
        
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            client.close();
            callback(null,docs);
        });
        })
        
    }
    
    //Delete task
    function deletetask(task_id,callback){
        connect((err,client)=>{
            const db = client.db(dbName);
            const collection = db.collection('Tasks');
                //delete one document
                collection.deleteOne({ "_id": new ObjectId(task_id) }, function(err, result) {
    
                console.log("Removed the document with the field a equal to ");
                callback(result);
        }) ;
    })
    }
    
    //Update task
    function updatetask(body,task_id,callback){
        connect((err,client)=>{
    
            const db = client.db(dbName);
            const collection = db.collection('Tasks');
            //collection.find({'a': 3}).toArray(function(err, docs) {
                //console.log(docs);
                //});
            //update one document
            collection.updateOne({_id:new ObjectId(task_id)}
                , { $set: { Parent_Name:body.Parent_Name,Project:body.Project,Task:body.Task,Start_Date:body.Start_Date,End_Date:body.End_Date,Priority:body.Priority,Status:body.Status,Users:body.Users }}, function(err, result) {
                console.log("Updated the document");
                console.log(result)
                callback(result);
            });  
            
            
        })
    }
    
    //Find task on id
    function findtaskspecific(task_id,callback){
        console.log(task_id)
        
        connect((err,client)=>{const db = client.db(dbName);
            const collection = db.collection('Tasks');
            
            
            // Find some documents
            collection.find({"_id": new ObjectId(task_id)}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                client.close();
                callback(null,docs);
            });
            })
            
        }


//Parent

function insertparent(parent,callback){
    
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('Parent_Tasks');
            //Insert one document
    collection.insertOne(parent,(err,result) => {
        
        console.log("Inserted the repo")
        client.close();
        callback(result);
    }) ;

})

}
    //Get parent
function findparent(callback){
    connect((err,client)=>{const db = client.db(dbName);
        const collection = db.collection('Parent_Tasks');
        
        
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            client.close();
            callback(null,docs);
        });
        })
        
    }

module.exports={insertuser,finduser,deleteuser,updateuser,finduserspecific,insertproject,findproject,deleteproject,updateproject,findprojectspecific,inserttask,findtask,deletetask,updatetask,findtaskspecific,insertparent,findparent}
