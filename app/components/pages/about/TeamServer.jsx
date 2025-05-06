import { teamMembersData } from "@/controllers/frontend/team.controller";
import { TeamMemberCard } from "./TeamClient";

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
