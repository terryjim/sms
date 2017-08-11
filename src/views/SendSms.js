import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SendSms extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-12">
             <form  className="col-sm-12"  action="" method="post" >
               <div className="card">              
              <div className="card-header">
                <strong>短信发送</strong> <small> 录入</small>
              </div>
             
              <div className="card-block">
                
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name">手机号码</label>
                      <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control"></textarea>
                      <span className="help-block">*多个号码之间请用逗号( , )分隔*</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name">短信内容</label>
                      <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" defaultValue='【湖北城建职院】'></textarea>
                      <span className="help-block">*禁发词汇 [ ] ,短信发送格式:内容+签名【   】*</span>
                    </div>
                  </div>
                 
                </div>
 
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> 发送</button>
              </div>
            </div></form>
          </div>

        </div>

      </div>
    )
  }
}

export default SendSms;
