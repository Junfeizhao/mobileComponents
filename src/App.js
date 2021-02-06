import logo from './logo.svg';
import './App.css';
import Tabs from './lib/tabs/index.tsx'
import Button from './lib/button/index.tsx'
function App() {
    let tabList=["个人","团队","部门"];
    let tabChange=(e)=>{
        console.log(e)
    }
  return (
    <div className="App">
      <Tabs onChange={tabChange} tabList={tabList} undeline={true} activeColor="green" />
      <Button/>
    </div>
  );
}

export default App;
