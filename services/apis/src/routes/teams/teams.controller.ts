import { TeamEntity, Tier } from 'shared';
import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { getTeams, getTeam } from './teams.service';

@Route('api/teams')
@Tags('Teams')
export class TeamsController extends Controller {
  @Get()
  public async getTeams(@Query('tier') tier: Tier): Promise<{
    total: number;
    data: TeamEntity[];
  }> {
    const teams = await getTeams({ tier });
    return { total: teams.length, data: teams };
  }

  @Get(':teamId')
  public async getTeam(@Path('teamId') teamId: string) {
    const team = await getTeam(teamId);
    return { team };
  }
}
