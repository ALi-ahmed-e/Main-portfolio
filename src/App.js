import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {


  document.body.style.background = '#0f172a'

  return (
    <div>

      <div className=' w-[95%] bg-slate-700 mx-auto h-[1px]'/>
     
        <Home />
     

        <Footer />
    </div >
  );
}

export default App;
