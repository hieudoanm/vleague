import Container from '@mui/material/Container';
import Link from 'next/link';
import React from 'react';
import Logo from '../../atoms/Logo';
import { Team } from '../../../types';

export type TeamsBarProps = { teams: Team[] };

const TeamsBar: React.FC<TeamsBarProps> = ({ teams = [] }) => {
  if (teams.length === 0) {
    return <></>;
  }

  return (
    <div className="border-b">
      <Container>
        <div className="overflow-auto py-4">
          <div className="inline-flex md:flex justify-center gap-4 mx-auto">
            {teams.map((team: Team) => {
              return (
                <div
                  key={team.teamId}
                  className="border rounded w-12 h-12 flex items-center justify-center"
                >
                  <Link href={`/teams/${team.teamId}`} passHref>
                    <div>
                      <Logo
                        teamId={team.teamId}
                        className="w-8 h-8 cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

TeamsBar.displayName = 'TeamsBar';

export default React.memo(TeamsBar);
