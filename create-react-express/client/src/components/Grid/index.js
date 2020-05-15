import React from "react"

export function Container({ fluid, children }) {
return <div className={'container${fluid ? "-fluid" : "}'}>
    {children}</div>;
}

export function Row({ fluid, children }) {
    return <div className={'container${fluid ? "-fluid" : "}'}>
    {children}</div>;
}

export function Col({ size,children }) {
    return(
        <div classNAme = {size.split("").map(size =>"col-"+ size).join("")}>
            {children}
        </div>
    );
}