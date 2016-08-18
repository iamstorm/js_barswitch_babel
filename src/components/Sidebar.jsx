import React from "react";

export default class Sidebar extends React.Component {
    render() {
        let buildLink = (item, index) => {
            if(item == this.props.activeSidebarItem) {
                return <li className="active" key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickSidebar(item)}>{item}</a></li>;
            } else {
                return <li key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickSidebar(item)}>{item}</a></li>;
            }
        }
        return (
                <div className="Sidebar">
                    <ul >
                        {this.props.bardata[this.props.activeMainbar].map((item, index)=>
                                buildLink(item,index))
                        }
                   </ul>
               </div>
        );
    }
}
