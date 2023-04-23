import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawMoney = amount => {
    const {balance} = this.state
    if (balance >= amount)
      this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-bg-container">
        <div className="app-container">
          <div className="profile-section">
            <div className="profile-logo">s</div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-section">
            <p className="your-balance-text">Your Balance</p>
            <div className="balance-container">
              <p className="balance-amount">{balance}</p>
              <p className="in-rupee-text">In Rupees</p>
            </div>
          </div>
          <div className="denominations-section">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-list">
              {denominationsList.map(eachDenom => (
                <DenominationItem
                  denomDetails={eachDenom}
                  key={eachDenom.id}
                  withdrawMoney={this.withdrawMoney}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
