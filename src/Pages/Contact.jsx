import { useFormik } from "formik";
import * as Yup from "yup";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [formMessage, setFormMessage] = useState(""); // State for success/error message
  const [messageType, setMessageType] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      toEmails: "marcel.mathew007@gmail.com, info@marsinterios.com",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_7zwvuml",
          "template_gyrt1eq",
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
            to_email: values.toEmails,
          },
          "elixKXOvv4gCQ7bPG"
        )
        .then(
          () => {
            setFormMessage("Email sent successfully! ✅");
            setMessageType("success");
            resetForm();
            setTimeout(() => {
              setFormMessage("");
            }, 5000);
          },
          () => {
            setFormMessage("Failed to send email. Please try again. ❌");
            setMessageType("error");
            setTimeout(() => {
              setFormMessage("");
            }, 5000);
          }
        );
    },
  });

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-24 pt-32 pb-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 ">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mb-4 text-center md:text-left">
              Get in Touch
            </h2>
            <p className="text-[#0B0B0B] text-base sm:text-lg mb-6 text-center md:text-left">
              Have questions or need assistance? Reach out to us, and we&apos;ll
              be happy to help!
            </p>
            <div className="space-y-4 text-left">
              <p className="text-[#0B0B0B] flex items-center justify-center md:justify-start">
                <FaLocationDot className="w-6 sm:w-8 h-6 sm:h-8 text-red-600" />
                <span className="font-semibold ml-2">Address:&nbsp;</span>
                Mars Interiors, 24/7 Global Spaces, Peters Nine, Near Josco
                Jewellers, Thodupuzha, Kerala, PinCode: 685584
              </p>
              <p className="text-[#0B0B0B] flex items-center text-left md:justify-start">
                <BiPhoneCall className="w-6 sm:w-8 h-6 sm:h-8 text-blue-700" />
                <span className="font-semibold ml-2">Phone:&nbsp;</span>
                <a href="tel:+919562978418">+91 9567876460</a>
              </p>
              <p className="text-[#0B0B0B] flex items-center text-left md:justify-start">
                <FaWhatsapp className="text-green-500 w-6 sm:w-8 h-6 sm:h-8" />
                <span className="font-semibold ml-2">Whatsapp:&nbsp;</span>
                <a href="https://wa.me/9567876460">+91 9567876460</a>
              </p>
              <p className="text-[#0B0B0B] flex items-center text-left md:justify-start">
                <IoIosMail className="w-6 sm:w-8 h-6 sm:h-8 text-gray-500" />
                <span className="font-semibold ml-2">Email:&nbsp;</span>
                <a href="mailto:info@marsinteriors.com">
                  info@marsinteriors.com
                </a>
              </p>
              <p className="text-[#0B0B0B] flex items-center text-left md:justify-start">
                <LuAlarmClock className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500" />
                <span className="font-semibold ml-2">Working Hours:</span> Mon -
                Sat:- 10:00 AM - 7:00 PM
              </p>
              <h2 className="font-semibold text-lg sm:text-xl pt-6 flex items-center text-left md:justify-start">
                <MdManageAccounts className="w-6 sm:w-8 h-6 sm:h-8 mr-4 text-stone-700" />{" "}
                Managing Directors
              </h2>
              <p className="text-[#0B0B0B] ml-8 md:ml-12 text-left">
                Marcel Mathew
              </p>
              <p className="text-[#0B0B0B] ml-8 md:ml-12 text-left">
                Jisna Marcel
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}

              <input
                type="text"
                name="phone"
                placeholder="Your Phone*"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#17A396] text-white py-3 text-lg rounded-lg"
              >
                Submit
              </button>
            </form>
            {formMessage && (
              <p
                className={`mt-4 text-center text-lg font-medium ${
                  messageType === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {formMessage}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-[75%] h-96 rounded-lg overflow-hidden shadow-md mx-auto mb-10">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.465324812245!2d76.7135948!3d9.895147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c51f36feeea1%3A0xd0b0a1e5df501fe9!2sPETER&#39;S%20Nine%20Shopping%20Complex!5e0!3m2!1sen!2sin!4v1740228499770!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
