import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import MainPhotoPage from "./pages/Main";
import AddEditPage from "./pages/AddEdit";
import NotFound from "../../components/NotFound/NotFound";

PhotoFeature.propTypes = {};

function PhotoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            Photo Home Page
            <Link to={`${match.url}/add`}>Add edit page</Link>
            <Switch>
                <Route path={match.url} component={MainPhotoPage} exact />
                <Route path={`${match.url}/add`} component={AddEditPage} />
                <Route path={`${match.url}/:photoId`} component={AddEditPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default PhotoFeature;
