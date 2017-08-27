import React, { Component } from 'react';

class ChgPwd extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mx-4">
                <div className="card-block p-4">
                  <h1>修改密码</h1>
                  <p className="text-muted">Modify your password</p>
                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="password" className="form-control" placeholder="老密码 Old password"/>
                  </div>
                 
                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="新密码 New password"/>
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="确认密码 Repeat password"/>
                  </div>
                  <button type="button" className="btn btn-block btn-success">确定</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChgPwd;
