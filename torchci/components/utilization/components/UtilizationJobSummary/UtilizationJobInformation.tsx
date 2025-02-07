import {
  InfoCard,
  InfoSection,
  InfoTitle,
} from "components/utilization/styles";

export const UtilizationJobInformation = ({
  workflowId,
  jobId,
  attempt,
  jobName,
  workflowName,
}: {
  workflowId: string;
  jobId: string;
  attempt: string;
  jobName: string;
  workflowName: string;
}) => {
  return (
    <InfoCard>
      <InfoSection>
        <InfoTitle>Job Name:</InfoTitle>
        <span>{jobName}</span>
      </InfoSection>
      <InfoSection>
        <InfoTitle>Workflow Name:</InfoTitle>
        <span>{workflowName}</span>
      </InfoSection>
      <InfoSection>
        <InfoTitle>Workflow(run)Id:</InfoTitle>
        <span>{workflowId}</span>
      </InfoSection>
      <InfoSection>
        <InfoTitle>Job Id:</InfoTitle>
        <span>{jobId}</span>
      </InfoSection>
      <InfoSection>
        <InfoTitle>Attempt:</InfoTitle>
        <span>{attempt}</span>
      </InfoSection>
    </InfoCard>
  );
};
