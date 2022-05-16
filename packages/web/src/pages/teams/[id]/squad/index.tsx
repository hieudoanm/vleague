import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { query } from '../../../../apollo';
import { GET_TEAM_WITH_PLAYERS } from '../../../../apollo/schemas';
import TeamTemplate from '../../../../components/templates/TeamTemplate';
import { messagesByLocales } from '../../../../messages/team';
import { Player, Team as TeamType } from '../../../../types';

const TeamSquad: NextPage<{ team: TeamType; players: Player[] }> = ({
  players = [],
  team,
}) => {
  const t = useTranslations();

  return (
    <TeamTemplate team={team} active="squad">
      <div className="border rounded">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <td className="py-4 px-2 capitalize" align="center">
                {t('no')}
              </td>
              <td className="py-4 px-2 capitalize">{t('fullName')}</td>
              <td className="py-4 px-2 capitalize">{t('position')}</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player: Player, index: number, array: Player[]) => {
              const { shirtNumber, playerId } = player;
              const last = array.length - 1 === index;
              return (
                <tr key={playerId} className={last ? '' : 'border-b'}>
                  <td className="py-4 px-2" align="center">
                    {shirtNumber}
                  </td>
                  <td className="py-4 px-2">{player.fullName}</td>
                  <td className="py-4 px-2">{player.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TeamTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const teamId: string = get(context, 'params.id');
  const data: { team: TeamType[] } = await query<{
    team: TeamType[];
  }>(GET_TEAM_WITH_PLAYERS, { teamId });

  const team = get(data, 'team', {});
  const players = get(data, 'team.players', []);

  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return { props: { messages, players, team } };
};

export default TeamSquad;
