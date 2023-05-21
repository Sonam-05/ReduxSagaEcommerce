import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <h4>All Rights Reserved &copy; Sonam Dangi</h4>
      <div className="allFooterLinksContainer">
        <Link to={'/footer/about'}>About</Link> |
        <Link to={'/footer/contact'}>Contact</Link> |
        <Link to={'/footer/privacy-policy'}>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
