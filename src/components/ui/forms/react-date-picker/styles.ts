export const calendarContainerStyles = {
    base: '[&.react-datepicker]:shadow-lg [&.react-datepicker]:border-gray-100 [&.react-datepicker]:rounded-md',
    monthContainer: {
        padding: '[&.react-datepicker>div]:pt-5 [&.react-datepicker>div]:pb-1',
    },
};

export const prevNextButtonStyles = {
    base: '[&.react-datepicker>button]:items-baseline [&.react-datepicker>button]:top-7 [&.react-datepicker>button]:bg-blue-500 ',
    border: '[&.react-datepicker>button]:border-none [&.react-datepicker>button]:border-solid [&.react-datepicker>button]:border-muted [&.react-datepicker>button]:rounded-md',
    size: '[&.react-datepicker>button]:h-[25px] [&.react-datepicker>button]:w-[25px]',
    children: {
        position: '[&.react-datepicker>button>span]:top-0',
        border: '[&.react-datepicker>button>span]:before:border-t-[1.5px] [&.react-datepicker>button>span]:before:border-r-[1.5px] [&.react-datepicker>button>span]:before:border-muted',
        size: '[&.react-datepicker>button>span]:before:h-[7px] [&.react-datepicker>button>span]:before:w-[7px]',
    },
};

export const timeOnlyStyles = {
    base: '[&.react-datepicker--time-only>div]:pr-0 [&.react-datepicker--time-only>div]:w-28',
};
