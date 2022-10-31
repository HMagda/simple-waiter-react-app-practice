import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {fetchTables} from "./redux/tablesRedux";
import {fetchStatuses} from "./redux/statusesRedux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Home from "../src/components/pages/Home/Home";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import Table from "./components/pages/Table/Table";
import {Routes, Route} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
    dispatch(fetchStatuses());
  }, [dispatch]);

  return (
    <div className="w-75 p-3">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Waiter.app</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/table/:id" element={<Table />} />
      </Routes>
    </div>
  );
};

export default App;
