import React from "react";
import "./contact.css";
import { useGetParksQuery } from "../../app/services/nationalparkApi/nationalparkApi";

const Contact = () => {
  const { data } = useGetParksQuery();

  if (!data || !data.addresses || !data.contacts) {
    return <div className="min-h-screen">Loading...</div>;
  }
  return (
    <div className="p-10 flex flex-col md:gap-5 gap-3 min-h-screen">
      <div className="flex flex-col md:gap-5 gap-3">
        <div className="mb-3">
          <h1 className="font-bold md:text-lg text-base">Weather: </h1>
          <p className="md:text-base text-sm">{data.weatherInfo}</p>
        </div>
        <div className="mb-5">
          <h1 className="font-bold md:text-lg text-base">Direction: </h1>
          <p className="md:text-base text-sm">{data.directionsInfo}</p>
        </div>
      </div>
      <div className="flex flex-row md:gap-10 sm:gap-6 gap-3">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75986.11986063607!2d-119.58735945827569!3d37.869882911145616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20Ulusal%20Park%C4%B1!5e0!3m2!1str!2str!4v1713515724593!5m2!1str!2str"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            lang="en"
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex flex-row">
            <div className="font-bold md:text-base text-sm">Address:&nbsp;</div>
            <div className="md:text-base text-sm">
              {data.addresses[0].line1}, {data.addresses[0].city}
              <br />
              {data.addresses[0].postalCode}
              &nbsp;{data.addresses[0].stateCode}
            </div>
          </div>
          <p className="font-bold md:text-base text-sm">
            Phone:&nbsp;
            <span className="font-normal md:text-base text-sm">
              {data.contacts.phoneNumbers[0].phoneNumber}
            </span>
          </p>
          <p className="font-bold md:text-base text-sm">
            Email:&nbsp;
            <span className="font-normal md:text-base text-sm">
              {data.contacts.emailAddresses[0].emailAddress}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
