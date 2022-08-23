import React from "react";
import ReactDOM from "react-dom/client";

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
});


