import Link from 'next/link';
import { Fixture as FixtureType } from '../../../types';
import Logo from '../../atoms/Logo';

export type FixtureStatusProps = { fixture: FixtureType };

export const FixtureStatus: React.FC<FixtureStatusProps> = ({ fixture }) => {
  if (fixture.status === 'SCHEDULED') {
    return (
      <div className="border rounded flex items-center justify-center py-2">
        {fixture.time}
      </div>
    );
  }

  if (fixture.status === 'FINISHED') {
    return (
      <div className="flex items-center justify-center" style={{ gap: '1px' }}>
        <div className="w-8 h-8 bg-red-700 text-white flex items-center justify-center">
          {fixture.homeScore}
        </div>
        <div className="w-8 h-8 bg-red-700 text-white flex items-center justify-center">
          {fixture.awayScore}
        </div>
      </div>
    );
  }

  return <></>;
};

export type FixtureHomeTeamProps = { fixture: FixtureType };

export const FixtureHomeTeam: React.FC<FixtureHomeTeamProps> = ({
  fixture,
}) => {
  return (
    <div className="flex items-center justify-end">
      <Link href={`/teams/${fixture.homeId}`} passHref>
        <div className="inline-flex items-center gap-2 cursor-pointer">
          <p className="block md:hidden font-medium">{fixture.homeId}</p>
          <p className="hidden md:block font-medium truncate">
            {fixture.homeTeam}
          </p>
          <Logo teamId={fixture.homeId} className="w-8 h-8" />
        </div>
      </Link>
    </div>
  );
};

export type FixtureAwayTeamProps = { fixture: FixtureType };

export const FixtureAwayTeam: React.FC<FixtureAwayTeamProps> = ({
  fixture,
}) => {
  return (
    <div className="flex items-center justify-start">
      <Link href={`/teams/${fixture.awayId}`} passHref>
        <div className="inline-flex items-center gap-2 cursor-pointer">
          <Logo teamId={fixture.awayId} className="w-8 h-8" />
          <p className="hidden md:block font-medium truncate">
            {fixture.awayTeam}
          </p>
          <p className="block md:hidden font-medium">{fixture.awayId}</p>
        </div>
      </Link>
    </div>
  );
};

export type FixtureProps = { fixture: FixtureType; full?: boolean };

const Fixture: React.FC<FixtureProps> = ({ fixture, full = false }) => {
  return (
    <div
      className={`grid grid-cols-3 md:grid-cols-5 gap-8 items-center ${
        full ? 'lg:grid-cols-7 xl:grid-cols-9' : ''
      }`}
    >
      <div
        className={`col-span-1 md:col-span-2 ${
          full ? 'lg:col-span-3 xl:col-span-4' : ''
        }`}
      >
        <FixtureHomeTeam fixture={fixture} />
      </div>
      <div className="col-span-1">
        <FixtureStatus fixture={fixture} />
      </div>
      <div
        className={`col-span-1 md:col-span-2 ${
          full ? 'lg:col-span-3 xl:col-span-4' : ''
        }`}
      >
        <FixtureAwayTeam fixture={fixture} />
      </div>
    </div>
  );
};

Fixture.displayName = 'Fixture';
Fixture.defaultProps = { full: false };

export default Fixture;
