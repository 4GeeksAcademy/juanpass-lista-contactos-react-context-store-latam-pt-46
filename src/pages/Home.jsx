import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState, useEffect } from "react";

// export const Home = () => {
// 	const { store, dispatch } = useGlobalReducer(); // Opcional si no se usa

// 	return (
// 		<div className="d-flex justify-content-center my-5">
// 			<Card contact = {contactos} />
// 		</div>
// 	);
// };

const BASE_URL_USER = "https://playground.4geeks.com/contact/agendas/juanpass";
const BASE_URL_CONTACTS = "https://playground.4geeks.com/contact/agendas/juanpass/contacts";

//   let contactos = {name:"Peter Anamendolla", address:"5842 Hillcrest Rd", phone:"(870) 288-4149",email:"mike.ana@example.com"}

export const Home = () => {
    const [contactos, setContactos] = useState([]);

useEffect(() => {
	const loadContactos = async () => {
		try {
			// Crear usuario si no existe
			await fetch(`${BASE_URL_USER}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ slug: juanpass, id: 0 }),
			});

			// Obtener contactos del usuario
			const response = await fetch(`${BASE_URL_CONTACTS}`);
			if (!response.ok) throw new Error("Error al obtener los contactos del usuario");
			const userData = await response.json();
			setContactos(userData.contactos); // Extraer el array 'contactos' de la respuesta
		} catch (error) {
			console.error("Error al cargar contactos:", error);
		}
	};
	loadContactos();
}, [])

return (
  <div className="d-flex justify-content-center my-5">
    <Card contactos={contactos} />
  </div>
);
}