import { PageLayout } from "@/layouts/PageLayout/PageLayout";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout>
      <div>
        <h1>Home Page</h1>
      </div>

      <Link href={"/series/4"}>Page 4</Link>
    </PageLayout>
  );
}
