import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Tabs } from "@radix-ui/themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  GraduationCap,
  Calendar,
  DollarSign,
  Badge,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Program {
  name: string;
  degree: string;
  duration: string;
  startDates: string[];
  description: string;
  courses: string[];
  careerProspects: string[];
  applicationFee: number;
  tuitionFee: number;
}

const programs: Program[] = [
  {
    name: "Diploma in Basic Nursing",
    degree: "DBN",
    duration: "..",
    startDates: ["Movember", "December"],
    description:
      "Our DBN program prepares students for a rewarding career in nursing, providing comprehensive knowledge and hands-on clinical experience.",
    courses: [
      "Anatomy and Physiology",
      "Fundamentals of Nursing",
      "Pharmacology",
      "Medical-Surgical Nursing",
      "Pediatric Nursing",
      "Mental Health Nursing",
      "Community Health Nursing",
    ],
    careerProspects: [
      "Registered Nurse in Hospitals",
      "Community Health Nurse",
      "Pediatric Nurse",
      "Nurse Educator",
      "Research Nurse",
    ],
    applicationFee: 10000,
    tuitionFee: 10000,
  },
  {
    name: "Diploma in Basic Midwifery",
    degree: "DM",
    duration: "...",
    startDates: ["Coming Soon"],
    description:
      "Our Diploma in Midwifery program focuses on maternal and newborn care, preparing students for a specialized career in midwifery.",
    courses: [
      "Anatomy and Physiology",
      "Fundamentals of Midwifery",
      "Antenatal Care",
      "Intrapartum Care",
      "Postpartum Care",
      "Newborn Care",
      "Reproductive Health",
    ],
    careerProspects: [
      "Midwife in Hospitals",
      "Community Midwife",
      "Maternal Health Consultant",
      "Lactation Specialist",
      "Midwifery Educator",
    ],
    applicationFee: 10000,
    tuitionFee: 100000,
  },
];

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
  <Card className="w-full">
    <CardHeader className="flex flex-row justify-between items-center">
      <CardTitle>{program.name}</CardTitle>
      <CardDescription className="flex">
        <Badge className="mr-2">{program.degree}</Badge>
        <span className="flex items-center text-sm text-gray-500">
          <Clock className="mr-1 h-4 w-4" /> {program.duration}
        </span>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="mb-4">{program.description}</p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="courses">
          <AccordionTrigger>Courses</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5">
              {program.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="career-prospects">
          <AccordionTrigger>Career Prospects</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5">
              {program.careerProspects.map((prospect, index) => (
                <li key={index}>{prospect}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">
          Application Fee: ₦{program.applicationFee.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">
          Tuition Fee: ₦{program.tuitionFee.toLocaleString()}/year
        </p>
      </div>
      <Button>
        <Link href="/apply">Apply Now</Link>
      </Button>
    </CardFooter>
  </Card>
);

export function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Programs
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our comprehensive range of nursing programs designed to equip
          you with the knowledge, skills, and experience needed for a successful
          career in healthcare.
        </motion.p>

        <Tabs.Root defaultValue="all" className="mb-12">
          <Tabs.List className="grid w-full grid-cols-3 mb-8">
            <Tabs.Trigger value="all">All Programs</Tabs.Trigger>
            <Tabs.Trigger value="diploma">Diploma</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </div>
          </Tabs.Content>
          <Tabs.Content value="diploma">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProgramCard program={program} />
                </motion.div>
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Application Process</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Review the admission requirements for your chosen program.</li>
            <li>Pay the non-refundable application fee.</li>
            <li>Complete the online application form.</li>
            <li>
              Submit all required documents, including transcripts, letters of
              recommendation and the online application print out.
            </li>
            <li>
              Take any required entrance exams or interviews as specified by
              your program. (ENTRANCE EXAM IS ON MONDAY 18TH NOVEMBER 2024)
            </li>
            <li>
              Wait for the admissions committee to review your application.
            </li>
            <li>Receive your admission decision via email and |SMS.</li>
          </ol>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-orange-600" />
              <span>Application Deadlines: November 14 (January intake) </span>
            </div>
            <Button>
              <Link href="/apply">Start Your Application</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
