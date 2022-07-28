import Container from '@mui/material/Container';
import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import PageTemplate from '../../../components/templates/PageTemplate';
import { messagesByLocales } from '../../../messages/payment';

const SuccessPage: NextPage = () => {
  const t = useTranslations();

  return (
    <PageTemplate title={t('cancel')}>
      <Container className="py-16">
        <h2 className="capitalize text-3xl mb-8">{t('paymentCancel')}</h2>
        <p className="capitalize">
          {t('backTo')}
          <Link href="/profile" passHref>
            <span className="cursor-pointer underline">{t('profile')}</span>
          </Link>
        </p>
      </Container>
    </PageTemplate>
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

export default SuccessPage;
