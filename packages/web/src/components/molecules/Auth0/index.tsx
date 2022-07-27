import { useUser } from '@auth0/nextjs-auth0';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const settings = [
  { href: '/profile', key: 'profile' },
  { href: '/api/auth/logout', key: 'logOut' },
];

const Auth0: React.FC = () => {
  const t = useTranslations();
  const { user, error, isLoading } = useUser();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  if (isLoading || error || !user) {
    return (
      <Link href="/api/auth/login" passHref>
        <Button startIcon={<LoginIcon />} sx={{ color: 'white' }}>
          {t('logIn')}
        </Button>
      </Link>
    );
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={user?.name || ''}
            src={user?.picture || ''}
            className="border border-white border-2"
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(({ href, key }) => (
          <MenuItem key={href} onClick={handleCloseUserMenu}>
            <Link href={href} passHref>
              <Typography textAlign="center" className="capitalize">
                {t(key)}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Auth0;
