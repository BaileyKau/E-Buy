import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [products, setProducts] = useState([])
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        getAllProducts();
    }, [counter])

    const getAllProducts = () => {
        axios.get("http://localhost:8000/api/Product")
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    const addToCart = (id, product) => {
        product.cart = !product.cart;
        axios.put("http://localhost:8000/api/Product/edit/" + id, product)
            .then(_res => {
                const count = counter + 1;
                setCounter(count);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="background">
            <h1 className="header">Popular Items</h1>
            {
                products.map((product, i) => {
                    return (
                        <div key={i} className="productCard">
                            <img width="300" height="300" src={"" + product.image} alt={"Picture of " + product.name} />
                            <div>
                                <h3 className="cost spacing">${product.cost}</h3>
                                <h3 className="spacing">{product.name}</h3>
                                <div>
                                    <button className="spacing" onClick={() => addToCart(product._id, product)}> {
                                        product.cart
                                        ? "Add to Cart"
                                        : "Remove from Cart"
                                    }
                                    </button>
                                    <Link to={"/product/" + product._id}><button className="spacing">View Product</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main
