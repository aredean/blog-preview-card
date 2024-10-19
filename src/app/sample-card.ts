import { Card } from "./components/blog-preview-card/blog-preview-card";

export const sampleCards: Card[] = [
    {
      title: "Exploring Angular Directives",
      date: "2024-09-15",
      description: "A comprehensive guide on creating and using Angular directives to build reusable components.",
      image: "https://picsum.photos/200/200",
      link: "",
      categories: [
        { title: "Angular", link: "https://example.com/angular" },
        { title: "Frontend Development" }
      ],
      author: {
        name: "Jane Doe",
        link: "",
        image: "https://picsum.photos/32/32"
      }
    },
    {
      title: "Mastering TypeScript Interfaces",
      date: "2024-08-22",
      description: "An in-depth article on how to effectively use interfaces in TypeScript to enforce type safety.",
      image: "https://picsum.photos/202/202",
      link: "",
      categories: [
        { title: "TypeScript", link: "https://example.com/typescript" },
        { title: "Backend Development" }
      ],
      author: {
        name: "John Smith",
        link: "",
        image: "https://picsum.photos/34/34"
      }
    },
    {
      title: "Understanding RxJS Observables",
      date: "2024-10-01",
      description: "Learn how to use RxJS Observables for managing asynchronous data streams in JavaScript.",
      image: "https://picsum.photos/201/201",
      link: "https://example.com/rxjs-observables",
      categories: [
        { title: "RxJS", link: "https://example.com/rxjs" },
        { title: "JavaScript" }
      ],
      author: {
        name: "Alex Johnson",
        link: "",
        image: "https://picsum.photos/33/33"
      }
    }
  ];
  