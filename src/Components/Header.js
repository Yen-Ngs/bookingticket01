import React, { Component } from 'react'
//the thay the cho the a trong routing cuar react router dom
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
  <NavLink className="navbar-brand" to="/home">CyberSoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 display-5">
      <li className="nav-item">
        <NavLink activeStyle={{fontWeight:'bold', fontSize:'20px', fontFamily:'fantasy'}} activeClassName="bg-light text-danger" className="nav-link ml-5" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeStyle={{fontWeight:'bold', fontSize:'20px', fontFamily:'fantasy'}} activeClassName="bg-light text-danger" className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeStyle={{fontWeight:'bold', fontSize:'20px', fontFamily:'fantasy'}} activeClassName="bg-light text-danger" className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeStyle={{fontWeight:'bold', fontSize:'20px', fontFamily:'fantasy'}} activeClassName="bg-light text-danger" className="nav-link" to="/register">Register</NavLink>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

        )
    }
}
