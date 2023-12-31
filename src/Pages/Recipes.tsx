import { useLocation } from 'react-router-dom';
import { useCallback, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import useFetchRecipes from '../Hooks/useFetchRecipes';
import '../css/Recipes.css';

function Recipes() {
  const { pathname } = useLocation();
  const type = pathname === '/meals' ? 'meals' : 'drinks';
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const { recipes } = useFetchRecipes(type, selectedCategory);

  const handleCategoryClick = useCallback((category: string | null) => {
    if (category === null) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(category);
    }
  }, [setSelectedCategory]);

  return (
    <div className="recipe-page-container">
      <CategoryFilter
        type={ type }
        onCategorySelect={ handleCategoryClick }
      />
      <div className="recipes-container">
        {recipes.slice(0, 12).map((recipe, index) => (
          <RecipeCard
            key={ recipe.idMeal || recipe.idDrink }
            recipe={ recipe }
            index={ index }
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
