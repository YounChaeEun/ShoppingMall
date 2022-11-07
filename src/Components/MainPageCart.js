import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function MainPageCart() {
  let a = useSelector((state) => state.cartList);

  return (
    <Container>
      <h4 className="title">Cart</h4>
      <Row>
        {a.map(function (num, i) {
          return (
            <Col key={i}>
              <img src={a[i].img} width="300px"></img>
              <div className="subTitle">{a[i].name}</div>
              <div>{a[i].price}</div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MainPageCart;
