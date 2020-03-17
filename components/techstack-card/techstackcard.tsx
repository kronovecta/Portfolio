import React from 'react'
import './techstackcard.scss';

type Props = {
    heading: string,
    items: string[]
}

const TechStackCard: React.FunctionComponent<Props> = ({heading, items}) => (
    <div className="card">
        <h3 className="heading">{heading}</h3>
        <ul>
            {items.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
);

export default TechStackCard;