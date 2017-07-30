import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../../actions/'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.token != null && this.props.tolen != '') {
      alert(this.props.token)
      this.props.toIndex()
    } else
      return (
        <div className="app flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card-group mb-0">
                  <div className="card p-4">
                    <div className="card-block">
                      <h1>登录</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="icon-user"></i></span>
                        <input type="text" className="form-control" placeholder="Username" ref={userName => this.userName = userName} />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon"><i className="icon-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Password" ref={password => this.password = password} />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button type="button" className="btn btn-primary px-4" onClick={() => this.props.onLogin(this.userName.value, this.password.value)}>登录</button>
                        </div>
                        <div className="col-6 text-right">
                          <button type="button" className="btn btn-primary px-4" onClick={() => { this.userName.value = ''; this.password.value = '' }}>取消</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <div className="card-block text-center">
                      <div>
                        <p><img src={process.env.PUBLIC_URL + '/img/logo.jpg'} style={{ width: 80 + '%' }} /></p>
                        <h2>短信平台</h2>
                        {/* <button type="button" className="btn btn-primary active mt-3">Register Now!</button>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return { token: state.login }
}

const mapDispatchToProps = {
  toIndex:push('/indexx'),
  onLogin: login
}
Login = withRouter(connect(mapStateToProps,
  mapDispatchToProps
)(Login))

export default Login;
