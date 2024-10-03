import { forwardRef } from 'react';
import { CalendarDays, XCircle } from 'lucide-react';
import { cn } from '@/utils/tw-merge';

// Define props for CustomDateInput
interface CustomDateInputProps {
    value?: string;
    onClick?: () => void;
    onClear?: () => void; // Add an onClear prop to handle clearing
}

// Create CustomDateInput using forwardRef and type it correctly
const CustomDateInput = forwardRef<HTMLInputElement, CustomDateInputProps>(
    ({ value, onClick, onClear }, ref) => {
        const baseClass = cn(
            'input-control',
            'placeholder:text-sm placeholder:text-gray-400 placeholder:font-light pl-10' // Adjust padding to accommodate the clear button
        );
        return (
            <div className="relative">
                <input
                    value={value}
                    type="text"
                    className={baseClass}
                    ref={ref}
                    onClick={onClick} // Attach onClick handler to show date picker
                    readOnly // Set as read-only to prevent manual typing
                />
                <CalendarDays className="absolute inset-y-2 ml-2" />
                {value && (
                    <button
                        type="button"
                        className="absolute inset-y-2 right-2"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the click from opening the date picker
                            onClear?.(); // Call onClear to clear the value
                        }}
                        aria-label="Clear date"
                    >
                        <XCircle
                            size={18}
                            className="text-gray-400 hover:text-gray-600"
                        />
                    </button>
                )}
            </div>
        );
    }
);

CustomDateInput.displayName = 'CustomDateInput';

export default CustomDateInput;
