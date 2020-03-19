import * as React from 'react'
import Layout from '../../components/Layout'
import { NextPage } from 'next'
import './index.scss';
import IntroCase from '../../components/introcase/introcase';
import Hero from '../../components/hero/hero';
import TechStackCard from '../../components/techstack-card/techstackcard';

enum Type {
  Languages,
  Tools,
  Other
}

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <Layout title="Home | Robert Nordgren" container={false} >
        <Hero />
        <div className="case-container container">
          <h2 className="heading">What I do</h2>
          <IntroCase orientation="right" title="Apollo" description="Keeping track of what movies you have available can be hard. Apollo lets you build a collection of movies together with friends and family with a robust request system" imagesrc='../../static/showcase_apollo.png'/>
          <IntroCase orientation="left" title="Apollo" description="Keeping track of what movies you have available can be hard. Apollo lets you build a collection of movies together with friends and family with a robust request system" imagesrc='../../static/showcase_apollo.png'/>
        </div>
        <div className="container">
          <h2 className="heading">How I do it</h2>
          <div className="techstack-container">
            <TechStackCard heading="Languages and Frameworks" items={["C#", "JavaScript", "HTML", "CSS", "Sass", "jQuery", "React", "NextJS"]} type={Type.Other} />
            <TechStackCard heading="Tools" items={["SQL Server", "MySQL", "InfluxDB", "SQLite", "Episerver", "Umbraco", "Azure", "Azure DevOps", "Docker", "Ubuntu Server"]} type={Type.Tools} />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
