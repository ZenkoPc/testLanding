export interface Testimonial {
  name: string;
  image?: string;
  text: string;
  company: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number | null;
  role: "USER" | "ADMIN";
  createdAt: Date;
}
