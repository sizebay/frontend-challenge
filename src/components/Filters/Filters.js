// import React from 'react'
import svg from './lupa.svg'
import svg2 from './close.svg'
import check from './check.svg'
import { useRef } from 'react'
import { useRootContext } from '../../Hooks/useRootContext.js';
import {SMarkers, SSearchBox, SSearchTask} from './style.js'


function Filters() {
    const { searchTask, setSearchTask, typeAction, setTypeAction } = useRootContext();
    const searchInputRef = useRef();

    function handleChange({value}){
        setSearchTask(value);
    }

    function handleFilter(actionType){
        setTypeAction(actionType);
    }

    function handleSearchClick(){
        setSearchTask('')
        searchInputRef.current.focus()
    }

    return (
        <SSearchTask>
            <SMarkers className='filter-buttons'>
              <ul>
                <li><button className={typeAction === 'done_tasks' ? 'selected' : ''} onClick={() => handleFilter('done_tasks')}>{typeAction === 'done_tasks' && <img alt='done' src={check}/> }Done</button></li>
                <li><button className={typeAction === 'undone_tasks' ? 'selected' : ''} onClick={() => handleFilter('undone_tasks')}>{typeAction === 'undone_tasks' && <img alt='eliminate' src={check}/> }Pending</button></li>
              </ul>
            </SMarkers>            
            <SSearchBox>
                <input placeholder="Search Items" type="text" value={searchTask} onChange={({target}) => handleChange(target)} ref={searchInputRef}/>
                {
                    searchTask.length  ?<img alt='search' className='cancelSearch' onClick={handleSearchClick} src={svg2}/> :<img alt='close search' src={svg} onClick={handleSearchClick}/>
                }                
            </SSearchBox>
        </SSearchTask>
    )
}

export default Filters