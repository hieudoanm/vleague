import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { query } from '../../../../apollo';
import { GET_TEAM_WITH_FIXTURES } from '../../../../apollo/schemas';
import TeamTemplate from '../../../../components/templates/TeamTemplate';
import FixturesByRound from '../../../../components/organisms/FixturesByRound';
import { messagesByLocales } from '../../../../messages/team';
import { Fixture, Team as TeamType } from '../../../../types';

export type TeamFixturesProps = { fixtures: Fixture[]; team: TeamType };

const TeamFixtures: NextPage<TeamFixturesProps> = ({ fixtures, team }) => {
  return (
    <TeamTemplate team={team} active="fixtures">
      <FixturesByRound fixtures={fixtures} />
    </TeamTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const teamId: string = get(context, 'params.id');
  const data: { team: TeamType[] } = await query<{
    team: TeamType[];
  }>(GET_TEAM_WITH_FIXTURES, { teamId });

  const team = get(data, 'team', {});
  const fixtures = get(data, 'team.fixtures', []);

  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return { props: { messages, fixtures, team } };
};

export default TeamFixtures;
