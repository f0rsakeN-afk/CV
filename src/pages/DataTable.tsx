import { useState } from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Label from "../components/Label";
import Title from "../components/Title";
import { dataTypes } from "../utils/DataType";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const DataTable = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<dataTypes>();
    const [open, setIsOpen] = useState<boolean>(false);

    const inputStyle = 'rounded-md p-2 border ';

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 rounded-md p-2">
                <div className="flex flex-col space-y-3 border border-slate-400 p-2 rounded-md">
                    <div className="flex items-center justify-between">
                        <Title text={'Personal Details'} />
                        <button
                            type="button"
                            onClick={() => setIsOpen(!open)}
                        >
                            {open ? <FaArrowUp className="text-red-500 hover:text-red-600 transition-all ease-linear duration-150 " /> : <FaArrowDown className="text-red-500 hover:text-red-600 transition-all ease-linear duration-150" />}
                        </button>
                    </div>
                    <div
                        className={`overflow-hidden transition-height duration-600 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        <Container>
                            <Label text={'Full Name'} />
                            <input
                                type="text"
                                {...register('fullName', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="Enter your fullname"
                            />
                            {errors.fullName && <span>{errors.fullName.message}</span>}
                        </Container>
                        <Container>
                            <Label text={'Email Address'} />
                            <input
                                type="email"
                                {...register('email', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="Enter your email address"
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </Container>
                        <Container>
                            <Label text={'Phone Number'} />
                            <input
                                type="tel"
                                {...register('phoneNumber', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="+977-9800000000"
                            />
                            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
                        </Container>
                        <Container>
                            <Label text={'Address'} />
                            <input
                                type="text"
                                {...register('address', { required: 'This field is required' })}
                                className={inputStyle}
                                placeholder="Enter your address"
                            />
                            {errors.address && <span>{errors.address.message}</span>}
                        </Container>
                        <Container>
                            <Label text={'Summary'} />
                            <textarea
                                className={inputStyle}
                                placeholder="Enter a brief summary about yourself"
                                {...register('summary', { required: 'This field is required' })}
                            />
                            {errors.summary && <span>{errors.summary.message}</span>}
                        </Container>
                    </div>
                </div>

                <div className="flex flex-col space-y-3 border border-slate-400 p-2 rounded-md">
                    <Title text={'Experience Details'} />
                    <Container>
                        <Label text={'Company Name'} />
                        <input
                            type="text"
                            {...register('companyName')}
                            className={inputStyle}
                        />
                    </Container>
                    <Container>
                        <Label text="Position/Title" />
                        <input
                            type="text"
                            {...register('position')}
                            className={inputStyle}
                        />
                    </Container>
                    <Container>
                        <Label text='Start Date' />
                        <input
                            type="date"
                            {...register('startDate')}
                            className={inputStyle}
                        />
                    </Container>
                    <Container>
                        <Label text='End Date' />
                        <input
                            type="date"
                            {...register('endDate')}
                            className={inputStyle}
                        />
                    </Container>
                    <Container>
                        <Label text="Description" />
                        <textarea
                            {...register('description')}
                            className={inputStyle}
                        />
                    </Container>


                    <button className="px-6 py-2 bg-blue-500 w-max text-white text-xl rounded-md hover:bg-blue-600 transition-all ease-linear duration-150">Add</button>
                </div>



                <div className="flex flex-col space-y-3 border border-slate-400 p-2 rounded-md">

                    <div className="">
                        <Title text="Education Details" />

                    </div>

                    <Container>
                        <Label text="School" />
                        <input type="text"{...register('schoolName')} className={inputStyle} />


                    </Container>

                    <Container>
                        <Label text="Degree" />
                        <input type="text" {...register('degree')} className={inputStyle} />
                    </Container>
                    <Container>
                        <Label text="Country" />
                        <input type="text" {...register('country')} className={inputStyle} />
                    </Container>
                    <Container>
                        <Label text="Start Date" />
                        <input type="date" {...register('startDate')} className={inputStyle} />
                    </Container>
                    <Container>
                        <Label text="End Date" />
                        <input type="date" {...register('endDate')} className={inputStyle} />
                    </Container>

                </div>


                <div className="flex flex-col space-y-3 border border-slate-400 p-2 rounded-md">
                    <Title text="References" />
                </div>

                <button
                    className="px-3 py-2 bg-orange-500 w-max text-white text-xl rounded-md hover:bg-orange-600 transition-all ease-linear duration-150"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default DataTable;
