import { motion } from "framer-motion";
import { Award, Users, Zap } from "lucide-react";
function Benifit() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-section mb-3">What's Included in Every Plan</h2>
          <p className="text-sub text-muted-foreground">
            All plans come with our core benefits
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Award,
              title: "Quality Guaranteed",
              description: "Every product is curated and verified",
            },
            {
              icon: Zap,
              title: "Instant Access",
              description: "Get products immediately after purchase",
            },
            {
              icon: Users,
              title: "Community",
              description: "Join a thriving community of creators",
            },
          ].map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benifit;
