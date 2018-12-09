import React from "react";
import styled from "styled-components";
import { Button } from "./../../atoms/button";
import { Input } from "./../../atoms/input";
import { Text } from "./../../atoms/text";

const SearchBody = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }
`;

class Quantity extends React.Component {
  render() {
    return (
      <SearchBody>
        <div
          style={{
            paddingRight: "20px",
            position: "relative",
            top: "10px",
            width: "80px"
          }}
        >
          <Text grayScale={2} fontWeight={4}>
            Quantity
          </Text>
        </div>
        <Button> - </Button>
        &nbsp;&nbsp;
        <div style={{ width: "70px" }}>
          <Input type="text" placeholder="" height={7} />
        </div>
        &nbsp;&nbsp;
        <Button> + </Button>
      </SearchBody>
    );
  }
}

export default Quantity;
