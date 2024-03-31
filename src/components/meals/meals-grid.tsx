import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className="my-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}