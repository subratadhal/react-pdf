import React, { Component } from "react";
import ReactDOM from "react-dom";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import logo from "../components/logo.png";
import converter from "number-to-words";
class PrintPage extends Component {
  pdfExportComponent;
  printComponent;
  constructor(props) {
    super(props);
  }
  state = {
    total: 0
  };
  componentDidMount() {
    this.setState({
      total: converter.toWords(24523)
    });
  }
  exportPDFWithMethod = () => {
    savePDF(ReactDOM.findDOMNode(this.printComponent), { paperSize: "A4" });
  };
  exportPDFWithComponent = () => {
    this.pdfExportComponent.save();
  };
  render() {
    return (
      <div>
        <div className="example-config">
          <button className="k-button" onClick={this.exportPDFWithComponent}>
            Export with component
          </button>
          &nbsp;
          <button className="k-button" onClick={this.exportPDFWithMethod}>
            Export with method
          </button>
        </div>
        <div className="print-wrapper">
          <PDFExport
            ref={component => (this.pdfExportComponent = component)}
            paperSize="A4"
          >
            <div ref={printComponent => (this.printComponent = printComponent)}>
              <div id="printPage">
                <table className="table-header">
                  <tbody>
                    <tr>
                      <td>
                        <img src={logo} className="logo" />
                      </td>
                      <td className="header-title">INVOICE</td>
                      <td />
                    </tr>
                    <tr>
                      <td className="company-address">
                        <h3>Amazon Pvt. Ltd.</h3>
                        E-261, IT TOWER,
                        <br /> Airport Road, <br />
                        Mohali, Punjab - 160074 <br /> <br />
                        <strong>GSTIN : </strong> 9845785896512
                      </td>
                      <td />
                      <td className="bill-info">
                        Invoice No: <strong>84589</strong> <br />
                        Invoice Date: <strong>12/12/2019</strong>
                      </td>
                    </tr>
                    <tr className="mt30">
                      <td colSpan="3">
                        <table className="member-details">
                          <tbody>
                            <tr>
                              <td>
                                <span>MEMBER NAME</span>
                                <br />
                                <strong>Kalyan Singh</strong>
                              </td>
                              <td>
                                <span>BILLING ADDRESS</span>
                                <br />
                                698, 2nd Flr, Phase7 <br />
                                Mohali,
                                <br />
                                Punjab - 160062
                                <br />
                              </td>
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr className="mt30">
                      <td colSpan="3">
                        <table
                          className="bill-drilldown-details"
                          cellPadding="0"
                          cellSpacing="0"
                        >
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Qty.</th>
                              <th>
                                Rate/Item <span>(INR)</span>
                              </th>
                              <th>
                                Discount <span>(%)</span>
                              </th>
                              <th>
                                Taxable Value <span>(INR)</span>
                              </th>
                              <th>
                                IGST <span>(INR)</span>
                              </th>
                              <th>
                                Total <span>(INR)</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Product name</td>
                              <td>1</td>
                              <td>25000.00</td>
                              <td>11%</td>
                              <td>22450.00</td>
                              <td>
                                1254.00 <span>@12%</span>
                              </td>
                              <td>24523.00</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan={4}>
                                <strong>Total</strong>
                              </td>
                              <td className="right-align">22450.00</td>
                              <td>1254.00</td>
                              <td>24523.00</td>
                            </tr>
                          </tfoot>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <table className="payment-status">
                          <tr>
                            <td colSpan="2">Taxable Value:</td>
                            <td>INR 22450.00</td>
                          </tr>
                          <tr>
                            <td colSpan="2">Total Tax:</td>
                            <td>INR 1254.00</td>
                          </tr>
                          <tr>
                            <td colSpan="2" className="boder-text">
                              Total Amount:
                            </td>
                            <td className="boder-text">INR 24523.00</td>
                          </tr>
                          <tr>
                            <td className="total-in-words" colSpan="3">
                              Total Amount (in words):
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.total}{" "}
                              only
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <p className="for-company">For Amazon</p>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <p className="authorized-signatory">
                                Authorized Signatory
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </PDFExport>
        </div>
      </div>
    );
  }
}
export default PrintPage;
