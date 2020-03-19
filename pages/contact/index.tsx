import * as React from 'react'
import Layout from '../../components/Layout'
import { NextPage } from 'next'
import './contact.scss';

const ContactPage: NextPage = () => {
  return (
    <React.Fragment>
      <Layout title="Contact | Robert Nordgren" container={true} >
        <h1 className="title">Contact me</h1>
        <p>Do you want to get into contact with me?</p>
        <p>Connect with me on Linkedin or send me an <span><a href="mailto:info@robertnordgren.se">Email</a></span></p>
      </Layout>
    </React.Fragment>
  )
}

export default ContactPage