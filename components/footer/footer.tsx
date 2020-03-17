import React from 'react'
import './footer.scss';
import SocialMediaIcon from '../socialmediaicon/socialmedia';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="flex-row flex-justify-center">
                    <SocialMediaIcon service="Twitter" url="https://www.twitter.com/robertnordgren" icon_src="../../static/twitter.svg" />
                    <SocialMediaIcon service="Linkedin" url="https://www.linkedin.com/in/robertnordgren" icon_src="../../static/linkedin.png" />
                    <SocialMediaIcon service="Github" url="https://www.github.com/kronovecta" icon_src="../../static/github.png" />
                </div>
                <div className="flex-row flex-justify-center">
                    <p className="footer-credit">Built with NextJS</p>
                </div>
            </footer>
        )
    }
}

export default Footer;