import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating"

const Team = ({ team }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/team/${team._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/team/${team._id}`}>
          <Card.Title as="div">
            <strong>{team.name}</strong>{" "}
          </Card.Title>
        </Link>

        <Card.Text as="h3">
          <strong>${team.price}</strong>{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Team
