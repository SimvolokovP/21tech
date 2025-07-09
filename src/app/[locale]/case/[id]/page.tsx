import { NO_INDEX_PAGE } from "@/constans/ceo.constans";
import { Metadata } from "next";
import CasePage from "./CasePage";

export const metadata: Metadata = {
  title: "Case",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <CasePage />;
}
