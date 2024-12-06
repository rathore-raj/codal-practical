import Breadcrumbs from "@/components/core/breadcrumbs";
import Heading from "@/components/core/heading";
import Products from "@/components/core/products";

export default function Home() {
  return (
    <>
      <Breadcrumbs />
      <div className="page">
        <div className="container">
          <Heading />
          <Products />
        </div>
      </div>
    </>
  );
}
