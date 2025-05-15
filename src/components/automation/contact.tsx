import {
  Card,
  CardBody,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";

export function Contact() {
  return (
    <section className="px-8 py-20 bg-blue-gray-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Typography color="blue" className="font-bold mb-4">Contact Us</Typography>
          <Typography variant="h2" className="mb-4">
            Get In Touch
          </Typography>
          <Typography variant="lead" className="mx-auto w-full max-w-2xl text-gray-500">
            Ready to transform your business? Let's discuss how we can help.
          </Typography>
        </div>
        <Card className="mx-auto max-w-2xl">
          <CardBody>
            <form>
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <Input color="blue" label="First Name" />
                <Input color="blue" label="Last Name" />
              </div>
              <div className="mb-8">
                <Input color="blue" label="Email" type="email" />
              </div>
              <div className="mb-8">
                <Input color="blue" label="Company" />
              </div>
              <div className="mb-8">
                <Textarea color="blue" label="Message" />
              </div>
              <Button color="blue" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Contact;