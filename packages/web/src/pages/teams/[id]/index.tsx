import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { GET_TEAM_WITH_STANDINGS } from '../../../apollo/schemas';
import { query } from '../../../apollo';
import TeamTemplate from '../../../components/templates/TeamTemplate';
import LeagueTable from '../../../components/organisms/LeagueTable';
import { messagesByLocales } from '../../../messages/team';
import { Standing, Team as TeamType } from '../../../types';

const TeamPage: NextPage<{ standings: Standing[]; team: TeamType }> = ({
  standings,
  team,
}) => {
  return (
    <TeamTemplate team={team} active="">
      <section className="border rounded overflow-hidden shadow">
        <LeagueTable active={team.teamId} standings={standings} />
      </section>
    </TeamTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const teamId: string = get(context, 'params.id');
  const data: { team: TeamType[] } = await query<{
    team: TeamType[];
  }>(GET_TEAM_WITH_STANDINGS, { teamId });

  const team = get(data, 'team', {});
  const standings = get(data, 'team.standings', []);

  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return { props: { messages, standings, team } };
};

export default TeamPage;
