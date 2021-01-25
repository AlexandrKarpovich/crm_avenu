import React, { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Leads, { Lead } from './components/leads/Leads';
import Home from './components/Home';
import Navigation from './components/navigation/Navigation';
import './App.css';

const initialLeads = [
    {
        id: 1,
        title: 'Иванов Сергей',
        status: 'todo',
        phone: '79998887766'
    },
    {
        id: 2,
        title: 'Cтепан Суровый',
        status: 'todo',
        phone: '79998887755'
    }
]

const app = {
    leads: [],
    addLead: () => {},
    removeLead: () => {},
    editLead: () => {},
}

export const LeadsContext = React.createContext(app);


function App() {
    const [leads, setLeads] = useState(initialLeads)

    const value = useMemo(() => ({
        leads,
        addLead: setLeads,
        removeLead: setLeads,
        editLead: setLeads,
    }), [leads, setLeads]);

    return <div className='App'>
        <LeadsContext.Provider value={value} >
            <Navigation />

            <Switch>
                <Route
                    path='/'
                    exact
                    component={Home}
                />

                <Route
                    path='/leads/:id'
                    exact
                    component={Lead}
                />

                <Route
                    path='/leads'
                    exact
                    component={Leads}
                />

                <Route
                    path='*'
                    component={PageNotFound}
                />
            </Switch>
        </LeadsContext.Provider>

    </div>;
}

export default App;
