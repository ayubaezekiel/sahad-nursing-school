import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, Badge, Card, Flex, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

interface OfficerProps {
  fullName: string;
  designation: string;
  position: string;
  qualification: string;
  imageUrl: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const OfficerCard: React.FC<OfficerProps> = ({
  fullName,
  designation,
  position,
  qualification,
  imageUrl,
  socialLinks,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Avatar
            size={"9"}
            className="mx-auto mb-4"
            src={imageUrl}
            fallback={fullName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          />
        </motion.div>
        <CardTitle>{fullName}</CardTitle>
        <CardDescription>{position}</CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Badge className="mb-2">{designation}</Badge>
          <p className="text-sm text-muted-foreground">{qualification}</p>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {socialLinks.facebook && (
            <motion.a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.2 }}
            >
              <Facebook size={20} />
            </motion.a>
          )}
          {socialLinks.twitter && (
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
              whileHover={{ scale: 1.2 }}
            >
              <Twitter size={20} />
            </motion.a>
          )}
          {socialLinks.linkedin && (
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={20} />
            </motion.a>
          )}
          {socialLinks.email && (
            <motion.a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-600 hover:text-gray-800"
              whileHover={{ scale: 1.2 }}
            >
              <Mail size={20} />
            </motion.a>
          )}
        </motion.div>
      </CardContent>
    </Card>
  </motion.div>
);

const principalOfficers: OfficerProps[] = [
  {
    fullName: "Dr. Aisha Nnamani",
    designation: "Provost",
    position: "Chief Executive Officer",
    qualification: "Ph.D. in Nursing, M.Sc. in Healthcare Management",
    imageUrl: "/placeholder.svg?height=128&width=128",
    socialLinks: {
      facebook: "https://facebook.com/aishannamani",
      twitter: "https://twitter.com/aishannamani",
      linkedin: "https://linkedin.com/in/aishannamani",
      email: "aisha.nnamani@sahadnursing.edu.ng",
    },
  },
  {
    fullName: "Prof. Chukwuma Okafor",
    designation: "Deputy Provost",
    position: "Academic Affairs",
    qualification: "Ph.D. in Public Health, M.Sc. in Nursing Education",
    imageUrl: "/placeholder.svg?height=128&width=128",
    socialLinks: {
      twitter: "https://twitter.com/chukwumaokafor",
      linkedin: "https://linkedin.com/in/chukwumaokafor",
      email: "chukwuma.okafor@sahadnursing.edu.ng",
    },
  },
  {
    fullName: "Dr. Fatima Abdullahi",
    designation: "Registrar",
    position: "Administration and Records",
    qualification: "Ph.D. in Educational Administration, MBA",
    imageUrl: "/placeholder.svg?height=128&width=128",
    socialLinks: {
      facebook: "https://facebook.com/fatimaabdullahi",
      linkedin: "https://linkedin.com/in/fatimaabdullahi",
      email: "fatima.abdullahi@sahadnursing.edu.ng",
    },
  },
  {
    fullName: "Mr. Oluwaseun Adeyemi",
    designation: "Bursar",
    position: "Finance and Accounts",
    qualification: "M.Sc. in Accounting, ACCA",
    imageUrl: "/placeholder.svg?height=128&width=128",
    socialLinks: {
      twitter: "https://twitter.com/oluwaseunadeyemi",
      linkedin: "https://linkedin.com/in/oluwaseunadeyemi",
      email: "oluwaseun.adeyemi@sahadnursing.edu.ng",
    },
  },
];

export function PrincipalOfficers() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800"
        >
          Our Principal Officers
        </motion.h2>
        <Flex justify={"center"} className="md:w-2/3 px-4 mt-2 mb-12 mx-auto">
          <Text align={"center"} size={"1"}>
            Our Principal Officers, including the Provost, Deputy Provost,
            Registrar, and Bursar, provide strategic direction and ensure the
            smooth operation of our institution. They oversee academic affairs,
            administrative functions, and financial management, laying the
            foundation for our college's success.
          </Text>
        </Flex>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {principalOfficers.map((officer, index) => (
            <OfficerCard key={index} {...officer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
