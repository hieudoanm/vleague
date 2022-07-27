import Container from '@mui/material/Container';
import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { Standing, Tier } from 'shared';
import { query } from '../../apollo';
import { GET_STANDINGS } from '../../apollo/schemas';
import Filter from '../../components/organisms/LeagueFilter';
import Teams from '../../components/organisms/Teams';
import PageTemplate from '../../components/templates/PageTemplate';
import { CURRENT_SEASON, CURRENT_TIER, SEASONS, TIERS } from '../../constants';
import useUpdateEffect from '../../hooks/use-update-effect';
import { messagesByLocales } from '../../messages/teams';

export type TeamsProps = {
  apiURL: string;
  tier: string;
  season: number;
  seasons: number[];
  teams: Standing[];
};

const TeamsPage: NextPage<TeamsProps> = ({
  tier: currentTier,
  season: currentSeason,
  seasons,
  teams: currentTeams,
}) => {
  const t = useTranslations();
  const router = useRouter();

  const [tier, setTier] = useState<string>(currentTier);
  const [season, setSeason] = useState<number>(currentSeason);
  const [teams, setTeams] = useState<Standing[]>(currentTeams);

  const changeTier = useCallback((tier: string) => setTier(tier), [setTier]);
  const changeSeason = useCallback(
    (season: number) => setSeason(season),
    [setSeason]
  );

  useUpdateEffect(() => {
    const getTeams = async () => {
      router.push({ query: { tier, season } }, undefined, { shallow: true });
      const data: { standings: Standing[] } = await query<{
        standings: Standing[];
      }>(GET_STANDINGS, { season, tier });
      const teams: Standing[] = get(data, 'standings', []);
      setTeams(teams);
    };
    getTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier, season]);

  const title = t('teams');
  return (
    <PageTemplate title={title}>
      <Container className="py-16">
        <section className="mb-16">
          <Filter
            tier={tier}
            season={season}
            seasons={seasons}
            changeTier={changeTier}
            changeSeason={changeSeason}
          />
        </section>
        <Teams teams={teams} />
      </Container>
    </PageTemplate>
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

  const data: { standings: Standing[] } = await query<{
    standings: Standing[];
  }>(GET_STANDINGS, { season: querySeason, tier: queryTier });
  const teams: Standing[] = get(data, 'standings', []);

  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return {
    props: {
      messages,
      tier: queryTier,
      season: querySeason,
      seasons: SEASONS,
      teams,
    },
  };
};

export default TeamsPage;
