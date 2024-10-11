import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PasswordField, TextField } from '@/components/ui/forms';
import { Mail, AlertCircle } from 'lucide-react';
import CheckboxField from '@/components/ui/forms/checkbox-field';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import useLoginUser from '@/api/authentication/use-login-user';
import { LoginSchema, LoginInputs } from '@/validations/login-schema';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { mutate: loginUser, isPending, isError, error } = useLoginUser();
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
        loginUser(data, {
            onSuccess: () => {
                navigate('/dashboard');
            },
        });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100">
            {/*<pre>{JSON.stringify(watch(), null, 2)}</pre>*/}

            <div className="bg-white p-8 shadow-2xl rounded-2xl max-w-lg w-full">
                <div className="flex flex-col justify-center items-center gap-2 mb-8">
                    <h2 className="text-3xl font-bold text-center text-blue-700">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600">Sign in to apply for jobs</p>
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
                            className="w-full px-8 py-3 rounded-lg text-gray-900 bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-200 transition duration-300 ease-in-out"
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
                            className="text-blue-600"
                        />
                        <Button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            variant="link"
                            className="text-blue-600 hover:text-blue-500"
                        >
                            Forgot Password?
                        </Button>
                    </div>

                    <Button
                        className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition duration-300 ease-in-out"
                        type="submit"
                        label="Sign In"
                        isLoading={isPending}
                        loadingText="Please wait"
                    />
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to={'/signup'}
                            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        <Link
                            to={'/'}
                            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                        >
                            Return Home
                        </Link>
                    </p>
                </div>
            </div>

            {isError && (
                <div className="mt-4 flex items-center justify-center gap-2">
                    <AlertCircle size={20} color="red" />
                    <span className="text-red-500">
                        {error?.response?.data?.message as any}
                    </span>
                </div>
            )}
        </div>
    );
}
