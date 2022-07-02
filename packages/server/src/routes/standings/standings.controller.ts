import { Season, StandingEntity, Tier } from 'shared';
import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { getStandings, getStanding } from './standings.service';

@Route('api/standings')
@Tags('Standings')
export class StandingsController extends Controller {
  @Get()
  public async getStandings(
    @Query('tier') tier: Tier,
    @Query('season') season: Season
  ): Promise<{
    total: number;
    data: StandingEntity[];
  }> {
    const standings = await getStandings({ tier, season });
    return { total: standings.length, data: standings };
  }

  @Get(':standingId')
  public async getStanding(
    @Query('tier') tier: Tier,
    @Query('season') season: number,
    @Query('teamId') teamId: string
  ) {
    const standing = await getStanding({ tier, season, teamId });
    return { standing };
  }
}
