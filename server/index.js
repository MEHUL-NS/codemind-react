import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './Routes/routes.js'

let port = 5000

const app = express();
app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.json({extended:true})) 
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/' , router)

app.get("/health", (req,res)=>{
    res.json("Server is running");
})

app.listen(port , ()=> {
    console.log(`Server listening on port ${port}`)
})