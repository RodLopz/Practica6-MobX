// App.js
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CursosStore from './stores/CursosStore';
import Opciones from './Opciones';
import { Provider } from 'mobx-react';

function App() {
  return (
    <Provider CursosStore={CursosStore}>
      <div className="App">
        <Header />
        <Opciones />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
