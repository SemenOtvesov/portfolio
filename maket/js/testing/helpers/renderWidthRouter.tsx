import React from "react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../AppRouter";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@js/state/state";

export function renderWidthRouter (component?: React.JSX.Element, initRoute = '/'){
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initRoute]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
        )
}