import React from "react";
import { Heading, Padding, Break, Text, RowLayout } from "./../../atoms";
import Quantity from "./../../molecules/quantity";
import Share from "./../../molecules/share";
class ProductDetailsLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Heading level={2} grayScale={2} fontWeight={3}>
          {this.props.productName}
        </Heading>
        <Padding size={5} direction="vertical">
          <Heading level={6} grayScale={6} fontWeight={3}>
            {this.props.itemName}
          </Heading>
        </Padding>
        <Break />
        <Padding size={15} direction="vertical">
          <Text grayScale={2} fontWeight={4}>
            {this.props.details}
          </Text>
          <Padding size={25} direction="vertical">
            <div
              style={{ fontSize: "40px", fontWeight: 800, color: "#2196f3" }}
            >
              {this.props.price}
            </div>
          </Padding>
          <Padding size={15} direction="vertical">
            <Quantity />
          </Padding>
          <Padding size={15} direction="vertical">
            <Share />
          </Padding>
        </Padding>
      </React.Fragment>
    );
  }
}

export default ProductDetailsLeft;
