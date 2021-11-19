import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        getProduct();
    }, [counter])
    const getProduct = () => {
        axios.get("http://localhost:8000/api/Product/" + id)
        .then(res => {
            setProduct(res.data)
        })
        .catch(err => {console.log(err)})
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
            <div className="productCard2">
                {/* {JSON.stringify(product.Product.name)} */}
                {/* <h1>{product.name}</h1> */}
                <div>
                    <img className="product"width="350" height="350" src={"" + product.image} alt={"Picture of " + product.name} />
                    <button className="button-border spacing" onClick={() => addToCart(product._id, product)}> {
                        product.cart
                        ? "Add to Cart"
                        : "Remove from Cart"
                    }
                    </button>
                    <button className="button-border spacing">Give a Review</button>
                    <button className="button-border spacing">Similar Products</button>
                </div>
                <div>
                    <div className="productCard3">
                        <h1>{product.name}</h1>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="productCard3">
                        <p>Loved this basketball!</p>
                        <p>Wore down only after a couple months. Would not buy again. </p>
                        <p>My favorite basketball to use, would definitely recommend</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
