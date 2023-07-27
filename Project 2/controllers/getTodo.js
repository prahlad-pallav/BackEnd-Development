
const Todo = require("../models/Todo");

exports.getTodo = async(req,res)=>{
    try{

        const todos = await Todo.find({});

        res.status(200)
        .json({
            sucess:true,
            data:todos,
            message:"Successfully Fetched"
        });
        
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Error in fetching data"
        });
    }
}


exports.getTodoById = async(req,res)=>{
    try{

        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with given Id",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo id:${id} data fetched successfully`
        })
        
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Error in fetching data with given Id"
        });
    }
}