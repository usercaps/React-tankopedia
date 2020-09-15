import React, { Component } from "react";
import { HeavyDetails } from "../../wot-components";
import { withRouter } from "react-router-dom";


class HeavyTanks extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <HeavyDetails selectedItem={id} />
        )
    }
}

export default withRouter(HeavyTanks);