import React, { Component } from "react";
import { LightList, LightDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter, Redirect } from "react-router-dom";

class LightPage extends Component {
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
          <LightList onSelectedItem={(id) => history.push(`/light/${id}`)}/>
        }
        bottom={<LightDetails selectedItem={this.state.selectedItem} />}
      />
    );
  }
}

export default withRouter(LightPage);
