import { FixtureSortBy, FixtureEntity, Season, Status, Tier } from 'shared';
import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { getFixture, getFixtures } from './fixtures.service';

@Route('api/fixtures')
@Tags('Fixtures')
export class FixturesController extends Controller {
  @Get()
  public async getFixtures(
    @Query('limit') limit = 100,
    @Query('season') season: Season = Season.SEASON_CURRENT,
    @Query('sortBy') sortBy: FixtureSortBy = FixtureSortBy.DATE,
    @Query('status') status: Status = Status.SCHEDULED,
    @Query('tier') tier: Tier = Tier.TIER_ONE
  ): Promise<{
    total: number;
    data: FixtureEntity[];
  }> {
    const fixtures = await getFixtures({ limit, season, sortBy, status, tier });
    return { total: fixtures.length, data: fixtures };
  }

  @Get(':fixtureId')
  public async getFixture(@Path('fixtureId') fixtureId: string) {
    const fixture = await getFixture(fixtureId);
    return { fixture };
  }
}
