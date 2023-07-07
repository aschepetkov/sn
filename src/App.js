import './App.css';
import Profile from "./components/pages/Profile/Profile";
import News from "./components/pages/News/News";
import Main from "./components/pages/Main/Main";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import DialogsContainer from "./components/pages/Dialogs/DialogsContainer";
import { Layout } from "./components/Layout/Layout";
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import Blog from './components/pages/Blog/Blog';
import { BlogSingle } from './components/pages/BlogSingle/BlogSingle';

const App = (props) => {

  return (
      <BrowserRouter>
        <div className="App app-wrapper">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="profile" element={
                        <Profile
                            store={props.store}
                        />
                    }/>
                    <Route path="my-profile" element={
                        <Navigate
                            to="/profile"
                            replace
                        />
                    }/>
                    <Route path="dialogs/*" element={<DialogsContainer store={props.store} />} />
                    <Route path="news" element={<News />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<BlogSingle />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;
