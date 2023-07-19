import express from "express";
import fs from 'fs'
import path from 'path'
import { exec } from "child_process";
// import { displayProblem } from "../Controllers/userController.js";


const router = express.Router()

// router.post('/compile' , (req,res)=>{
//     const code = req.body.code;   
   
//     fs.writeFile('currentCode.cpp', code, (err) => {
//       if (err) {
//         console.error('Error saving file:', err);       
//         return;
//       }

//       console.log('File saved successfully.');
      
//       const compileCommand = `g++ -o compiledCode currentCode.cpp`;

    
//       exec(compileCommand, (error, stdout, stderr) => {
//         if (error) {
//           console.error('Compilation error:', error);
          
//       return;
//     }

//     console.log('Compilation successful.');

    
//     const executionCommand = './compiledCode';

    
//     exec(executionCommand, (error, stdout, stderr) => {
//       if (error) {
//         console.error('Execution error:', error);
      
//         return;
//       }

//       console.log('Execution successful.');
//       console.log('Program output:', stdout);
//       console.log('Program error:', stderr);
      
      
//     });
//   });
// });

// })




// router.get('/displayProblem' , displayProblem)


export default router;
   