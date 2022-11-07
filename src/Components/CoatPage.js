import { Container, Col, Row } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "./../store.js";

function CoatPage(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let a = useSelector((state) => state.coatItems);

  return (
    <div>
      <Container>
        <h4 className="title">Coat</h4>
        <Row>
          {a.map(function (num, i) {
            return (
              <Col key={i}>
                <img
                  src={a[i].img}
                  width="300px"
                  onClick={() => {
                    navigate("/detail");
                    props.changeId(i); //a[i].id도 가능
                  }}
                ></img>
                <div className="subTitle">{a[i].name}</div>
                <button
                  style={{ marginBottom: "50px" }}
                  onClick={() => {
                    props.changeId(i);
                    dispatch(changeCart(a[props.id]));
                    navigate("/cart");
                  }}
                >
                  cart
                </button>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CoatPage;
