import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

      {/* Página principal con lista de contactos */}
      <Route path="/" element={<Contact />} />

      {/* Ruta para agregar contacto */}
      <Route path="/add" element={<AddContact />} />

      {/* Ruta para editar contacto */}
      <Route path="/edit/:id" element={<AddContact />} />



    </Route>
  )
);
