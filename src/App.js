import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Main from "./components/Main/Main";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

  return (
      <BrowserRouter>
        <div className="App app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            store={props.store}
                        />
                    }/>
                    <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
            <Footer />
        </div>
      </BrowserRouter>
  );
}


export default App;
