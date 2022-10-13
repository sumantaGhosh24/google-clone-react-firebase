import {useState, useEffect} from "react";

import {REACT_SEARCH_API_KEY, REACT_SEARCH_ENGINE_ID} from "./config";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${REACT_SEARCH_API_KEY}&cx=${REACT_SEARCH_ENGINE_ID}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return {data};
};

export default useGoogleSearch;
