import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { PlayerEntity } from './players.entity';
import { getPlayer, getPlayers } from './players.service';

@Route('api/players')
@Tags('Players')
export class PlayersController extends Controller {
  @Get()
  public async getPlayers(
    @Query('skip') skip = 0,
    @Query('limit') limit = 50,
    @Query('teamId') teamId?: string
  ): Promise<{
    total: number;
    data: PlayerEntity[];
  }> {
    const fixtures = await getPlayers({ skip, limit, teamId });
    return { total: fixtures.length, data: fixtures };
  }

  @Get(':playerId')
  public async getPlayer(
    @Path('playerId') playerId: string
  ): Promise<{ player: PlayerEntity | null }> {
    const player = await getPlayer(playerId);
    return { player };
  }
}
