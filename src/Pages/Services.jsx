import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "../supabase";
import { 
  Code, Palette, Server, Smartphone, Database, Cloud
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Service icons mapping
const SERVICE_ICONS = {
  "Full Stack Development": Code,
  "Frontend Development": Palette,
  "Backend Development": Server,
  "Mobile Development": Smartphone,
  "Database Design": Database,
  "Cloud Services": Cloud,
  default: Code,
};

const ServiceCard = ({ title, description, features }) => {
  const Icon = SERVICE_ICONS[title] || SERVICE_ICONS.default;

  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        <div className="relative p-6 md:p-8 z-10 h-full flex flex-col">
          <div className="mb-4 md:mb-6">
            <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" strokeWidth={1.5} />
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3 md:mb-4">
            {title}
          </h3>
          
          <div 
            className="text-gray-300/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;

      const fetchedServices = data || [];
      setServices(fetchedServices);

      // Only cache if we actually got data
      if (fetchedServices.length > 0) {
        localStorage.setItem("services", JSON.stringify(fetchedServices));
      }
    } catch (error) {
      console.error("Error fetching services data:", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cachedServices = localStorage.getItem("services");

    // Only use cache if it has actual data (not empty arrays)
    if (cachedServices && JSON.parse(cachedServices).length > 0) {
      setServices(JSON.parse(cachedServices));
      setLoading(false);
    }

    // Always fetch fresh data from Supabase regardless of cache
    fetchData();
  }, [fetchData]);

  return (
    <div className="md:px-[10%] px-[5%] w-full py-16 md:py-24 bg-[#030014] overflow-hidden" id="Services">
      <div className="mb-16 md:mb-24" data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive development services tailored to bring your ideas to life with cutting edge technologies and best practices.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No services available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;