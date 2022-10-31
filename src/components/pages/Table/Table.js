// import tablesReducer from "../../../redux/tablesRedux";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
// import { getAllStatuses } from "../../../redux/statusesRedux";
// import {useSelector} from "react-redux";
import Form from 'react-bootstrap/Form';


const Table = () => {

    const { id } = useParams();
    // const AllStatuses  = useSelector(getAllStatuses);

  return ( 
    <div>
        
      <h1 className="p-3">proba stolika {id}</h1>

      <div>
          <p className="fw-bold d-inline">Status: </p>
<Form.Select className="d-inline" style={{ width: '50%' }}>
      <option>current status</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Form.Select>
      </div>
     
      {/* <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>

            {/* {AllStatuses.map((st) => (
                <Dropdown.Item>{st.name}</Dropdown.Item>
            ))} */}

            {/* <Dropdown.Item>status 1 </Dropdown.Item>
            <Dropdown.Item>status 2 </Dropdown.Item>
            <Dropdown.Item>status 3 </Dropdown.Item>
            <Dropdown.Item>status 4 </Dropdown.Item>


        </Dropdown.Menu>
      </Dropdown> */} 




    </div>
   );
}
 
export default Table;