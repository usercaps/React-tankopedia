import React, { Component } from "react";
import { MediumDetails } from "../../wot-components";
import { withRouter } from "react-router-dom";


class MediumTanks extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <MediumDetails selectedItem={id} />
        )
    }
}

export default withRouter(MediumTanks);