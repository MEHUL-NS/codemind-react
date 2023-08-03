import express from 'express'
import axios from 'axios'
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const url = "https://projecteuler.net/problem"
export const displayProblem = async(req,res) => {    
    try{
        const response = await axios.get(`${url}=1`)       
        const $ = await cheerio.load(response.data)       

        let pName = "";
        let pNo = 0;
        let pStatement = "";      

        $("#content > h2").each((i,e) => {
            pName = $(e).text().trim()
        })

        $(("#problem_info > h3")).each((i,e) => {
            pNo = $(e).text().trim()
        })

        $(("#content > div.problem_content")).each((i,e) => {
            pStatement = $(e).text().trim()
        })

        res.send({pName , pNo , pStatement})      
       
    }catch(error){
        res.send({message:error.message});
    }
}





const fetchProblemData = async (problemNumber) => {
  const url = `https://projecteuler.net/minimal=${problemNumber}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Problem ${problemNumber}`);
    }
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);

    // Extract the problem title and description
    const title = $("p").text().trim();
    const problem = $(".problem_content").text().trim();

    return {
      title: title,
      problem: problem,
    };
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const fetchAndPrintProblems = async () => {
  for (let problemNumber = 1; problemNumber <= 800; problemNumber++) {
    const problemData = await fetchProblemData(problemNumber);
    if (problemData) {
      console.log(`Problem ${problemNumber}: ${problemData.title}`);
      console.log(problemData.problem);
      console.log();
    }
  }
};

fetchAndPrintProblems();
