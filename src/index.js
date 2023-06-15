import store from './redux/redux-store';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderDOM = (state) => {

    root.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>
    );
}


rerenderDOM(store.getState());

store.subscribe(() => {
    rerenderDOM(store.getState());
});
