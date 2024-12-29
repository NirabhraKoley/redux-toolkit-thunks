import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { getProducts } from "../redux/productSlice";

export const Products = () => {
  // const [products, getProducts] = useState([]);
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products)

  // console.log(products);
  
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
    dispatch(getProducts())
  }, []);
  const addToCart = (product) => {
    dispatch(add(product));
  };
  if(status === 'loading'){
    return <p>loading...</p>
  }
  return (
    <>
      <div
        className="flex flex-wrap gap-3 justify-center "
        style={{ marginBottom: "10px" }}
      >
        {products.map((product) => {
          return (
            <Card className="h-100" key={product.id} style={{ width: "18rem" }}>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "100px", height: "130px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>INR: {product.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ background: "white" }}>
                <Button onClick={() => addToCart(product)} variant="primary">
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </>
  );
};
