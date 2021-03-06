import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';

class Signup extends React.Component {
    render() {

        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="******" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </div>
        )
    }
};

export default Signup;