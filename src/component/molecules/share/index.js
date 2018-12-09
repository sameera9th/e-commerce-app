import React from "react";
import styled from "styled-components";
import { Button } from "./../../atoms/button";
import { Text } from "./../../atoms/text";
import { FaceBook, Twitter, Google, Pinterest } from "./../../atoms";

const SearchBody = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }
`;

class Share extends React.Component {
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
            Share
          </Text>
        </div>
        <Button>
          <FaceBook />
        </Button>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <Button>
          <Twitter />
        </Button>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <Button>
          {" "}
          <Google />
        </Button>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <Button>
          {" "}
          <Pinterest />{" "}
        </Button>
      </SearchBody>
    );
  }
}

export default Share;
