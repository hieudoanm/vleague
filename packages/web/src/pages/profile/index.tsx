import { useQuery } from '@apollo/client';
import { useUser, UserProfile } from '@auth0/nextjs-auth0';
import FileCopy from '@mui/icons-material/FileCopy';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { loadStripe } from '@stripe/stripe-js';
import get from 'lodash/get';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { axiosPost } from 'shared';
import { GET_USER } from '../../apollo/schemas';
import PageTemplate from '../../components/templates/PageTemplate';
import { messagesByLocales } from '../../messages/profile';
import copy from '../../utils/copy';

type DonateProps = { user: UserProfile };

const Donate: React.FC<DonateProps> = ({ user }) => {
  const { loading, data } = useQuery(GET_USER, {
    variables: { email: user.email },
  });

  console.log(loading, data);

  if (loading) {
    return (
      <Card className="shadow border">
        <CardHeader title={'API Key'} className="capitalize" />
        <CardContent>Getting API Key</CardContent>
      </Card>
    );
  }

  const apiKey = get(data, 'user.key', '');

  const createCheckOutSession = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    const checkoutSession = await axiosPost<{ id: string }, { amount: number }>(
      '/api/stripe',
      { amount: 5 }
    );

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession?.id,
    });

    if (result?.error) {
      alert(result?.error.message);
    }
  };

  return (
    <Card className="shadow border">
      <CardHeader title={'API Key'} className="capitalize" />
      <CardContent>
        {!apiKey && (
          <div>
            <p className="mb-4">
              Support the project by purchasing the API Key donation!
            </p>
            <Button
              variant="contained"
              type="button"
              className="w-full"
              onClick={createCheckOutSession}
            >
              Stripe
            </Button>
          </div>
        )}
        {apiKey && (
          <OutlinedInput
            label="API Key"
            id="apiKey"
            name="apiKey"
            placeholder="API Key"
            value={apiKey}
            className="w-full"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => copy(apiKey, 'API Key')}
                  edge="end"
                >
                  <FileCopy />
                </IconButton>
              </InputAdornment>
            }
            disabled
          />
        )}
      </CardContent>
    </Card>
  );
};

type ProfileProps = { user: UserProfile };

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const t = useTranslations();

  return (
    <Card className="shadow border">
      <CardHeader title={t('profile')} className="capitalize" />
      <CardContent>
        <div className="mb-8">
          <TextField
            label="Full Name"
            id="name"
            name="name"
            placeholder="Full Name"
            value={user.name}
            className="w-full"
            disabled
          />
        </div>
        <div className="mb-8">
          <TextField
            label="Username"
            id="nickname"
            name="nickname"
            placeholder="Username"
            value={user.nickname}
            className="w-full"
            disabled
          />
        </div>
        <TextField
          label="Email Address"
          id="email"
          name="email"
          placeholder="Email Address"
          value={user.email}
          className="w-full"
          disabled
        />
      </CardContent>
    </Card>
  );
};

const ProfilePage: NextPage = () => {
  const { user, isLoading } = useUser();
  const t = useTranslations();

  return (
    <PageTemplate title={t('profile')}>
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>{!isLoading && <Profile user={user} />}</div>
          <div>{!isLoading && <Donate user={user} />}</div>
        </div>
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

export default ProfilePage;
