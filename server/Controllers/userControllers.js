import express from 'express'
import axios from 'axios'
import * as cheerio from 'cheerio';

// const url = "https://projecteuler.net/problem"
// export const displayProblem = async(req,res) => {    
//     try{
//         const response = await axios.get(`${url}=1`)       
//         const $ = await cheerio.load(response.data)
        
        
//         let pName = "";
//         let pNo = 0;
//         let pStatement = "";      

//         $("#content > h2").each((i,e) => {
//             pName = $(e).text().trim()
//         })

//         $(("#problem_info > h3")).each((i,e) => {
//             pNo = $(e).text().trim()
//         })

//         $(("#content > div.problem_content")).each((i,e) => {
//             pStatement = $(e).text().trim()
//         })

//         res.send({pName , pNo , pStatement})      
       
//     }catch(error){
//         res.send({message:error.message});
//     }
// }