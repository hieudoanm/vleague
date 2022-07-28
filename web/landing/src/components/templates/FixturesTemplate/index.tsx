import Container from '@mui/material/Container';
import { Fixture } from 'shared';
import Filter from '../../organisms/LeagueFilter';
import FixturesByRound from '../../organisms/FixturesByRound';
import PageTemplate from '../PageTemplate';

export type FixturesTemplateProps = {
  title: string;
  tier: string;
  season: number;
  seasons: number[];
  changeTier: (tier: string) => void;
  changeSeason: (season: number) => void;
  fixtures: Fixture[];
};

const FixturesTemplate: React.FC<FixturesTemplateProps> = ({
  title,
  tier,
  season,
  seasons,
  changeTier,
  changeSeason,
  fixtures,
}) => {
  return (
    <PageTemplate title={title}>
      <Container className="py-16">
        <section className="mb-16">
          <Filter
            tier={tier}
            season={season}
            seasons={seasons}
            changeTier={changeTier}
            changeSeason={changeSeason}
          />
        </section>
        <FixturesByRound fixtures={fixtures} />
      </Container>
    </PageTemplate>
  );
};

export default FixturesTemplate;
