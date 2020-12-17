import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";

const PhotoFeature = React.lazy(() => import("./features/Photo/PhotoFeature"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading ...</div>}>
                <Switch>
                    <Route path="/photo" component={PhotoFeature} exact />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
