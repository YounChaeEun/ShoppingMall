import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainPageReview(props) {
  const reviewList = useSelector((state) => state.reviewList);
  const navigate = useNavigate();

  return (
    <Container>
      <h4 className="title">Review</h4>
      <Row>
        {reviewList &&
          reviewList.map(function (a, i) {
            return <Col key={a.id}>{reviewList[i]}</Col>;
          })}
      </Row>
      <button className="moreButton" onClick={() => navigate("/review")}>
        More
      </button>
    </Container>
  );
}

export default MainPageReview;
