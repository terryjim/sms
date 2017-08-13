import React, { Component } from 'react';

class SmsSent extends Component {
  render() {
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
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pompeius René</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Paĉjo Jadon</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Micheal Mercurius</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ganesha Dubhghall</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Hiroto Šimun</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

       
      </div>

    )
  }
}

export default SmsSent;
