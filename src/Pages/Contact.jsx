import { useFormik } from "formik";
import * as Yup from "yup";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";

const Contact = () => {
  // Formik Configuration
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
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
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      alert("Message sent successfully!");
      resetForm(); // Reset form after submission
    },
  });

  return (
    <>
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-24 pt-32 pb-24">
      {/* Left Side - Contact Information */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-4xl font-semibold bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mb-4">Get in Touch</h2>
        <p className="text-[#0B0B0B] text-lg mb-6 pr-20">
          Have questions or need assistance? Reach out to us, and we&apos;ll be happy to help!
        </p>
        <div className="space-y-4">
          <p className="text-[#0B0B0B] flex"><FaLocationDot className="w-8 h-8 text-red-600"/>  <span className="font-semibold ml-2">Address:&nbsp;</span> Mars interiors, 24/7 global spaces, Peters Nine,<br/>Near Josco Jewellers,Thodupuzha,Kerala<br/> PinCode:685584</p>
          <p className="text-[#0B0B0B] flex"><BiPhoneCall className="w-8 h-8 text-blue-700"/>  <span className="font-semibold ml-2">Phone:&nbsp;</span><a href="tel:+919562978418" target="_blank" >+91 9567876460</a> </p>
          <p className="text-[#0B0B0B] flex"> <FaWhatsapp className="text-green-500 w-8 h-8"/> <span className="font-semibold ml-2">Whatsapp:&nbsp;</span><a href="https://wa.me/9567876460" target="_blank" >+91 9567876460</a> </p>
          <p className="text-[#0B0B0B] flex"><IoIosMail className=" w-8 h-8 text-gray-500"/>  <span className="font-semibold ml-2">Email:&nbsp;</span><a href="mailto:info@ipcstechnologies.com" target="_blank">info@marsinteriors.com</a> </p>
          <p className="text-[#0B0B0B] flex"><LuAlarmClock className=" w-8 h-8 text-blue-500"/> <span className="font-semibold ml-2">Working Hours:</span> Mon - Sat:- 10:00 AM - 7:00 PM</p>
          <h2 className="font-semibold text-xl pt-10 flex"><MdManageAccounts className=" w-8 h-8 mr-4 text-stone-700"/> Mananging Directors</h2>
          <p className="text-[#0B0B0B] ml-12"> Marcel Mathew</p>
          <p className="text-[#0B0B0B] ml-12">Jisna Marcel</p>

        </div>
      </div>

      {/* Right Side - Contact Form with Formik */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#C79900] to-[#FFD700] bg-clip-text text-transparent mb-6 text-center">Send Us a Message</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            ) : null}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            ) : null}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17A396]"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-60 bg-[#17A396] text-white py-3 text-xl rounded-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      
    </div>
    <div className="w-[75%] h-96 rounded-lg overflow-hidden shadow-md mx-auto mb-10">
  <iframe 
    className="w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.465324812245!2d76.7135948!3d9.895147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c51f36feeea1%3A0xd0b0a1e5df501fe9!2sPETER&#39;S%20Nine%20Shopping%20Complex!5e0!3m2!1sen!2sin!4v1740228499770!5m2!1sen!2sin" 
    allowFullScreen="" 
    loading="lazy">
  </iframe>
</div>


    </>
  );
};

export default Contact;
