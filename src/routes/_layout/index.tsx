import { Footer } from "@/components/Footer";
import {
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRightIcon, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import bg from "../../assets/front.jpg";
import why from "../../assets/why.jpg";

export const Route = createFileRoute("/_layout/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
  );
}

const programs = [
  {
    name: "Basic Nursing",
    duration: "..",
    description:
      "Comprehensive program preparing students for a wide range of nursing careers in various healthcare settings.",
  },
  {
    name: "Basic Midwifery",
    duration: "..",
    description:
      "Our Program in Midwifery program focuses on maternal and newborn care, preparing students for a specialized career in midwifery.",
  },
];

function HomePage() {
  const [open, onOpenChange] = useState(true);
  return (
    <div className="min-h-screen bg-orange-50">
      <main>
        <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
          <Dialog.Root onOpenChange={onOpenChange} open={open}>
            <Dialog.Content>
              <Flex align={"center"} justify={"between"} mb={"4"}>
                <Dialog.Title>Notice Board</Dialog.Title>
                <Dialog.Close>
                  <IconButton>
                    <X />
                  </IconButton>
                </Dialog.Close>
              </Flex>
              <Dialog.Description mb={"4"} size={"2"} weight={"bold"}>
                📢 Announcement: Sahad College of Nursing Application Open for
                2024/2025 Academic Session! 📢
              </Dialog.Description>
              <Text style={{ color: "black" }} size={"1"}>
                We are excited to announce that applications for admission to
                the 2024/2025 academic calendar at Sahad College of Nursing are
                now open! Aspiring nursing students are encouraged to submit
                their applications as soon as possible. Key Dates: Application
                Deadline: 14th November 2024 Entrance Exam: 18th November 2024
                To apply, please click the "Apply" button below. Be sure to
                carefully read the instructions provided before completing your
                application. Don&apos;t miss this opportunity to join one of the
                leading institutions in nursing education. Apply now to secure
                your place and take the first step towards a rewarding career in
                healthcare!
              </Text>
            </Dialog.Content>
          </Dialog.Root>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Shape the Future of Healthcare
                </h1>
                <p className="text-xl mb-8">
                  Join Sahad Nursing College and embark on a rewarding journey
                  in nursing. Our programs combine cutting-edge education with
                  hands-on experience.
                </p>
                <Button
                  asChild
                  size="4"
                  className="hover:text-orange-600 hover:bg-orange-100"
                >
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px]"
              >
                <img
                  src={bg}
                  alt="Nursing students in a modern healthcare setting"
                  className="rounded-lg shadow-2xl bg-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Heading size={"7"} align={"center"}>
              Our Nursing Programs
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {programs.map((program, index) => (
                <Card key={index}>
                  <Flex direction="column" gap="3">
                    <Heading size="4" as="h3">
                      {program.name}
                    </Heading>
                    <Text as="p" size="2" color="gray">
                      Duration: {program.duration}
                    </Text>
                    <Text as="p" size="2">
                      {program.description.length > 100
                        ? `${program.description.substring(0, 97)}...`
                        : program.description}
                    </Text>
                    <Button variant="soft" size="2">
                      <Link href="/programs">Learn More</Link>
                      <ArrowRightIcon />
                    </Button>
                  </Flex>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-orange-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Why Choose Sahad Nursing College?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      State-of-the-art simulation labs for hands-on learning
                    </p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Experienced faculty with real-world nursing expertise
                    </p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Strong partnerships with leading healthcare institutions
                    </p>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-orange-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      High NCLEX pass rates and excellent job placement record
                    </p>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px]"
              >
                <img
                  src={why}
                  alt="Students in a nursing simulation lab"
                  className="rounded-lg shadow-xl bg-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Start Your Nursing Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Take the first step towards a rewarding career in healthcare.
              Apply to Sahad Nursing College today and join our community of
              future nursing leaders.
            </p>
            <Button
              asChild
              size="4"
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
