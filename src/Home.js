import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/section1">
          Section 1
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/section1">
          Section 2
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
