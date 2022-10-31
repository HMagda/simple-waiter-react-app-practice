import {API_URL} from "../config";

export const getAllTables = ({tables}) => tables;
export const getTableById = ({tables}, tableId) =>
  tables.find((table) => table.id === tableId);

const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName("UPDATE_TABLES");
const UPDATE_TABLE = createActionName("UPDATE_TABLE");

export const updateTables = (payload) => ({type: UPDATE_TABLES, payload});
export const updateTable = (payload) => ({type: UPDATE_TABLE, payload});

export const fetchTables = () => {
  console.log("fetchTables");
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const updateTableRequest = (newData, tableId) => {
  return (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };
    debugger;
    fetch(`${API_URL}/tables/${tableId}`, options).then(() =>
      dispatch(updateTable({...newData, id: tableId}))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? {...table, ...action.payload} : table
      );
    default:
      return statePart;
  }
};
export default tablesReducer;
