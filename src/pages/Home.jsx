import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
let contacto = {name:"Peter Anamendolla", address:"5842 Hillcrest Rd", phone:"(870) 288-4149",email:"mike.ana@example.com"}



export const Home = () => {
	const { store, dispatch } = useGlobalReducer(); // Opcional si no se usa

	return (
		<div className="d-flex justify-content-center my-5">
			<Card contact = {contacto} />
		</div>
	);
};
