import React from 'react'
import { Link, Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css'

const Navbar = () => {
    const [search, setSearch] = useState("");
    let history = useHistory();
    const Search = () => {
        history.push("/category/" + search);
    }
    return (
        <>
            <div className="container">
                <img src="https://www.logopik.com/wp-content/uploads/edd/2018/07/Ecommerce-Logo-Vector.png" alt="E-Commerce Logo" width="300" length="300"/>
                <div className="search">
                    <Link to="/"><button>Home</button></Link>
                    <form onSubmit={Search}>
                        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                        <input type="submit" value="Search"/>
                    </form>
                </div>
                <Link to="/cart"><img src="https://media.istockphoto.com/vectors/shopping-cart-icon-design-cart-icon-symbol-design-vector-id1138644570?k=20&m=1138644570&s=612x612&w=0&h=i7CKqRh0QkXaXfI26Wg0m8DiqWtubJgU_46Y-FEe20A=" alt="Shopping Cart" width="300" length="300"/></Link>
            </div>
        </>
    )
}

export default Navbar
