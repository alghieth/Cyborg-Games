import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header, Footer} from './sectios/index';
import { Container } from './components/index';
import { Home, Profile, Browse, Details, Stream } from './Pages/index';

function App() {
  return (
    <>
    <Router basename='/Cyborg-Games'>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/profile' element = {<Profile/>} />
          <Route path='/browse' element = {<Browse/>} />
          <Route path='/details' element = {<Details/>} />
          <Route path='/stream' element = {<Stream/>} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
