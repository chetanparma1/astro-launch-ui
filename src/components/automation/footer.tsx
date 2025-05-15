import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    title: "Services",
    items: ["Process Automation", "Data Analytics", "AI Solutions", "Integration"],
  },
  {
    title: "Resources",
    items: ["Documentation", "Case Studies", "Guides", "Help Center"],
  },
];

export function Footer() {
  return (
    <footer className="px-8 pt-20 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Typography variant="h5" className="mb-6">Automation Agency</Typography>
            <Typography className="font-normal text-blue-gray-500">
              Transforming businesses through intelligent automation solutions.
            </Typography>
          </div>
          {LINKS.map(({ title, items }) => (
            <div key={title}>
              <Typography variant="h6" className="mb-4">{title}</Typography>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Typography
                      as="a"
                      href="#"
                      className="font-normal text-blue-gray-500 transition-colors hover:text-blue-gray-900"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal text-blue-gray-500">
            &copy; {CURRENT_YEAR} Automation Agency. All rights reserved.
          </Typography>
          <div className="flex gap-4">
            <Typography
              as="a"
              href="#"
              className="font-normal text-blue-gray-500 transition-colors hover:text-blue-gray-900"
            >
              Terms of Service
            </Typography>
            <Typography
              as="a"
              href="#"
              className="font-normal text-blue-gray-500 transition-colors hover:text-blue-gray-900"
            >
              Privacy Policy
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;