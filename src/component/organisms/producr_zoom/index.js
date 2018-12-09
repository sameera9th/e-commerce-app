import React from "react";
import { Col } from "./../../atoms/grid";
import { DefaultBox } from "./../../atoms/boxes/default_box";
import ReactImageMagnify from "react-image-magnify";
import example from "./../../../images/cart/download-1.jpg";

class ProductZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DefaultBox border={false} shadow={true}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: example,
              sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw"
            },
            largeImage: {
              src: example,
              width: 1000,
              height: 1000
            }
          }}
        />
      </DefaultBox>
    );
  }
}

export default ProductZoom;
