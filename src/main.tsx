import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import Layout from "./layout";
import StateContextProvider from "./store/SearchKeyContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <StateContextProvider>
          <Layout>
              <App />
          </Layout>
      </StateContextProvider>
  </React.StrictMode>,
)
