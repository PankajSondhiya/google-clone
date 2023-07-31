import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./searchPage.css";
import { SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import Loader from "./loader";
const SearchPage = ({ searchTerm, setSearchTerm }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  async function FetchSearchResult(searchTerm) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBAKBhgadgJ-yojMiHQM-aT304NZ1fV7A4&cx=9ec571f86697d07ac&q=${searchTerm}`
    );
    setData(data);
    setLoading(false);
  }

  useEffect((event) => {
    if (!searchTerm) {
      return;
    }
    FetchSearchResult(searchTerm);
  }, []);
  return (
    <>
      <div className="searchPage_ bg-dark">
        <div className="search_page_header">
          <div className="logo_input">
            <Link to="/">
              <div className="home_body_">Google</div>
            </Link>
            <div className="search_header_body">
              <div className="search_input">
                <input
                  className="form-control"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                <IconButton onClick={() => FetchSearchResult(searchTerm)}>
                  <SearchOutlined className="search_InputIcon" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="search_page_options d-flex m-auto">
            <div className="search_page_option mx-3 ">
              <SearchOutlined />
              <Link to="/all">All</Link>
            </div>
            <div className="search_page_option">
              <SearchOutlined />
              <Link to="/images">Images</Link>
            </div>
            <div className="search_page_option">
              <SearchOutlined />
              <Link to="/Maps">Maps</Link>
            </div>
            <div className="search_page_option">
              <SearchOutlined />
              <Link to="/Shopping">Shopping</Link>
            </div>
            <div className="search_page_option">
              <SearchOutlined />
              <Link to="/more">More</Link>
            </div>
          </div>
        </div>
        {searchTerm && (
          <div className="searchPage_results">
            <p className="searchpage_resultCount">
              About {data?.searchInformation?.formattedTotalResults} results in{" "}
              {""}
              {data?.searchInformation?.formattedSearchTime} seconds for{" "}
              {searchTerm}
            </p>
          </div>
        )}
        {loading ? (
          <Loader centered />
        ) : (
          data?.items?.map((item) => (
            <div className="searchPage_link_Results">
              <a href={item.link} target="_blank" style={{ color: "white" }}>
                {item?.pagemap?.cse_image?.length > 0 && (
                  <img
                    alt="icon"
                    className="searchpage_resultimage"
                    src={item?.pagemap?.cse_image[0]?.src}
                    height="60px"
                    width="60px"
                  />
                )}
                {item.displayLink}
              </a>
              <div className="item_link_detail">
                <a
                  href={item.link}
                  target="_blank"
                  className="searchPage_resultTitle"
                  style={{ color: "white" }}
                >
                  <h5>{item.title}</h5>
                </a>
                <p className="searchpage_resutSnippet">{item.snippet}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SearchPage;
