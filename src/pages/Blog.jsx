import React from 'react'

const Blog = () => {
    return (
        <div className='container'>
            <br /><br /><b>Tell us the differences between uncontrolled and controlled components</b> <br />
            <span>
                Ans: Controlled is a form that is controlled by react-dom.and uncotrolled form is not controlled by react. <br />
                in controlled form, React decide what to show and what not to show in the ui.on the other hand  <br />
                in uncontrolled form, React does not have access to show form data in the ui.
            </span>
            <br /><br /><br /> <br />
            <b>How to validate React props using PropTypes</b> <br />
            <span>
                Ans: Here is some follwing steps:
                <pre>
                    1. We have to install the libray prop-types if does not exist <br />
                    2. import PropTypes from 'prop-types' <br />
                    3. We have to create a component with props.Assumed the component name is Person and a props name is age <br />
                    4. Bellow outside of component,We have to create a pops validation object. <br />
                    <code className='ms-5'>Example : Person.PropTypes = {"{age: PropTypes.Number.isRequired}"}</code>
                </pre>
            </span>
            <br /><br /><br /> <br />
            <b>Tell us the difference between nodejs and express js.</b> <br />
            <span>
                Ans:  Node.js is a runtime environment for running JavaScript on the server-side, <br />
                while Express is a web framework built on top of Node.js that provides a set of <br />
                features and utilities to make it easier to develop web applications. <br />
            </span>
            <br /><br /><br /> <br />
            <b>What is a custom hook, and why will you create a custom hook?</b> <br />
            <span>
                Ans:  A custom hook is a reusable function in React that <br />
                encapsulates stateful logic and can be shared between multiple components. <br />
                I will create a custom hook for reusability, abstraction,  <br />
                or to keep complex logic separate from my components.
            </span>
            <br /><br /> <br />
        </div>
    )
}

export default Blog