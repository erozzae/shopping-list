import "./App.css";
import { useState } from "react";
import { Button, Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import shoppingIcon from "./assets/shopping-icon.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            React-Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h1>{count}</h1>
      <>
        <Button
          className="m-2 fw-semibold"
          variant="danger"
          onClick={() => setCount(count - 1)}
        >
          Kurang
        </Button>
        <Button
          className="m-2 fw-semibold"
          variant="primary"
          onClick={() => setCount(count + 1)}
        >
          Tambah
        </Button>
      </>
    </>
  );
}

export default App;
