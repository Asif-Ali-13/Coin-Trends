import { ChartNoAxesCombined } from 'lucide-react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ModeToggle } from './themeButton';

export function Header() {
    return (
        <div className='flex items-center justify-between mx-auto pt-4 mb-8'>
            <div className='flex gap-4 items-center'>
                <ChartNoAxesCombined className='h-8 w-8' />
                <div className='text-2xl font-bold '>
                    Coin Trends
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='relative'>
                    <Search className='absolute top-2.5 left-2.5 h-4 w-4 ' />
                    <Input type='search'placeholder='Search a coin'
                    className='pl-8 '
                    />
                </div>
                <ModeToggle />
            </div>
        </div>
    );
}