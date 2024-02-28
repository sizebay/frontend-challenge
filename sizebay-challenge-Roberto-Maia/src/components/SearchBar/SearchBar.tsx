import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchBarProps } from "./Types";
import { Tasks } from "../../App";
import { DoneAndPending, SearchAndDone } from "./Styles";

export const SearchBar: React.FC<SearchBarProps> = ({
  setTaskFilter,
  taskRender,
  setDirectionRender,
}): JSX.Element => {
  const [buttonChecked, setButtonChecked] = useState<string>("");
  const [filterSearchInput, setFilterSearchInput] = useState<string>("");

  useEffect(() => {
    if (!buttonChecked) {
      setDirectionRender("standard");
      return;
    }
    setDirectionRender("filter");
  }, [buttonChecked, setDirectionRender]);

  useEffect(() => {
    setTaskFilter(
      taskRender.filter((item: Tasks) => {
        return item.task
          .toLowerCase()
          .includes(filterSearchInput.toLowerCase());
      })
    );
    setDirectionRender("filter");
  }, [filterSearchInput, setDirectionRender, setTaskFilter, taskRender]);

  const filterTasks = (name: string) => {
    if (buttonChecked === name) {
      setTaskFilter([]);
      setButtonChecked("");
      return;
    }
    const property = name === "Done" ? true : false;
    setTaskFilter(
      taskRender.filter((item) => {
        return item.done === property;
      })
    );
    setButtonChecked(name);
  };

  const checkIconButton = <CheckIcon sx={{ fontSize: 15, color: "#4DA6B3" }} />;

  const returnButton = (buttonName: string) => {
    return (
      <DoneAndPending
        onClick={() => filterTasks(buttonName)}
        $bordercolor={buttonChecked === buttonName ? "#4DA6B3" : ""}
      >
        {buttonChecked === buttonName ? checkIconButton : null}
        {buttonName}
      </DoneAndPending>
    );
  };

  const filterSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilterSearchInput(event.target.value);
  };

  return (
    <SearchAndDone>
      <div style={{ display: "flex", gap: "12px" }}>
        {returnButton("Done")}
        {returnButton("Pending")}
      </div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px 2px 10px",
          border: "1px solid #DBDBDB",
          display: "flex",
          alignItems: "center",
          width: 400,
          height: 40,
          boxShadow: "0px 0px 1px",
        }}
      >
        <InputBase
          sx={{
            ml: 0,
            flex: 1,
          }}
          placeholder="Search items"
          onChange={(event) => {
            filterSearch(event);
          }}
        />
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </SearchAndDone>
  );
};
