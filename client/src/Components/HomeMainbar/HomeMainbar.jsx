import React from 'react'
import { useLocation } from 'react-router-dom'
import QuestionsList from './QuestionList'
import './HomeMainbar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'

const HomeMainbar = () => {
  const location = useLocation()
  const user = null;
  const navigate = useNavigate()

  const questionsList = useSelector(state=>state.questionReducer)
  console.log(questionsList);
  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What Is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "React js", "node JS", "mongoDB"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: 'Answer',
  //     userAnswered: 'kumar',
  //     answeredOn: 'jan 2',
  //     userId: 2
  //   }]
  // },
  // {
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What Is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "React js", "node JS", "mongoDB"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: 'Answer',
  //     userAnswered: 'kumar',
  //     answeredOn: 'jan 2',
  //     userId: 2
  //   }]

  // }, {
  //   id: 3,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What Is a Database",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "React js", "node JS", "mongoDB"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: 'Answer',
  //     userAnswered: 'kumar',
  //     answeredOn: 'jan 2',
  //     userId: 2
  //   }]
  // }]

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a questions")
      navigate('/Auth')
    }
    else {
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button className='ask-btn' onClick={checkAuth}>Ask Question</button>

      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionsList.data.length} Questions</p>
              <QuestionsList questionsList={questionsList.data} />
            </>


        }
      </div>
    </div>
  )
}

export default HomeMainbar
