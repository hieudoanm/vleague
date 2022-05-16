import Container from '@mui/material/Container';
import React from 'react';

const PageFooter: React.FC = ({ children }) => {
  return (
    <footer className="border-t">
      <Container className="py-8">{children}</Container>
    </footer>
  );
};

PageFooter.displayName = 'PageFooter';

export default PageFooter;
