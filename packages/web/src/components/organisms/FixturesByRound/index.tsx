import groupBy from 'lodash/groupBy';
import { useTranslations } from 'next-intl';
import { Fixture } from '../../../types';
import Round from '../Round';

export type FixturesByRoundProps = {
  fixtures: Fixture[];
};

const FixturesByRound: React.FC<FixturesByRoundProps> = ({ fixtures = [] }) => {
  const t = useTranslations();

  if (fixtures.length === 0) {
    return (
      <div className="text-center capitalize">{t('noUpcomingFixtures')}</div>
    );
  }

  const fixturesByRounds = groupBy(fixtures, 'round');

  return (
    <section>
      {Object.keys(fixturesByRounds).map((round: string) => {
        const fixturesByRound = fixturesByRounds[round] || [];
        const fixturesByDates = groupBy(fixturesByRound, 'date');
        return (
          <Round
            key={`round-${round}`}
            round={round}
            fixturesByDates={fixturesByDates}
          />
        );
      })}
    </section>
  );
};

export default FixturesByRound;
