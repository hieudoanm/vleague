import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { PlayerEntity } from 'shared';
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
    const players = await getPlayers({ skip, limit, teamId });
    return { total: players.length, data: players };
  }

  @Get(':playerId')
  public async getPlayer(
    @Path('playerId') playerId: string
  ): Promise<{ player: PlayerEntity | null }> {
    const player = await getPlayer(playerId);
    return { player };
  }
}
