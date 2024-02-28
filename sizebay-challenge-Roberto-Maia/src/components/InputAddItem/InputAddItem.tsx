import { InputBase, Paper } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { InputAddItemProps } from "./Types";

export const InputAddItem: React.FC<InputAddItemProps> = ({
  taskItem,
  handleKeyPress,
  setTaskItem,
  addTasks,
}) => {
  return (
    <Paper
      component="form"
      sx={{
        mt: "24px",
        boxShadow: "0px 0px 1px",
        border: "1px solid #DBDBDB",
        display: "flex",
        alignItems: "center",
        width: '100%',
        height: 40,
      }}
    >
      <InputBase
        sx={{
          ml: 0,
          flex: 1,
          pl: 2,
        }}
        placeholder="Add new item ..."
        inputProps={{ "aria-label": "search google maps" }}
        value={taskItem}
        onKeyDown={handleKeyPress}
        onChange={(current) => {
          setTaskItem(current.target.value);
        }}
      />
      <div
        style={{
          width: "44px",
          backgroundColor: "#4DA6B3",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => addTasks()}
      >
        <AddCircleOutlineIcon sx={{ color: "white" }} />
      </div>
    </Paper>
  );
};
