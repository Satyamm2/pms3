import '../models/connection.js';
import Assign_ProjectSchemaModel from '../models/assign_project.model.js';
import url from 'url';

export const save = async (req,res,next)=>
{
var Assign_ProjectList = await Assign_ProjectSchemaModel.find().sort({"_id":-1});

var _id=(Assign_ProjectList.length==0?1:Assign_ProjectList[0]._id+1);
var Assign_ProjectDetails={...req.body,"_id":_id,"info":Date()};
var p=await Assign_ProjectSchemaModel.create(Assign_ProjectDetails);
if(p)
 return res.status(201).json({"status":true});
else
 return res.status(500).json({"status": false});
}

export const fetch = async (req,res,next)=>
{
var condition_object = url.parse(req.url,true).query;
var Assign_ProjectList = await Assign_ProjectSchemaModel.find(condition_object);
if(Assign_ProjectList.length!=0)
return res.status(201).json(Assign_ProjectList)
else
return res.status(500).json({"result":"server error"});
}

export const deleteAssign_Project =async(req,res,next)=>
{
    var condition_obj=JSON.parse(req.body.condition_obj);
    var Assign_ProjectList= await Assign_ProjectSchemaModel.find(condition_obj);
    if(Assign_ProjectList!=0)
    {
        let result=await Assign_ProjectSchemaModel.deleteMany(condition_obj);
        if(result)
        return res.status(201).json({"msg":"record deleted "})
        else
        return res.status(500).json({error:"server error"})
    }
    else
    return res.status(404).json({error:"resource not found"})
}

export const updateAssign_Project=async(req,res,next)=>{
    let pDetails = await Assign_ProjectSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(pDetails){
       let result=await Assign_ProjectSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(result)
        return res.status(201).json({"msg":"record updated successfully"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  }