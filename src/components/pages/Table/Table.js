import {useParams, Navigate} from "react-router-dom";
import {getAllStatuses} from "../../../redux/statusesRedux";
import {useDispatch, useSelector} from "react-redux";
import Form from "react-bootstrap/Form";
import {getTableById, updateTableRequest} from "../../../redux/tablesRedux";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const Table = () => {
  const {id} = useParams();
  const table = useSelector((state) => getTableById(state, id));
  const allStatuses = useSelector(getAllStatuses);
  const dispatch = useDispatch();

  const [status, setStatus] = useState("Free");
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(0);
  const [bill, setBill] = useState(0);

  useEffect(() => {
    if (table) {
      setStatus(table.status);
      setPeopleAmount(table.peopleAmount);
      setMaxPeopleAmount(table.maxPeopleAmount);
      setBill(table.bill);
    }
  }, [table]);

  useEffect(() => {
    if (status === "Busy") {
      setBill(0);
    }
    if (status === "Cleaning" || status === "Free") {
      setPeopleAmount(0);
    }
  }, [status]);

  useEffect(() => {
    if (peopleAmount > 10) {
      setPeopleAmount(10);
    }
    if (peopleAmount < 0) {
      setPeopleAmount(0);
    }
    if (maxPeopleAmount > 10) {
      setMaxPeopleAmount(10);
    }
    if (maxPeopleAmount < 0) {
      setMaxPeopleAmount(0);
    }
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [peopleAmount, maxPeopleAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateTableRequest(
        {
          status: status,
          peopleAmount: peopleAmount,
          maxPeopleAmount: maxPeopleAmount,
          bill: bill,
        },
        table.id
      )
    );
  };

  if (!table) return <Navigate to="/"/>

  return (
    <div>
      <h1 className="p-3">Table {id}</h1>

      <div>
        <Form onSubmit={handleSubmit}>
          <p className="fw-bold d-inline">Status: </p>
          <Form.Select
            className="d-inline"
            style={{width: "50%"}}
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            {allStatuses.map((status) => (
              <option key={status.id} value={status.name}>
                {status.name}
              </option>
            ))}
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>People amount</Form.Label>
            <Form.Control
              value={peopleAmount}
              onChange={(e) => setPeopleAmount(e.target.value)}
              style={{width: "100px"}}
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Max people amount</Form.Label>
            <Form.Control
              value={maxPeopleAmount}
              onChange={(e) => setMaxPeopleAmount(e.target.value)}
              style={{width: "100px"}}
              type="number"
            />
          </Form.Group>
          {status === "Busy" && (
            <Form.Group className="mb-3">
              <Form.Label>Bill</Form.Label>
              <Form.Control
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                style={{width: "100px"}}
                type="number"
              />
            </Form.Group>
          )}
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Table;
