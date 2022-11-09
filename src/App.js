import './App.css';
import Home from './components/Home';
import Header from './components/Header';
function App() {


  document.body.style.background = '#0f172a'

  return (
    <div>

      <Header />
      <div className=' w-[95%] bg-slate-700 mx-auto h-[1px]'/>
     
        <Home />
     


    </div >
  );
}

export default App;
