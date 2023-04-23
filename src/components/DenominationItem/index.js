import './index.css'

const DenominationItem = props => {
  const {denomDetails, withdrawMoney} = props
  const {value} = denomDetails

  const withdraw = () => {
    withdrawMoney(value)
  }
  return (
    <li>
      <button className="denomination-button" type="button" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
