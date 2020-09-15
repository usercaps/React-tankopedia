import React, { Component } from "react";
import { MediumList, MediumDetails } from "../../wot-components";
import Column from "../../column";
import { withRouter, Redirect } from "react-router-dom";

class MediumPage extends Component {
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
          <MediumList onSelectedItem={(id) => history.push(`/medium/${id}`)}/>
        }
        bottom={<MediumDetails selectedItem={this.state.selectedItem} />}
      />
    );
  }
}

export default withRouter(MediumPage);
