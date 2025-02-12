import React from 'react'

import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <footer>
        <main className='footer-main1'>
            <HashLink to='/#home'><h2>CodingGURU</h2></HashLink>
            <p>solution for all the queries</p>
        </main>
        <main className='footer-main2'>
            <h3>SOCIAL MEDIA</h3>
            <a href="https://www.instagram.com/codingguru./">Instagram</a>
            <a href="https://www.linkedin.com/">Linkedin</a>
            <a href="https://www.twitter.com/">Twitter</a>
        </main>
    </footer>
  )
}

export default Footer