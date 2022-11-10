import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart, increaseCount } from "./../store.js";

function CoatPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coatItems = useSelector((state) => state.coatItems);
  const cartList = useSelector((state) => state.cartList);

  return (
    <div>
      <Container>
        <h4 className="title">Coat</h4>
        <Row>
          {coatItems.map(function (a, i) {
            return (
              <Col key={a.id}>
                <img
                  src={coatItems[i].img}
                  width="300px"
                  onClick={() => {
                    navigate("/detail");
                    props.changeId(i); //coatItems[i].id도 가능
                  }}
                ></img>
                <div className="subTitle">
                  <div>{coatItems[i].name}</div>
                  <button
                    className="cartButton"
                    onClick={() => {
                      let d = coatItems.find((element) => element.id == i);
                      let f = cartList.find((element) => element.id == d.id);
                      dispatch(increaseCount(f));
                      navigate("/cart");
                    }}
                  >
                    cart
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CoatPage;
