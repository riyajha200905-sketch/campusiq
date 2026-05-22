"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Sparkles,
  Star,
  ArrowRight,
  X,
} from "lucide-react";

export default function Home() {
  const colleges = [
    {
      name: "IIT Delhi",
      location: "Delhi",
      fees: "12 Lakhs",
      package: "32 LPA",
      rating: "5.0",
      color: "from-violet-600 to-fuchsia-500",
    },
    {
      name: "BITS Pilani",
      location: "Pilani",
      fees: "24 Lakhs",
      package: "18 LPA",
      rating: "4.8",
      color: "from-blue-600 to-cyan-500",
    },
    {
      name: "IIIT Hyderabad",
      location: "Hyderabad",
      fees: "15 Lakhs",
      package: "26 LPA",
      rating: "4.9",
      color: "from-emerald-500 to-lime-400",
    },
    {
      name: "MIT Manipal",
      location: "Manipal",
      fees: "18 Lakhs",
      package: "12 LPA",
      rating: "4.5",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "RVCE",
      location: "Bangalore",
      fees: "10 Lakhs",
      package: "11 LPA",
      rating: "4.4",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "VIT Vellore",
      location: "Vellore",
      fees: "16 Lakhs",
      package: "10 LPA",
      rating: "4.3",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedCollege, setSelectedCollege] = useState<any>(null);

  const [rank, setRank] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const filteredColleges = colleges.filter(
    (college) =>
      college.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      college.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const predictCollege = () => {
    const rankNumber = Number(rank);

    if (rankNumber <= 1000) {
      setRecommendation(
        "IIT Delhi, IIT Bombay, IIT Madras"
      );
    } else if (rankNumber <= 5000) {
      setRecommendation(
        "BITS Pilani, IIIT Hyderabad, NIT Trichy"
      );
    } else if (rankNumber <= 15000) {
      setRecommendation(
        "MIT Manipal, RVCE, VIT Vellore"
      );
    } else {
      setRecommendation(
        "SRM University, PES University, Amity University"
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#060606] text-white">

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/10 blur-[150px]" />

      </div>

      <nav className="border-b border-white/5 backdrop-blur-xl sticky top-0 z-50 bg-black/30">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-violet-500" />

            <h1 className="text-2xl font-semibold tracking-tight">
              CampusIQ
            </h1>

          </div>

          <div className="hidden md:flex items-center gap-8 text-zinc-500 text-sm">

            <button className="hover:text-white transition">
              Colleges
            </button>

            <button className="hover:text-white transition">
              Compare
            </button>

            <button className="hover:text-white transition">
              Placements
            </button>

            <button className="hover:text-white transition">
              Rankings
            </button>

          </div>

          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition">
            Login
          </button>

        </div>

      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">

        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] rounded-full px-4 py-2 mb-8">

          <Sparkles size={14} className="text-violet-400" />

          <p className="text-sm text-zinc-400">
            AI-powered college discovery platform
          </p>

        </div>

        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]">

          Find your perfect
          <br />

          <span className="text-zinc-500">
            college faster.
          </span>

        </h1>

        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto mt-8">

          Compare placements, explore fees, and discover
          India’s top universities with modern AI insights.

        </p>

        <div className="max-w-3xl mx-auto mt-14">

          <div className="flex items-center gap-4 border border-white/10 bg-white/[0.03] rounded-[28px] p-4">

            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center">

              <Search size={20} className="text-zinc-500" />

            </div>

            <input
              type="text"
              placeholder="Search colleges or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full text-lg placeholder:text-zinc-600"
            />

            <button className="bg-violet-500 hover:bg-violet-400 transition px-6 py-4 rounded-2xl font-medium">
              Search
            </button>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="text-zinc-500 text-sm mb-3">
              Featured Colleges
            </p>

            <h2 className="text-5xl font-semibold tracking-tight">
              Top colleges
            </h2>

          </div>

          <button className="hidden md:flex items-center gap-2 text-zinc-500 hover:text-white transition">

            View all

            <ArrowRight size={18} />

          </button>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {filteredColleges.map((college, index) => (

            <div
              key={index}
              className="group border border-white/10 bg-white/[0.03] rounded-[34px] overflow-hidden hover:bg-white/[0.05] transition-all duration-300"
            >

              <div
                className={`h-44 bg-gradient-to-br ${college.color} relative`}
              >

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute top-5 right-5 flex items-center gap-1 bg-black/30 backdrop-blur-xl border border-white/10 px-3 py-1 rounded-full">

                  <Star size={13} fill="white" />

                  <p className="text-sm font-medium">
                    {college.rating}
                  </p>

                </div>

              </div>

              <div className="p-6">

                <div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {college.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-zinc-500">

                    <MapPin size={15} />

                    <p>{college.location}</p>

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <div className="border border-white/5 bg-black/20 rounded-2xl p-4 text-center">

                    <p className="text-zinc-500 text-sm">
                      Fees
                    </p>

                    <h4 className="text-xl font-semibold mt-2">
                      {college.fees}
                    </h4>

                  </div>

                  <div className="border border-white/5 bg-black/20 rounded-2xl p-4 text-center">

                    <p className="text-zinc-500 text-sm">
                      Avg Package
                    </p>

                    <h4 className="text-xl font-semibold mt-2 text-emerald-400">
                      {college.package}
                    </h4>

                  </div>

                </div>

                <button
                  onClick={() => setSelectedCollege(college)}
                  className="w-full mt-6 bg-white text-black hover:bg-zinc-200 transition py-4 rounded-2xl font-medium flex items-center justify-center gap-2"
                >

                  View Details

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="border border-white/10 bg-white/[0.03] rounded-[36px] p-8 md:p-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div>

              <p className="text-zinc-500 text-sm mb-3">
                Compare
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Compare colleges
              </h2>

            </div>

            <p className="text-zinc-500 max-w-lg leading-relaxed">
              Compare placements, fees and opportunities side-by-side.
            </p>

          </div>

          <div className="overflow-x-auto mt-10">

            <table className="w-full">

              <thead>

                <tr className="border-b border-white/10 text-zinc-500 text-left">

                  <th className="pb-5 font-medium">
                    College
                  </th>

                  <th className="pb-5 font-medium">
                    Location
                  </th>

                  <th className="pb-5 font-medium">
                    Fees
                  </th>

                  <th className="pb-5 font-medium">
                    Package
                  </th>

                  <th className="pb-5 font-medium">
                    Rating
                  </th>

                </tr>

              </thead>

              <tbody>

                {colleges.map((college, index) => (

                  <tr
                    key={index}
                    className="border-b border-white/5"
                  >

                    <td className="py-6 font-medium">
                      {college.name}
                    </td>

                    <td className="py-6 text-zinc-500">
                      {college.location}
                    </td>

                    <td className="py-6">
                      {college.fees}
                    </td>

                    <td className="py-6 text-emerald-400">
                      {college.package}
                    </td>

                    <td className="py-6">
                      ⭐ {college.rating}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="border border-white/10 bg-white/[0.03] rounded-[36px] p-8 md:p-10">

          <div className="text-center">

            <p className="text-zinc-500 text-sm mb-3">
              Predictor Tool
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              College Predictor
            </h2>

            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
              Enter your exam rank and get AI-powered college recommendations.
            </p>

          </div>

          <div className="max-w-2xl mx-auto mt-12">

            <div className="grid md:grid-cols-2 gap-4">

              <select
                className="border border-white/10 bg-black/20 rounded-2xl px-5 py-4 outline-none"
              >

                <option>JEE Main</option>
                <option>JEE Advanced</option>
                <option>BITSAT</option>

              </select>

              <input
                type="number"
                placeholder="Enter your rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="border border-white/10 bg-black/20 rounded-2xl px-5 py-4 outline-none placeholder:text-zinc-600"
              />

            </div>

            <button
              onClick={predictCollege}
              className="w-full mt-5 bg-violet-500 hover:bg-violet-400 transition py-4 rounded-2xl font-medium"
            >

              Predict Colleges

            </button>

            {recommendation && (

              <div className="mt-6 border border-violet-500/20 bg-violet-500/10 rounded-2xl p-5">

                <p className="text-violet-300 text-sm">
                  Recommended Colleges
                </p>

                <h3 className="text-xl font-semibold mt-3">
                  {recommendation}
                </h3>

              </div>

            )}

          </div>

        </div>

      </section>

      <footer className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-semibold">
              CampusIQ
            </h2>

            <p className="text-zinc-500 mt-2">
              Helping students discover better futures.
            </p>

          </div>

          <div className="flex items-center gap-6 text-zinc-500 text-sm">

            <button className="hover:text-white transition">
              Colleges
            </button>

            <button className="hover:text-white transition">
              Compare
            </button>

            <button className="hover:text-white transition">
              Placements
            </button>

          </div>

        </div>

      </footer>

      {selectedCollege && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">

          <div className="bg-[#111111] border border-white/10 rounded-[36px] max-w-2xl w-full p-8 relative">

            <button
              onClick={() => setSelectedCollege(null)}
              className="absolute top-5 right-5 text-zinc-500 hover:text-white"
            >

              <X size={24} />

            </button>

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-4xl font-semibold">
                  {selectedCollege.name}
                </h2>

                <div className="flex items-center gap-2 mt-3 text-zinc-500">

                  <MapPin size={16} />

                  <p>{selectedCollege.location}</p>

                </div>

              </div>

              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">

                ⭐ {selectedCollege.rating}

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-5">

                <p className="text-zinc-500 text-sm">
                  Total Fees
                </p>

                <h3 className="text-2xl font-semibold mt-3">
                  {selectedCollege.fees}
                </h3>

              </div>

              <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-5">

                <p className="text-zinc-500 text-sm">
                  Avg Package
                </p>

                <h3 className="text-2xl font-semibold mt-3 text-emerald-400">
                  {selectedCollege.package}
                </h3>

              </div>

            </div>

            <div className="mt-8">

              <h3 className="text-2xl font-semibold">
                Overview
              </h3>

              <p className="text-zinc-500 leading-relaxed mt-4">
                {selectedCollege.name} is known for strong academics,
                excellent placements, modern infrastructure and vibrant student life.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-5">

                <h4 className="font-semibold text-lg">
                  Popular Courses
                </h4>

                <ul className="mt-4 text-zinc-500 space-y-2">
                  <li>• Computer Science</li>
                  <li>• AI & Machine Learning</li>
                  <li>• Electronics</li>
                  <li>• Data Science</li>
                </ul>

              </div>

              <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-5">

                <h4 className="font-semibold text-lg">
                  Student Reviews
                </h4>

                <p className="text-zinc-500 mt-4 leading-relaxed">
                  Students praise the placements, coding culture,
                  internships and campus opportunities.
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}