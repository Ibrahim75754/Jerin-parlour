import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../Assests/Images/Icon/img-1.png";
import img2 from "../Assests/Images/Icon/img-2.png";
import img3 from "../Assests/Images/Icon/img-3.png";

const BookingPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Anti Age Face Treatment",
      img: img1,
      price: 199,
      description:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    },

    {
      id: 2,
      name: "Hair Color & Styleing",
      img: img2,
      price: 99,
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out",
    },

    {
      id: 3,
      name: "Skin Care Treatment",
      img: img3,
      price: 299,
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    },
  ];


  const service = services.find(service => service.id === Number(id));
  console.log(service)

  return (
    <div>
      <div className="bg-secondary font-poppins h-screen px-5 md:px-10 ">
        {/* <h1 className="text-3xl font-poppins font-semibold text-accent py-5">
          Confrim Booking
        </h1> */}
        <div className=" w-full md:w-3/6 mx-auto flex justify-center items-center h-full md:h-[80vh]  py-10">
          <div className="bg-white  space-y-4 py-8 px-9 rounded-lg flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-accent">{service.name}</h2>
            <img className="w-32" src={service.img} alt="" />
            <p className="text-center">{service.description}</p>
            <p className="text-primary text-xl font-bold">${service.price}</p>
            <button
              onClick={() => navigate(`/dashboard/payment/${service.id}`)}
              className="px-5 font-semibold rounded py-2  bg-primary text-white"
            >
              Booking  Confrim
            </button>
          </div>
        </div>
        {/* <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {infoImage.slice(4, 10).map((singleImg) => (
            <div key={singleImg.id}>
              <img className=" w-full" src={singleImg.largeImageURL} alt="" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BookingPage;
