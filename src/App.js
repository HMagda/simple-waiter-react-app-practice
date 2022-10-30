import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import Status from "./components/Status/Status";

// import { Routes, Route } from 'react-router-dom';

import AllTables from "./components/AllTables/AllTables";

// import styles from './styles/styles.scss';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div className="w-75 p-3">

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Waiter.app</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <h1 className="p-3">All tables / Table x</h1>

      <AllTables />

    </div>
  );
};

export default App;

// return (
//   <main>
//     <Container style={{width: "800px"}}>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="*" element={<PageNotFound />} />
//         <Route path="/table/:id" element={<Table />} />
//       </Routes>
//     </Container>
//   </main>
// );