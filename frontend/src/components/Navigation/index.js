// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../SearchBar';
function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <>
      {sessionUser && <NavLink exact to='new/treehouse'>List New TreeHouse</NavLink>}
      <ProfileButton user={sessionUser} />
    </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav >
      <li className ='nav'>
        <NavLink exact to="/">Home</NavLink>
        <SearchBar />
        {isLoaded && sessionLinks}
      </li>
    </nav>
  );
}

export default Navigation;
