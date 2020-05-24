import React from 'react';
import Home from "./components/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MyBooksPage from "./components/my_books/MyBooksPage";
// import AddBook from "./components/admin/book/addBook";
import CreateAuthor from "./components/author/CreateAuthor";
import Books from "./components/admin/book/books";
import Unauthorized from './components/unauthorized/Unauthorized';
import AddCategory from './components/admin/category/AddCategory';
import ListAllCategories from './components/admin/category/listAllCategories';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import listAllCategories from './components/admin/category/listAllCategories';
// require('dotenv').config()


function App() {
   
    return (
        <Router>
            <Switch>

                    <Route exact path="/" component={Home}/>
                    <GuestRoute exact path='/login'  component={Login}/>
                    <GuestRoute exact path='/register'  component={Register}/>
                    <ProtectedRoute exact path='/my_books'  component={MyBooksPage}/>
                    <Route exact path='/unauthorized' component={Unauthorized}/>
                    <ProtectedRoute exact path='/admin/categories/' component={ListAllCategories} />
                    <ProtectedRoute exact path='/admin/categories/add' component={AddCategory} />
                    <GuestRoute exact path='/admin/books' component={Books} />
            </Switch>
        </Router>
    );
}

export default App;
