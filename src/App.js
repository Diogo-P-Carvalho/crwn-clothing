import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./pages/home/home.page";

const Shop = () => {
    return <h1>I am the Shop page</h1>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Route>
        </Routes>
    );
};

export default App;
