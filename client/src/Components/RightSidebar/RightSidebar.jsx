import React from 'react'
import './RightSidebar.css'
import Widget from '../Widget/Widget'
import WidgetTags from '../WidgetTags/WidgetTags'
const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}

export default RightSidebar
