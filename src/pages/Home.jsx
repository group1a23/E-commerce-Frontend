import React from "react"
import products from "../products"
import teamm from "../teamm"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Team from "../components/Team"
const Home = () => {
  return (
    <>
      <h1>The Lastest Products</h1>
      <Row>
        {teamm.map((team, idx) => (
          <Col key={idx} sm={12} md={6} lg={4} xl={3}>
            <Team team={team} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
