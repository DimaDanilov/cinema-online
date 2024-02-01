import { PageLayout } from "@/layouts/PageLayout/PageLayout";
import { NewMoviesCarousel } from "@/components/HomePage/NewMoviesCarousel";
import { TopViewsCarousel } from "@/components/HomePage/TopViewsCarousel";
import { MainPremiere } from "@/components/HomePage/MainPremiere";

export default function Home() {
  return (
    <PageLayout>
      <MainPremiere />
      <NewMoviesCarousel />
      <TopViewsCarousel />
    </PageLayout>
  );
}
