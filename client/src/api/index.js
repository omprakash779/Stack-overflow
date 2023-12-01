import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
})

export const login = (authData)=> API.post('/user/login',authData)
export const signUp = (authData)=> API.post('/user/signup',authData)

export  const getAllQuestion=()=>API.get('/questions/get')
export const postQuestion = (questionData)=>API.post('/question/Ask', questionData)
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)

export const postAnswer = (id,noOfAnswers,answerBody,userAnswered, userId)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})

export const deleteAnswer = (id, answerId, noOfAnswer)=>API.patch(`/answer/delete/${id}`,{ id, answerId, noOfAnswer })

export const voteQuestion = (id , value, userId)=>API.patch(`/questions/vote/${id}`, {value, userId})
export const fetchAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id, updateData) => API.patch(`/user/update,${id},updateData`)
