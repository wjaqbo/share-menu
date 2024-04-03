import MealItem from "./meal-item";

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className="my-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal) => {
        return (
          <li key={meal._id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
