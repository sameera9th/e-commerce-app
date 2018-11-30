import React from "react";
import LeftNavigation from "./../../organisms/left_navigation";
import TopNavigation from "./../../organisms/top_navigation";
import { Content } from "./../../atoms";
import ItemCard from "./../../organisms/item_card";
import { Row } from "./../../atoms/grid";
import itemone from "./../../../images/cart/download-1.jpg";
import itemtwo from "./../../../images/cart/download-2.jpg";
import itemthree from "./../../../images/cart/download-3.jpg";
import itemfour from "./../../../images/cart/download-4.jpg";
import itemfive from "./../../../images/cart/download.jpg";

const Dashboard = () => {
  return (
    <div>
      <LeftNavigation />
      <TopNavigation />
      <Content>
        <Row>
          <ItemCard bgImage={itemone} itemName="Nike Watch" />
          <ItemCard bgImage={itemtwo} itemName="Cheerson Drone" />
          <ItemCard bgImage={itemthree} itemName="Levis Watch" />
          <ItemCard bgImage={itemfour} itemName="Levis Watch" />
          <ItemCard bgImage={itemfive} itemName="Levis Watch" />
        </Row>
      </Content>
    </div>
  );
};
export default Dashboard;
