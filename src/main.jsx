import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from './hooks/useGlobalReducer';
import { ContactProvider } from './context/ContactContext'; // 👈 importa tu nuevo contexto

const Main = () => {
    return (
        <React.StrictMode>
            <StoreProvider>
                <ContactProvider> {/* 👈 Agrega el provider de contactos aquí */}
                    <RouterProvider router={router} />
                </ContactProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
