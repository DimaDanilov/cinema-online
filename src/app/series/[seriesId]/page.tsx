import { PageLayout } from "@/layouts/PageLayout/PageLayout";
import styles from "./page.module.scss";

export default function SeriesPage({
  params,
}: {
  params: { seriesId: number };
}) {
  return (
    <PageLayout>
      <h1>Id of the series: {params.seriesId}</h1>
    </PageLayout>
  );
}
