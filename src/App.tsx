import Home from "./pages/Home";
import "./assets/scss/App.scss";
import MainLayout from "./components/layouts/MainLayout";

const App: React.FC = () => {
    return (
        <MainLayout>
            <Home></Home>
        </MainLayout>
    );
}

export default App;