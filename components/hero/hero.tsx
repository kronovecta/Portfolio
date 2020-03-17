import * as React from 'react'
import './hero.scss';

class Hero extends React.Component {
    render() {
        return(
            <div className="hero-container">
                <div className="intro">
                    <div className="portrait">
                        <img className="portrait-img" src="/static/portrait.png"></img>
                    </div>
                    <div className="intro-text">
                        <h1 className="title">Robert Nordgren</h1>
                        <pre>I like to build web apps and explore new technologies.</pre>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;