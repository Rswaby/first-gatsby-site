import React from "react";

export default ({ children }) =>
    <div className={""}>
        <h1>Header</h1>
        <div className={"wrapper"}>
            {children}
        </div>
        <h2>Footer</h2>
    </div>