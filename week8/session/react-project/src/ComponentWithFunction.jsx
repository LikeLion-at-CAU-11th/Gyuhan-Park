import React from "react";
import PropTypes from "prop-types";

const ComponentWithFunction = (props) => {
  const { name, children, favoriteColor } = props;
  return (
    <>
      <div>내 이름은 {name}입니다</div>
      <div>children은 {children}입니다</div>
      <div>가장 좋아하는 색은 {favoriteColor}입니다</div>
    </>
  );
};

ComponentWithFunction.defaultProps = {
  name: "홍길동",
};

ComponentWithFunction.propTypes = {
  name: PropTypes.string,
  favoriteColor: PropTypes.string.isRequired,
};

export default ComponentWithFunction;
