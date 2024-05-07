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

export default function CategoryAnalysisLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main className="flex">
        <div className="flex">
          <SideBar />
          <div className="pl-4 pt-8">
            <p className="text-3xl font-semibold">Category Analysis</p>
            <Breadcrumbs />
            <Tabs />
            <div className="flex">
              <VerticalNavigation />
              {children}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
