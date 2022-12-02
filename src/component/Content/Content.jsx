import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchDataBegin } from '../../action/todolist';

const Content = ()=>{
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return (
        <div>
            <div>
                {data ? JSON.stringify(data):'No details'}
            </div>
            <button type="button" onClick={()=>{dispatch(fetchDataBegin());}}>
                Get details
            </button>
        </div>

    );
}

export default Content;