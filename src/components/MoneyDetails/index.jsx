import './index.css'

const MoneyDetails = (props) => {
  const {
    balanceAmountDetail,
    incomeAmountDetail,
    expensesAmountDetail,
  } = props

  return (
    <>
      <div className="money-details-main-container">
        <div className="money-details-card balance-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-img"
          />
          <div className="balance-text-card">
            <p className="balance-text">Your Balance</p>
            <p data-testid="balanceAmount" className="balance">
              Rs {balanceAmountDetail}
            </p>
          </div>
        </div>
        <div className="money-details-card income-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-img"
          />
          <div className="balance-text-card">
          <p className="balance-text">Your Income</p>
          <p data-testid="incomeAmount" className="balance">
            Rs {incomeAmountDetail}
          </p>
          </div>
        </div>
        <div className="money-details-card expenses-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="money-img"
          />
          <div className="balance-text-card">
          <p className="balance-text">Your Expenses</p>
          <p data-testid="expensesAmount" className="balance">
            Rs {expensesAmountDetail}
          </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
