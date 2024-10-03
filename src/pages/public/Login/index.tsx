import Header from '@/components/header';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PasswordField, TextField } from '@/components/ui/forms';
import { Mail } from 'lucide-react';
import CheckboxField from '@/components/ui/forms/checkbox-field';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';

export default function Login() {
    const { control, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const processForm = async (data: unknown) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <Header />
            {/*<pre>{JSON.stringify(watch(), null, 2)}</pre>*/}

            <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Sign in to your account
                </h2>

                <form
                    onSubmit={handleSubmit(processForm)}
                    className="space-y-6"
                >
                    <div>
                        <TextField
                            label="Email"
                            name="email"
                            control={control}
                            icon={<Mail size={18} />}
                            iconPosition="left"
                            placeholder="Enter your email address"
                            className="w-full rounded-md border py-3 pl-8"
                        />
                    </div>
                    <div>
                        <PasswordField
                            label="Password"
                            name="password"
                            control={control}
                            showPassword={showPassword}
                            placeholder="Enter your password"
                            onIconClick={() => handleShowPassword()}
                            type={showPassword ? 'text' : 'password'}
                            showLeftIcon={false}
                            className="w-full rounded-md border px-2 py-3"
                        />
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <CheckboxField
                            control={control}
                            label="Remember me"
                            name="remember"
                        />
                        <Link
                            to={'/forgot-password'}
                            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    <Button
                        className={'w-full'}
                        type="submit"
                        label="Sign In"
                        //isLoading={isPending}
                        loadingText="Please wait"
                        // disabled={isPending}
                    />
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?
                        <Link
                            to={'/sign-up'}
                            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
