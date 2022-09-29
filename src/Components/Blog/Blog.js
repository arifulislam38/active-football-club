import React from 'react';
import './blog.css';

const Blog = () => {
    return (
        <div className='blog'>
           <div>
            <h4>How does React work</h4>
            <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components.React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React only changes what needs to be changed!.React finds out what changes have been made, and changes only what needs to be changed.</p>
           </div>
           <div>
            <h4>Difference between props and state</h4>
            <p>props: The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only. <br />
            State: The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component. State is both read and write.
            </p>
           </div>
           <div>
            <h4>Uses of useEffect</h4>
            <p>1. Running once on mount: fetch API data. <br />
                2. Running on state change: validating input field. <br />
                3. Running on state change: live filtering. <br />
                4. Running on state change: trigger animation on new array value. <br />
                5. Running on props change: update paragraph list on fetched API data update. <br />
                6. Running on props change: updating fetched API data to get updated BTC price
            </p>
           </div>
        </div>
    );
};

export default Blog;