import React from "react";

export default class Content extends React.Component{
        constructor(props, context) {
            super(props, context);
            this.syncWithBar = this.syncWithBar.bind(this);

        }
        syncWithBar() {
            let sidebarItem = this.props.bardata.activeSidebar[this.props.bardata.activeMainbar]
            let $content = $(this._content);
            if ($content.tabs("exists", sidebarItem)) {
                $content.tabs("select", sidebarItem)
                this.props.onSyncComplete();
                return;
            }
            $content.tabs('add',{
                title: sidebarItem,
                content:`<iframe src="./pages/${this.props.bardata.activeMainbar}/${sidebarItem}.html"></iframe>`,
                closable:true,
            })

            this.props.onSyncComplete();
        }
        componentDidMount(){
            $(this._content).tabs({
                border:true
            });
            this.syncWithBar();
        }
        componentDidUpdate(prevProps, prevState) {
            this.syncWithBar();
        }
        render() {
            return (
                <div className="content" ref={(c) => this._content = c}>
                </div>
            )
        }
}

