import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import {getAllTables} from "../../redux/tablesRedux";
import {useSelector} from "react-redux";

const AllTables = () => {
    
  const AllTables = useSelector(getAllTables);

  if (AllTables.length === 0) return <h2>Loading...</h2>;
  return (
    <Table responsive="md">
      <tbody>
        {AllTables.map((table) => (
          <tr>
            <td>
              <h2>Table {table.id}</h2>
            </td>
            <td>
              <p className="mt-3">
                <p className="d-inline fw-bold">Status: </p>
                <p className="d-inline">{table.status}</p>
              </p>
            </td>
            <td>
              <Link key={table.id} to={"/table/" + table.id}>
                <button type="button" className="btn btn-primary">
                  Show more
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllTables;
