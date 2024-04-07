import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'


const Navbar = () => {
 const {totalUniqueItems} = useCart();
  return (
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">
        Shubh-Hotels
      </a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active">
        <a href="/">Home</a>
      </li>
         </ul>
         <ul classname="nav navbar-nav navbar-right">
  <li>
    <Link to = {"/cart"}>
      <button style={{ fontSize: 24 }}>
        Cart <i className="fa fa-shopping-cart" />({totalUniqueItems})
      </button>
      
    </Link>
  </li>
</ul>

  </div>
</nav>

  )
}

export default Navbar