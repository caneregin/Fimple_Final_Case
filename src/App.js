import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FormComponent from './components/FormComponent';
import Footer from './components/Footer';
import { InputProvider } from './contexts/InputContext';
import { DataProvider } from "./contexts/DataContext"
import { PopUpProvider } from "./contexts/PopUpContext"

function App() {
  return (
    <div className="App">
      <InputProvider>
        <DataProvider>
          <PopUpProvider>
            <Header />
            <FormComponent />
            <Footer />
          </PopUpProvider>
        </DataProvider>
      </InputProvider>
    </div>
  );
}

export default App;
