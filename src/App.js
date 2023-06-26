import ExpenseItem from "./components/ExpenseItem";

function App(){
  const expenses=[
    {
      id:1,
      title:'Car Insurance',
      amount:243.98,
      date:new Date(2020, 6, 12)
    },
    {
      id:1,
      title:'Car Insurance',
      amount:243.98,
      date:new Date(2020, 6, 12)
    },
    {
      id:1,
      title:'Car Insurance',
      amount:243.98,
      date:new Date(2020, 6, 12)
    },
    {
      id:1,
      title:'Car Insurance',
      amount:243.98,
      date:new Date(2020, 6, 12)
    },
    

  ]
  return <> <p>Hello World..!</p>
  <ExpenseItem 
  title={expenses[0].title} 
  amount={expenses[0].amount} 
  date={expenses[0].date}
  />
  <ExpenseItem 
  title={expenses[1].title} 
  amount={expenses[1].amount} 
  date={expenses[1].date}
  />
  <ExpenseItem 
  title={expenses[2].title} 
  amount={expenses[2].amount} 
  date={expenses[2].date}
  />
  <ExpenseItem 
  title={expenses[3].title} 
  amount={expenses[3].amount} 
  date={expenses[3].date}
  />
  </>
}

export default App;
