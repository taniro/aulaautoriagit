import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './components/app/App';
import Busca from './components/busca/busca';
import Counter from './components/counter/counter';
import Efeito from './components/efeito/efeito';
import Novabusca from './components/novabusca/novabusca';


const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <Novabusca />
    </QueryClientProvider>
);

/*


    */