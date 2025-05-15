import {
  Card,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const testimonials = [
  {
    feedback: "The automation solutions provided have transformed our business operations. We've seen remarkable improvements in efficiency and cost savings.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    feedback: "Their team's expertise in process automation helped us streamline our workflows and reduce manual errors significantly.",
    author: "Michael Chen",
    position: "Operations Director, InnovateX",
    image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function Testimonials() {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Typography color="blue" className="font-bold mb-4">Testimonials</Typography>
          <Typography variant="h2" className="mb-4">
            What Our Clients Say
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map(({ feedback, author, position, image }) => (
            <Card key={author} className="border border-blue-gray-50">
              <CardBody>
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  "{feedback}"
                </Typography>
                <div className="flex items-center gap-4">
                  <Avatar
                    src={image}
                    alt={author}
                    size="lg"
                  />
                  <div>
                    <Typography variant="h6">{author}</Typography>
                    <Typography color="blue-gray" className="font-normal">
                      {position}
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;