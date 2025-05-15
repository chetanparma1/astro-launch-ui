import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const cases = [
  {
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Manufacturing Automation",
    description: "Reduced production time by 35% through automated workflow implementation",
    industry: "Manufacturing"
  },
  {
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Financial Process Automation",
    description: "Automated reporting saved 20 hours per week for financial team",
    industry: "Finance"
  },
  {
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Healthcare Data Integration",
    description: "Streamlined patient data processing with 99.9% accuracy",
    industry: "Healthcare"
  }
];

export function CaseStudies() {
  return (
    <section className="px-8 py-20 bg-blue-gray-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Typography color="blue" className="font-bold mb-4">Case Studies</Typography>
          <Typography variant="h2" className="mb-4">
            Success Stories
          </Typography>
          <Typography variant="lead" className="mx-auto w-full max-w-2xl text-gray-500">
            See how we've helped businesses transform through automation
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ image, title, description, industry }) => (
            <Card key={title} className="overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 h-64"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="small" color="blue" className="mb-2 font-bold">
                  {industry}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-3">
                  {title}
                </Typography>
                <Typography className="mb-4 font-normal text-blue-gray-600">
                  {description}
                </Typography>
                <Button variant="text" color="blue">
                  Learn More
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;