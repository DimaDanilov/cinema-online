import { PageLayout } from "@/layouts/PageLayout/PageLayout";
import { NewMoviesSlider } from "@/components/HomePage/NewMoviesSlider";
import { TopViewsSlider } from "@/components/HomePage/TopViewsSlider";
import { MainPremiere } from "@/components/HomePage/MainPremiere";

export default function Home() {
  return (
    <PageLayout>
      <MainPremiere />
      <NewMoviesSlider />
      <TopViewsSlider />
    </PageLayout>
  );
}
