import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './Routes/routes.js'
import fs from 'fs'
import path from 'path';
import { exec } from 'child_process'
let port = 5000

const app = express();
app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.post("/compile", (req, res) => {
    const code = req.body.code;
    const lang = req.body.language
    console.log("code : ", code)
    console.log("lang : ", lang)

    if (lang === 'cpp') {
        let fileName = 'currentCode.cpp'
        let filePath = `./codeFiles/${fileName}`

        fs.writeFile(filePath, code, (err) => {
            if (err) {
                console.error('Error saving file:', err);
                return;
            }

            console.log('File saved successfully.');

            const compileCommand = `g++ -o compiledCode.exe ${filePath}`;


            exec(compileCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error('Compilation error:', error);
                    return;
                }

                console.log('Compilation successful.');

                const executionCommand = path.join('./', 'compiledCode.exe');


                exec(executionCommand, (error, stdout, stderr) => {
                    if (error) {
                        console.error('Execution error:', error);

                        return;
                    }

                    console.log('Execution successful.');
                    console.log('Program output:', stdout);
                    console.log('Program error:', stderr);
                    let d = {
                        output : stdout,
                        error : stderr
                    }
                    res.send(d)
                });
            });
        })
    }
    else if (lang === 'python') {
        const fileName = 'code.py';
        const filePath = `./codeFiles/${fileName}`;

        fs.writeFile(filePath, code, (err) => {
            if (err) {
                console.error('Error saving file:', err);
                return;
            }

            console.log('File saved successfully.');

            const executionCommand = `python ${filePath}`;

            exec(executionCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error('Execution error:', error);
                    return;
                }
                console.log('Execution successful.');
                console.log('Program output:', stdout);
                console.log('Program error:', stderr);
                let d = {
                    output : stdout,
                    error : stderr
                }
                res.send(d)
            })
        })
    }
    else if (lang === 'c') {
        const fileName = 'code.c';
        const filePath = `./codeFiles/${fileName}`;


        fs.writeFile(filePath, code, (err) => {
            if (err) {
                console.error('Error saving file:', err);
                return;
            }

            console.log('File saved successfully.');


            const compileCommand = `gcc -o compiledcode ${filePath}`;

            exec(compileCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error('Compilation error:', error);
                    return;
                }

                console.log('Compilation successful.');

                const executionCommand = path.join('./', 'compiledcode.exe');

                exec(executionCommand, (error, stdout, stderr) => {
                    if (error) {
                        console.error('Execution error:', error);
                        return;
                    }

                    console.log('Execution successful.');
                    console.log('Program output:', stdout);
                    console.log('Program error:', stderr);
                    let d = {
                        output : stdout,
                        error : stderr
                    }
                    res.send(d)
                });
            });
        });

    }


})

app.get("/health", (req, res) => {
    res.json("Server is running");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})