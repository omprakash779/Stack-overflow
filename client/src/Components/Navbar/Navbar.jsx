import React, { useEffect } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import Avatar from '../../Components/Avatar/Avatar'
import button from '../../Components/Button/Button'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import currentUserReducer from '../../reducers/currentUser'
const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  var User = useSelector((state)=>(state.currentUserReducer))
  useEffect(()=>{
    const token = User?.token
    if(token){
      const decodeToken = decode(token)
      if(decodeToken.exp*1000< new Date().getTime()){
        handleLogout()
      }    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

  const handleLogout = () => {
    dispatch({ type:'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }




  return (
    <nav className='main-nav'>
      <div className="navbar">
        <Link to='/' className='nav-item nav-logo'>
             <img className='logo' src={logo} alt="logo" />
        </Link>
        <Link to='/About' className='nav-item nav-btn'>About</Link>
        <Link to='/Product' className='nav-item nav-btn'>Product</Link>
        <Link to='/Teams' className='nav-item nav-btn'>For Teams</Link>
        <form action="">
          <input type="text" className='search-input' placeholder='Search...' />
          <img className='search' src={search} alt="search" />
        </form>
        {User === null ?
          <Link to='/Auth' className='nav-item nav-link'>Login</Link> :
          <>
            <Avatar backgroundColor="#009dff" px='10px' py='7px' borderRadius='50%' color='black'><Link to={`/Users/${User?.result._id}`} style={{ color: "white", textDecoration: 'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-link' onClick={handleLogout}>Log out</button>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar
