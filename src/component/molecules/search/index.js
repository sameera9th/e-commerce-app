import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import { Row, Col } from "./../../atoms/grid";
import InputMolecule from "./../../molecules/input";
import { Button } from "./../../atoms/button";
import { Input } from "./../../atoms/input";

const SearchBody = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }
`;

class Search extends React.Component {
  render() {
    return (
      <SearchBody>
        <Input type="text" placeholder="Search" height={7} />
        &nbsp;&nbsp;
        <Button>Search</Button>
      </SearchBody>
    );
  }
}

export default Search;
