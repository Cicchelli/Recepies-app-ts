import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/pages/Login';
import Recipes from './Pages/pages/Recipes';
import Profile from './components/Profile';
import DoneRecipes from './components/DoneRecipes';
import FavoriteRecipes from './components/FavoriteRecipes';
import { DoneSearchLayout } from './Helper/Layouts/DoneSearchLayout';
import { DrinksLayout } from './Helper/Layouts/DrinksLayout';
import { FavoriteSearchLayout } from './Helper/Layouts/FavoriteSearchLayout';
import { FullHeaderLayout } from './Helper/Layouts/FullHeaderLayout';
import { MealsLayout } from './Helper/Layouts/MealsLayout';
import { ProfileSearchLayout } from './Helper/Layouts/ProfileSeachLayout';
import RecipeDetails from './components/RecipeDetails';
import RecipeInProgress from './Pages/pages/RecipeInProgress';

function App() {
  return (
    <>
      <div className="meals">
        <span className="logo">Trybe</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
      <Routes>
        <Route path="/" element={ <FullHeaderLayout /> }>
          {' '}
          <Route index element={ <Login /> } />
        </Route>
        <Route path="/meals" element={ <MealsLayout /> }>
          <Route index element={ <Recipes /> } />
        </Route>
        <Route path="/drinks" element={ <DrinksLayout /> }>
          <Route index element={ <Recipes /> } />
        </Route>
        <Route path="/meals/:id" element={ <RecipeDetails /> } />
        <Route path="/drinks/:id" element={ <RecipeDetails /> } />
        <Route path="/meals/:id/in-progress" element={ <RecipeInProgress /> } />
        <Route path="/drinks/:id/in-progress" element={ <RecipeInProgress /> } />
        <Route path="/profile" element={ <ProfileSearchLayout /> }>
          <Route index element={ <Profile /> } />
        </Route>
        <Route path="/done-recipes" element={ <DoneSearchLayout /> }>
          <Route index element={ <DoneRecipes /> } />
        </Route>
        <Route path="/favorite-recipes" element={ <FavoriteSearchLayout /> }>
          <Route index element={ <FavoriteRecipes /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
