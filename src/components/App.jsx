import React from "react";
import MainbarCon from "../containers/MainbarCon"
import SidebarCon from "../containers/SidebarCon"
import ContentCon from "../containers/ContentCon"

export class App extends React.Component  {
    render()  {
        return (
                <div>
                    <MainbarCon />
                    <div className="ContentBody">
                        <SidebarCon />
                        <ContentCon />
                    </div>
                </div>
        )
    }
}

