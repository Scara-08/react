import Form from './components/Form';
import { useState } from "react";
import Table from "./components/Table";
import './style.css'
function App() {
  const [data, setData] = useState({});

  return (
    <div >
    
     <Form  data={data} setData={setData} />
      <Table data={data}  />

    </div>
  );
}

export default App;
