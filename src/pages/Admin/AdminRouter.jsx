
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import AdminLayout from './AdminLayout';
import AccuielSyndic from './AccuielSyndic';
import Copropriete from './Copropriete/Copropriete'
import Compatibilite from './Compatibilite/Compatibilite';
import AssembleGenerale from './AssembleGenerale/Assemble'
import Evenement from './Evenement/Evenement';

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<AdminLayout/>}>
                    <Route index element={<AccuielSyndic/>}/>
                    <Route path='accueilSyndic' element={<AccuielSyndic/>}/>
                    <Route path="copro">
                        <Route path='copropriete' element={<Copropriete/>} />
                    </Route>
                    <Route path="compatibilite">
                        <Route path='compatibilite' element={<Compatibilite/>}/>                       
                    </Route>
                    <Route path="assemble">
                        <Route path='assemble' element={<AssembleGenerale/>}/>                       
                    </Route>
                    <Route path="evenement">
                        <Route path='evenement' element={<Evenement/>}/>                       
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default AdminRouter;
