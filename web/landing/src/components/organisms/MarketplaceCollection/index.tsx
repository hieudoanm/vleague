import Card from '@mui/material/Card';
import Image from 'next/image';
import Link from 'next/link';

export type Product = {
  id: string;
  cryptoPrice: number;
  cryptoCode: string;
  fiatPrice: number;
  fiatCode: string;
  teamId: string;
  teamName: string;
  positionAcronym: string;
  spriteLink: string;
};

type MarketplaceCollectionProps = {
  products: Product[];
};

const MarketplaceCollection: React.FC<MarketplaceCollectionProps> = ({
  products,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(
        (
          {
            id,
            cryptoPrice,
            cryptoCode,
            fiatPrice,
            fiatCode,
            spriteLink,
          }: Product,
          index: number
        ) => {
          return (
            <Link key={`product-${id}`} href={`/marketplace/${id}`} passHref>
              <Card className="border shadow-lg hover:shadow-2xl cursor-pointer">
                <div className="p-4">
                  <div className="bg-[#b71c1c] text-sm inline-block px-2 py-1 text-white mb-2 rounded leading-4">
                    #{id}
                  </div>
                  <p>V.League #{id}</p>
                </div>
                <div className="aspect-square">
                  <Image
                    src={spriteLink}
                    alt={index.toString()}
                    layout="responsive"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-center items-center gap-2">
                    <div className="text-lg font-semibold">
                      {cryptoCode} {cryptoPrice}
                    </div>
                    <div className="text-gray-500">
                      {fiatCode} {fiatPrice}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          );
        }
      )}
    </div>
  );
};

MarketplaceCollection.displayName = 'MarketplaceCollection';

export default MarketplaceCollection;
