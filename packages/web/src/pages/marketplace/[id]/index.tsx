import { useWeb3 } from '@3rdweb/hooks';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { Product } from '../../../components/organisms/MarketplaceCollection';
import MarketplaceTemplate from '../../../components/templates/MarketplaceTemplate';
import { messagesByLocales } from '../../../messages/product';
import { getSprites } from '../../../utils/solana';

type ProductPageProps = {
  product: Product;
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <MarketplaceTemplate title={`V.League #${product.id}`}>
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <Card className="border shadow">
              <div className="aspect-square"></div>
            </Card>
          </div>
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <h2 className="text-3xl">V.League #{product.id}</h2>
            </div>
            <div className="mb-4">
              <p className="text-gray-500">{product.teamName}</p>
            </div>
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <div className="text-2xl font-semibold">
                  {product.cryptoCode} {product.cryptoPrice}
                </div>
                <div className="text-xl text-gray-500">
                  {product.fiatCode} {product.fiatPrice}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Button type="button" variant="contained" className="w-full">
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MarketplaceTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.id;
  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  const sprites = await getSprites();
  const product = sprites.find((sprite) => sprite.id === id);

  return {
    props: {
      product: {},
      messages,
    },
  };
};

export default ProductPage;
