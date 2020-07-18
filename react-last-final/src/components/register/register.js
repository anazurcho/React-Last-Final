import React, {useContext, useState} from "react";
import classes from "../../style/index.css";
import { connect } from "react-redux";
import { userAuthenticated, userInfo,userToken } from "../../store/actions";
import { useHistory } from "react-router-dom";

const Register = ({ userAuthenticated, userInfo, userToken }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        userAuthenticated();
        userToken();
        userInfo(firstName, lastName, email,password);
        history.push('/');
    }

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword( e.target.value );
    }

    
    return (
        <form className={classes['register-form']} onSubmit={onSubmit}>
            <legend>Register</legend>
            <div className="form-group">
                <label htmlFor="inputFirsName">First Name</label>
                <input type="text" className="form-control" id="inputFirsName"
                       placeholder="First Name" onChange={onFirstNameChange}
                       value={firstName}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text" className="form-control" id="inputLastName"
                       placeholder="Last Name" onChange={onLastNameChange}
                       value={lastName}/>
            </div>
            <div className="form-group">
                <label htmlFor="regInputEmail">Email address</label>
                <input type="email" className="form-control" id="regInputEmail" aria-describedby="emailHelp"
                       placeholder="Enter email" onChange={onEmailChange}
                       value={email}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputLastName">Password</label>
                <input type="password" className="form-control" id="regInputEmail" aria-describedby="emailHelp"
                       placeholder="Enter email" onChange={onPasswordChange}
                       value={password}/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
}

const mapDispatchToProps = {
    userAuthenticated,
    userInfo,
    userToken
}

export default connect(null, mapDispatchToProps)(Register);
