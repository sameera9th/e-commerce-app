import React from "react";
import LeftNavigation from "./../../../organisms/left_navigation";
import TopNavigation from "./../../../organisms/top_navigation";
import { Content, Heading, Padding } from "./../../../atoms";
import { DefaultBox } from "./../../../atoms/boxes";
import { Row, Col } from "./../../../atoms/grid";
import SubHeading from "./../../../organisms/sub_heading";
import InputMolecule from "./../../../molecules/input";
import classNames from "classnames";
import Dropzone from "react-dropzone";

class AddNewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
    console.log(acceptedFiles);
  };
  render() {
    const childStyle = {
      width: "100%",
      height: 160,
      border: "2px dashed #ccc"
    };

    return (
      <div>
        <LeftNavigation />
        <TopNavigation />
        <Content>
          <Row>
            <Col className="col-md-10 offset-md-1">
              <SubHeading>Add New Product</SubHeading>
              <DefaultBox>
                <Padding size={25}>
                  <Heading level={6}>PRODUCT</Heading>
                  <Row>
                    <Col className="col-md-12">
                      <InputMolecule label="Title" height={6} type="text" />
                    </Col>
                    <Col className="col-md-12">
                      <InputMolecule
                        label="Description"
                        height={6}
                        type="textarea"
                      />
                    </Col>
                  </Row>
                </Padding>
              </DefaultBox>
              <DefaultBox>
                <Padding size={25}>
                  <Heading level={6}>IMAGES</Heading>
                  <Row>
                    <Col className="col-md-12">
                      <Dropzone onDrop={this.onDrop} style={childStyle}>
                        {({ getRootProps, getInputProps, isDragActive }) => {
                          return (
                            <div
                              {...getRootProps()}
                              className={classNames("dropzone", {
                                "dropzone--isActive": isDragActive
                              })}
                              style={childStyle}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop files here...</p>
                              ) : (
                                <p>
                                  Try dropping some files here, or click to
                                  select files to upload.
                                </p>
                              )}
                            </div>
                          );
                        }}
                      </Dropzone>
                    </Col>
                  </Row>
                </Padding>
              </DefaultBox>
              <DefaultBox>
                <Padding size={25}>
                  <Heading level={6}>PRICING</Heading>
                  <Row>
                    <Col className="col-md-6">
                      <InputMolecule label="Price" height={6} type="text" />
                    </Col>
                    <Col className="col-md-6">
                      <InputMolecule
                        label="Compare at price"
                        height={6}
                        type="text"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-6">
                      <InputMolecule
                        label="Cost per item"
                        height={6}
                        type="text"
                      />
                    </Col>
                  </Row>
                </Padding>
              </DefaultBox>
              <DefaultBox>
                <Padding size={25}>
                  <Heading level={6}>INVENTORY</Heading>
                  <Row>
                    <Col className="col-md-6">
                      <InputMolecule
                        label="SKU (stock keeping unit)"
                        height={6}
                        type="text"
                      />
                    </Col>
                    <Col className="col-md-6">
                      <InputMolecule
                        label="
                            Barcode (ISBN, UPC, GTIN, etc.)"
                        height={6}
                        type="text"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-md-6">
                      <InputMolecule
                        label="Inventory policy"
                        height={6}
                        type="text"
                      />
                    </Col>
                    <Col className="col-md-3">
                      <InputMolecule label="Quantity" height={6} type="text" />
                    </Col>
                  </Row>
                </Padding>
              </DefaultBox>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default AddNewProduct;
