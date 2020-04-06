import React from "react";

class AboutPage extends React.Component {
    render() {
        return (<> <h1>About</h1>
            <p>This app uses React.</p>
            <a href="/" >Home</a>
        </>)
    }
}

export default AboutPage;

// class AboutPage extends React.Component {
//     render() {
//         return (<React.Fragment> <h1>About</h1>
//             <p>This app uses React.</p>
//         </React.Fragment>)
//     }
// }
// class AboutPage extends React.Component {
//     render() {
//         return (<div> <h1>About</h1>
//             <p>This app uses React.</p>
//         </div>)
//     }
// }