import React from 'react';

import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';
import Signup from './Signup';


import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

        <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>

        <CoolButton isSmall isSuccess>Button 2</CoolButton> */}

        <Signup />
      </div>
    )
  }
}

// const App = () => {
//   return (

//     <h1>Bulma</h1>

//   );
// };

export default App;
