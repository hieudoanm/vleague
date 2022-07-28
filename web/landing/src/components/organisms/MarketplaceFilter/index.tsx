import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useTranslations } from 'next-intl';
import React from 'react';

export type Option = {
  label: string;
  value: string;
};

export type FilterOption = {
  key: string;
  header: string;
  options: Option[];
};

export type MarketplaceFilterProps = {
  filterOptions: FilterOption[];
  buildFilterQuery: (event) => void;
};

const MarketplaceFilter: React.FC<MarketplaceFilterProps> = ({
  filterOptions,
  buildFilterQuery,
}) => {
  const t = useTranslations();

  return (
    <div className="border-t">
      {filterOptions.map(({ key, header, options }: FilterOption) => {
        return (
          <div key={`filter-option-${key}`} className="pb-4 border-b">
            <div className="flex justify-between pt-8 pb-4">
              <h2 className="text-xl font-semibold uppercase">{t(header)}</h2>
            </div>
            <FormGroup>
              {options.map(({ label, value }) => {
                return (
                  <FormControlLabel
                    key={`option-${value}`}
                    control={
                      <Checkbox
                        name={key}
                        value={value}
                        onChange={buildFilterQuery}
                      />
                    }
                    label={label}
                  />
                );
              })}
            </FormGroup>
          </div>
        );
      })}
    </div>
  );
};

MarketplaceFilter.displayName = 'MarketplaceFilter';

export default MarketplaceFilter;
