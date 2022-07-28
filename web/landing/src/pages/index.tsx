import ArrowForward from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { Fixture as FixtureType, Standing, Video } from 'shared';
import { messagesByLocales } from '../messages/index/index';
import { query } from '../apollo';
import { GET_HOME } from '../apollo/schemas';
import Fixture from '../components/molecules/Fixture';
import Logo from '../components/atoms/Logo';
import PageTemplate from '../components/templates/PageTemplate';
import Carousel from '../components/atoms/Carousel';
import { useTranslations } from 'next-intl';
import { CURRENT_TIER } from '../constants';
import Videos from '../components/organisms/Videos';

type FixturesProps = { fixtures: FixtureType[] };

const Fixtures: React.FC<FixturesProps> = ({ fixtures }) => {
  const t = useTranslations();

  const fixturesByDates = groupBy(fixtures, 'date');

  return (
    <div className="border rounded overflow-hidden shadow">
      <div className="bg-gray-50 text-gray-700 text-center py-4 border-b uppercase">
        {t('fixtures')}
      </div>
      <>
        {Object.keys(fixturesByDates).map((date) => {
          const fixturesByDate = fixturesByDates[date];
          return (
            <div key={`date-${date}`}>
              <div className="text-center pt-4 font-medium">{date}</div>
              {fixturesByDate.map((fixture: FixtureType) => {
                return (
                  <div
                    key={`fixture-${fixture.fixtureId}`}
                    className="border-b py-4"
                  >
                    <Fixture fixture={fixture} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    </div>
  );
};

type StandingsProps = { standings: Standing[] };

const Standings: React.FC<StandingsProps> = ({ standings }) => {
  const t = useTranslations();

  return (
    <div className="border rounded overflow-x-auto shadow">
      <table className="w-full">
        <thead className="bg-gray-50 text-gray-700">
          <tr className="border-b">
            <td className="py-4 uppercase" align="center">
              {t('pos')}
            </td>
            <td></td>
            <td className="py-4 uppercase">{t('team')}</td>
            <td className="py-4 uppercase" align="center">
              {t('pl')}
            </td>
            <td className="py-4 uppercase" align="center">
              {t('gd')}
            </td>
            <td className="py-4 uppercase" align="center">
              {t('pts')}
            </td>
          </tr>
        </thead>
        <tbody>
          {standings.map((standing: Standing) => {
            return (
              <tr key={`standing-${standing.standingId}`} className="border-b">
                <td className="py-2 " align="center">
                  {standing.position}
                </td>
                <td className="py-2" align="center">
                  <Logo teamId={standing.teamId} className="w-8 h-8" />
                </td>
                <td className="py-2 font-medium">
                  <Link href={`/teams/${standing.teamId}`} passHref>
                    <span className="cursor-pointer">
                      <span className="inline md:hidden">
                        {standing.teamId}
                      </span>
                      <span className="hidden md:inline">{standing.team}</span>
                    </span>
                  </Link>
                </td>
                <td className="py-2" align="center">
                  {standing.played}
                </td>
                <td className="py-2" align="center">
                  {standing.goalsDifference > 0 ? '+' : ''}
                  {standing.goalsDifference}
                </td>
                <td className="py-2 font-medium" align="center">
                  {standing.points}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="p-2">
              <Link href="/tables" passHref>
                <div className="mx-auto">
                  <Button variant="contained" className="w-full">
                    <span className="capitalize">{t('viewAllTables')}</span>
                    <ArrowForward className="ml-2 inline-block" />
                  </Button>
                </div>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export type HomePageProps = {
  fixtures: FixtureType[];
  standings: Standing[];
  videos: Video[];
};

const HomePage: NextPage<HomePageProps> = ({ fixtures, standings, videos }) => {
  const t = useTranslations();

  return (
    <PageTemplate>
      <Carousel />
      <div className="border-b">
        <Container className="py-16">
          <h2 className="text-3xl text-center mb-16 uppercase">
            {t('vleague1')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Fixtures fixtures={fixtures} />
            </div>
            <div>
              <Standings standings={standings} />
            </div>
          </div>
        </Container>
      </div>
      <Container className="py-16">
        <h2 className="text-3xl text-center mb-16 uppercase">{t('videos')}</h2>
        <Videos videos={videos} />
      </Container>
    </PageTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  const season = new Date().getFullYear();

  const data: { videos: Video[] } = await query<{
    videos: Video[];
    standings: Standing[];
    fixtures: FixtureType[];
  }>(GET_HOME, {
    maxResults: 4,
    season,
    tier: CURRENT_TIER,
    status: 'SCHEDULED',
    limit: 8,
    sortBy: 'date',
  });
  const videos: Video[] = get(data, 'videos', []) || [];
  const standings: Video[] = get(data, 'standings', []) || [];
  const fixtures: Video[] = get(data, 'fixtures', []) || [];

  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return { props: { messages, fixtures, standings, videos } };
};

export default HomePage;
