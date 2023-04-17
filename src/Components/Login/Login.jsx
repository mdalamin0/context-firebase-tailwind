import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const {signInUser, singInWithGoogle} = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser.emailVerified)
            if(!loggedUser.emailVerified){
                alert('your email not verified')
                return;
            }

            alert('login success')
            form.reset()
        })
        .catch(error => {
            console.log(error.message)
            alert(error.message)
        })

       
    }

    const handleGoogleSingIn = () => {
        singInWithGoogle()
        .then(result => {})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center  mb-4">
                        <h1 className="text-4xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <Link to = '/register'><button className="label-text-alt link link-hover text-blue-600">New to this Auth Master? Register</button></Link>
                            </label>
                            <div className="form-control border-2 py-2 rounded w-full">
                                <button onClick={handleGoogleSingIn} className=" flex items-center mx-auto font-semibold"> <img className='w-4 me-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> Sign in with Google  </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;