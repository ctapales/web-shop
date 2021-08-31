import React, { Component } from "react";
import BANNER from "../components/feed/BannerCarousel";
import SHOP_BY_CATEGORY from "../components/feed/ShopByCategory";

class Feed extends Component {
  render() {
    return (
      <React.Fragment>
        <BANNER />
        <SHOP_BY_CATEGORY />
      </React.Fragment>
    );
  }
}

export default Feed;
