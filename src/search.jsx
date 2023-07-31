import { Button } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  function search(event) {
    event.preventDefault();
    if (searchTerm !== "") {
      navigate("/search/");
    }
  }

  function onFeelingLuckyClick() {}
  return (
    <>
      <Form className="search">
        <div className="search_input">
          <input
            className="form-control"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <SearchOutlined className="search_InputIcon" />
        </div>

        <div className="search_buttons ">
          <Button
            className="btn-custum mx-5 bg-white"
            variant="outlined"
            type="submit"
            onClick={search}
          >
            Google search
          </Button>
          <Button
            className="btn-custum mx-5 bg-white"
            variant="outlined"
            type="submit"
            onClick={onFeelingLuckyClick}
          >
            I"m feeling lucky
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Search;
