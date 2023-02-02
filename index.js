// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  start = {amount: 2000}

  cutAmount = value => {
    const {amount} = this.state
    const finalAmount = amount - value
    this.setState({amount: finalAmount})
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="card">
          <div className="name-container">
            <div className="logo">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p>Your Balance</p>
            <div className="amount">
              <h2>{amount}</h2>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdraw">
            <h1>Withdraw</h1>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className="deno">
              <DenominationItem
                cutAmount={this.cutAmount}
                denominationsList={denominationsList}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
