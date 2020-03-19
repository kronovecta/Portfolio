import React from 'react'
import './techstackcard.scss';

enum Type {
    Languages,
    Tools,
    Other
}

type Props = {
    heading: string,
    items: string[],       
    type: Type
}

export default class TechStackCard extends React.Component<Props> {

    GetIcon(type: Type) {
        if(type == Type.Languages) {
            return <img src={require('../../public/code.svg')} />
        } else if(type == Type.Tools) {
            return <img src={require('../../public/tools.svg')} />
        } else {
            return <img src={require('../../public/code.svg')} />
        }
    }

    render() {
        return(
            <div className="card">
                <div className="techstack-icon">
                    {this.GetIcon(this.props.type)}
                </div>
                <h3 className="heading">{this.props.heading}</h3>
                <ul>
                    {this.props.items.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}