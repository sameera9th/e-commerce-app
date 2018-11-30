import React from "react";
import { Col } from "./../../atoms/grid";
import { Card, Heading, Padding, Background } from "./../../atoms";

class ItemCard extends React.Component {
  render() {
    return (
      <Col className="col-md-3">
        <Card>
          <Padding size={15}>
            <Heading level={5} grayScale={4} fontWeight={3}>
              {this.props.itemName}
            </Heading>
          </Padding>
          <Background bgImage={this.props.bgImage}> 1</Background>
        </Card>
      </Col>
    );
  }
}

export default ItemCard;
