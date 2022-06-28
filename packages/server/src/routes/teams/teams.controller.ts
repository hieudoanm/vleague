import { Controller, Get, Path, Route, Tags } from 'tsoa';
import { TeamEntity } from './teams.entity';
import { getTeams, getTeam } from './teams.service';

@Route('api/teams')
@Tags('Teams')
export class TeamsController extends Controller {
  @Get()
  public async getTeams(): Promise<{
    total: number;
    data: TeamEntity[];
  }> {
    const teams = await getTeams();
    return { total: teams.length, data: teams };
  }

  @Get(':teamId')
  public async getTeam(@Path('teamId') teamId: string) {
    const team = await getTeam(teamId);
    return { team };
  }
}
