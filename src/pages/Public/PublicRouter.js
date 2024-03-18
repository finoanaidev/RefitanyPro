

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Accueil from './Accueil/Accueil'
import Syndic from "./Syndic/Syndic";
import Contact from "./Contact/Contact";
import Partenaire from "./Partenaire/Partenaire";

function PublicRouter() {
  return (
          <Routes>
        <Route element={<Layout />}>
          <Route index element={<Accueil />} />

          <Route path="/accueil" element={<Accueil />} />
          <Route path="/syndic" element={<Syndic />} />
          <Route path="/partenaire" element={<Partenaire />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}

export default PublicRouter;
