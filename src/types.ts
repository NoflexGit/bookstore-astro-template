export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      books: {
        Row: {
          author: number | null;
          created_at: string;
          id: number;
          imageUrl: string | null;
          price: number | null;
          title: string | null;
        };
        Insert: {
          author?: number | null;
          created_at?: string;
          id?: number;
          imageUrl?: string | null;
          price?: number | null;
          title?: string | null;
        };
        Update: {
          author?: number | null;
          created_at?: string;
          id?: number;
          imageUrl?: string | null;
          price?: number | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'books_author_fkey';
            columns: ['author'];
            referencedRelation: 'authors';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
