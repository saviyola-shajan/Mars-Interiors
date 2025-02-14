import { useFormik } from "formik";
import * as Yup from "yup";

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
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-24 pt-32 pb-24">
      {/* Left Side - Contact Information */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-4xl font-semibold bg-gradient-to-b from-[#C79900] to-[#F5BD02] bg-clip-text text-transparent mb-4">Get in Touch</h2>
        <p className="text-[#0B0B0B] text-lg mb-6 pr-20">
          Have questions or need assistance? Reach out to us, and we&apos;ll be happy to help!
        </p>
        <div className="space-y-4">
          <p className="text-[#0B0B0B]">📍 <span className="font-semibold">Address:</span> 123, Design Street, Your City, India</p>
          <p className="text-[#0B0B0B]">📞 <span className="font-semibold">Phone:</span> +91 98765 43210</p>
          <p className="text-[#0B0B0B]">✉️ <span className="font-semibold">Email:</span> info@marsinteriors.com</p>
          <p className="text-[#0B0B0B]">⏰ <span className="font-semibold">Working Hours:</span> Mon - Sat, 10:00 AM - 7:00 PM</p>
        </div>
      </div>

      {/* Right Side - Contact Form with Formik */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#C79900] to-[#F5BD02] bg-clip-text text-transparent mb-6 text-center">Send Us a Message</h2>
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
  );
};

export default Contact;
