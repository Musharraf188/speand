
import Expenses from "./components/Expenses";

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
<Expenses items={expenses}/>
  </>
}

export default App;
