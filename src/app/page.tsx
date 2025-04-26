'use client';

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Home from "./home/page";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Load email from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const gitLogin = () => {
    signIn('github');
  };

  const googleLogin = () => {
    signIn('google');
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (rememberMe) {
      localStorage.setItem('rememberEmail', email);
    } else {
      localStorage.removeItem('rememberEmail');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot password flow triggered (replace this with modal or redirect)');
  };

  return (
    <div>
      {session ? (
        <Home />
      ) : (
        <section className="login-wrapper">
          <div className="login-inner">
            <div className="login-content">
              <div className="content-wrap">
                <div className="logo">
                  <Image src="/images/logo-w.svg" alt="Logo" width={50} height={50} />
                </div>
                <h2>Creation Next Js</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Libero praesentium consectetur impedit hic.</p>
              </div>
            </div>
            <div className="login-form">
              <div className="logo-drak">
                <Image src="/images/logo-d.svg" alt="Logo" width={50} height={50} />
              </div>
              <form className="form_wrapper" onSubmit={e => e.preventDefault()}>
                <div className="title-form">
                  <h3>Sign in</h3>
                  <p>Welcome to Creation, please put your login credentials below to start using the web</p>
                </div>
                <div className="row form-block">
                  {/* <div className="col-12 col-lg-12">
                    <div className="form-fields-item mb-4">
                      <label>Email<span className="text-danger">*</span></label>
                      <div className="form-fields">
                        <span className="icon-svg">
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.625 1H15.625C16.5187 1 17.25 1.73125 17.25 2.625V12.375C17.25 13.2688 16.5187 14 15.625 14H2.625C1.73125 14 1 13.2688 1 12.375V2.625C1 1.73125 1.73125 1 2.625 1Z" stroke="#464B70" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M17.25 2.625L9.125 8.3125L1 2.625" stroke="#464B70" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12">
                    <div className="form-fields-item mb-3">
                      <label>Password<span className="text-danger">*</span></label>
                      <div className="form-fields">
                        <span className="icon-svg">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0417 8.7085H3.95833C3.08388 8.7085 2.375 9.41738 2.375 10.2918V15.8335C2.375 16.7079 3.08388 17.4168 3.95833 17.4168H15.0417C15.9161 17.4168 16.625 16.7079 16.625 15.8335V10.2918C16.625 9.41738 15.9161 8.7085 15.0417 8.7085Z" stroke="#464B70" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M5.54199 8.7085V5.54183C5.54199 4.49201 5.95903 3.4852 6.70136 2.74287C7.44369 2.00053 8.45051 1.5835 9.50033 1.5835C10.5501 1.5835 11.557 2.00053 12.2993 2.74287C13.0416 3.4852 13.4587 4.49201 13.4587 5.54183V8.7085" stroke="#464B70" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span className="form-icon-password toggle-password eye-close">
                          <img src="/images/eye.svg" className="img-fluid" alt="" />
                        </span>
                      </div>
                      {error && (
                        <div className="col-12">
                          <p className="text-danger">{error}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="checkbox-field">
                      <input
                        type="checkbox"
                        id="remember"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      <label htmlFor="remember" className="check-text">Remember me</label>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <Link href="" onClick={handleForgotPassword} className="link-pass">
                      Forgot Password?
                    </Link>
                  </div> */}

                  <div className="col-12 col-lg-12 mt-4">
                    {/* <div className="form-group-btn">
                      <button type="submit" onClick={handleLogin} className="btn btn-primary btn-regular w-100">
                        Sign in
                      </button>
                    </div>
                    <p className="account-now">
                      Don’t Have an Account? <a href="javascript:void(0)" id="pillSignUp">Sign Up Now!</a>
                    </p> */}

                    <div className="form-group-btn text-center me-auto ms-auto mt-5 w-fit">
                      <button type="button" onClick={gitLogin} className="btn btn-primary btn-regular w-auto text-white d-flex align-items-center justify-content-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon me-2" fill="none">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#333" />
                          </svg>
                          Login with Github
                      </button>
                    </div>
                    <div className="form-group-btn text-center me-auto ms-auto mt-5 w-fit">
                      <button type="button" onClick={googleLogin} className="btn btn-primary btn-regular w-auto text-white d-flex align-items-center justify-content-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon me-2" fill="none">
                            <path d="M24 12.276c0-.816-.067-1.636-.211-2.438H12.242v4.62h6.612a5.549 5.549 0 0 1-2.447 3.647v2.998h3.945C22.669 19.013 24 15.927 24 12.276Z" fill="#4285F4" />
                            <path d="M12.241 24c3.302 0 6.086-1.063 8.115-2.897l-3.945-2.998c-1.097.732-2.514 1.146-4.165 1.146-3.194 0-5.902-2.112-6.873-4.951H1.302v3.09C3.38 21.444 7.612 24 12.242 24Z" fill="#34A853" />
                            <path d="M5.369 14.3a7.053 7.053 0 0 1 0-4.595v-3.09H1.302a11.798 11.798 0 0 0 0 10.776L5.369 14.3Z" fill="#FBBC04" />
                            <path d="M12.241 4.75a6.727 6.727 0 0 1 4.696 1.798l3.495-3.425A11.898 11.898 0 0 0 12.243 0C7.611 0 3.38 2.558 1.301 6.615l4.067 3.09C6.336 6.862 9.048 4.75 12.24 4.75Z" fill="#EA4335" />
                          </svg>
                          Login with Google
                      </button>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
