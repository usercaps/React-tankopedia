import React, { Component } from "react";
import { LightDetails } from "../../wot-components";
import { withRouter } from "react-router-dom";


class LightTanks extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <LightDetails selectedItem={id} />
        )
    }
}

export default withRouter(LightTanks);