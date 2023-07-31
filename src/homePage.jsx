import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Search from "./search";
import "./homePage.css";

const HomePage = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="home ">
        <div className="home_header">
          <div className="headerLeft">
            <Link
              to="https://about.google/intl/ALL_in/"
              style={{ color: "white" }}
            >
              About
            </Link>
            <Link
              to="https://store.google.com/?pli=1&hl=en-GB"
              style={{ color: "white" }}
            >
              Store
            </Link>
            <Link
              href="https://accounts.google.com/ServiceLogin?hl=en-GB"
              style={{ color: "white" }}
            >
              Gmail
            </Link>
            <Apps />
            <Avatar />
          </div>
        </div>
        <div className="home_body">Google</div>
        <div className="home_ImputContainer">
          <Search
            hideButton={false}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
