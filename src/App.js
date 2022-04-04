// import logo from "./logo.svg";
import * as React from "react";
// import * as ReactDOM from "react-dom";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
// import { Calendar } from "@progress/kendo-react-dateinputs";
// import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "./product.json";

function App() {
  const availableProducts = products.slice();
  const [gridData, setGridData] = React.useState(
    availableProducts.splice(0, 20)
  );
  const scrollHandler = (event) => {
    const e = event.nativeEvent;

    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const moreData = availableProducts.splice(0, 10);

      if (moreData.length > 0) {
        setGridData((oldData) => oldData.concat(moreData));
      }
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Grid
          style={{
            height: "400px",
            margin: "100px 0 0",
          }}
          data={gridData}
          onScroll={scrollHandler}
          fixedScroll={true}
        >
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Discontinued" width="250px" />
          <Column field="UnitPrice" width="250px" />
          <Column field="QuantityPerUnit" width="250px" />
          <Column field="Category.CategoryName" width="250px" />
          <br />
          {/* showing: {gridData.length} items */}
        </Grid>
      </div>
    </div>
  );
}

export default App;
