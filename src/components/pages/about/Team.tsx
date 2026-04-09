import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
const teamMembers = [
  {
    name: "MD SHAJJAD RAHMAN",
    role: "CEO and Founder",
    image: "images/team/MD-SHAJJAD-RAHMAN.png",
    bio: "Entrepreneur leading the vision and growth of Skilled Zone.",
  },
  {
    name: "MOHD TAWHER ASHRAF SIDDIQUI SADAT",
    role: "Co-Founder",
    image: "images/team/MOHD-TAWHER-ASHRAF-SIDDIQUI-SADAT.png",
    bio: "Focused on building innovative and scalable platform solutions.",
  },
  {
    name: "SADEKUL ISLAM JOY",
    role: "Platform Administrator",
    image: "images/team/SADEKUL-ISLAM-JOY.png",
    bio: "Ensures smooth operations and efficient platform management.",
  },
];
function Team() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          tag="Leadership"
          title="Meet Our Team"
          description="Talented individuals passionate about building the future of digital commerce"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center p-6 rounded-xl border border-border bg-card hover-lift"
            >
              {/* Rounded Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover "
                />
              </div>

              {/* Info */}
              <h3 className="font-heading font-semibold text-lg">
                {member.name}
              </h3>

              <p className="text-sm text-primary font-medium mb-2">
                {member.role}
              </p>

              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
