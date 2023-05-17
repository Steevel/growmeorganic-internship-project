import { Typography } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

interface PostObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

let rows: GridRowsProp = [];

const columns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 10 },
  { field: "userId", headerName: "User Id", width: 60 },
  { field: "title", headerName: "Title", width: 400 },
  { field: "body", headerName: "Body", width: 900 },
];

const DataTable = ({ data }: Array<PostObject>) => {
  rows = [...data];

  return (
    <div
      style={{
        height: 400,
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1% auto",
      }}
    >
      <Typography variant="h5">Data Table</Typography>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataTable;
