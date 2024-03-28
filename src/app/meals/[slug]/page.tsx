export const metadata = {
  title: "Meals",
  description: "Meals Page",
};

export default function MealDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>Page for meal details {params.slug}</div>;
}
