import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl?: string;
  className?: string;
}

const TeamMember = ({ name, role, imageUrl, className }: TeamMemberProps) => {
  // Get initials from the name for the fallback
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Avatar className="h-20 w-20 border-2 border-purple-200 shadow-md">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback className="bg-purple-100 text-purple-800 font-medium">
          {initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="mt-3 font-medium text-lg text-gray-800">{name}</h3>
      <p className="text-sm text-purple-700 font-medium">{role}</p>
      <p className="text-xs text-gray-500 mt-1">Estudante de engenharia de software</p>
    </div>
  );
};

export default TeamMember;