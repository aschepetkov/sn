import './App.css';
import React from "react";
import Profile from "./components/pages/Profile/Profile";
import News from "./components/pages/News/News";
import Main from "./components/pages/Main/Main";
import {
    Route,
    Routes,
    BrowserRouter,
    Navigate,
} from "react-router-dom";
import DialogsContainer from "./components/pages/Dialogs/DialogsContainer";
import {Layout} from "./components/Layout/Layout";
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import Blog from './components/pages/Blog/Blog';
import {BlogSingle} from './components/pages/BlogSingle/BlogSingle';
import {Provider} from "react-redux";
import UsersContainer from "./components/pages/Users/UsersContainer";

/*
* Новые возможности react-router-dom
* без BrowserRouter
* */
// const router = createBrowserRouter(createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//         <Route index element={<Main />} />
//         <Route path="profile" element={(props) =>
//             <Profile
//                 store={props.store}
//             />
//         }/>
//         <Route path="my-profile" element={
//             <Navigate
//                 to="/profile"
//                 replace
//             />
//         }/>
//         <Route path="dialogs/*" element={(props) => <DialogsContainer store={props.store} />} />
//         <Route path="news" element={<News />} />
//         <Route path="blog" element={<Blog />} loader={blogLoader}/>
//         <Route path="blog/:id" element={<BlogSingle />} />
//         <Route path="*" element={<NotFoundPage />} />
//     </Route>
// ));

const App = (props) => {

    return (
        <>
                <div className="App app-wrapper">
                    {/*
                 * Новые возможности react-router-dom
                 * без BrowserRouter
                 *
                    <RouterProvider router={router}/>
                */}
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Main/>}/>
                            <Route path="profile" element={
                                <Profile />
                            }/>
                            <Route path="my-profile" element={
                                <Navigate
                                    to="/profile"
                                    replace
                                />
                            }/>
                            <Route path="dialogs/*" element={<DialogsContainer />}/>
                            <Route path="news" element={<News />}/>
                            <Route path="users" element={<UsersContainer />}/>
                            <Route path="blog" element={<Blog />}/>
                            <Route path="blog/:id" element={<BlogSingle />}/>
                            <Route path="*" element={<NotFoundPage />}/>
                        </Route>
                    </Routes>
                </div>
            </>

    );
}


export default App;
