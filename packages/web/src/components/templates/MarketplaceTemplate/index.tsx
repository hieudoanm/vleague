import ConnectToPhantom from '../../atoms/ConnectToPhantom';
import PageTemplate from '../PageTemplate';

type MarketplaceTemplateProps = {
  title: string;
};

const connectToWallet = () => (
  <>
    <ConnectToPhantom />
  </>
);

const MarketplaceTemplate: React.FC<MarketplaceTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <PageTemplate title={title} headerActions={connectToWallet()}>
      {children}
    </PageTemplate>
  );
};

MarketplaceTemplate.displayName = 'MarketplaceTemplate';

export default MarketplaceTemplate;
