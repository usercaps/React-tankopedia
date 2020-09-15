import React, { Component } from "react";
import { SauDetails } from "../../wot-components";
import { withRouter } from "react-router-dom";


class SauTanks extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <SauDetails selectedItem={id} />
        )
    }
}

export default withRouter(SauTanks);