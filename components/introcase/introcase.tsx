import * as React from 'react' 
import './introcase.scss';

interface IIntroCase {
    orientation: string,
    imagesrc: any,
    title: string,
    description: string
}

class IntroCase extends React.Component<IIntroCase> {

    constructor(props: IIntroCase) {
        super(props)
    }

    render() { 
        return (
            <div className={`introcase ${ this.props.orientation }`}>
                <div className="image">
                    <img src={this.props.imagesrc} />
                </div>
                <div className="content">
                    <h3 className="title">{this.props.title}</h3>
                    <pre>{this.props.description}</pre>
                </div>
            </div>
        );
    }
}
 
export default IntroCase;