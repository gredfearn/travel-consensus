var React = require('react');
var ReactDOM = require('react-dom');
var GlobalTopBar = require('./components/GlobalTopBar');
var GlobalSidebar = require('./components/GlobalSidebar');

// Currently only using React & ReactDOM require to test if this will show on html page
// 
// 
// This component will be changed later to be the connection for all of our react view components
// 
// 
// Check README for how we start everything straight from git clone ( npm i, npm start, etc )

// Adding options for use in:
  // TaskItem
    // Modeling the task item title input
var options = {
  tasks: [
    'Where to stay',
    'Travel details',
    'Car rental?'
  ]
};

// var GlobalTopBar = React.createClass({
//   render: function(){
//     return (
//       <div className="darkgray">
//         <div className="container">
//           <div className="row">
//             <div className="three columns offset-by-nine">
//               <p><i className="fa fa-plus-circle"></i> Invite trip participants</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// });

ReactDOM.render (<GlobalTopBar />,document.getElementsById('react-main-mount'));
ReactDOM.render (<GlobalSidebar />,document.getElementsById('react-sidebar-mount'))




// on the index.html located within client/public/index.html, we've added "<div id='react-main-mount'></div>" within the body tag
// this appends the react view into the html page which uses the app-bundle.js
// 
// we'll continue refactoring the dom elements into individual react component as we progress. Be explicit when naming files.
// 
// script for app-bundle.js is located at the bottom before the </body> tag