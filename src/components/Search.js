import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Mic, SearchOutlined} from "@material-ui/icons";
import {Button} from "@material-ui/core";

import "./Search.css";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const Search = ({hideButtons = false}) => {
  const [{term}, dispatch] = useStateValue();

  const [input, setInput] = useState("");

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchOutlined className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
