import React from 'react';
import '../App.css'

const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize }) => {
	
	return (
		<>
		<div className='navbar'>
		{/* Languages */}
		<select className="select select-secondary w-full max-w-xs" onChange={(e) => {setUserLang(e.target.value)}}>
 	 		<option disabled selected>Pick your favorite language</option>
  			<option value="python">python</option>
  			<option value="cpp" >C++</option>
  			<option value="c" >C</option>
		</select>

		{/* Themes */}

		<select className="select select-secondary w-full max-w-xs" onChange={(e) => {setUserTheme(e.target.value)}}>
			<option disabled selected>Pick your theme</option>
			<option value="vs-dark" label="Dark">vs-dark</option>
			<option value= "light" label="Light">light</option>
		</select>

		<label>Font Size</label>
		<input type="range" min="18" max="30"
			value={fontSize} step="2" onChange={(e) => {setFontSize(e.target.value)}}
		 className="range range-secondary" />
		</div>

		</>
	)
}

export default Navbar
