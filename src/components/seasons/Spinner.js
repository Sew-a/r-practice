import React from "react";

export const Spinner = ({message}) => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {message}
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message: "Loading..."
}