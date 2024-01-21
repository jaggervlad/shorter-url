import { MoreVerticalIcon } from 'lucide-react';
import { Button } from './ui/button';

export const CardLinkItemOptions = () => {
  return (
    <Button className="absolute w-8 h-8 p-0 right-1 top-1" variant={'ghost'}>
      <MoreVerticalIcon className="w-4 h-4" />
    </Button>
  );
};
