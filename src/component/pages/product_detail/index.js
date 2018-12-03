import React from "react";
import LeftNavigation from "./../../organisms/left_navigation";
import TopNavigation from "./../../organisms/top_navigation";
import { Content } from "./../../atoms";
import { Row, Col } from "./../../atoms/grid";
import { DefaultBox } from "./../../atoms/boxes/default_box";
import SubHeading from "./../../organisms/sub_heading";

const ProductDetails = () => {
  return (
    <div>
      <LeftNavigation />
      <TopNavigation />
      <Content>
        <SubHeading> Popural Details</SubHeading>
        <Row>
          <Col className="col-md-12">
            <DefaultBox border={false} shadow={true}>
              123
            </DefaultBox>
          </Col>
        </Row>
      </Content>
    </div>
  );
};
export default ProductDetails;
