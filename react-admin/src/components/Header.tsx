import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { UserData } from "../models/user";

interface Props {
  user?: UserData;
}

export const Header = (props: Props) => {
  const { user } = props;

  const LogoutHandler = async () => {
    await axios.post("logout");
  };

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Company name
      </a>
      <ul className="my-2 my-md-0 mr-md-3">
        <Link to="/profile" className="p-2 text-white text-decoration-none">
          {user?.first_name} {user?.last_name}
        </Link>
        <Link
          to="/login"
          className="p-2 text-white text-decoration-none"
          onClick={LogoutHandler}
        >
          Log out
        </Link>
      </ul>
    </header>
  );
};
