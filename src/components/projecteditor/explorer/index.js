import { connect } from 'react-redux';
import { explorerActions } from '../../../actions';
import { Explorer } from './explorer';

const mapStateToProps = state => ({
    ...state.explorer
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTreeItem: (id) => {
            dispatch(explorerActions.toggleTreeItem(id));
        },
        openFile: (id) => {
            dispatch(explorerActions.openFile(id));
        },
        configureContract: (id, name) => {
            dispatch(explorerActions.configureContract(id, name));
        },
        compileContract: (id, name) => {
            dispatch(explorerActions.compileContract(id, name));
        },
        deployContract: (id, name) => {
            dispatch(explorerActions.deployContract(id, name));
        },
        interactContract: (id, name) => {
            dispatch(explorerActions.interactContract(id, name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
