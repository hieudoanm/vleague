import ArrowForward from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Stadium from '@mui/icons-material/Stadium';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Fixture as FixtureType } from 'shared';
import Fixture from '../../molecules/Fixture';

export type FixtureDetailsProps = { fixture: FixtureType };

const FixtureDetails: React.FC<FixtureDetailsProps> = ({ fixture }) => {
  const t = useTranslations();

  return (
    <div key={fixture.fixtureId} className="py-4 border-b">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">
        <div className="col-span-1 md:col-span-2">
          <Fixture fixture={fixture} />
        </div>
        <div className="col-span-1">
          <div className="text-center md:text-left">
            <Stadium className="inline-block mr-2" />
            {fixture.stadium}
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-center md:text-right">
            <Link href={`/fixtures/${fixture.fixtureId}`} passHref>
              <div className="flex items-center justify-center md:justify-end">
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className="rounded border py-2 px-4"
                >
                  <span>{t('details')}</span>
                  <ArrowForward className="inline-block ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FixtureDetails.displayName = 'FixtureDetails';

export default FixtureDetails;
