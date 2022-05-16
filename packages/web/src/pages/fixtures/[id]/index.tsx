import Container from '@mui/material/Container';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import { query } from '../../../apollo';
import { GET_FIXTURE } from '../../../apollo/schemas';
import Fixture from '../../../components/molecules/Fixture';
import Logo from '../../../components/atoms/Logo';
import PageTemplate from '../../../components/templates/PageTemplate';
import { messagesByLocales } from '../../../messages/fixtures';
import { Fixture as FixtureType } from '../../../types';
import uuid from '../../../utils/uuid';
import { useTranslations } from 'next-intl';

type TeamFormProps = { teamId: string; form: FixtureType[]; side: string };

const TeamForm: React.FC<TeamFormProps> = ({ teamId, form, side }) => {
  const justifySide = side === 'home' ? 'justify-end' : 'justify-start';
  const reverse = side === 'home' ? 'flex-row' : 'flex-row-reverse';
  return (
    <div className="flex flex-col border-t">
      {form.map((fixture: FixtureType) => {
        const homeOrAway = fixture.homeId === teamId ? 'H' : 'A';
        const opponentTeam =
          fixture.homeId === teamId ? fixture.awayTeam : fixture.homeTeam;
        const opponentScore =
          fixture.homeId === teamId ? fixture.awayScore : fixture.homeScore;
        const teamScore =
          fixture.homeId === teamId ? fixture.homeScore : fixture.awayScore;
        const result =
          teamScore === opponentScore
            ? 'D'
            : teamScore > opponentScore
            ? 'W'
            : 'L';
        const color =
          teamScore === opponentScore
            ? 'bg-gray-500'
            : teamScore > opponentScore
            ? 'bg-green-500'
            : 'bg-red-500';
        return (
          <div
            key={fixture.fixtureId}
            className={`flex ${justifySide} border-b py-2`}
          >
            <div className={`inline-flex items-center gap-1 ${reverse}`}>
              <div>{teamScore}</div>
              <div>-</div>
              <div>{opponentScore}</div>
              <div>v</div>
              <div>{opponentTeam}</div>
              <div>
                <span className="font-semibold mx-3">{homeOrAway}</span>
              </div>
              <div className={`mx-2 w-8 h-8 text-white ${color} rounded-full`}>
                <div className="flex items-center justify-center h-full">
                  {result}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

type FixtureFormProps = {
  homeId: string;
  awayId: string;
  homeTeam: string;
  awayTeam: string;
  homeForm: FixtureType[];
  awayForm: FixtureType[];
};

const FixtureForm: React.FC<FixtureFormProps> = ({
  homeId = '',
  awayId = '',
  homeTeam = '',
  awayTeam = '',
  homeForm = [],
  awayForm = [],
}) => {
  const t = useTranslations();

  return (
    <Container className="py-16">
      <h2 className="text-center text-3xl uppercase mb-8">{t('form')}</h2>
      <div className="grid grid-cols-2">
        <div className="pb-2 flex justify-end items-center">
          <span className="font-semibold uppercase">{homeTeam}</span>
          <Logo teamId={homeId} className="w-8 h-8 mx-2" />
        </div>
        <div className="pb-2 flex justify-start items-center">
          <Logo teamId={awayId} className="w-8 h-8 mx-2" />
          <span className="font-semibold uppercase">{awayTeam}</span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <TeamForm teamId={homeId} form={homeForm} side="home" />
        </div>
        <div>
          <TeamForm teamId={awayId} form={awayForm} side="away" />
        </div>
      </div>
    </Container>
  );
};

type FixtureHeadToHeadProps = {
  head2head: FixtureType[];
};

const FixtureHeadToHead: React.FC<FixtureHeadToHeadProps> = ({ head2head }) => {
  const t = useTranslations();

  return (
    <div className="border-b">
      <Container className="py-16">
        <h2 className="text-center text-3xl uppercase mb-8">
          {t('headToHead')}
        </h2>
        <div className="flex flex-col gap-4">
          {head2head.map((fixture) => {
            return (
              <div key={`fixture-${uuid()}`}>
                <div className="mb-4 text-center">
                  <p className="font-medium mb-2">{fixture.date}</p>
                  <p className="text-gray-500">{fixture.stadium}</p>
                </div>
                <div className="py-4 border-t border-b">
                  <div className="grid grid-cols-12">
                    <div className="col-span-1"></div>
                    <div className="col-span-10">
                      <Fixture full fixture={fixture} />
                    </div>
                    <div className="col-span-1"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export type FixtureSectionProps = { fixture: FixtureType };

const FixtureSection: React.FC<FixtureSectionProps> = ({ fixture }) => {
  return (
    <div className="border-b">
      <Container className="py-16">
        <div className="text-center">
          <p className="font-medium mb-2">
            {fixture.date} {fixture.time}
          </p>
          <p className="text-gray-500">{fixture.stadium}</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center">
          <div className="col-span-1 md:col-span-3">
            <div className="flex justify-end items-center gap-4">
              <div className="text-2xl md:text-4xl uppercase leading-none">
                <p className="block md:hidden">{fixture.homeId}</p>
                <p className="hidden md:block">{fixture.homeTeam}</p>
              </div>
              <Logo
                teamId={fixture.homeId}
                className="w-8 h-8 md:w-32 md:h-32"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div
              className="flex items-center justify-center"
              style={{ gap: '1px' }}
            >
              <div className="w-8 h-8 bg-red-700 text-white flex items-center justify-center">
                {isNil(fixture.homeScore) ? '' : fixture.homeScore}
              </div>
              <div className="w-8 h-8 bg-red-700 text-white flex items-center justify-center">
                {isNil(fixture.awayScore) ? '' : fixture.awayScore}
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="flex justify-start items-center gap-4">
              <Logo teamId={fixture.awayId} className="md:w-32 md:h-32" />
              <div className="text-2xl md:text-4xl uppercase leading-none">
                <p className="block md:hidden">{fixture.awayId}</p>
                <p className="hidden md:block">{fixture.awayTeam}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export type FixturePageProps = {
  fixture: FixtureType;
  head2head: FixtureType[];
  homeForm: FixtureType[];
  awayForm: FixtureType[];
};

const FixturePage: NextPage<FixturePageProps> = ({
  fixture,
  head2head = [],
  homeForm = [],
  awayForm = [],
}) => {
  const t = useTranslations();

  const title = t('fixture');

  return (
    <PageTemplate title={title}>
      <FixtureSection fixture={fixture} />
      <FixtureHeadToHead head2head={head2head} />
      <FixtureForm
        homeId={fixture.homeId}
        awayId={fixture.awayId}
        homeTeam={fixture.homeTeam}
        awayTeam={fixture.awayTeam}
        homeForm={homeForm}
        awayForm={awayForm}
      />
    </PageTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const fixtureId: string = get(context, 'params.id');

  const data: { fixture: FixtureType; head2head: FixtureType[] } = await query<{
    fixture: FixtureType;
    head2head: FixtureType[];
  }>(GET_FIXTURE, { fixtureId });
  const fixture: FixtureType = get(data, 'fixture.fixture', {}) as FixtureType;
  const head2head: FixtureType[] = get(data, 'fixture.head2head', []);
  const homeForm: FixtureType[] = get(data, 'fixture.homeForm', []);
  const awayForm: FixtureType[] = get(data, 'fixture.awayForm', []);

  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return { props: { messages, fixture, head2head, homeForm, awayForm } };
};

export default FixturePage;
