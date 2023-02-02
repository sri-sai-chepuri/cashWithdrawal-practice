// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, cutAmount} = props
  const {value} = denominationsList

  const debit = () => {
    cutAmount(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={debit}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
