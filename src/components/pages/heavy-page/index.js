import React, { Component } from "react";
import { HeavyList, HeavyDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter, Redirect } from "react-router-dom";

class HeavyPage extends Component {
  state = {
    isLogin: false,
  };

  onSelectedItem = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { match, history } = this.props;
    const { id } = match.params;
    if (this.state.isLogin) {
      return <Redirect to="/" />;
    }

    return (
      <Column
        top={
          <HeavyList onSelectedItem={(id) => history.push(`/heavy/${id}`)} />
        }
        bottom={<HeavyDetails selectedItem={this.state.selectedItem} />}
        />
    );
  }
}

export default withRouter(HeavyPage);
