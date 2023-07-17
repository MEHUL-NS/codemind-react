import express from "express";
import fs from 'fs'
import path from 'path'
// import { displayProblem } from "../Controllers/userController.js";


const router = express.Router()

router.post('/compile' , (req,res)=>{
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;

    const receivedCode = req.body.code
    const fileName = 'filename.cpp';
    const dirPath = 'C:/Users/sutra/OneDrive/Desktop/codeRmind/codeFiles'
    const filePath = path.join(dirPath , fileName)
    fs.writeFile(filePath , "hello" , (err) => {
        if(err){
            console.log("Error saving the file : ",err)
            return;
        }
        console.log("File saved successfully")
    })    
})


// router.get('/displayProblem' , displayProblem)


export default router;
   