import React from "react";
import Logo from "@/components/common/Logo";
import AssideMenu from "./AssideMenu";
import ListSocialMedia from "./ListSocialMedia";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div id="footer-content" className="pt-8 xl:pt-16 pb-6 xl:pb-12">
        <div className="container xl:max-w-6xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
            <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
              <div className="flex items-center mb-2">
                <Logo />
              </div>
              <p className="my-5">
                Kami menyediakan layanan pembuatan website, pengembangan
                aplikasi, dan optimasi SEO untuk mengembangkan bisnis Anda di
                era digital.
              </p>
              <ListSocialMedia
                icon={FaInstagram}
                link="https://www.instagram.com/inovasiweb.digital"
              />
              <ListSocialMedia
                icon={FaTwitter}
                link="https://www.twitter.com"
              />
              <ListSocialMedia
                icon={FaYoutube}
                link="https://www.youtube.com"
              />
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
              <div className="flex flex-wrap flex-row">
                <AssideMenu
                  title="Service"
                  subTitle={[
                    { name: "Web Development" },
                    { name: "Web Apps" },
                    { name: "Optimation SEO" },
                  ]}
                />
                <AssideMenu
                  title="Benefits"
                  subTitle={[
                    { name: "Custom Solutions" },
                    { name: "Cutting-Edge Technology" },
                    { name: "SEO Optimization" },
                    { name: "Support & Maintenance" },
                  ]}
                />
                <AssideMenu
                  title="Steps"
                  subTitle={[
                    { name: "STRATEGI DIGITAL" },
                    { name: "PROSES PENGEMBANGAN" },
                    { name: "PENYELESAIAN PROYEK" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-dark">
        <div className="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
          <div className="row">
            <div className="col-12 col-md text-center">
              <p className="d-block my-3 text-black">
                Copyright © Inovasi Web | Created By Ivan Adi Saputra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
