var express = require('express')
var app = express()
var repo=require('./repo')
var bodyParser=require('body-parser');
var cors=require('cors');
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//User CRUD REST APIs
//get all users
app.get('/users', function (req, res) {
    repo.finduser((err,data)=>{
        res.json(data);
    });
})

//insert user
app.post('/user', function (req, res) {
    var user=req.body

    repo.insertuser(user,(result)=>{
                    res.status(201).json({message:"Inserted the document"})
    })

})

//delete user

    app.delete('/user/:user_id', function (req, res) {
        var user_id=req.params.user_id
        repo.deleteuser(user_id,(result)=>{
        res.status(202).json({message:"Deleted the document"})
        })
        })

//update user
app.put('/edituser/:user_id', function (req, res) {
    var body=req.body;
    var user_id=req.params.user_id
    console.log(req.body)

    repo.updateuser(body,user_id,(result)=>{
    res.status(202).json({message:"updated the document",})
    })
    })

    app.put('/endtask/:id', function (req, res) {
        var body=req.body;
        var id=req.params.id
        console.log(req.body)
    
        repo.updateflag(body,id,(result)=>{
        res.status(202).json({message:"updated the document",})
        })
        })

//get user specific 

app.get('/user/:user_id', function (req, res) {
    var user_id=req.params.user_id
    console.log(user_id)
    repo.finduserspecific(user_id,(err,data)=>{
        console.log(data)
        res.json(data);
    });
})


//Project CRUD REST APIs
//get all project
app.get('/projects', function (req, res) {
    repo.findproject((err,data)=>{
        res.json(data);
    });
})

//insert project
app.post('/project', function (req, res) {
    var project=req.body

    repo.insertproject(project,(result)=>{
                    res.status(201).json({message:"Inserted the document"})
    })

})

//delete project

    app.delete('/project/:project_id', function (req, res) {
        var project_id=req.params.project_id
        repo.deleteproject(project_id,(result)=>{
        res.status(202).json({message:"Deleted the document"})
        })
        })

//update project
app.put('/editproject/:project_id', function (req, res) {
    var body=req.body;
    var project_id=req.params.project_id
    console.log(req.body)

    repo.updateproject(body,project_id,(result)=>{
    res.status(202).json({message:"updated the document",})
    })
    })



//get project specific 

app.get('/project/:project_id', function (req, res) {
    var project_id=req.params.project_id
    console.log(project_id)
    repo.findprojectspecific(project_id,(err,data)=>{
        console.log(data)
        res.json(data);
    });
})
 

//Task CRUD REST APIs
//get all task
app.get('/tasks', function (req, res) {
    repo.findtask((err,data)=>{
        res.json(data);
    });
})

//insert task
app.post('/task', function (req, res) {
    var task=req.body

    repo.inserttask(task,(result)=>{
                    res.status(201).json({message:"Inserted the document"})
    })

})

//delete task

    app.delete('/task/:task_id', function (req, res) {
        var task_id=req.params.task_id
        repo.deletetask(task_id,(result)=>{
        res.status(202).json({message:"Deleted the document"})
        })
        })

//update task
app.put('/edittask/:task_id', function (req, res) {
    var body=req.body;
    var task_id=req.params.task_id
    console.log(req.body)

    repo.updatetask(body,task_id,(result)=>{
    res.status(202).json({message:"updated the document",})
    })
    })



//get task specific 

app.get('/task/:task_id', function (req, res) {
    var task_id=req.params.task_id
    console.log(task_id)
    repo.findtaskspecific(task_id,(err,data)=>{
        console.log(data)
        res.json(data);
    });
})


//Parent_Task CRUD REST APIs
//get all parent
app.get('/parents', function (req, res) {
    repo.findparent((err,data)=>{
        res.json(data);
    });
})

//insert task
app.post('/parent', function (req, res) {
    var parent=req.body

    repo.insertparent(parent,(result)=>{
                    res.status(201).json({message:"Inserted the document"})
    })

})
app.put('/endtask/:id', function (req, res) {
    var body=req.body;
    var id=req.params.id
    console.log(req.body)

    repo.updateflag(body,id,(result)=>{
    res.status(202).json({message:"updated the document",})
    })
    })
app.listen(5001,()=>console.log("Listening to port 5001..."))