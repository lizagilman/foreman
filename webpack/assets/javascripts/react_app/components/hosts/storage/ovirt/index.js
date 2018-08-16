import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './OvirtStorageContainerActions';
import reducer from './OvirtStorageContainerReducer';

import OvirtStorageContainer from './OvirtStorageContainer';

// map state to props
const mapStateToProps = ({ ovirtStorageContainer }) => ({
  volumes: ovirtStorageContainer.volumes,
  //addDisk: actions.addDisk,
});

// map action dispatchers to props
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// export reducers
export const reducers = { ovirtStorageContainer: reducer };

// export connected component
export default connect(mapStateToProps, mapDispatchToProps)(OvirtStorageContainer);
