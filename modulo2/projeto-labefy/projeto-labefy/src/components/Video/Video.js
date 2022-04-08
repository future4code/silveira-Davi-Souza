import React from "react";

class Video extends React.Component {
    render() {
        return (
            <div>
                <video width="750" height="500" controls >
                    <source src={this.props.url} />
                </video>
            </div>
        )
    }
}

export default Video;