import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { Fixture, Tier } from 'shared';
import { query } from '../../apollo';
import { GET_FIXTURES } from '../../apollo/schemas';
import FixturesTemplate from '../../components/templates/FixturesTemplate';
import { CURRENT_SEASON, CURRENT_TIER, SEASONS, TIERS } from '../../constants';
import useUpdateEffect from '../../hooks/use-update-effect';
import { messagesByLocales } from '../../messages/fixtures';

export type FixturesPageProps = {
  tier: string;
  season: number;
  seasons: number[];
  fixtures: Fixture[];
};

const FixturesPage: NextPage<FixturesPageProps> = ({
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
      }>(GET_FIXTURES, { season, tier, status: 'SCHEDULED' });
      const fixtures: Fixture[] = get(data, 'fixtures', []);
      setFixtures(fixtures);
    };
    getFixtures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier, season]);

  const title = t('fixtures');
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

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'en',
  query: contextQuery,
}: GetServerSidePropsContext) => {
  let querySeason = parseInt(
    get(contextQuery, 'season', CURRENT_SEASON).toString(),
    10
  );
  if (!SEASONS.includes(querySeason)) {
    querySeason = CURRENT_SEASON;
  }

  let queryTier: Tier = get(contextQuery, 'tier', CURRENT_TIER) as Tier;
  if (!TIERS.includes(queryTier)) {
    queryTier = CURRENT_TIER;
  }

  const data: { fixtures: Fixture[] } = await query<{ fixtures: Fixture[] }>(
    GET_FIXTURES,
    { season: querySeason, tier: queryTier, status: 'SCHEDULED' }
  );
  const fixtures: Fixture[] = get(data, 'fixtures', []);

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

export default FixturesPage;
