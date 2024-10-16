import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { image_url } from "@/lib/constants";
import { Avatar, Badge, Card } from "@radix-ui/themes";
import { Eye, GraduationCap, Target } from "lucide-react";

export default function MissionVisionProvost() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <Card className="bg-gradient-to-r from-orange-100 to-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <GraduationCap className="h-6 w-6" />
            Meet Our Provost
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <Avatar size={"9"} fallback="CN" src={image_url} />

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Dr. Aisha Nnamani</h3>
              <p className="text-sm text-gray-600">
                Provost, Sahad College of Nursing
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Ph.D. in Nursing</Badge>
              <Badge>20+ Years Experience</Badge>
              <Badge>Healthcare Leadership</Badge>
            </div>
            <p className="text-gray-700">
              Dr. Aisha Nnamani brings a wealth of experience and passion to her
              role as Provost of Sahad College of Nursing. With over two decades
              of experience in nursing practice, education, and administration,
              she is committed to fostering an environment of academic
              excellence and innovation. Dr. Nnamani's vision is to prepare
              nurses who are not only clinically competent but also culturally
              sensitive and technologically adept, ready to meet the healthcare
              challenges of the 21st century.
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-orange-600">
              <Target className="h-6 w-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              At Sahad College of Nursing, our mission is to educate and inspire
              the next generation of compassionate, skilled, and innovative
              nurses. We are committed to providing a comprehensive,
              evidence-based education that prepares our students to excel in
              the ever-evolving healthcare landscape and make a positive impact
              on patient care and community health.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <Eye className="h-6 w-6" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We envision Sahad College of Nursing as a leading institution in
              nursing education, recognized for its excellence in teaching,
              research, and community service. We aim to be at the forefront of
              healthcare innovation, producing graduates who are not only
              skilled practitioners but also leaders, advocates, and
              change-makers in the field of nursing and global health.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
