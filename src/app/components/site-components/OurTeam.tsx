import { Briefcase } from "lucide-react";
import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    department: "Executive",
    avatar: "/images/hero.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    department: "Technology",
    avatar: "/images/hero.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Lead Designer",
    department: "Design",
    avatar: "/images/hero.jpg",
  },
  {
    id: 4,
    name: "Sarah Brown",
    role: "Marketing Manager",
    department: "Marketing",
    avatar: "/images/hero.jpg",
  },
  {
    id: 5,
    name: "Tom Wilson",
    role: "Sales Director",
    department: "Sales",
    avatar: "/images/hero.jpg",
  },
  {
    id: 5,
    name: "Tom Wilson",
    role: "Sales Director",
    department: "Sales",
    avatar: "/images/hero.jpg",
  },
];

const TeamMember = ({ member }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition flex flex-row gap-4">
    <Image
      src={member.avatar}
      alt={member.name}
      width={100}
      height={100}
      className="w-24 h-24 rounded-full mx-auto"
    />
    <div>
      <h3 className="text-lg font-semibold text-center mt-2">{member.name}</h3>
      <p className="text-center text-gray-600">{member.role}</p>
      <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-700">
        <Briefcase className="w-4 h-4" />
        <span>{member.department}</span>
      </div>
    </div>
  </div>
);

const OurTeam = () => (
  <section className="mt-14 sm:mt-16 lg:mt-0 py-4 lg:py-16 text-center mx-auto w-full">
    <h2 className="text-2xl font-semibold mb-8 text-primary">Meet Your Trainer</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {teamMembers.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </div>
  </section>
);

export default OurTeam;
