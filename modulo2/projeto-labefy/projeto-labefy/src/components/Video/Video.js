import React from "react";
import { Body } from "./styled.js";

class Video extends React.Component {
    render() {
        return (
            <Body>
                <audio controls >
                    <source src={this.props.url} />
                </audio>
            </Body>
        )
    }
}

export default Video;