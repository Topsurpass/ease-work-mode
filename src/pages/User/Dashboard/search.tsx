import { IoIosSearch } from 'react-icons/io';
import { TextField } from '@/components/ui/forms';
import { useForm } from 'react-hook-form';

export default function Search() {
    const { control } = useForm();

    return (
        <div className="md:mt-20 mt-5 flex justify-center px-5">
            <div className="relative w-full md:max-w-lg max-w-md">
                <TextField
                    type="search"
                    control={control}
                    name="search"
                    placeholder="Search for jobs..."
                    className="w-full px-5 py-3 rounded-lg text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border-2 border-black placeholder-gray-500"
                />
                <IoIosSearch className="absolute right-3 top-3 w-6 h-6 text-gray-500" />
            </div>
        </div>
    );
}
