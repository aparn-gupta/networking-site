import React from 'react'
import { useridContext } from './MainComponent';
import { userData } from './userComponents/userData';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

const CreateYourStory = () => {

  let currentUser = {}
const [selfId, setSelfId] = React.useContext(useridContext)

  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  } 





  return (
    <div className='w-36 h-64  relative'>
        <img className='w-36 xl:h-64 lg:h-48 rounded-xl' src= {currentUser.pfpSrc}/>
       <Link to="/stories/create" >  <div className='absolute text-white top-28 left-8'> <AddCircleIcon   sx={ {  width: "3rem", height: "3rem"}} /> </div></Link>
        <div className='absolute text-white bottom-2.5 text-center font-bold flex justify-center'> <p> Create Your Story</p> </div>

      
    </div>
  )
}

export default CreateYourStory
