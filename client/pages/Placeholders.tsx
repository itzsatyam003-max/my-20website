import { Link } from "react-router-dom";

export function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <div className="container py-14">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="mt-2 text-foreground/70">{description}</p>}
      <div className="mt-6">
        <Link to="/" className="btn-gradient inline-flex items-center rounded-full px-5 py-2.5 font-semibold text-white">Back to Home</Link>
      </div>
    </div>
  );
}

export const CreateResume = () => (
  <Placeholder title="Create Resume/CV" description="This page will contain the full resume builder. Continue prompting to implement it." />
);
export const CreateBiodata = () => (
  <Placeholder title="Create Biodata" description="This page will help you create biodata in minutes." />
);
export const FreeCourses = () => (
  <Placeholder title="Free Computer Courses" description="Curated list of free computer courses and resources." />
);
export const About = () => (
  <Placeholder title="About Us" description="Learn more about Resume Ground and our mission." />
);
export const Privacy = () => (
  <Placeholder title="Privacy Policy" description="Read about how we protect your data and privacy." />
);
