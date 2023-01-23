import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/searchbar.css";

export default function Searchbar(props) {
  return (
    <div className='search-container'>
      <div className='buttons'>
        <button
          onClick={() => {
            props.status !== "Done"
              ? props.setStatus("Done")
              : props.setStatus("");
          }}
          className={props.status === "Done" ? "active" : ""}
        >
          {props.status === "Done" ? (
            <FontAwesomeIcon icon={faCheck} className='check' />
          ) : (
            ""
          )}
          Done
        </button>
        <button
          onClick={() => {
            props.status !== "Pending"
              ? props.setStatus("Pending")
              : props.setStatus("");
          }}
          className={props.status === "Pending" ? "active" : ""}
        >
          {props.status === "Pending" ? (
            <FontAwesomeIcon icon={faCheck} className='check' />
          ) : (
            ""
          )}
          Pending
        </button>
      </div>

      <div className='search-input-container'>
        <input
          type='text'
          placeholder='Search items'
          onChange={(e) => {
            const newName = e.target.value;
            props.setSearch(newName);
          }}
          value={props.search}
          className='search-input'
        />
        <div
          onClick={() => {
            const empty = "";
            props.setStatus(empty);
            props.setSearch(empty);
          }}
          className='clear-search-field'
        >
          {props.search === "" ? (
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
          ) : (
            <FontAwesomeIcon icon={faClose} className='icon close' />
          )}
        </div>
      </div>
    </div>
  );
}
