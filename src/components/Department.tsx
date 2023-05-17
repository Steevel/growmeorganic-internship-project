import { FormGroup, Typography } from "@mui/material";
import data from "../data/data";
import ChecBoxGroup from "./ChecBoxGroup";

const Department = () => {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        margin: "1% auto",
      }}
    >
      <Typography variant="h5">Department Selector</Typography>

      <FormGroup>
        {data.map(
          (
            item: { department: string; sub_departments: Array<string> },
            index: number
          ) => (
            <ChecBoxGroup key={index} item={item} />
          )
        )}
      </FormGroup>
    </div>
  );
};

export default Department;
