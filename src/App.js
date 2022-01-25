import {
  BrowserRouter,

} from 'react-router-dom';
import Layout from './components/Layout';
import AppRouter from './routes';
import CreateStyle from './styles/global';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <CreateStyle />
    </Layout>
  );
}

export default App;
