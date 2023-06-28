
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Card from "./components/UI/Card";


  const DUMMY_EXPENSES=[
    {
      id:0,
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
      id:2,
      title:'Car Insurance',
      amount:243.98,
      date:new Date(2020, 6, 12)
    },
    {
      id:3,
      title:'Car Insurance',
      amount:243.98,
      date:new Date(2020, 6, 12)
    },
    

  ]
  const App =()=>{
    const [expenses, setExpense] = useState(DUMMY_EXPENSES);
    const addHandler =(userIput)=>{
      setExpense((preValue=>{
        return [userIput, ...preValue];
      }))
          }
  
  
 
  return <Card> 
    <NewExpenses onAdd={addHandler}/>
<Expenses items={expenses}/>
  </Card>
  }

export default App;
