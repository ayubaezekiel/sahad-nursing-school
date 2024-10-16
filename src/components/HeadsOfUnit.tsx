import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, Card, Flex, Text } from "@radix-ui/themes";
import { Badge } from "@radix-ui/themes";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface UnitHeadProps {
  fullName: string;
  designation: string;
  unit: string;
  qualification: string;
  imageUrl: string;
  contactInfo: {
    email: string;
    phone: string;
  };
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const UnitHeadCard: React.FC<UnitHeadProps> = ({
  fullName,
  designation,
  unit,
  qualification,
  imageUrl,
  contactInfo,
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
            className="w-32 h-32 mx-auto mb-4"
            src={imageUrl}
            fallback={fullName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          />
        </motion.div>
        <CardTitle>{fullName}</CardTitle>
        <CardDescription>{unit}</CardDescription>
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
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
          >
            <Mail size={16} className="mr-2" />
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
          >
            <Phone size={16} className="mr-2" />
            {contactInfo.phone}
          </a>
        </motion.div>
        {socialLinks && (
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
          </motion.div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const studentAffairsHeads: UnitHeadProps[] = [
  {
    fullName: "Dr. Oluwaseun Adeleke",
    designation: "Head of Unit",
    unit: "Student Counseling and Support Services",
    qualification:
      "Ph.D. in Clinical Psychology, M.Sc. in Counseling Psychology",
    imageUrl: "/placeholder.svg?height=128&width=128",
    contactInfo: {
      email: "oluwaseun.adeleke@sahadnursing.edu.ng",
      phone: "+234 801 234 5678",
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/oluwaseunadeleke",
      twitter: "https://twitter.com/oluwaseunadeleke",
    },
  },
  {
    fullName: "Mrs. Amina Yusuf",
    designation: "Head of Unit",
    unit: "Student Housing and Accommodation",
    qualification: "M.Sc. in Facilities Management, B.Sc. in Estate Management",
    imageUrl: "/placeholder.svg?height=128&width=128",
    contactInfo: {
      email: "amina.yusuf@sahadnursing.edu.ng",
      phone: "+234 802 345 6789",
    },
    socialLinks: {
      facebook: "https://facebook.com/aminayusuf",
      linkedin: "https://linkedin.com/in/aminayusuf",
    },
  },
  {
    fullName: "Mr. Chinedu Okonkwo",
    designation: "Head of Unit",
    unit: "Student Activities and Leadership Development",
    qualification:
      "M.Ed. in Educational Leadership, B.Sc. in Physical Education",
    imageUrl: "/placeholder.svg?height=128&width=128",
    contactInfo: {
      email: "chinedu.okonkwo@sahadnursing.edu.ng",
      phone: "+234 803 456 7890",
    },
    socialLinks: {
      twitter: "https://twitter.com/chineduokonkwo",
      linkedin: "https://linkedin.com/in/chineduokonkwo",
    },
  },
  {
    fullName: "Ms. Fatima Ibrahim",
    designation: "Head of Unit",
    unit: "International Student Services",
    qualification: "M.A. in International Education, B.A. in Global Studies",
    imageUrl: "/placeholder.svg?height=128&width=128",
    contactInfo: {
      email: "fatima.ibrahim@sahadnursing.edu.ng",
      phone: "+234 804 567 8901",
    },
    socialLinks: {
      facebook: "https://facebook.com/fatimaibrahim",
      twitter: "https://twitter.com/fatimaibrahim",
      linkedin: "https://linkedin.com/in/fatimaibrahim",
    },
  },
];

export function HeadsOfUnits() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800"
        >
          Heads of Units in Student Affairs Division
        </motion.h2>
        <Flex justify={"center"} className="md:w-2/3 px-4 mt-2 mb-12 mx-auto">
          <Text align={"center"} size={"1"}>
            Heads of Units in our Student Affairs Division play a crucial role
            in enhancing the student experience. These dedicated professionals
            lead specialized units focusing on Student Counseling and Support
            Services, Housing and Accommodation, Activities and Leadership
            Development, and International Student Services.
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
          {studentAffairsHeads.map((head, index) => (
            <UnitHeadCard key={index} {...head} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
