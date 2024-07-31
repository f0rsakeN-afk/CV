import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Container from "../components/Container";
import Label from "../components/Label";
import Title from "../components/Title";
import { FormData } from "../utils/DataType";
import { FaArrowUp, FaArrowDown, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setPDFData } from "../store/pdfSlice";

const DataTable = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>();
    const [personalOpen, setPersonalOpen] = useState<boolean>(true);
    const [experienceOpen, setExperienceOpen] = useState<boolean>(false);
    const [educationOpen, setEducationOpen] = useState<boolean>(false);



    const { fields: experienceFields, append: appendExperience } = useFieldArray({
        control,
        name: "experience",
    });

    const { fields: educationFields, append: appendEducation } = useFieldArray({
        control,
        name: "education",
    });

    const inputStyle = 'rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out';

    const onSubmit = (data: FormData) => {
        // console.log(data);
        dispatch(setPDFData(data));
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md  ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Details Section */}
                <div className="space-y-4 border border-slate-400 p-4 rounded-md">
                    <div className="flex items-center justify-between">
                        <Title text="Personal Details" />
                        <button
                            type="button"
                            onClick={() => setPersonalOpen(!personalOpen)}
                            aria-expanded={personalOpen}
                            aria-controls="personal-details"
                        >
                            {personalOpen ? <FaArrowUp className="text-gray-700" /> : <FaArrowDown className="text-gray-700" />}
                        </button>
                    </div>
                    <div
                        id="personal-details"
                        className={`overflow-hidden transition-all duration-500 ${personalOpen ? 'max-h-full' : 'max-h-0'}`}
                    >
                        <Container>
                            <Label text="Full Name" />
                            <input
                                type="text"
                                {...register('fullName', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && <span className="text-red-600">{errors.fullName.message}</span>}
                        </Container>
                        <Container>
                            <Label text="Email Address" />
                            <input
                                type="email"
                                {...register('email', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="Enter your email address"
                            />
                            {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                        </Container>
                        <Container>
                            <Label text="Phone Number" />
                            <input
                                type="tel"
                                {...register('phoneNumber', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="+977-9800000000"
                            />
                            {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber.message}</span>}
                        </Container>
                        <Container>
                            <Label text="Address" />
                            <input
                                type="text"
                                {...register('address', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="Enter your address"
                            />
                            {errors.address && <span className="text-red-600">{errors.address.message}</span>}
                        </Container>
                        <Container>
                            <Label text="Summary" />
                            <textarea
                                className={inputStyle}
                                placeholder="Enter a brief summary about yourself"
                                {...register('summary', { required: 'This field is required' })}
                            />
                            {errors.summary && <span className="text-red-600">{errors.summary.message}</span>}
                        </Container>
                    </div>
                </div>

                {/* Experience Details Section */}
                <div className="space-y-4 border border-slate-400 p-4 rounded-md">
                    <div className="flex items-center justify-between">
                        <Title text="Experience Details" />
                        <button
                            type="button"
                            onClick={() => setExperienceOpen(!experienceOpen)}
                            aria-expanded={experienceOpen}
                            aria-controls="experience-details"
                        >
                            {experienceOpen ? <FaArrowUp className="text-gray-700" /> : <FaArrowDown className="text-gray-700" />}
                        </button>
                    </div>
                    <div
                        id="experience-details"
                        className={`overflow-hidden transition-all duration-500 ${experienceOpen ? 'max-h-full' : 'max-h-0'}`}
                    >
                        {experienceFields.map((field, index) => (
                            <div key={field.id} className="space-y-2">
                                <Container>
                                    <span className="px-3  py-1 rounded-full bg-yellow-400 w-max">{index + 1}</span>
                                    <Label text=" Company Name" />
                                    <input
                                        type="text"
                                        {...register(`experience.${index}.companyName`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="Position/Title" />
                                    <input
                                        type="text"
                                        {...register(`experience.${index}.position`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="Start Date" />
                                    <input
                                        type="date"
                                        {...register(`experience.${index}.startDate`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="End Date" />
                                    <input
                                        type="date"
                                        {...register(`experience.${index}.endDate`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="Description" />
                                    <textarea
                                        {...register(`experience.${index}.description`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <hr className="py-3" />
                            </div>
                        ))}
                        <button
                            type="button"
                            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                            onClick={() => appendExperience({ companyName: '', position: '', startDate: '', endDate: '', description: '' })}
                        >
                            <FaPlus />
                            <span>Add Experience</span>
                        </button>
                    </div>
                </div>

                {/* Education Details Section */}
                <div className="space-y-4 border border-slate-400 p-4 rounded-md">
                    <div className="flex items-center justify-between">
                        <Title text="Education Details" />
                        <button
                            type="button"
                            onClick={() => setEducationOpen(!educationOpen)}
                            aria-expanded={educationOpen}
                            aria-controls="education-details"
                        >
                            {educationOpen ? <FaArrowUp className="text-gray-700" /> : <FaArrowDown className="text-gray-700" />}
                        </button>
                    </div>
                    <div
                        id="education-details"
                        className={`overflow-hidden transition-all duration-500 ${educationOpen ? 'max-h-full' : 'max-h-0'}`}
                    >
                        {educationFields.map((field, index) => (
                            <div key={field.id} className="space-y-2">
                                <Container>
                                    <span className="px-3  py-1 rounded-full bg-yellow-400 w-max">{index + 1}</span>
                                    <Label text="School" />
                                    <input
                                        type="text"
                                        {...register(`education.${index}.schoolName`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="Degree" />
                                    <input
                                        type="text"
                                        {...register(`education.${index}.degree`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="Country" />
                                    <input
                                        type="text"
                                        {...register(`education.${index}.country`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="Start Date" />
                                    <input
                                        type="date"
                                        {...register(`education.${index}.startDate`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <Container>
                                    <Label text="End Date" />
                                    <input
                                        type="date"
                                        {...register(`education.${index}.endDate`)}
                                        className={inputStyle}
                                    />
                                </Container>
                                <hr className="py-3" />
                            </div>
                        ))}
                        <button
                            type="button"
                            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                            onClick={() => appendEducation({ schoolName: "", degree: "", country: "", startDate: "", endDate: '' })}
                        >
                            <FaPlus />
                            <span>Add Education</span>
                        </button>
                    </div>
                </div>

                <button
                    className="px-4 py-2 bg-orange-500 text-white text-xl rounded-md hover:bg-orange-600 transition-all ease-linear duration-150"
                    type="submit"
                >
                    Submit
                </button>
            </form>


        </div>
    );
}

export default DataTable;
