import React from "react";

export default ({ children }) =>
    <div className={""}>
        <h1>Header</h1>
        <div className={"wrapper"}>
            <section>
                <img
                    alt="itachi"
                    height="128px"
                    width="128px"
                    src="https://www.pinterest.com/pin/117586240258307809/"
                />

                <p>
                Please note
                that if you added the official
                Save button to your code prior to June 2016, 
                we updated it from the old design ("Pin It") to the new design ("Save") on October 3, 2017.

                </p>
            </section>
            {children}
        </div>
        <h2>Footer</h2>
    </div>