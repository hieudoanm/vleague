import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { FormEvent, useState } from 'react';
import MarketplaceTemplate from '../../../components/templates/MarketplaceTemplate';
import { messagesByLocales } from '../../../messages/fixtures';
import { addSprite } from '../../../utils/solana';

const AddPage: NextPage = () => {
  const t = useTranslations();
  const [spriteLink, setSpriteLink] = useState<string>('');

  const submitSprite = async (event: FormEvent) => {
    event.preventDefault();
    await addSprite(spriteLink);
  };

  return (
    <MarketplaceTemplate title={t('marketplace')}>
      <Container className="py-16">
        <form onSubmit={submitSprite}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <TextField
                id="spriteLink"
                name="spriteLink"
                label="Sprite Link"
                value={spriteLink}
                onChange={(event) => setSpriteLink(event.target.value)}
                className="w-full"
                required
              />
            </div>
            <div>
              <Button type="submit" variant="contained" className="w-full">
                Add Sprite
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </MarketplaceTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const locale = get(context, 'locale', 'en');
  const messages = messagesByLocales[locale] || messagesByLocales.en;

  return {
    props: {
      messages,
    },
  };
};

export default AddPage;
