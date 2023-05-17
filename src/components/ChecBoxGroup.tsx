import { useState } from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const ChecBoxGroup = ({
  item,
}: {
  item: { department: string; sub_departments: Array<string> };
}) => {
  const numberOfOptions = item.sub_departments.length;
  const defaultValue = false;
  const initialState = Array(numberOfOptions).fill(defaultValue);
  const [checked, setChecked] = useState(initialState);

  function handleChecked(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(Array(numberOfOptions).fill(event.target.checked));
  }

  function handleChecked1(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const updateState = [...checked];
    updateState[index] = event.target.checked;
    setChecked(updateState);
  }

  return (
    <div>
      <FormControlLabel
        label={item.department}
        control={
          <Checkbox
            checked={checked.every((val) => val === true)}
            // indeterminate={checked.some((val) => val === true)}
            onChange={handleChecked}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {item.sub_departments.map((sub: string, index: number) => (
          <FormControlLabel
            key={index}
            label={sub}
            control={
              <Checkbox
                checked={checked[index]}
                onChange={(e) => handleChecked1(e, index)}
              />
            }
          />
        ))}
      </Box>
    </div>
  );
};

export default ChecBoxGroup;
