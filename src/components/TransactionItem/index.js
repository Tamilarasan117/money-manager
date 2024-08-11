import './index.css'

const TransactionItem = (props) => {
  const {moneyTransactionList,deleteTransaction} = props
  const {id,transactionTitle,transactionAmount,transactionType} = moneyTransactionList

  const deleteTransactionList = () => {
    deleteTransaction(id)
  }

  return (
    <>
      <li className="table-data">
        <p className="table-data-cell">{transactionTitle}</p>
        <p className="table-data-cell">Rs {transactionAmount}</p>
        <p className="table-data-cell">{transactionType}</p>
        <button type="button" onClick={deleteTransactionList} className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </li>
    </>
  )
}

export default TransactionItem
