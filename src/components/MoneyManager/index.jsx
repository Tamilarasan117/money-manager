import './index.css'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import {v4 as uuid} from 'uuid'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionTypeId: transactionTypeOptions[0].optionId,
    moneyDetails: [],
  }

  onChangeTitle = (event) => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = (event) => {
    this.setState({amount: event.target.value})
  }

  onChangeOption = (event) => {
    this.setState({optionTypeId: event.target.value})
  }

  onAddNewTransactionList = (event) => {
    event.preventDefault()
    const {title,amount,optionTypeId} = this.state
    const optionType = transactionTypeOptions.find(eachOption => eachOption.optionId === optionTypeId)
    const {displayText} = optionType
    const newTransactionList = {
      id: uuid(),
      transactionTitle: title,
      transactionAmount: amount,
      transactionType: displayText,
    }
    this.setState(beforeState => ({
      moneyDetails: [...beforeState.moneyDetails,newTransactionList],
      title: "",
      amount: "",
      optionTypeId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = (id) => {
    const {moneyDetails} = this.state
    const filterTransaction = moneyDetails.filter(eachTransaction => (
      eachTransaction.id !== id
    ))
    this.setState({moneyDetails: filterTransaction})
  }

  getBalanceAmount = () => {
    const {moneyDetails} = this.state
    let balance = 0
    let income = 0
    let expenses = 0
    moneyDetails.forEach(eachAmount => {
      if(eachAmount.transactionType === transactionTypeOptions[0].displayText) {
        income += parseInt(eachAmount.transactionAmount)
      }
      else {
        expenses += parseInt(eachAmount.transactionAmount)
      }
      balance = parseInt(income - expenses)
    })
    return balance
  }

  getIncomeAmount = () => {
    const {moneyDetails} = this.state
    let income = 0
    moneyDetails.forEach(eachIncome => {
      if(eachIncome.transactionType === transactionTypeOptions[0].displayText) {
        income += parseInt(eachIncome.transactionAmount)
      }
    })
    return income
  }

  getExpensesAmount = () => {
    const {moneyDetails} = this.state
    let expenses = 0
    moneyDetails.forEach(eachExpenses => {
      if(eachExpenses.transactionType === transactionTypeOptions[1].displayText) {
        expenses += parseInt(eachExpenses.transactionAmount)
      }
    })
    return expenses
  }

  render() {
    const {title,amount,optionTypeId,moneyDetails} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    return (
      <>
        <div className="app-container">
          <div className="money-manager-main-container">
            <div className="welcome-head-container">
              <h1 className="main-heading">HI, Tamilarasan</h1>
              <p className="main-description">
                Welcome back to your 
                <span className="money-style">Money Manager</span>
              </p>
            </div>
            <MoneyDetails
              balanceAmountDetail={balanceAmount}
              incomeAmountDetail={incomeAmount}
              expensesAmountDetail={expensesAmount}
            />
            <div className="transaction-main-container">
              <form className="transaction-form-container" onSubmit={this.onAddNewTransactionList}>
                <h1 className="form-heading">Add Transaction</h1>
                <div className="input-box">
                  <label htmlFor="title" className="form-label">title</label>
                  <input
                    type="text"
                    id="title"
                    className="input-field"
                    placeholder="TITLE"
                    onChange={this.onChangeTitle}
                    value={title}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="amount" className="form-label">amount</label>
                  <input
                    type="text"
                    id="amount"
                    className="input-field"
                    placeholder="AMOUNT"
                    onChange={this.onChangeAmount}
                    value={amount}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="type" className="form-label">type</label>
                  <select id="type" value={optionTypeId} className="input-field" onChange={this.onChangeOption}>
                    {
                      transactionTypeOptions.map(eachOption => (
                        <option value={eachOption.optionId} key={eachOption.optionId} >
                          {eachOption.displayText}
                        </option>
                      ))
                    }
                  </select>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                >
                  Add
                </button>
              </form>
              <ul className="transaction-list-container">
                <h1 className="transaction-list-main-heading">History</h1>
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                  <p className="table-header-cell"></p>
                </li>
                {
                  moneyDetails.map(eachTransaction => (
                    <TransactionItem
                      moneyTransactionList={eachTransaction}
                      key={eachTransaction.id}
                      deleteTransaction={this.onDeleteTransaction}
                    />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManager
