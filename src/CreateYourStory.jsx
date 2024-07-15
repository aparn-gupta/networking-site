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
        <img className='xl:w-32 lg:w-28 xl:h-64 lg:h-48 rounded-xl' src= {currentUser.pfpSrc}/>
       <Link to="/stories/create" >  <div className='absolute text-white lg:top-20 xl:top-28 left-10'> <AddCircleIcon   sx={ {  width: "3rem", height: "3rem"}} /> </div></Link>
        <div className='absolute text-white bottom-2.5 text-center font-bold flex justify-center left-0 px-4'> <p> Create Story</p> </div>

      
    </div>
  )
}

export default CreateYourStory
