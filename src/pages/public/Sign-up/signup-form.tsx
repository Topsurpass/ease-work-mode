import { useMemo, useState } from 'react';
import { UserIcon, Plus, Trash } from 'lucide-react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { toast } from 'sonner';
import EventFileUpload from './event-file-upload';
import { GENDER } from '@/constants';
import { techSkils } from '@/data/skills';
import useMutateJobSeeker from '@/api/job-seekers/use-mutate-jobSeekers';
import { RequestMethod } from '@/types/enum';
import {
    TextField,
    TextArea,
    PhoneInputField,
    ReactSelect,
} from '@/components/ui/forms';
import { SignUpInputs, SignUpSchema } from '@/validations/sign-up-schema';

const initialValue = {
    jobTitle: '',
    firstName: '',
    lastName: '',
    password: '',
    bio: '',
    gender: {},
    phone: '',
    email: '',
    address: {
        country: '',
        city: '',
        state: '',
        addressLine: '',
    },
    experience: [
        {
            companyName: '',
            jobTitle: '',
            description: '',
            startDate: '',
            endDate: '',
        },
    ],
    education: [{ school: '', degree: '', fieldOfStudy: '' }],
    portfolio: [{ link: '', description: '' }],
    certification: [{ title: '', date: '', link: '' }],
    skills: [],
};

