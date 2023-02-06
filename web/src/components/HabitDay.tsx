import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgesseBar';
import dayjs from 'dayjs';
import { HabitsList } from './HabitsList';
import { useState } from 'react';

interface HabitDayProps {
    date: Date
    defaultCompleted?: number
    amount?: number
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
    const [completed, setCompleted] = useState(defaultCompleted);

    const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

    const dayAndMonth = dayjs(date).format('DD/MM')

    const dayOfWeek = dayjs(date).format('dddd')

    function handleCompletedChanged(completed: number) {
        setCompleted(completed)
        console.log(completed)
    }
    const today = dayjs().startOf('day').toDate();
    const isCurrentDay = dayjs(date).isSame(today);

    return (
        <Popover.Root>
            <Popover.Trigger
                className={clsx('w-10 h-10 rounded-lg hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-background', {
                    'bg-zinc-900 border-zinc-800 hover:bg-zinc-600 border-2': completedPercentage === 0,
                    'bg-cyan-500 border-cyan-900 hover:bg-cyan-400 border-2': completedPercentage > 0 && completedPercentage < 20,
                    'bg-cyan-600 border-cyan-400 hover:bg-cyan-500 border-2': completedPercentage >= 20 && completedPercentage < 40,
                    'bg-cyan-700 border-cyan-500 hover:bg-cyan-600 border-2': completedPercentage >= 40 && completedPercentage < 60,
                    'bg-cyan-800 border-cyan-600 hover:bg-cyan-700 border-2': completedPercentage >= 60 && completedPercentage < 80,
                    'bg-cyan-900 border-cyan-700 hover:bg-cyan-800 border-2': completedPercentage >= 80,
                    
                    ["border-zinc-100 hover:text-white border-2"]: isCurrentDay,
                    

                })}

            />

            <Popover.Portal>

                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">

                    <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>

                    <span className='mt-1 font-extrabold leading-tight text-2xl'>{dayAndMonth}</span>

                    <ProgressBar progress={completedPercentage} />

                    <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />
                    <Popover.Arrow height={8} width={16} className='fill-zinc-900 mb-1' />

                </Popover.Content>

            </Popover.Portal>

        </Popover.Root>
    )
}

