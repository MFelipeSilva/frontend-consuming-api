import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <h1>
        <Link to={"/"}>Post</Link>
      </h1>

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/new"}>New post</Link>
        </li>
      </ul>
    </Container>
  );
};
