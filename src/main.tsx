import React from 'react'
import { enqueueSnackbar, SnackbarProvider,  } from 'notistack';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query'
import './index.css'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      enqueueSnackbar(`❌ ${error.message}`);
    }
  })
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <>
        <App />
        <SnackbarProvider />
        </>
      </QueryClientProvider>

  </React.StrictMode>,
)
