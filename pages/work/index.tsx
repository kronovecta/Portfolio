import * as React from 'react'
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import WorkItem from '../../components/workitem/workitem';
import './work.scss';

const WorkPage: NextPage = () => {
    return(
        <Layout title="Work | Robert Nordgren" container={true}>
            <div>
                <div>
                    <h1 className="page-title">My work</h1>
                </div>
                <div className="work-container">
                    <WorkItem name="Work Item 1" url="https://github.com/kronovecta" description="This is a project where I did a thing with this technology" />
                    <WorkItem name="Work Item 2" url="https://github.com/kronovecta" description="I did another project where I completed several things in literally no time" />
                    <WorkItem name="Work Item 3" url="https://github.com/kronovecta" description="There are other projects as well!" />
                </div>
            </div>
        </Layout>
    )
}

export default WorkPage