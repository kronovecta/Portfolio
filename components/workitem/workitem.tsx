import * as React from 'react'  
import './workitem.scss'

interface IWorkItem {
    url: string,
    name: string,
    description: string
}

class WorkItem extends React.Component<IWorkItem> {

    constructor(props: IWorkItem) {
        super(props);
        
    }
    render() { 
        return (
            <div className="work-item">
                <div className="head">
                    <img src="https://image.shutterstock.com/z/stock-photo-teamwork-brainstorming-concept-young-creative-managers-team-working-with-new-startup-project-in-562747135.jpg" />
                </div>
                <div className="body">
                    <h2 className="title"><a href={this.props.url}>{this.props.name}</a></h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default WorkItem;