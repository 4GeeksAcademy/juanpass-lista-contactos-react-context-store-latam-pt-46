import Card from "../components/Card.jsx";
import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

const BASE_URL_CONTACTS = "https://playground.4geeks.com/contact/agendas/juanpass/contacts";

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {store,dispatch} = useGlobalReducer();


    useEffect(() => {
        const loadContactos = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(BASE_URL_CONTACTS);
                if (!response.ok) {
                    throw new Error(`Error al obtener los contactos del usuario: ${response.status}`);
                }
                const data = await response.json();
                console.log (data)
                const action = {
                    type: "set_contacts",
                    payload: data.contacts
                }
                dispatch (action)
            } catch (err) {
                setError(err.message);
                console.error("Error al cargar contactos:", err);
            } finally {
                setLoading(false);
            }
        };

        loadContactos();
    }, []);

    if (loading) {
        return <div>Cargando contactos...</div>;
    }

    if (error) {
        return <div>Error al cargar los contactos: {error}</div>;
    }

    return (
        <div className="d-flex flex-column align-items-center my-5">
            {store.contacts.length > 0 ? (
                store.contacts.map(contacto => (
                    <Card key={contacto.id} contacto={contacto} />
                ))
            ) : (
                <p>No hay contactos en esta agenda.</p>
            )}
        </div>
    );
};