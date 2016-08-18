import { connect } from 'react-redux'
import { click_sidebar, force_sync_content } from '../actions/barswitch'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state) => {
    return {
        bardata: state.bardata,
        activeMainbar: state.bardata.activeMainbar,
        activeSidebarItem: state.bardata.activeSidebar[state.bardata.activeMainbar]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSidebar: (item) => {
            dispatch(click_sidebar(item))
            dispatch(force_sync_content())
        },
    }
}

const SidebarCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarCon
