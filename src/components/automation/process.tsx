import { Typography } from "@material-tailwind/react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your current processes and identify automation opportunities."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Our team develops a customized automation roadmap for your business."
  },
  {
    number: "03",
    title: "Implementation",
    description: "We deploy and integrate automation solutions seamlessly into your workflow."
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous monitoring and improvement of automated processes."
  }
];

export function Process() {
  return (
    <section className="px-8 py-20 bg-blue-gray-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Typography color="blue" className="font-bold mb-4">Our Process</Typography>
          <Typography variant="h2" className="mb-4">
            How We Work
          </Typography>
          <Typography variant="lead" className="mx-auto w-full max-w-2xl text-gray-500">
            Our proven methodology ensures successful automation implementation
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="text-center">
              <Typography variant="h1" color="blue" className="mb-4">
                {number}
              </Typography>
              <Typography variant="h5" className="mb-2">
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

export default Process;