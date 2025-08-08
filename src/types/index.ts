export interface UseCase {
  id: string;
  title: string;
  username: string;
  handle: string;
  userIcon: string;
  userIconAlt: string;
  postContent: string;
  image: string;
  imageAlt: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  content: string;
}

export interface StepData {
  number: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  alt: string;
}