import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserContextProvider from './Context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({defaultOptions:{queries:{
    refetchOnWindowFocus:false,
  cacheTime:10*(60*1000),

}}})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UserContextProvider>
<QueryClientProvider client={queryClient}>
    <Toaster/>
<App />
</QueryClientProvider>

</UserContextProvider>
 

);

