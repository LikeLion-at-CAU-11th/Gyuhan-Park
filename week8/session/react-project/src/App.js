import "./App.css";
import React from "react";
import ComponentWithClass from "./ComponentWithClass";
import ComponentWithFunction from "./ComponentWithFunction";
import Like from "./Like";

function App() {
  return (
    <>
      {/* <ComponentWithFunction name="gyu" favoriteColor="red">
        @@@@함수칠드런@@@@
      </ComponentWithFunction> */}
      {/* <ComponentWithClass name="gyu class" favoriteColor="red class">
        @@@@class children@@@@
      </ComponentWithClass> */}
      <Like />
    </>
  );
}

export default App;
