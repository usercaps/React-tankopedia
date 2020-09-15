import React, { Component } from "react";
import { PtSauDetails } from "../../wot-components";
import { withRouter } from "react-router-dom";


class PtSauTanks extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <PtSauDetails selectedItem={id} />
        )
    }
}

export default withRouter(PtSauTanks);