import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { Tier } from '../../types';
import { StandingEntity } from './standings.entity';
import { getStandings, getStanding } from './standings.service';

@Route('api/standings')
@Tags('Standings')
export class StandingsController extends Controller {
  @Get()
  public async getStandings(
    @Query('competitionTier') competitionTier: Tier,
    @Query('season') season: number
  ): Promise<{
    total: number;
    data: StandingEntity[];
  }> {
    const standings = await getStandings({ competitionTier, season });
    return { total: standings.length, data: standings };
  }

  @Get(':standingId')
  public async getStanding(
    @Query('competitionTier') competitionTier: Tier,
    @Query('season') season: number,
    @Query('teamId') teamId: string
  ) {
    const standing = await getStanding({ competitionTier, season, teamId });
    return { standing };
  }
}
