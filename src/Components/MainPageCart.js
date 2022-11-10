import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function MainPageCart() {
  const cartList = useSelector((state) => state.cartList);

  return (
    <Container>
      <h4 className="title">Cart</h4>
      <Row>
        {cartList.map(function (a, i) {
          return (
            <Col key={a.id}>
              <img src={cartList[i].img} width="300px"></img>
              <div className="subTitle">
                <div>{cartList[i].name}</div>
                <div>{cartList[i].price}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MainPageCart;
