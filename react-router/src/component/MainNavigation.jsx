import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <div>
        <NavLink to=''
        style={({isActive})=>({
            color: isActive? 'green' : 'white'
        })}
        end>
            Home
        </NavLink>
        <NavLink to='product'
         style={({isActive})=>({
            color: isActive? 'green' : 'white'
        })}
        >Product</NavLink>
    </div>
  )
}

export default MainNavigation