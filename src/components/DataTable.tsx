import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

// interface PostObject {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

let rows: GridRowsProp = [];

const columns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 10 },
  { field: "userId", headerName: "User Id", width: 50 },
  { field: "title", headerName: "Title", width: 400 },
  { field: "body", headerName: "Body", width: 900 },
];

const DataTable = ({ data }) => {
  rows = [...data];

  return (
    <div
      style={{
        height: 400,
        width: "90%",
        display: "flex",
        justifyContent: "center",
        margin: "2% auto",
      }}
    >
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataTable;
