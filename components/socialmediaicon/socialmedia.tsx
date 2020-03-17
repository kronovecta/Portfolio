import React from 'react'
import './socialmedia.scss';

interface ISocialMediaIcon {
    service: string,
    url: string,
    icon_src: any
}

class SocialMediaIcon extends React.Component<ISocialMediaIcon> {

    render() {
        return (
            <div className={`icon ${ this.props.service.toLowerCase() }`}>
                <a target="_blank" href={this.props.url} title={this.props.service}>
                    <img src={this.props.icon_src}></img>
                </a>
            </div>
        )
    }
}

export default SocialMediaIcon;