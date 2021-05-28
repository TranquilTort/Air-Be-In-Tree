// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import SearchBar from '../SearchBar';
function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const demoLogin = () =>{
    dispatch(sessionActions.loginDemoUser());
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <>
      {sessionUser && <NavLink className='nav-ele' style={{display:'flex', alignItems:"center"}}  to='/new/treehouse'><i style={{color:'rgb(35, 199, 117)'}} class="fas fa-tree"> </i><div >Create Listing</div></NavLink>}
      <ProfileButton className='nav-ele' user={sessionUser} />
    </>
    );
  } else {
    sessionLinks = (
      <>
        <button onClick={demoLogin} className='nav-ele'>Login As Demo-User</button>
        <LoginFormModal className='nav-ele' />
        <NavLink className='nav-ele' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav >
      <li className ='nav'>
        <NavLink exact to="/"   className='nav-ele'><i style={{color:'rgb(35, 199, 117)'}} class="fas fa-home"></i></NavLink>
        {/* <SearchBar /> */}
        <NavLink exact to="/about" className='nav-ele'>About</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </nav>
  );
}

export default Navigation;
