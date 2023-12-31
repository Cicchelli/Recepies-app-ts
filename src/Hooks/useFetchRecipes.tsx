import { useState, useEffect } from 'react';
import { RecipeType } from '../utils/types';

type FetchType = 'meals' | 'drinks';

function useFetchRecipes(type: FetchType, category?: string) {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let endpoint: string;
      if (type === 'meals') {
        endpoint = category
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      } else {
        endpoint = category
          ? `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
          : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      }

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setRecipes(data.meals || data.drinks);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchRecipes();
  }, [type, category]);

  const fetchCategories = async (result: FetchType) => {
    const endpoint = result === 'meals'
      ? 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    const response = await fetch(endpoint);
    const data = await response.json();

    setCategories(data[result].slice(0, 5)
      .map((newCategory: any) => newCategory.strCategory));
  };

  useEffect(() => {
    fetchCategories(type);
  }, [type]);

  return { recipes, error, categories };
}

export default useFetchRecipes;