const initialState = {
    result: {},
    preview: '',
    hasFile: false,
    error: [],
};
export default function SignUpForm() {
    const { control, handleSubmit, reset } = useForm<SignUpInputs>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: initialValue,
    });
    const [file, setFile] = useState<any>(initialState);
    const resetFile = () => setFile(initialState);
    const { mutate: mutateJobSeeker, isPending } = useMutateJobSeeker();

    const {
        fields: experienceFields,
        append: appendExperience,
        remove: removeExperience,
    } = useFieldArray({
        control,
        name: 'experience',
    });

    const {
        fields: educationFields,
        append: appendEducation,
        remove: removeEducation,
    } = useFieldArray({
        control,
        name: 'education',
    });

    const {
        fields: portfolioFields,
        append: appendPortfolio,
        remove: removePortfolio,
    } = useFieldArray({
        control,
        name: 'portfolio',
    });

    const {
        fields: certificationFields,
        append: appendCertification,
        remove: removeCertification,
    } = useFieldArray({
        control,
        name: 'certification',
    });

    const processForm: SubmitHandler<SignUpInputs> = async (data) => {
        const formData = new FormData();
        formData.append('cv', file?.result);
        formData.append('jobTitle', data.jobTitle);
        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('phone', data.phone);
        formData.append('bio', data?.bio || '');
        formData.append('gender', JSON.stringify(data.gender.value));
        formData.append('address', JSON.stringify(data.address));
        formData.append('experience', JSON.stringify(data.experience));
        formData.append('education', JSON.stringify(data.education));
        formData.append('portfolio', JSON.stringify(data.portfolio));
        formData.append('certification', JSON.stringify(data.certification));
        formData.append('skills', JSON.stringify(data.skills));

        mutateJobSeeker(
            {
                requestMethod: RequestMethod.POST,
                requestPayload: formData,
            },
            {
                onSuccess: (res) => {
                    toast.success('Sign up', {
                        description: res?.data?.message,
                    });
                    reset();
                },
                onError: (err: any) => {
                    console.log(err);
                    toast.error(err.response.data.error);
                },
            }
        );
        //for (let [key, value] of formData.entries()) {
        //    console.log(`${key}: ${value}`);
        //}
        //data.cv = formData.image;
        //const formattedData = {
        //    ...data,
        //    skills: data.skills.map((skill) => skill.value),
        //    gender: data.gender.value,
        //};
    };

    const genderOptions = useMemo(() => GENDER, []);
    const skillOptions = useMemo(() => techSkils, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6 mt-20">
            <div className="w-full md:max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                <div className="flex justify-between items-center p-4 border-b">
                    <div className="flex items-center gap-3">
                        <UserIcon size={24} />
                        <h2 className="text-xl font-bold">Sign Up</h2>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(processForm)}
                    className="p-6 space-y-6"
                >
                    {/*<pre>{JSON.stringify(watch(), null, 2)}</pre>*/}
                    {/* Personal Information */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="">
                                <TextField
                                    label="Job Title"
                                    name="jobTitle"
                                    control={control}
                                    placeholder="Desired job title"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>

                            <div>
                                <TextField
                                    label="First Name"
                                    name="firstName"
                                    control={control}
                                    placeholder="Your first name"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    control={control}
                                    placeholder="Your last name"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    control={control}
                                    placeholder="Password"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>
                            <div className="">
                                <TextArea
                                    label="Biography"
                                    name="bio"
                                    control={control}
                                    rows={2}
                                    placeholder="Tell us about yourself"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>

                            <div>
                                <ReactSelect
                                    label="Gender"
                                    name="gender"
                                    control={control}
                                    options={genderOptions}
                                    placeholder="Select your skills"
                                    className="w-full rounded-md"
                                />
                            </div>
                            <div className="">
                                <PhoneInputField
                                    label="Phone"
                                    name="phone"
                                    control={control}
                                    inputClassName="p-3"
                                />
                            </div>

                            <div>
                                <TextField
                                    label="Email Address"
                                    name="email"
                                    control={control}
                                    type="email"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Address Information */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Address Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <TextField
                                    label="Country"
                                    name="address.country"
                                    control={control}
                                    placeholder="Your Country"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="City"
                                    name="address.city"
                                    control={control}
                                    placeholder="Your city"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>

                            <div>
                                <TextField
                                    label="State"
                                    name="address.state"
                                    control={control}
                                    placeholder="Your state"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>

                            <div>
                                <TextArea
                                    label="Address Line 1"
                                    name="address.addressLine"
                                    control={control}
                                    rows={3}
                                    placeholder="Street address"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">Education</h3>
                        {educationFields.map((field, index) => (
                            <div
                                key={field.id}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                <div>
                                    <TextField
                                        label="School"
                                        name={`education[${index}].school`}
                                        control={control}
                                        placeholder="School Name"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        label="Degree"
                                        name={`education[${index}].degree`}
                                        control={control}
                                        placeholder="Degree"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        label="Field of Study"
                                        name={`education[${index}].fieldOfStudy`}
                                        control={control}
                                        placeholder="Field of Study"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>

                                <Button
                                    onClick={() => removeEducation(index)}
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 bg-red-500 text-white"
                                >
                                    <Trash className="w-4 h-4" /> Remove
                                    Education
                                </Button>
                            </div>
                        ))}
                        <Button
                            onClick={() =>
                                appendEducation({
                                    school: '',
                                    degree: '',
                                    fieldOfStudy: '',
                                })
                            }
                            className="flex items-center"
                        >
                            <Plus /> Add Education
                        </Button>
                    </section>

                    {/* Experience Section */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        {experienceFields.map((field, index) => (
                            <div
                                key={field.id}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                <div>
                                    <TextField
                                        label="Company Name"
                                        name={`experience[${index}].companyName`}
                                        control={control}
                                        placeholder="Company Name"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        label="Job Title"
                                        name={`experience[${index}].jobTitle`}
                                        control={control}
                                        placeholder="Job Title"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <TextArea
                                        label="Description"
                                        name={`experience[${index}].description`}
                                        control={control}
                                        rows={2}
                                        placeholder="Job Description"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <DatePicker
                                        name={`experience[${index}].startDate`}
                                        control={control}
                                        label="Start date"
                                    />
                                </div>
                                <div>
                                    <DatePicker
                                        name={`experience[${index}].endDate`}
                                        control={control}
                                        label="End date"
                                    />
                                </div>

                                <Button
                                    onClick={() => removeExperience(index)}
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 bg-red-500 text-white"
                                >
                                    <Trash className="w-4 h-4" /> Remove
                                    Experience
                                </Button>
                            </div>
                        ))}
                        <Button
                            onClick={() =>
                                appendExperience({
                                    companyName: '',
                                    jobTitle: '',
                                    description: '',
                                    startDate: '',
                                    endDate: '',
                                })
                            }
                            className="flex items-center"
                        >
                            <Plus /> Add Experience
                        </Button>
                    </section>

                    {/* Skills and Expertise */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Skills & Expertise
                        </h3>
                        <div>
                            <ReactSelect
                                label="Skills"
                                name="skills"
                                control={control}
                                options={skillOptions}
                                isMulti
                                placeholder="Select your skills"
                                className="w-full rounded-md"
                            />
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">Certifiction</h3>
                        {certificationFields.map((field, index) => (
                            <div
                                key={field.id}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                <div>
                                    <TextField
                                        label="Certificate Title"
                                        name={`certification[${index}].title`}
                                        control={control}
                                        placeholder="ALX Software engineering (Backend)"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        label="Link"
                                        name={`certification[${index}].link`}
                                        control={control}
                                        placeholder="https://my-certificate-verify-link"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <DatePicker
                                        name={`certification[${index}].date`}
                                        control={control}
                                        label="Received date"
                                    />
                                </div>

                                <Button
                                    onClick={() => removeCertification(index)}
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 bg-red-500 text-white"
                                >
                                    <Trash className="w-4 h-4" /> Remove
                                    Certificate
                                </Button>
                            </div>
                        ))}
                        <Button
                            onClick={() =>
                                appendCertification({
                                    title: '',
                                    link: '',
                                    date: '',
                                })
                            }
                            className="flex items-center"
                        >
                            <Plus /> Add Certificate
                        </Button>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">Portfolio</h3>
                        {portfolioFields.map((field, index) => (
                            <div
                                key={field.id}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                <div>
                                    <TextField
                                        label="Link to portfolio"
                                        name={`portfolio[${index}].link`}
                                        control={control}
                                        placeholder="https://my-portfolio-link.com"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>
                                <div>
                                    <TextArea
                                        label="Description"
                                        name={`portfolio[${index}].description`}
                                        control={control}
                                        rows={2}
                                        placeholder="Short Description"
                                        className="w-full p-3 border rounded-md"
                                    />
                                </div>

                                <Button
                                    onClick={() => removePortfolio(index)}
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 bg-red-500 text-white"
                                >
                                    <Trash className="w-4 h-4" /> Remove
                                    Portfolio
                                </Button>
                            </div>
                        ))}
                        <Button
                            onClick={() =>
                                appendPortfolio({
                                    link: '',
                                    description: '',
                                })
                            }
                            className="flex items-center"
                        >
                            <Plus /> Add Portfolio
                        </Button>
                    </section>
                    <section className="space-y-4">
                        <h3 className="text-lg font-semibold">Attach CV</h3>
                        <EventFileUpload
                            resetFile={resetFile}
                            file={file}
                            setFile={setFile}
                        />
                    </section>

                    {/* Submit Button */}
                    <div className="text-right">
                        <Button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-600 rounded-lg"
                            isLoading={isPending}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
