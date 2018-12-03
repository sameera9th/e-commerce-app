import React from "react";
import { Heading, Padding } from "./../../atoms";
import { Row, Col } from "./../../atoms/grid";

const SubHeading = ({ children }) => {
  return (
    <Row>
      <Col className="col-md-12">
        <Padding size={20} direction="bottom">
          <Heading level={1} grayScale={1} fontWeight={3}>
            {children}
          </Heading>
        </Padding>
      </Col>
    </Row>
  );
};

export default SubHeading;
