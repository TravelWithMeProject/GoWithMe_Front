import GlobalStyle from '@styles/global';
import Router from './pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router />
      </div>
    </>
  );
}

export default App;
