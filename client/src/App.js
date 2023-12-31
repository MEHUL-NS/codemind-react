import { useState } from 'react';
import './App.css';
import Editor from "@monaco-editor/react";
import Navbar from './Components/Navbar';
import axios from 'axios';
import spinner from './spinner.svg';
import Problem from './Components/Problem';
import { answers } from './data';

function App() {


	const [userCode, setUserCode] = useState(``);	
	const [userLang, setUserLang] = useState("python");
	const [userTheme, setUserTheme] = useState("vs-dark");
	const [fontSize, setFontSize] = useState(20);
	const [userInput, setUserInput] = useState("");
	const [userOutput, setUserOutput] = useState("");
	const [loading, setLoading] = useState(false);
	const options = {
		fontSize: fontSize
	}

	function compile() {
		setLoading(true);
		if (userCode === ``) {
			return
		}

		axios.post(`http://localhost:5000/compile`, {
			code: userCode,
			language: userLang,
			input: userInput
		}).then((res) => {
			console.log(res)
			setUserOutput(res.data.output);
		}).then(() => {
			setLoading(false);
		})
	}

	function clearOutput() {
		setUserOutput("");
	}
	function checkAnswer(){				
		if (userOutput && answers && userOutput.trim() === answers[1].trim()) {
			console.log("Correct");
		  } else {
			console.log("Wrong");
		  }		  
	}

	return (
		<div className="App">
			<Navbar
				userLang={userLang} setUserLang={setUserLang}
				userTheme={userTheme} setUserTheme={setUserTheme}
				fontSize={fontSize} setFontSize={setFontSize}
			/>
			<div className="main">
				<div className="left-container">
					<Editor
						options={options}
						height="calc(100vh - 50px)"
						width="100%"
						theme={userTheme}
						language={userLang}
						defaultLanguage="python"
						defaultValue="# Enter your code here"
						onChange={(value) => { setUserCode(value) }}
					/>
					<button className="run-btn" onClick={() => compile()}>
						Run
					</button>
				</div>
				<div className="right-container">					
					<div className="input-box">
						<Problem />					
					</div>
					<h4>Output:</h4>
					{loading ? (
						<div className="spinner-box">
							<img src={spinner} alt="Loading..." />
						</div>
					) : (
						<div className="output-box">
							<pre>{userOutput}</pre>
							<button className="btn btn-secondary" onClick={()=>{checkAnswer()}}>Check Answer</button>
							<button onClick={() => { clearOutput() }}
								className="clear-btn">
								Clear
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
