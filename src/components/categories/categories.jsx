import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCategories, getCategoryData } from "../../actions/initAction";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "@material-ui/core/Avatar";

class Categories extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: [],
      tabValue: "185",
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categories !== this.props.categories) {
      let data = {
        val: this.props.categories[0].category_id,
        name: this.props.categories[0].category_name,
      };
      this.props.getCategoryData(data);
      this.setState({ categories: this.props.categories });
    }
    if (prevProps.categoryName !== this.props.categoryName) {
      let val = this.props.categories.filter(
        (data) => data.category_name === this.props.categoryName
      )[0]?.category_id;
      this.setState({ tabValue: val });
    }
  }

  handleTabChange = (e, val) => {
    let name = this.props.categories.filter(
      (data) => data.category_id === val
    )[0].category_name;
    let data = {
      val,
      name,
    };
    this.props.getCategoryData(data);
    this.setState({ tabValue: val });
  };

  render() {
    return (
      <Fragment>
        <div className="categories-box">
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleTabChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            {this.state.categories.map((data) => {
              return (
                <Tab
                  value={data.category_id}
                  id={data.category_name}
                  icon={
                    <Avatar
                      variant="square"
                      className="indi-tab"
                      src={data.category_image}
                    />
                  }
                  label={data.category_name}
                />
              );
            })}
          </Tabs>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.init.categories,
  categoryName: state.init.categoryName,
});

const mapDispatchToProps = {
  getCategories,
  getCategoryData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
