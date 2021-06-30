import './App.css';
import {MainLayout} from "./components/MainLayout/MainLayout";
import {VideoGraph} from "./components/MainLayout/main/VideoGraph/VideoGraph";
import {MainContainer} from "./components/MainLayout/main/MainContainer/MainContainer";
import {LoadMoreNews} from "./components/MainLayout/main/LoadMoreNews/LoadMoreNews";
import {Footer} from "./components/MainLayout/Footer/Footer";

function App() {
    return (
        <MainLayout>
            <VideoGraph/>
            <MainContainer/>
            <LoadMoreNews/>
            <Footer/>
        </MainLayout>
    );
}

export default App;
