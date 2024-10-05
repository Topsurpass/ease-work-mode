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
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
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
                        <Button
                            type="button"
                            onClick={() => navigate('/forgot-password')}
                            variant="link"
                            className="text-gray-700"
                        >
                            Forget Password?
                        </Button>
                    </div>

                    <Button
                        className={'w-full'}
                        type="submit"
                        label="Sign In"
                        isLoading={isPending}
                        loadingText="Please wait"
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
            {isError && (
                <div className="mt-2 flex items-center justify-center gap-2">
                    <AlertCircle size={20} color="red" />
                    <span className="text-red-500">
                        {error?.response?.data?.message as any}
                    </span>
                </div>
            )}
        </div>
    );
}
