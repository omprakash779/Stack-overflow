import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import TagsList from '../Tags/TagsList'
import './Tags.css'
const Tags = () => {
const tagsList = [{
  id:1,
  tagName:'Reactjs',
  tagDesc:"it is a javascript library for building user interfaces"
},
{
  id:2,
  tagName:'nodejs',
  tagDesc:"nodejs is a event based ,non-blocking,asyncronous I/O runtime"

}]

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that catagorizes your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your questions,</p>

        <div className='tags-list-container'>
          {
            tagsList.map((tag)=>{
              <TagsList tag={tag} key={tagsList.id}/>
            })
          }
        </div>
      </div>
      </div>
  )
}

export default Tags
