export interface FormValues {
    id?: number;
    title: string;
    content: string;
    lat: string;
    long: string;
    image_url: string;
    created_at?: string | undefined;
    updated_at?: string | undefined;
}

export enum FormType {
    NEW = 'NEW',
    UPDATE = 'UPDATE'
}
  