import './App.css';
import { Header } from '../src/Layouts/Header/Header';
import { Footer } from './Layouts/Footer/Footer';
import { Banner } from './Components/Banner/Banner';
import { SearchForm } from './Components/SearchForm/SearchForm';
import { Provider } from 'react-redux';
import store from './Services/store';


function App() {
  return (
    <Provider store={store}>
      <div className='App bg-cover bg-center bg-space'>
        <Header />
        <Banner />
        <SearchForm />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
