import React from "react";

export default class Mainbar extends React.Component{
    render() {
        let buildLink = (item, index) => {
            if(item == this.props.activeMainbar) {
                return <li className="active" key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickMainbar(item)}>{item}</a></li>;
            }else {
                return <li key={index}><a href="javascrip:void(0)" onClick={() => this.props.onClickMainbar(item)}>{item}</a></li>;
            }
        }
        return (
            <div className="Mainbar">
                <ul>
                    {this.props.bardata.Mainbar.map((item, index)=>
                        buildLink(item,index))
                    }
                </ul>
                <button onClick={this.props.onClickRefreshBtn}>refresh data</button>
            </div>
        )
    }
}
