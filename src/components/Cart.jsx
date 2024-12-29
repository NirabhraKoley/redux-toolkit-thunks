import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);
  // console.log(products);
  const removeToCart =(id) => {
    dispatch(remove(id))
  }
  return (
    <>
      <h1 className="align-middle">CART</h1>
      <div
        className="flex flex-col flex-wrap gap-3 justify-center "
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
                <Button
                  variant="danger"
                  onClick={() => removeToCart(product.id)}
                >
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </>
  );
};
