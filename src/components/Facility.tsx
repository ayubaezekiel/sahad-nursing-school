import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog } from "@radix-ui/themes";
import lab from "../assets/lab.jpg";

interface Facility {
  id: number;
  name: string;
  image: string;
  description: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: "State-of-the-Art Simulation Lab",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Our simulation lab provides students with hands-on experience in a controlled environment, featuring high-fidelity mannequins and advanced medical equipment. This facility allows students to practice critical nursing skills and decision-making in realistic scenarios without risk to actual patients.",
  },
  {
    id: 2,
    name: "Modern Lecture Halls",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Spacious, well-equipped lecture halls with advanced audiovisual technology to enhance the learning experience. These halls are designed to accommodate various teaching styles and promote interactive learning, with features such as smart boards, surround sound systems, and comfortable seating for extended study sessions.",
  },
  {
    id: 3,
    name: "Comprehensive Library",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Our library houses an extensive collection of nursing and medical literature, both print and digital, to support student research and learning. It includes quiet study areas, group discussion rooms, and computer stations with access to online medical databases and journals.",
  },
  {
    id: 4,
    name: "Skills Practice Lab",
    image: lab,
    description:
      "A dedicated space for students to practice and refine their clinical skills, equipped with hospital beds, medical supplies, and anatomical models. This lab allows students to perfect their techniques in a safe, supervised environment before applying them in real clinical settings.",
  },
  {
    id: 5,
    name: "Student Recreation Center",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A modern recreation center that promotes student well-being and work-life balance. It includes fitness equipment, yoga studios, and spaces for group activities, encouraging students to maintain their physical and mental health throughout their rigorous nursing education.",
  },
  {
    id: 6,
    name: "Technology-Enhanced Classrooms",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Our classrooms are equipped with the latest educational technology, including interactive whiteboards, video conferencing capabilities, and individual student response systems. These tools facilitate engaging, collaborative learning experiences that prepare students for the tech-savvy healthcare environment.",
  },
];

const FacilityCard: React.FC<{ facility: Facility }> = ({ facility }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <img
          src={facility.image}
          alt={facility.name}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{facility.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {facility.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger>
            <Button variant="outline">Learn More</Button>
          </Dialog.Trigger>
          <Dialog.Content className="sm:max-w-[425px]">
            <Dialog.Title>{facility.name}</Dialog.Title>

            <div className="grid gap-4 py-4">
              <img
                src={facility.image}
                alt={facility.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full"
              />
              <Dialog.Description>{facility.description}</Dialog.Description>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </CardFooter>
    </Card>
  );
};

export function FacilitiesGallery() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our World-Class Facilities
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the state-of-the-art facilities that make Sahad College of
          Nursing a leader in nursing education. Our modern infrastructure is
          designed to provide students with the best possible learning
          environment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FacilityCard facility={facility} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
