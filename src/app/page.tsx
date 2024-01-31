import { PageLayout } from "@/layouts/PageLayout/PageLayout";
import { NewMoviesSlider } from "@/components/HomePage/NewMoviesSlider";

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-center">Home Page</h1>

      <NewMoviesSlider />
    </PageLayout>
  );
}
