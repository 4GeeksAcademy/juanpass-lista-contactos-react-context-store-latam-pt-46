import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";
import EditContact from "./pages/EditContact";
import {Home} from "./pages/Home"


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

      
      <Route path="/" element={<Home />} />

      
      <Route path="/add" element={<AddContact />} />

      
      <Route path="/edit/:id" element={<EditContact />} />



    </Route>
  )
);