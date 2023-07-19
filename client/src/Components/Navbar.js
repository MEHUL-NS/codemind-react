import React from 'react';
import '../App.css'

const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize }) => {
	
	return (
		<>
		<div className='navbar flex justify-around '>
		<h1>Code Mind</h1>
		{/* Languages */}
		<div className='forSelection'>
		<select className="select select-secondary w-40 max-w-xs" onChange={(e) => {setUserLang(e.target.value)}}>
 	 		<option disabled selected>Select language</option>
  			<option value="python">python</option>
  			<option value="cpp" >C++</option>
  			<option value="c" >C</option>
		</select>

		{/* Themes */}

		<select className="select select-secondary w-40 max-w-xs" onChange={(e) => {setUserTheme(e.target.value)}}>
			<option disabled selected>Select theme</option>
			<option value="vs-dark" label="Dark">vs-dark</option>
			<option value= "light" label="Light">light</option>
		</select>
		</div>

		{/* <label>Font Size</label>
		<input type="range" min="18" max="30" width="20"
			value={fontSize} step="2" onChange={(e) => {setFontSize(e.target.value)}}
		 className="range range-secondary" /> */}
		</div>

		</>
	)
}

export default Navbar
