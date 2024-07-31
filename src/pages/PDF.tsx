import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePhoneInTalk, MdEmail } from "react-icons/md";
import Title from "../components/Title";

const PDF: React.FC<{ data: any }> = ({ data }) => {
    const handleDownload = () => {
        const input = document.getElementById('cv-content');
        if (input) {
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4',
                });

                const pdfWidth = 210; // A4 width in mm
                const pdfHeight = 297; // A4 height in mm
                const imgWidth = canvas.width * 0.75; // Adjust for scaling
                const imgHeight = canvas.height * 0.75; // Adjust for scaling


                const widthRatio = pdfWidth / imgWidth;
                const heightRatio = pdfHeight / imgHeight;
                const ratio = Math.min(widthRatio, heightRatio);

                const scaledWidth = imgWidth * ratio;
                const scaledHeight = imgHeight * ratio;

                const offsetX = (pdfWidth - scaledWidth) / 2;
                const offsetY = (pdfHeight - scaledHeight) / 2;

                pdf.addImage(imgData, 'PNG', offsetX, offsetY, scaledWidth, scaledHeight);
                pdf.save('resume.pdf');
            });
        }
    };

    return (
        <div>

            <div className="flex justify-end pr-8">
                <button
                    onClick={handleDownload}
                    className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Download PDF
                </button>
            </div>
            <div id="cv-content" className="py-6 px-8 bg-white text-gray-900 border border-slate-200 my-6 rounded-md mx-4">

                <header className="border-b pb-4 mb-4">
                    <section className="text-center">
                        <h2 className="text-2xl font-bold">{data?.fullName || "Full Name"}</h2>
                    </section>
                    <section className="flex items-center justify-between mt-4">
                        <div>
                            <div className="flex items-center text-sm">
                                <MdOutlinePhoneInTalk className="mr-2" />
                                {data?.phoneNumber || "Phone Number"}
                            </div>
                            <div className="flex items-center text-sm mt-2">
                                <MdEmail className="mr-2" />
                                {data?.email || "Email"}
                            </div>
                        </div>
                        <div className="flex items-center text-sm">
                            <IoLocationSharp className="mr-2" />
                            {data?.address || "Address"}
                        </div>
                    </section>
                </header>

                <section>
                    <Title text="Summary" />
                    <p className="text-sm text-gray-800">{data?.summary || "A brief professional summary."}</p>
                </section>

                <section className="mt-6">
                    <Title text="Experience" />
                    {data?.experience?.map((c, index: number) => (
                        <div className="pb-4 " key={index}>
                            <h3 className="font-semibold text-xl">{c.companyName || "Company Name"}</h3>
                            <div className="flex justify-between text-sm mt-1">
                                <span className="text-lg text-gray-900 font-semibold">{c.position || "Position"}</span>
                                <span>{c.startDate || "Start Date"} - {c.endDate || "End Date"}</span>
                            </div>
                            <p className="text-sm mt-2 text-gray-700">{c.description || "Description of responsibilities and achievements."}</p>
                            <hr />
                        </div>
                    ))}
                </section>

                <section className="mt-6">
                    <Title text="Education" />
                    {data?.education?.map((d, index: number) => (
                        <div className="pb-4" key={index}>
                            <h3 className="font-semibold text-xl">{d.schoolName || "School Name"}</h3>
                            <div className="flex justify-between text-sm mt-1">
                                <span className="text-gray-700 font-semibold">{d.degree || "Degree"}</span>
                                <span className="text-gray-700">{d.startDate || "Start Date"} - {d.endDate || "End Date"}</span>
                            </div>
                            <hr />
                        </div>
                    ))}
                </section>
            </div>

        </div>
    );
};

export default PDF;
