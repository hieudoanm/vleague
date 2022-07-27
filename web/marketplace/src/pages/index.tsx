import { NextPage } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { ProductProps } from '../components/molecules/Product';
import ProductsTemplate from '../components/templates/ProductsTemplate';

type HomePageProps = { products: ProductProps[] };

const HomePage: NextPage<HomePageProps> = ({ products = [] }) => {
  const router = useRouter();

  if (!router.isFallback && !products) {
    return <Error statusCode={404} />;
  }

  return (
    <ProductsTemplate title="Pokemon" subtitle="Pokedex" products={products} />
  );
};

export const getStaticProps = async () => {
  const url =
    'https://raw.githubusercontent.com/hieudoanm/pokemon/master/data/pokemon.json';
  const response = await fetch(url);
  const data: { name: string; types: string[] }[] = await response.json();
  const products: ProductProps[] = data
    .map((item) => {
      const { name } = item;
      const title = name.split('-').join(' ');
      const image = `https://raw.githubusercontent.com/hieudoanm/pokemon/master/images/pokemon/${name}.png`;
      return {
        id: name,
        title,
        slug: name,
        image,
        description: name,
        price: 1,
      };
    })
    .splice(0, 12);

  return { props: { products } };
};

export default HomePage;
