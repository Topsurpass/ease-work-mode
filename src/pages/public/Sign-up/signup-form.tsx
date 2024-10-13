import { useMemo } from 'react';
import { UserIcon, X, Plus, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-range-picker';
import {
    TextField,
    TextArea,
    PhoneInputField,
    ReactSelect,
} from '@/components/ui/forms';
import { SignUpInputs, SignUpSchema } from '@/validations/sign-up-schema';

const initialValue = {
    jobTitle: '',
    firstname: '',
    lastname: '',
    password: '',
    bio: '',
    gender: {},
    phoneNumber: '',
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

export default function SignUpForm() {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        //watch,
        //formState: { errors },
    } = useForm<SignUpInputs>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: initialValue,
    });

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
        const formattedData = {
            ...data,
            skills: data.skills.map((skill) => skill.value),
            gender: data.gender.value,
        };

        console.log(formattedData);
    };

    const genderOptions = useMemo(
        () => [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
        ],
        []
    );

    const skillOptions = useMemo(
        () => [
            { value: 'javascript', label: 'JavaScript' },
            { value: 'react', label: 'React' },
            { value: 'nodejs', label: 'Node.js' },
            { value: 'python', label: 'Python' },
            { value: 'uiux', label: 'UI/UX' },
            // Add more skills here
        ],
        []
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6 mt-20">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                <div className="flex justify-between items-center p-4 border-b">
                    <div className="flex items-center gap-3">
                        <UserIcon size={24} />
                        <h2 className="text-xl font-bold">Sign Up</h2>
                    </div>
                    <Button
                        onClick={() => navigate(-1)}
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                    >
                        <X />
                    </Button>
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
                                    name="firstname"
                                    control={control}
                                    placeholder="Your first name"
                                    className="w-full p-3 border rounded-md"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Last Name"
                                    name="lastname"
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
                                    label=""
                                    name="phoneNumber"
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
                        <h3 className="text-lg font-semibold">Experience</h3>
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

                    {/* Submit Button */}
                    <div className="text-right">
                        <Button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-600 rounded-lg"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
