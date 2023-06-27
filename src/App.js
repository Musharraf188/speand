
import Expenses from "./components/Expenses";
import Card from "./components/Card";

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
  return <Card> <p>Hello World..!</p>
<Expenses items={expenses}/>
  </Card>
}

export default App;
