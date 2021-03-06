import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { Fixture, Team as TeamType } from 'shared';
import { query } from '../../../../apollo';
import { GET_TEAM_WITH_RESULTS } from '../../../../apollo/schemas';
import TeamTemplate from '../../../../components/templates/TeamTemplate';
import FixturesByRound from '../../../../components/organisms/FixturesByRound';
import { messagesByLocales } from '../../../../messages/team';

export type TeamResultsProps = { results: Fixture[]; team: TeamType };

const TeamResults: NextPage<TeamResultsProps> = ({ results, team }) => {
  return (
    <TeamTemplate team={team} active="results">
      <FixturesByRound fixtures={results} />
    </TeamTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const teamId: string = get(context, 'params.id');
  const data: { team: TeamType[] } = await query<{
    team: TeamType[];
  }>(GET_TEAM_WITH_RESULTS, { teamId });

  const team = get(data, 'team', {});
  const results = get(data, 'team.results', []);

  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return { props: { messages, results, team } };
};

export default TeamResults;
