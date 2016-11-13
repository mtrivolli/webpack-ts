import * as React from "react";
import * as ReactDOM from "react-dom";

Promise.resolve("Promises are promises").then( v => {
    ReactDOM.render(<a href=".">{v}</a>,
        document.getElementById("example"));
});
