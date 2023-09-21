import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.querySelector('#root'))
// the initial way to do it
//root.render(React.createElement('h1', null, "hello world"))
//the other way to do it
const App = ()=>{
    return(
        <h1>Fullstack Template</h1>
    )
}
root.render(<App/>)