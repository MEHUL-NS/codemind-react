import React from 'react';
import '../App.css'

const Navbar = ({ userLang, setUserLang, userTheme,
	setUserTheme, fontSize, setFontSize }) => {
	
	return (
		<>
		<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Problems</a></li>       
        <li><a>User</a></li>		
		<li><a>Login</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Code Mind</a>
  </div>
  <div className="navbar-end">
  <div className='forSelection'>
		<select className="select select-secondary w-40 max-w-xs" onChange={(e) => {setUserLang(e.target.value)}}>
 	 		<option disabled selected>Select language</option>
  			<option value="python">python</option>
  			<option value="cpp" >C++</option>
  			<option value="c" >C</option>
		</select>


		<select className="select select-secondary w-40 max-w-xs" onChange={(e) => {setUserTheme(e.target.value)}}>
			<option disabled selected>Select theme</option>
			<option value="vs-dark" label="Dark">vs-dark</option>
			<option value= "light" label="Light">light</option>
		</select>
		</div>		
  </div>
</div>
		{/* <div className='navbar flex justify-around '>
		<h1>Code Mind</h1>
		<h1>Problems</h1>
		
		<div className='forSelection'>
		<select className="select select-secondary w-40 max-w-xs" onChange={(e) => {setUserLang(e.target.value)}}>
 	 		<option disabled selected>Select language</option>
  			<option value="python">python</option>
  			<option value="cpp" >C++</option>
  			<option value="c" >C</option>
		</select>


		<select className="select select-secondary w-40 max-w-xs" onChange={(e) => {setUserTheme(e.target.value)}}>
			<option disabled selected>Select theme</option>
			<option value="vs-dark" label="Dark">vs-dark</option>
			<option value= "light" label="Light">light</option>
		</select>
		</div>		
		</div> */}

		</>
	)
}

export default Navbar
