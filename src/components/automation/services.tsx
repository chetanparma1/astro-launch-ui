import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {
  CogIcon,
  ChartBarIcon,
  CommandLineIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <CogIcon className="h-12 w-12" />,
    title: "Process Automation",
    description: "Streamline your workflows with intelligent process automation that reduces manual tasks and increases efficiency."
  },
  {
    icon: <ChartBarIcon className="h-12 w-12" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and reporting solutions."
  },
  {
    icon: <CommandLineIcon className="h-12 w-12" />,
    title: "Custom Integration",
    description: "Seamlessly connect your existing systems and applications with custom API integrations."
  },
  {
    icon: <CpuChipIcon className="h-12 w-12" />,
    title: "AI Solutions",
    description: "Leverage artificial intelligence to optimize decision-making and predict business outcomes."
  }
];

export function Services() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography color="blue" className="font-bold mb-4">Our Services</Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Comprehensive Automation Solutions
          </Typography>
          <Typography variant="lead" className="mx-auto mb-24 w-full max-w-2xl text-gray-500">
            We provide end-to-end automation services to help your business thrive in the digital age
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon, title, description }) => (
            <Card key={title} className="border border-blue-gray-50">
              <CardBody className="p-6">
                <div className="mb-3 text-blue">{icon}</div>
                <Typography variant="h5" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-600">
                  {description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;