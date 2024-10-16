import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import MissionVisionProvost from "@/components/MissionAndVision";
import { motion } from "framer-motion";
import { Button, Card } from "@radix-ui/themes";
import { Award, ChevronRight, GraduationCap, Users } from "lucide-react";
import { PrincipalOfficers } from "@/components/PrincipalOfficers";
import { HeadsOfUnits } from "@/components/HeadsOfUnit";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <section>
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <motion.div
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                x: ["-50%", "-45%", "-55%", "-50%"],
                y: ["-50%", "-55%", "-45%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                x: ["-50%", "-55%", "-45%", "-50%"],
                y: ["-50%", "-45%", "-55%", "-50%"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-3/4 left-3/4 w-[700px] h-[700px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 0.9, 1],
                x: ["-50%", "-45%", "-55%", "-50%"],
                y: ["-50%", "-55%", "-45%", "-50%"],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Nursing students in a classroom"
            className="opacity-20 mix-blend-overlay object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-24 sm:py-32"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100"
            >
              About Sahad College of Nursing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8 text-orange-100"
            >
              Nurturing compassionate and skilled healthcare professionals since
              2005
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                size={"4"}
                className="bg-white text-orange-600 hover:bg-orange-100 transition-colors duration-300"
              >
                Our Programs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                style={{ background: "white" }}
                size={"4"}
                className="bg-transparent hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-700 to-transparent"></div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-orange-600">
                Our Brief History
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">
                Sahad College of Nursing was founded in 2005 with a vision to
                address the growing healthcare needs of our community and the
                nation at large. What began as a small nursing school has since
                blossomed into a prestigious institution known for producing
                some of the most competent and compassionate nurses in Nigeria.
              </p>
              <p className="mb-4">
                In our early years, we focused on providing basic nursing
                education to a small cohort of dedicated students. As we grew,
                so did our programs and facilities. By 2010, we had expanded our
                curriculum to include specialized courses in midwifery and
                public health nursing.
              </p>
              <p className="mb-4">
                The year 2015 marked a significant milestone as we received full
                accreditation from the Nursing and Midwifery Council of Nigeria
                for all our programs. This recognition propelled us to further
                heights, allowing us to introduce postgraduate programs and
                establish partnerships with leading healthcare institutions
                across the country.
              </p>
              <p className="mb-4">
                Today, Sahad College of Nursing stands as a beacon of excellence
                in nursing education. Our state-of-the-art simulation labs,
                diverse student body, and highly qualified faculty continue to
                set us apart. We've graduated over 5,000 nurses who are making
                significant contributions to healthcare delivery in Nigeria and
                beyond.
              </p>
              <p>
                As we look to the future, we remain committed to our founding
                principles of compassion, excellence, and integrity. We continue
                to evolve, embracing new technologies and pedagogies to ensure
                our graduates are well-prepared to meet the challenges of modern
                healthcare.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-10 p-4"
      >
        {[
          {
            icon: <GraduationCap className="h-10 w-10 mb-4" />,
            title: "Accredited Programs",
            description:
              "Recognized by the Nursing and Midwifery Council of Nigeria",
          },
          {
            icon: <Users className="h-10 w-10 mb-4" />,
            title: "Expert Faculty",
            description:
              "Learn from experienced nursing professionals and educators",
          },
          {
            icon: <Award className="h-10 w-10 mb-4" />,
            title: "State-of-the-Art Facilities",
            description:
              "Modern classrooms and simulation labs for hands-on learning",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            className="text-center bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition-all duration-300"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <MissionVisionProvost />
      <PrincipalOfficers />
      <HeadsOfUnits />
    </section>
  );
}
