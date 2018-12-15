import React from "react";
import { NavCollaps } from "../../atoms";
import NavigationItem from "../../molecules/navigation-item";

class Phone extends React.Component {
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
          name="Phones"
          active={true}
          onClick={this.collaps}
          // icon={<Add active={true} />}
        />
        <NavCollaps isOpen={this.state.isOpen}>
          <NavigationItem
            type={1}
            to="/"
            count={14}
            name="New Phones"
            active={false}
            // icon={<Achieve active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            count={31}
            name="Used Phones"
            active={false}
            // icon={<Reject active={false} />}
          />
          <NavigationItem
            type={1}
            to="/home"
            name="Phones Repairs"
            active={false}
            // icon={<Clarifications active={false} />}
          />
        </NavCollaps>
      </>
    );
  }
}

export default Phone;
