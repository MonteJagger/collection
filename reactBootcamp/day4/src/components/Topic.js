import React from 'react'
import { Link, Route } from 'react-router-dom'

function Topic({match}) {
    console.log('in topic component', match)
    return (
        <div>
            <h5>{match.url}</h5>
            <h5>{match.path}</h5>
            <h5>{match.params.topicId}</h5>
        </div>
    )
}

function Topic1({match}) {
    console.log('in topic component', match)
    return (
        <div>
            <h5>{match.url}</h5>
            <h5>{match.path}</h5>
            <h5>{match.params.topicId}</h5>
        </div>
    )
}

export default function Topics({ match }) {
    return (
        <div>
            <h3>Topic</h3>
            <p>{match.url}</p>
            <p>{match.path}</p>
            <ul>
                <li><Link to={`${match.url}/rendering`}>rendering</Link></li>
                <li><Link to={`${match.url}/components`}>components</Link></li>
                <li><Link to={`${match.url}/prop-v-state`}>prop-v-state</Link></li>
            </ul>

        <hr />
            {/* match.path will pass the query params such as: /topics/:id/:topicId  -- params: {id: "1", topicId: "4"} */}
            {/* match.url the query params will be static in the url such as /topics/1/:topicId */}
            <Route path={`${match.path}/:topicId`} component={Topic}/>
            <Route path={`${match.url}/:topicId`} component={Topic1}/>
        </div>
    )
}