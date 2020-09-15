import React, { Component } from "react";
import { PtSauList, PtSauDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter, Redirect } from "react-router-dom";

class PtSauPage extends Component {
    state = {
        isLogin: true,
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
          <PtSauList onSelectedItem={(id) => history.push(`/medium/${id}`)}/>
        }
        bottom={<PtSauDetails selectedItem={this.state.selectedItem} />}
      />
    );
  }
}

export default withRouter(PtSauPage);
