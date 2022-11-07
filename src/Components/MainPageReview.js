import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainPageReview(props) {
  let a = useSelector((state) => state.reviewList);
  let navigate = useNavigate();

  return (
    <Container>
      <h4 className="title">Review</h4>
      <Row>
        {a &&
          a.map(function (c, i) {
            return <Col key={i}>{a[i]}</Col>;
          })}
      </Row>
      <button style={{ marginTop: "40px" }} onClick={() => navigate("/review")}>
        More
      </button>
    </Container>
  );
}

export default MainPageReview;
