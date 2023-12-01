import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import Avatar from '../../Components/Avatar/Avatar'
import moment from 'moment'
import { deleteAnswer } from '../../actions/question'
const DisplayAnswer = ({ question }) => {

    const User=useSelector((state)=>(state.currentUserReducer))
    const { id } = useParams();
    const dispatch= useDispatch()
    const handleDelete =( answerId,noOfAnswer)=>{
        dispatch(deleteAnswer(id,answerId,noOfAnswer - 1))
    }
    return (
        <div>
            {
                question.answer?.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type='button'>Share</button>
                                {
                                    User?.result?.id === ans?.userId && (
                                        <button type='button' onClick={()=>handleDelete(ans._id, question.noOfAnswer)}>Delete</button>
                                    )
                                }
                            </div>
                            <div>
                                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`} className='user-link' style={{ color: '#0086d8' }}><Avatar backgroundColor="green" px='43px' py='3px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer
