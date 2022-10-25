import logo from './logo.svg';
import './App.css';
import './components/MainTest';
import MainTest from "./components/MainTest";
const HeaderStyle = {
    backgroundColor: '#48aae0',
    paddingLeft: 50,
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white'
}
function App() {
  return (
      <div>
          <div style={HeaderStyle}>
            Indivcountry
          </div>
          <MainTest/>
      </div>
  );
}

export default App;

