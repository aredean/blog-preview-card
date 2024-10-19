export interface Link {
        title: string;
        link?: string;
      }
      
export interface Author {
        name: string;
        link?: string;
        image?: string;
      }
      
export interface Card {
        title: string;
        date?: Date | string;
        description?: string;
        image?: string;
        link?: string;
        categories? : Link[];
        author?: Author;
      }
