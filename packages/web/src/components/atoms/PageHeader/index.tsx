import Container from '@mui/material/Container';
import React from 'react';

export const PageHeader: React.FC = ({ children }) => {
  return (
    <header className="border-b">
      <Container className="py-12">{children}</Container>
    </header>
  );
};

export default PageHeader;
