import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useState } from 'react';
import { query } from '../../apollo';
import { GET_TEAMS } from '../../apollo/schemas';
import { CURRENT_SEASON, CURRENT_TIER } from '../../constants';
import { Team } from '../../types';

export const TeamsContext = React.createContext([] as Team[]);

export const useTeams = (): Team[] => {
  const teams = React.useContext(TeamsContext);
  return teams;
};

export const TeamsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const getTeams = async () => {
      if (!isEmpty(teams)) return;
      const data: { standings: Team[] } = await query<{
        standings: Team[];
      }>(GET_TEAMS, { season: CURRENT_SEASON, tier: CURRENT_TIER });
      const newTeams: Team[] = get(data, 'teams', []);
      setTeams(newTeams);
    };
    getTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TeamsContext.Provider value={teams}>{children}</TeamsContext.Provider>
  );
};

export default TeamsProvider;
