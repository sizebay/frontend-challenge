// import React from 'react'
import styled from 'styled-components'
import svg from './lupa.svg'
import svg2 from './close.svg'
import check from './check.svg'
import { useState, useRef } from 'react'
import { useRootContext } from '../..'

const SFilters = styled.div` 
  display: flex;
  margin: 24px 0px 0px 0px;
  height: 40px;
  width: 100%;
  justify-content: space-between;
`

const SMarkers = styled.div`
  display: flex;
  align-self: center;
  justify-content: start;
  width: 155px;
  height: 33px;
  img{
    height:15px;
    width:15px;
    margin: 0px 5px 0px 0px;
    fill: #4DA6B3;
  }
  ul{
    display: contents;
    list-style: none;
    align-items: center;
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      margin: 0px 8px 0px 0px;
      padding: 7px 16px;
      border: 1px solid #DBDBDB;
      background-color: transparent;
      border-radius: 33px;
      color: #848484;
      &:hover{
        cursor: pointer;
        background-color: #F7F7F8;
        border-color: #4DA6B3;
      }
    }
  }
  .selected{
      border:1px solid #4DA6B3;
      color: #4DA6B3;
  }
`
const SSearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 450px !important;
  height: 40px;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  &:hover{
  border: 1px solid #BBBBBB;
  }

  input{
    font-family: 'Roboto', sans-serif;
    color: #848484;
    font-size: 1rem;
    font-weight: 400;
    height: 40px;
    width: 100%;
    margin: 0px;
    padding: 0px 0px 0px 16px;
    border-radius: 4px 0px 0px 4px;
    border: none;
    &::placeholder{
      color: #848484;
    }
    &:focus{
      outline: none;
    }
  }
  img{
    width: 17px;
    height: 17px;
    color: red;
    margin: 0px 13px 0px 0px;
  }
  .cancelSearch:hover{
    cursor: pointer;
  }
`

// export const Filters = () => {

//   const [lupa, setLupa] = useState(true)
//   const {search,setSearch} = useRootContext()
//   function searchFocus(event){
//     console.log(event);
//     setLupa(false);
//   }

//   return (
//     <SFilters>
//       <SMarkers>
//         <ul>
//           <li><button >Done</button></li>
//           <li><button>Pending</button></li>
//         </ul>
//       </SMarkers>
//       <SSearchBox>
//         <input value={search} onChange={(e) => setSearch(e.target.value)} onFocus={setLupa.bind(null, false)} onBlur={setLupa.bind(null, true)} placeholder="Search Items"/>
//         { lupa ? <img src={svg}/> : <img className='cancelSearch' onMouseDown={(e) => setSearch('')} src={svg2}/> }
//       </SSearchBox>
//     </SFilters>
//   )
// }

// llllllllllllllllll


const SSearchTask = styled.div`
    display:flex;
    justify-content:space-between;
`

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
                {/* <li><button onClick={() => handleFilter('done_tasks')}>Done</button></li>
                <li><button onClick={() => handleFilter('undone_tasks')}>Pending</button></li> */}
                <li><button className={typeAction === 'done_tasks' ? 'selected' : ''} onClick={() => handleFilter('done_tasks')}>{typeAction === 'done_tasks' && <img src={check}/> }Done</button></li>
                <li><button className={typeAction === 'undone_tasks' ? 'selected' : ''} onClick={() => handleFilter('undone_tasks')}>{typeAction === 'undone_tasks' && <img src={check}/> }Pending</button></li>
              </ul>
            </SMarkers>            
            <SSearchBox>
                <input placeholder="Search Items" type="text" value={searchTask} onChange={({target}) => handleChange(target)} ref={searchInputRef}/>
                {
                    searchTask.length  ?<img className='cancelSearch' onClick={handleSearchClick} src={svg2}/> :<img src={svg} onClick={handleSearchClick}/>
                }                
            </SSearchBox>
        </SSearchTask>
    )
}

export default Filters