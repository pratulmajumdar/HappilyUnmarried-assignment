import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { StarIcon } from "@material-ui/icons";
import NativeSelect from "@material-ui/core/NativeSelect";
import { getCategoryData } from "../../actions/initAction";

class Products extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      viewMore: false,
      categorySelected: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      this.setState({ products: this.props.products });
    }
    if (prevProps.categoryName !== this.props.categoryName) {
      this.setState({
        categorySelected: this.props.categories.filter(
          (data) => data.category_name === this.props.categoryName
        )[0]?.category_id,
      });
    }
  }

  IndivisualProduct = (data) => {
    return (
      <div className="indi-product">
        <div className="product-img">
          <img src={data.image_urls_webp.x120} alt={data.alt_text} />
        </div>
        <div className="product-info">
          <div>
            <span>{data.name}</span>
            <span style={{ marginLeft: "10px" }}>{data.rating}</span>
          </div>
          <span>{data.weight + data.weight_unit}</span>
          <div>
            <span>₹ {data.final_price}</span>
            <span style={{ marginLeft: "10px" }}>
              <s>₹ {data.price}</s>
            </span>
          </div>
          {data.is_in_stock ? (
            <Button className="add-to-cart-btn">ADD TO CART</Button>
          ) : (
            <Button className="out-of-stock-btn">OUT OF STOCK</Button>
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <div className="products-box">
          {this.state.products?.map((data, index) => {
            if (index < 3 && !this.state.viewMore) {
              return this.IndivisualProduct(data);
            } else if (this.state.viewMore) {
              return this.IndivisualProduct(data);
            }
          })}
          <div>
            <span>Showing for</span>
            <NativeSelect
              style={{ marginLeft: "10px" }}
              onChange={(e) => {
                let val = e.target.value;
                this.setState({
                  categorySelected: this.props.categories.filter(
                    (data) => data.category_id === val
                  )[0].category_id,
                });
                let data = {
                  val,
                  name: this.props.categories.filter(
                    (data) => data.category_id === val
                  )[0].category_name,
                };
                this.props.getCategoryData(data);
              }}
              value={this.state.categorySelected}
            >
              {this.props.categories.map((data) => (
                <option value={data.category_id}>{data.category_name}</option>
              ))}
            </NativeSelect>
            {!this.state.viewMore ? (
              <Button
                className="view-btn"
                onClick={(_) => {
                  this.setState({ viewMore: true });
                }}
              >
                [+] View More
              </Button>
            ) : (
              <Button
                className="view-btn"
                onClick={(_) => {
                  this.setState({ viewMore: false });
                }}
              >
                [-] View Less
              </Button>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.init.categoryData,
  categoryName: state.init.categoryName,
  categories: state.init.categories,
});

const mapDispatchToProps = {
  getCategoryData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
