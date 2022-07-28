import Product, { ProductProps } from "../../molecules/Product";

type ProductsTemplateProps = {
  title: string;
  subtitle: string;
  products: ProductProps[];
};

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({
  title = "title",
  subtitle = "subtitle",
  products = [],
}) => {
  return (
    <>
      <section className="border-b">
        <div className="container mx-auto p-8">
          <h2 className="text-2xl capitalize font-medium">{title}</h2>
          <span className=" text-gray-500 capitalize mt-4">{subtitle}</span>
        </div>
      </section>
      <div className="container mx-auto p-8">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsTemplate;
