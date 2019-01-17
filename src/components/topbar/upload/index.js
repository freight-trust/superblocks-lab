// Copyright 2018 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import { connect } from 'react-redux';
import { ipfsActions } from '../../../actions';
import UploadDialog from './UploadDialog';
import { ipfsSelectors } from '../../../selectors';

const mapStateToProps = state => ({
    ipfs: {
        uploading: ipfsSelectors.getUploadingToIPFS(state),
        shareURL: ipfsSelectors.getShareURL(state),
        lastUploadTimestamp: ipfsSelectors.getLastUploadTimestamp(state),
        error: ipfsSelectors.getUploadToIPFSError(state),
        showUploadSettings: ipfsSelectors.getShowUploadSettings(state),
        uploadSettings: ipfsSelectors.getUploadSettings(state)
    }
});

function mapDispatchToProps(dispatch) {
    return {
        uploadToIPFS: (uploadSettings) => {
            dispatch(ipfsActions.uploadToIPFS(uploadSettings))
        },
        showUploadSettings: () => {
            dispatch(ipfsActions.showUploadSettings())
        },
        hideUploadSettings: () => {
            dispatch(ipfsActions.hideUploadSettings())
        },
        uploadSettingsChanged: (uploadSettings) => {
            dispatch(ipfsActions.uploadSettingsChanged(uploadSettings))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadDialog);