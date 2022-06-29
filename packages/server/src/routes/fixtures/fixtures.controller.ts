import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { Tier } from '../../types';
import { FixtureEntity } from './fixtures.entity';
import { getFixture, getFixtures } from './fixtures.service';

@Route('api/fixtures')
@Tags('Fixtures')
export class FixturesController extends Controller {
  @Get()
  public async getFixtures(
    @Query('limit') limit: number,
    @Query('season') season: number,
    @Query('sortBy') sortBy: string,
    @Query('status') status: string,
    @Query('tier') tier: Tier
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
