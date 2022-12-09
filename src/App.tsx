import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CallToActions, Dashboard, Error, HeaderBanner, Layout, Navbars } from './pages';

function App() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Dashboard />}></Route>
                <Route path='dashboard' element={<Dashboard />}></Route>
                <Route path='error' element={<Error />}></Route>
                <Route path='cta' element={<CallToActions />}></Route>
                <Route path='banner' element={<HeaderBanner />}></Route>
                <Route path='layout' element={<Layout />}></Route>
                <Route path='navbars' element={<Navbars />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
