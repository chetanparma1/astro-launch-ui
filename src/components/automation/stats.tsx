import { Typography } from "@material-tailwind/react";

const stats = [
  {
    number: "95%",
    title: "Client Satisfaction",
    description: "Our clients consistently rate our services highly"
  },
  {
    number: "500+",
    title: "Projects Completed",
    description: "Successfully delivered automation solutions"
  },
  {
    number: "40%",
    title: "Average Cost Reduction",
    description: "Typical cost savings for our clients"
  },
  {
    number: "24/7",
    title: "Support Available",
    description: "Round-the-clock technical assistance"
  }
];

export function Stats() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ number, title, description }) => (
            <div key={title} className="text-center">
              <Typography variant="h2" color="blue" className="mb-3">
                {number}
              </Typography>
              <Typography variant="h6" className="mb-2">
                {title}
              </Typography>
              <Typography className="font-normal text-blue-gray-600">
                {description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;