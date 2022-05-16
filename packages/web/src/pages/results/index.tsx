import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { query } from '../../apollo';
import { GET_FIXTURES } from '../../apollo/schemas';
import FixturesTemplate from '../../components/templates/FixturesTemplate';
import { CURRENT_SEASON, CURRENT_TIER, SEASONS, TIERS } from '../../constants';
import { messagesByLocales } from '../../messages/results';
import useUpdateEffect from '../../hooks/use-update-effect';
import { Fixture, Tier } from '../../types';
import { useTranslations } from 'next-intl';

export type ResultsPageProps = {
  tier: string;
  season: number;
  seasons: number[];
  fixtures: Fixture[];
};

const ResultsPage: NextPage<ResultsPageProps> = ({
  tier: currentTier,
  season: currentSeason,
  seasons,
  fixtures: currentFixtures,
}) => {
  const t = useTranslations();
  const router = useRouter();

  const [tier, setTier] = useState<string>(currentTier);
  const [season, setSeason] = useState<number>(currentSeason);
  const [fixtures, setFixtures] = useState<Fixture[]>(currentFixtures);

  const changeTier = useCallback((tier: string) => setTier(tier), [setTier]);
  const changeSeason = useCallback(
    (season: number) => setSeason(season),
    [setSeason]
  );

  useUpdateEffect(() => {
    const getFixtures = async () => {
      router.push({ query: { tier, season } }, undefined, { shallow: true });

      const data: { fixtures: Fixture[] } = await query<{
        fixtures: Fixture[];
      }>(GET_FIXTURES, { season, tier, status: 'FINISHED' });
      const fixtures: Fixture[] = get(data, 'fixtures', []);

      setFixtures(fixtures);
    };
    getFixtures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier, season]);

  const title = t('results');
  return (
    <FixturesTemplate
      title={title}
      tier={tier}
      season={season}
      seasons={seasons}
      changeTier={changeTier}
      changeSeason={changeSeason}
      fixtures={fixtures}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let querySeason = parseInt(get(context, 'query.season', CURRENT_SEASON), 10);
  if (!SEASONS.includes(querySeason)) {
    querySeason = CURRENT_SEASON;
  }

  let queryTier: Tier = get(context, 'query.tier', CURRENT_TIER) as Tier;
  if (!TIERS.includes(queryTier)) {
    queryTier = CURRENT_TIER;
  }

  const data: { fixtures: Fixture[] } = await query<{ fixtures: Fixture[] }>(
    GET_FIXTURES,
    { season: querySeason, tier: queryTier, status: 'FINISHED' }
  );
  const fixtures: Fixture[] = get(data, 'fixtures', []);

  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return {
    props: {
      messages,
      tier: queryTier,
      season: querySeason,
      seasons: SEASONS,
      fixtures,
    },
  };
};

export default ResultsPage;
