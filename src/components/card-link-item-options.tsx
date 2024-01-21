import { MoreVerticalIcon, Users } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const CardLinkItemOptions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          className="absolute w-8 h-8 p-0 right-1 top-1"
          variant={'ghost'}
        >
          <MoreVerticalIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      {/* <DropdownMenuContent>
        <DropdownMenuItem>
          <Users className="w-4 h-4 mr-2" />
          <span>Team</span>
        </DropdownMenuItem>
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
};
