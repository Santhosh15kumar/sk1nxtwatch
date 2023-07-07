import React from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'

import './index.css'
import {
  NavbarDiv,
  ImageEl,
  NavLgContainer,
  NavSmContainer,
} from './styledComponents'

const Navbar = () => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    return <Redirect to="/login" />
  }
  return (
    <NavbarDiv>
      <ImageEl
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
        width="12%"
      />
      <NavLgContainer>
        <BsMoon size={25} />
        <ImageEl
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          width="12%"
        />
        <Popup
          trigger={
            <button type="button" className="button">
              {' '}
              Logout{' '}
            </button>
          }
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button type="button" className="close" onClick={close}>
                &times;
              </button>

              <div className="content">Are you sure, you want to logout?</div>
              <div className="actions">
                <Popup
                  trigger={
                    <button
                      type="button"
                      className="button-c"
                      onClick={() => {
                        close()
                      }}
                    >
                      {' '}
                      Cancel{' '}
                    </button>
                  }
                  position="top center"
                  nested
                />
                <button
                  type="button"
                  className="button-l"
                  onClick={() => {
                    close()
                    onClickLogout()
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </Popup>
      </NavLgContainer>
      <NavSmContainer>
        <BsMoon size={20} />
        <BiMenu size={20} />
        <Popup
          trigger={
            <button type="button" className="button">
              <FiLogOut />
            </button>
          }
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button type="button" className="close" onClick={close}>
                &times;
              </button>

              <div className="content">Are you sure, you want to logout?</div>
              <div className="actions">
                <Popup
                  trigger={
                    <button type="button" className="button-c">
                      {' '}
                      Cancel{' '}
                    </button>
                  }
                  position="top center"
                  nested
                />
                <button
                  type="button"
                  className="button-l"
                  onClick={() => {
                    close()
                    onClickLogout()
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </Popup>
      </NavSmContainer>
    </NavbarDiv>
  )
}

export default Navbar
