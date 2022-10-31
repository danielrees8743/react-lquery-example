import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import UseEffect from './pages/UseEffect';
import ReactQuery from './pages/ReactQuery';
import NavBar from './components/NavBar';
import InfiniteScroll from './pages/InfiniteScroll';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/react-query" element={<ReactQuery />} />
            <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
