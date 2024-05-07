import {
  SideBar,
  Breadcrumbs,
  Tabs,
  CatergoryInsightsCard,
  TopBrandsCard,
  PricePositionCard,
  TopPositionCard,
  Top10Brands,
  NewBrands,
  Ratings,
  Competitor,
  Marketplaces,
  VerticalNavigation,
} from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex">
        <SideBar />
        <div className="pl-4 pt-8">
          <p className="text-3xl font-semibold">Category Analysis</p>
          <Breadcrumbs />
          <Tabs />
          <Link href="/categoryAnalysis">Dashboard</Link>
          <div className="flex">
            <VerticalNavigation />
            <div className="p-4 w-full">
              <div className="grid grid-cols-2 gap-4">
                <CatergoryInsightsCard />
                <TopBrandsCard />
                <PricePositionCard />
                <TopPositionCard />
              </div>
              <Top10Brands />
              <NewBrands />
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Ratings />
                <Competitor />
              </div>
              <Marketplaces />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
