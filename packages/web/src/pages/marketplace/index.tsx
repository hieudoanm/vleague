import Container from '@mui/material/Container';
import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import MarketplaceCollection, {
  Product,
} from '../../components/organisms/MarketplaceCollection';
import MarketplaceFilter, {
  FilterOption,
} from '../../components/organisms/MarketplaceFilter';
import MarketplaceTemplate from '../../components/templates/MarketplaceTemplate';
import { usePhantomWallet } from '../../contexts/solana-wallet';
import { messagesByLocales } from '../../messages/marketplace';
import { getSprites } from '../../utils/solana';

const filterOptions: FilterOption[] = [
  {
    key: 'teamId',
    header: 'teams',
    options: [
      { label: 'Team 1', value: 'team1' },
      { label: 'Team 2', value: 'team2' },
      { label: 'Team 3', value: 'team3' },
      { label: 'Team 4', value: 'team4' },
      { label: 'Team 5', value: 'team5' },
      { label: 'Team 6', value: 'team6' },
    ],
  },
  {
    key: 'positionAcronym',
    header: 'positions',
    options: [
      { label: 'Goalkeeper', value: 'GK' },
      { label: 'Centre Back', value: 'CB' },
      { label: 'Defender', value: 'DF' },
      { label: 'Midfielder', value: 'MF' },
      { label: 'Centre Forward', value: 'CF' },
      { label: 'Striker', value: 'ST' },
    ],
  },
];

const MarketplaceSection: React.FC<{ publicKey: string }> = ({ publicKey }) => {
  const [sprites, setSprites] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>(sprites);
  const [filterQuery, setFilterQuery] = useState<Record<string, Set<string>>>(
    {}
  );

  useEffect(() => {
    const onLoad = async () => {
      console.log('onLoad publicKey', publicKey);
      if (publicKey) {
        const spriteList = await getSprites();
        setSprites(spriteList);
      }
    };

    onLoad();
  }, [publicKey]);

  useEffect(() => {
    const query = new URLSearchParams();
    const keys = Object.keys(filterQuery);
    for (const key of keys) {
      const values = Array.from(filterQuery[key]);
      for (const value of values) {
        query.append(key, value);
      }
    }
    const queryString = query.toString();
    console.log(queryString);

    const products = sprites.filter((product) => {
      const flag = keys.every((key) => {
        const values = Array.from(filterQuery[key]);
        return values.length === 0 ? true : values.includes(product[key]);
      });
      return flag;
    });
    setProducts(products);
  }, [filterQuery, sprites]);

  const buildFilterQuery = (event) => {
    const { name: key, value, checked } = event.target;
    const values: Set<string> =
      key in filterQuery ? filterQuery[key] : new Set();
    if (checked) {
      values.add(value);
    } else {
      values.delete(value);
    }
    setFilterQuery({ ...filterQuery, [key]: values });
  };

  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="col-span-1">
          <MarketplaceFilter
            filterOptions={filterOptions}
            buildFilterQuery={buildFilterQuery}
          />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <MarketplaceCollection products={products} />
        </div>
      </div>
    </Container>
  );
};

type MarketplacePageProps = {};

const MarketplacePage: NextPage<MarketplacePageProps> = () => {
  const t = useTranslations();
  const { publicKey } = usePhantomWallet();
  console.log('MarketplacePage publicKey', publicKey);

  return (
    <MarketplaceTemplate title={t('marketplace')}>
      {!publicKey && (
        <Container className="py-16">
          <p>Loading</p>
        </Container>
      )}
      {publicKey && <MarketplaceSection publicKey={publicKey} />}
    </MarketplaceTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return {
    props: {
      messages,
    },
  };
};

export default MarketplacePage;
