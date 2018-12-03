import React from "react";
import { Col } from "./../../atoms/grid";
import {
  Card,
  Heading,
  Padding,
  Background,
  RowLayout,
  Button,
  AddCart
} from "./../../atoms";

class ItemCard extends React.Component {
  render() {
    return (
      <Col className="col-md-3">
        <Card>
          <Padding size={15}>
            <Heading level={4} grayScale={1} fontWeight={1}>
              {this.props.itemName}
            </Heading>
          </Padding>
          <Background bgImage={this.props.bgImage} />
          <Padding size={15}>
            <RowLayout direction="space-between">
              <Heading level={7} grayScale={2} fontWeight={1}>
                Price : $232
              </Heading>
              <Heading level={7} grayScale={5} fontWeight={4}>
                Popular
              </Heading>
            </RowLayout>
            <div style={{ marginTop: "10px" }} />
            <RowLayout direction="space-between">
              <Button colorful={true} colorful={false} boxShadow={false}>
                Details
              </Button>
              <Button transparent={true}>
                <AddCart />
              </Button>
            </RowLayout>
          </Padding>
        </Card>
      </Col>
    );
  }
}

export default ItemCard;
