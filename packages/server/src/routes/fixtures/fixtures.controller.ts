import { Controller, Get, Path, Route, Tags } from 'tsoa';
import { FixtureEntity } from './fixtures.entity';
import { getFixture, getFixtures } from './fixtures.service';

@Route('api/fixtures')
@Tags('Fixtures')
export class FixturesController extends Controller {
  @Get()
  public async getFixtures(): Promise<{
    total: number;
    data: FixtureEntity[];
  }> {
    const fixtures = await getFixtures();
    return { total: fixtures.length, data: fixtures };
  }

  @Get(':fixtureId')
  public async getFixture(@Path('fixtureId') fixtureId: string) {
    const fixture = await getFixture(fixtureId);
    return { fixture };
  }
}
