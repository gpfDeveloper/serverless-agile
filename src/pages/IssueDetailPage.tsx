import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import IssueDetail from 'components/project/issue/IssueDetail';
import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

const IssueDetailPage: FunctionComponent = () => {
  const location = useLocation();
  console.log(location);
  // pathname: /projects/project1/issues/773096cf-9680-4a2a-9f4b-28e1db909392
  const paths = location.pathname.split('/');
  const issueId = paths[4];
  return (
    <ProjectLayout>
      <Box>
        <IssueDetail issueId={issueId} />
      </Box>
    </ProjectLayout>
  );
};

export default IssueDetailPage;