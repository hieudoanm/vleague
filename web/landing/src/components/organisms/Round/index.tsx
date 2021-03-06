import ExpandMore from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Fixture as FixtureType } from 'shared';
import FixtureDetails from '../FixtureDetails';

export type RoundProps = {
  round: string;
  fixturesByDates: Record<string, FixtureType[]>;
};

const Round: React.FC<RoundProps> = ({ round, fixturesByDates }) => {
  const t = useTranslations();

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`matchday-${round}-content`}
        id={`matchday-${round}-header`}
      >
        <h2 className="font-semibold text-2xl capitalize">
          {t('round')} {round}
        </h2>
      </AccordionSummary>
      <AccordionDetails>
        {Object.keys(fixturesByDates).map((date: string) => {
          const fixturesByDate = fixturesByDates[date] || [];
          return (
            <div key={date}>
              <div className="py-4 border-b">
                <h3 className="font-medium text-xl">{date}</h3>
              </div>
              <>
                {fixturesByDate.map((fixture: FixtureType) => {
                  return (
                    <FixtureDetails key={fixture.fixtureId} fixture={fixture} />
                  );
                })}
              </>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

Round.displayName = 'Round';

export default Round;
