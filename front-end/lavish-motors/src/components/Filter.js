import React, { Component } from "react";
import { connect } from "react-redux";
import { sortProducts } from "../actions/productActions";
function Filter(props) {
    return (
      <div className="row">
        <div className="col-md-4">{`${props.filteredProducts.length} vehicles found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              value={props.sort}
              onChange={(event) => {
                props.sortProducts(
                  props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  // size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { sortProducts })(
  Filter
);