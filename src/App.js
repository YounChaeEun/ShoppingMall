import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar, Container, NavDropdown, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainPageCategory from "./Components/MainPageCategory";
import CoatPage from "./Components/CoatPage";
// import MainPageCoat from "./Components/MainPageCoat";
import ReviewPage from "./Components/ReviewPage";
import MainPageReview from "./Components/MainPageReview";
import DetailPage from "./Components/DetailPage";
import CartPage from "./Components/CartPage";
import MainPageCart from "./Components/MainPageCart";
import Footer from "./Components/Footer";

function App() {
  let navigate = useNavigate();
  let [id, setId] = useState(0);
  let changeId = (a) => {
    setId(a);
  };

  const Remove = () => {};

  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ fontSize: "20px" }}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>About</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate("/coat")}>
                  Coat
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/top")}>
                  Top
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/buttom")}>
                  Buttom
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="bg"></div>
              <MainPageCategory />
              <Container>
                <Row className="nothingWrap">
                  <Col className="nothingText">Spring LookBook</Col>
                  <img
                    className="nothingImg"
                    src="https://younchaeeun.github.io/ShoppingMall/images/nothing.png"
                  ></img>
                </Row>
              </Container>
              <MainPageCart />
              <MainPageReview />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/detail"
          element={<DetailPage id={id} changeId={changeId} />}
        ></Route>
        <Route
          path="/coat"
          element={<CoatPage id={id} changeId={changeId} />}
        ></Route>
        <Route
          path="/cart"
          element={<CartPage id={id} changeId={changeId} />}
        ></Route>
        <Route path="/review" element={<ReviewPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
