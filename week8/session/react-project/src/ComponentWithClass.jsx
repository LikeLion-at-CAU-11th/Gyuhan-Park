import React, { Component } from "react";
import PropTypes from "prop-types";

class ComponentWithClass extends Component {
  render() {
    const { name, children, favoriteColor } = this.props;

    return (
      <>
        <div>내 이름은 {name}입니다</div>
        <div>children은 {children}입니다</div>
        <div>가장 좋아하는 색은 {favoriteColor}입니다</div>
      </>
    );
  }
}

ComponentWithClass.defaultProps = {
  name: "홍길동",
};

ComponentWithClass.propTypes = {
  name: PropTypes.string,
  favoriteColor: PropTypes.string.isRequired,
};

export default ComponentWithClass;
