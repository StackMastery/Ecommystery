import { teamMembersData } from "@/controllers/frontend/team.controller";
import { TeamMemberCard } from "./TeamClient";

export const revalidate = 10;

const TeamServer = async () => {
  const teamMembers = await teamMembersData();

  return (
    <>
      {teamMembers.map((m, index) => (
        <TeamMemberCard key={`teamm-${index}`} m={m} />
      ))}
    </>
  );
};

export default TeamServer;
