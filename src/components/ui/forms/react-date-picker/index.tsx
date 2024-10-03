import ReactDatePicker from 'react-datepicker';
import type { DatePickerProps as ReactDatePickerProps } from 'react-datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ErrorMessage } from '@hookform/error-message';
import { Control, Controller } from 'react-hook-form';
import { getMonth, getYear } from 'date-fns';
import { cn } from '@/lib/utils';
import { range } from '@/lib/helpers';
import {
    calendarContainerStyles,
    prevNextButtonStyles,
    timeOnlyStyles,
} from './styles';
import { buttonVariants } from '@/components/ui/button';
import CustomDateInput from './custom-date-input';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DatePickerProps<selectsRange extends boolean | undefined>
    extends Omit<ReactDatePickerProps, 'selectsRange' | 'onChange'> {
    selectsRange?: selectsRange | any;
    control: Control<any>;
    name: string;
    label: string;
    showYear?: boolean;
    showMonth?: boolean;
    handleChange?: (arg: any) => void;
}

/**
 * https://reactdatepicker.com/
 */

export default function DatePicker({
    customInput,
    showPopperArrow = false,
    dateFormat = 'dd/MM/yyyy',
    selectsRange = false,
    showYear = true,
    showMonth = true,
    onCalendarOpen,
    onCalendarClose,
    calendarClassName,
    handleChange,
    name,
    control,
    label,
    ...props
}: DatePickerProps<boolean>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, formState: { errors } }) => {
                // const years = range(1990, getYear(new Date()) + 1, 1);
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ];
                const years = range(1960, getYear(new Date()) + 1);

                // const months = moment.months();
                return (
                    <div className="flex flex-col space-y-1">
                        {label && (
                            <label htmlFor={name} className="">
                                {label}
                            </label>
                        )}
                        <ReactDatePicker
                            customInput={
                                <CustomDateInput
                                    onClear={() => onChange('')} // Set the value to null to clear the date
                                />
                            }
                            renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                                decreaseMonth,
                                increaseMonth,
                                prevMonthButtonDisabled,
                                nextMonthButtonDisabled,
                            }) => (
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={decreaseMonth}
                                        disabled={prevMonthButtonDisabled}
                                        className={buttonVariants({
                                            variant: 'outline',
                                        })}
                                        aria-label="Previous Month"
                                    >
                                        <ChevronLeft />
                                    </button>
                                    {showYear && (
                                        <select
                                            value={getYear(date)}
                                            onChange={({
                                                target: { value: val },
                                            }) => changeYear(val as any)}
                                            className="w-40 py-1"
                                        >
                                            {years.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    {showMonth && (
                                        <select
                                            value={months[getMonth(date)]}
                                            onChange={({
                                                target: { value: val },
                                            }) =>
                                                changeMonth(months.indexOf(val))
                                            }
                                            className="py-1"
                                        >
                                            {months.map((option) => (
                                                <option
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    <button
                                        type="button"
                                        onClick={increaseMonth}
                                        disabled={nextMonthButtonDisabled}
                                        className={buttonVariants({
                                            variant: 'outline',
                                        })}
                                        aria-label="Next Month"
                                    >
                                        <ChevronRight />
                                    </button>
                                </div>
                            )}
                            selected={value}
                            onChange={(date: any) => {
                                if (handleChange) {
                                    handleChange(date);
                                    return;
                                }
                                onChange(date);
                            }}
                            placeholderText="Select Year from Dropdown"
                            // showYearDropdown
                            // scrollableYearDropdown
                            // yearDropdownItemNumber={60}
                            showPopperArrow={showPopperArrow}
                            dateFormat={dateFormat}
                            selectsRange={selectsRange}
                            calendarClassName={cn(
                                calendarContainerStyles.base,
                                calendarContainerStyles.monthContainer.padding,
                                prevNextButtonStyles.base,
                                prevNextButtonStyles.border,
                                prevNextButtonStyles.size,
                                prevNextButtonStyles.children.position,
                                prevNextButtonStyles.children.border,
                                prevNextButtonStyles.children.size,
                                timeOnlyStyles.base,
                                calendarClassName
                            )}
                            {...props}
                        />
                        <ErrorMessage
                            errors={errors}
                            name={name}
                            render={({ message }) => (
                                <p className="mt-1 text-sm text-red-500">
                                    {message}
                                </p>
                            )}
                        />
                    </div>
                );
            }}
        />
    );
}

DatePicker.displayName = 'DatePicker';
