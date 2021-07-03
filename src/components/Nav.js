import React from 'react'
import { Link, Route } from "react-router-dom";
const Nav = () => {

     const CustomLink = ( {to, activeOnlyWhenExact, label} ) => {
          return <Route 
               path={to}
               exact={activeOnlyWhenExact}
               children={ ({match}) => {
                    let matchClass = match ? "active-router" : ""
                    return  <li className="nav-item">
                    <Link className={`nav-link ${matchClass}`}  to={to}> {label} </Link>
                </li>
               }}
          />
     }

     const routerLink = [
          {to: "/", activeOnlyWhenExact: true, label: "trang chủ"},
          {to: "/shop", activeOnlyWhenExact: true, label: "shop"},
          {to: "/hehe", activeOnlyWhenExact: true, label: "huhu"},
     ]

     const routerLinkMap = routerLink.map((route, index) => {
          return  <CustomLink  
          to={route.to}
          activeOnlyWhenExact={route.activeOnlyWhenExact}
          label={route.label}
          key={index}
     />
     })

     return (
          <div>
               <ul className="nav justify-content-center">
                    {routerLinkMap}
               </ul>
          </div>
     )
}

export default Nav
