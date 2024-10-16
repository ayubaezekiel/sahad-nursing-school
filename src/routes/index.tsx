import { Footer } from "@/components/Footer";
import { image_url } from "@/lib/constants";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRightIcon, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const programs = [
  {
    name: "Bachelor of Science in Nursing",
    duration: "4 years",
    description:
      "Comprehensive program preparing students for a wide range of nursing careers in various healthcare settings.",
  },
  {
    name: "Associate Degree in Nursing",
    duration: "2 years",
    description:
      "Fast-track program for entry-level nursing positions, focusing on essential clinical skills and knowledge.",
  },
  {
    name: "Licensed Practical Nurse Program",
    duration: "1 year",
    description:
      "Intensive program for aspiring LPNs, covering fundamental nursing skills and patient care techniques.",
  },
  {
    name: "RN to BSN Bridge Program",
    duration: "1-2 years",
    description:
      "Advanced program for registered nurses to earn a BSN, enhancing career opportunities and knowledge.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <main>
        <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
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
                  src={image_url}
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
                      Learn More <ArrowRightIcon />
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
                  src={image_url}
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
