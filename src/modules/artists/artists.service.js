import restApi from '../../service/rest.api';
import { initList } from '../../redux/actions/list.action'

const call = restApi();

function getArtist(dispatch) {
    call.get('posts/').then(
        res => {
            console.log('res', res.data)
            dispatch(initList(res.data));
            // setList(()=>{return storedList})
        }
    ).catch(
        err => {
            console.log('error', err)
        }
    )
}
function getFilteredArtist(dispatch, param, filter) {
    call.get('posts/?'+param+'='+filter).then(
        res => {
            console.log('res', res.data)
            dispatch(initList(res.data));
            // setList(()=>{return storedList})
        }
    ).catch(
        err => {
            console.log('error', err)
        }
    )
}
export { getArtist, getFilteredArtist }