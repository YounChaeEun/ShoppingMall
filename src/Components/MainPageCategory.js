import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MainPageCategory() {
  let [category, setCategory] = useState([
    {
      name: "Coat",
      img: "https://younchaeeun.github.io/ShoppingMall/images/coat1.jpg",
    },
    {
      name: "Top",
      img: "https://younchaeeun.github.io/ShoppingMall/images/top1.jpg",
    },
    {
      name: "Bottom",
      img: "https://younchaeeun.github.io/ShoppingMall/images/bottom1.jpg",
    },
    {
      name: "Dress",
      img: "https://younchaeeun.github.io/ShoppingMall/images/dress1.jpg",
    },
  ]);
  const navigate = useNavigate();

  return (
    <Container>
      <h4 className="title">Category</h4>
      <Row>
        {category.map(function (a, i) {
          return (
            <Col key={a.id}>
              <img
                src={category[i].img}
                width="300px"
                height="400px"
                onClick={() => {
                  navigate(category[i].name);
                }}
              ></img>
              <div className="subTitle">{category[i].name}</div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MainPageCategory;
