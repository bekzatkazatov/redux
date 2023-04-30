import page from "./components/Page/page";
import HomePage from "./components/home-page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./components/home-page/Users/index";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;