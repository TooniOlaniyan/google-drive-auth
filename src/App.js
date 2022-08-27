import Home from "./pages/Home";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Landing from "./pages/Landing";
import GlobalStyles from "./component/GlobalStyles";



function App() {
  return (
    <div>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
