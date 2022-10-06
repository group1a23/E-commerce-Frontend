import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/team/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/team/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>{" "}
          </Card.Title>
        </Link>

        <Card.Text as="h3">
          <strong>${product.price}</strong>{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
