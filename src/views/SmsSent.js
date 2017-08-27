import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pages from './Pages'
class SmsSent extends Component {
  render() {
    let sms = this.props.sms
    return (
      <div className="animated fadeIn">


        <div className="row">

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> 短信发送记录
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped" >
                  <thead>
                    <tr>
                      <th>内容</th>
                      <th>发送时间</th>
                      <th>号码</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sms.map(x => {
                      return (
                        <tr>
                          <td>{x.content}</td>
                          <td>2012/01/01</td>
                          <td>{x.tels}</td>
                        </tr>
                      )

                    })}


                  </tbody>
                </table>
                <Pages />
              </div>
            </div>
          </div>

        </div>


      </div>

    )
  }
}
const mapStateToProps = (state) => {
  let sms = state.sms
  return { sms }
}


SmsSent = connect(
  mapStateToProps
)(SmsSent)
export default SmsSent;
