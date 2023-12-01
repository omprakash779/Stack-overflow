import React from 'react'
import '../RightSidebar/RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/Black-Logo.svg'
const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Vlog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="15px" />
          <p>Ovservability is key to the future of software [and your DevOps career]</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="15px" />
          <p>Podcast 374: How valuable your screen name</p>
        </div>
      </div>

      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="15px" />
          <p>Review queue workflows - final release...</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="15px" />
          <p>Please welcome Valued Associates: #958 -V2Blast #959 -SpencerG</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="blacklogo" width="15px" />
          <p>Outdated Answers: accepted answers is now unpinned on Stack Overflow</p>
        </div>
      </div>

      <h4>Hot Mete Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>Why was the spam flag declined. yet the question marked as spam?</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>is a link to the "How to ask" help page a usefull comment ? </p>
        </div>
      </div>
    </div>
  )
}

export default Widget
