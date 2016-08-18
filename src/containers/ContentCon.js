import { connect } from 'react-redux'
import { click_sidebar, complete_force_sync_content } from '../actions/barswitch'
import Content from '../components/Content'

const mapStateToProps = (state) => {
    return {
        bardata: state.bardata,
        forceSyncContent: state.bardata.forceSyncContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSyncComplete: (item) => {
            dispatch(complete_force_sync_content())
        }
    }
}

const ContentCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)

export default ContentCon
