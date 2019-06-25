import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Details are : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info, Don't Share !!</p>}
            <WrappedComponent { ... props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {

    return (props) => {
        return (
            <div>
                {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You need to be logged in to see the details</p>}
            </div>
        )
    }
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This is a secret code"/>, document.getElementById("app"));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is a secret code"/>, document.getElementById("app"));