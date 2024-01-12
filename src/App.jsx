
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from './Layouts/Layoutdef';
import Music from './Component/Music';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route index element ={ <Music/>}/>

      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
