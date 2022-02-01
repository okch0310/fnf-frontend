import ContentCard from '../../components/ContentCard/ContentCard';
import SalesChannelChart from './SalesChannelChart';
import SalesChannelTable from './SalesChannelTable';

export default function SalesChannelStatus() {
  return (
    <>
      <ContentCard
        children={<SalesChannelChart staticWidth={400} />}
        staticMaxWidth={400}
      />
      <ContentCard children={<SalesChannelTable />} staticMaxWidth={0} />
    </>
  );
}
