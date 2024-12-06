import Breadcrumbs from "@/components/core/breadcrumbs";
import Heading from "@/components/core/heading";
import ProductsList from "@/components/core/products";
import { Products as allProducts } from "@/data/products";
import { getCurrentPage, getNonEmptyFilterList, perPage } from "@/util/common";

export default function Home({ searchParams }) {
  const currentPage = getCurrentPage(+searchParams.page);
  const sortBy = searchParams.sortBy ?? "price-high";

  const currentBrands = getNonEmptyFilterList(searchParams.brand ?? "");
  const currentViscosity = getNonEmptyFilterList(searchParams.viscosity ?? "");
  const currentSize = getNonEmptyFilterList(searchParams.size ?? "");

  const filteredProducts = allProducts
    .filter(
      ({ brand }) => currentBrands.length === 0 || currentBrands.includes(brand)
    )
    .filter(
      ({ viscosity }) =>
        currentViscosity.length === 0 || currentViscosity.includes(viscosity)
    )
    .filter(
      ({ size }) => currentSize.length === 0 || currentSize.includes(size)
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-high") {
      return b.price - a.price;
    } else if (sortBy === "price-low") {
      return a.price - b.price;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / perPage);

  const totalDataLength = sortedProducts.length;

  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;

  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Breadcrumbs />
      <div className="pb-5 md:pb-10 xl:pb-14">
        <div className="container">
          <Heading />
          <ProductsList
            data={currentProducts}
            totalPages={totalPages}
            indexOfFirstProduct={
              currentProducts.length ? indexOfFirstProduct + 1 : 0
            }
            indexOfLastProduct={indexOfLastProduct}
            totalDataLength={totalDataLength}
          />
        </div>
      </div>
    </>
  );
}
