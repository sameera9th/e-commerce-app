import React from "react";
import { NavCollaps } from "./../../atoms";
import NavigationItem from "./../../molecules/navigation-item";

class Accessories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  collaps = () => {
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  };

  render() {
    return (
      <>
        <NavigationItem
          type={2}
          to={null}
          count={41}
          name="Accessories"
          active={false}
          onClick={this.collaps}
          // icon={<Add active={true} />}
        />
        <NavCollaps isOpen={this.state.isOpen}>
          <NavigationItem
            type={1}
            to="/"
            name="Mobile Cover"
            active={false}
            // icon={<InProgress active={false} />}
          />
          <NavigationItem
            type={1}
            to="/"
            name="Electric charge"
            active={false}
            // icon={<InProgress active={false} />}
          />
        </NavCollaps>
      </>
    );
  }
}

export default Accessories;
