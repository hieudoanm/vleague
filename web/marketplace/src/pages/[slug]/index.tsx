import { GetServerSidePropsContext, NextPage } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { ProductProps } from '../../components/molecules/Product';
import ProductTemplate from '../../components/templates/ProductTemplate';

const ProductPage: NextPage<{ product: ProductProps }> = ({ product }) => {
  const router = useRouter();

  if (!router.isFallback && !product) {
    return <Error statusCode={404} />;
  }

  return <ProductTemplate product={product} />;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context?.params?.slug || '';

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

  const product: ProductProps =
    products.find((product) => product.slug === slug) || ({} as ProductProps);

  return {
    props: { product },
  };
};

export default ProductPage;
