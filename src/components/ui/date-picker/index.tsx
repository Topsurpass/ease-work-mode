'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Control, Controller } from 'react-hook-form';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

interface DatePickerProps {
    label?: string;
    name: string;
    control: Control<any>; // Generic to work with any form schema
    className?: string;
    placeholder?: string;
}

export function DatePicker({
    label,
    name,
    control,
    className = '',
    placeholder = 'Pick a date',
}: DatePickerProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-2">{label}</label>}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => (
                    <>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={'outline'}
                                    className={cn(
                                        'w-[240px] pl-3 text-left font-normal',
                                        !field.value && 'text-muted-foreground',
                                        fieldState.error && 'border-red-500' // Highlight input when error
                                    )}
                                >
                                    {field.value ? (
                                        format(field.value, 'PPP')
                                    ) : (
                                        <span>{placeholder}</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date('1900-01-01')
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        {fieldState.error && (
                            <p className="mt-1 text-sm text-red-500">
                                {fieldState.error.message}
                            </p>
                        )}
                    </>
                )}
            />
        </div>
    );
}
