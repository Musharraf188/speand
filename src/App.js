
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Card from "./components/UI/Card";

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
  return <Card> 
    <NewExpenses />
<Expenses items={expenses}/>
  </Card>
}

export default App;
