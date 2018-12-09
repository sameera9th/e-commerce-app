import React from "react";
import LeftNavigation from "./../../organisms/left_navigation";
import TopNavigation from "./../../organisms/top_navigation";
import { Content } from "./../../atoms";
import { Row, Col } from "./../../atoms/grid";
import SubHeading from "./../../organisms/sub_heading";
import ProductZoom from "./../../organisms/producr_zoom";
import ProductDetailsLeft from "./../../organisms/product_detail_left";

const ProductDetails = () => {
  return (
    <div>
      <LeftNavigation />
      <TopNavigation />
      <Content>
        <SubHeading>PRODUCT DETAILS</SubHeading>
        <Row>
          <Col className="col-md-4">
            <ProductZoom />
          </Col>
          <Col className="col-md-7">
            <ProductDetailsLeft
              productName="Apple iPhone x 64GB"
              itemName="iPhone"
              details=" Met iPhone X neemt Apple afscheid van zijn herkenbare smartphone
            uiterlijk met ronde home button onder het scherm. Deze knop heeft
            plaatsgemaakt voor een groot scherm dat de hele voorkant van het
            toestel in beslag neemt. Dankzij dit vrijwel randloze..."
              price="$5555"
            />
          </Col>
        </Row>
      </Content>
    </div>
  );
};
export default ProductDetails;
