import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PasswordField, TextField } from '@/components/ui/forms';
import { Mail, AlertCircle } from 'lucide-react';
import CheckboxField from '@/components/ui/forms/checkbox-field';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import useLoginEmployer from '@/api/authentication/use-login-employer';
import { LoginSchema, LoginInputs } from '@/validations/login-schema';

export default function EmployerLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const {
        mutate: loginEmployer,
        isPending,
        isError,
        error,
    } = useLoginEmployer();
    const { control, handleSubmit } = useForm<LoginInputs>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: 'temitopeabiodun685@gmail.com',
            password: 'Password',
        },
    });

    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const processForm: SubmitHandler<LoginInputs> = async (data) => {
        loginEmployer(data, {
            onSuccess: () => {
                navigate('/employer/dashboard');
            },
        });
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white p-8 shadow-2xl rounded-2xl md:max-w-lg w-[90%]">
                <div className="flex flex-col justify-center items-center gap-2 mb-8">
                    <h2 className="text-3xl font-bold text-center text-blue-700">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600">
                        Sign in to your employer account
                    </p>
                </div>

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
                            className="w-full px-8 py-3 rounded-lg text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-300 placeholder-gray-500"
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
                            className="w-full px-8 py-3 rounded-lg text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-300 placeholder-gray-500"
                        />
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <CheckboxField
                            control={control}
                            label="Remember me"
                            name="remember"
                            className="text-blue-600 bg-white"
                        />
                        <Button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            variant="link"
                            className="text-blue-600 hover:text-blue-500"
                        >
                            Forget Password?
                        </Button>
                    </div>

                    <Button
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md"
                        type="submit"
                        label="Sign In"
                        isLoading={isPending}
                        loadingText="Please wait"
                    />
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don’t have an account?{' '}
                        <Link
                            to={'/sign-up'}
                            className="font-medium text-blue-600 hover:text-blue-500"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
                <div className="mt-4 text-center">
                    <Link
                        to={'/home/employer'}
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Return Home
                    </Link>
                </div>
            </div>

            {isError && (
                <div className="mt-4 text-center text-red-600 flex items-center justify-center">
                    <AlertCircle size={20} className="mr-2" />
                    <span>{error?.response?.data?.message as any}</span>
                </div>
            )}
        </div>
    );
}
