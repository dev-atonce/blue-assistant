export interface FormContactProps {
  id: string;
  service: string;
  customer: string;
  company: string;
  name_kanji: string;
  name_eng: string;
  phone: string;
  email: string;
  detail: string;
  status: boolean;
  createdAt: string;
}

export interface ApiResponse {
  total: number;
  lastPage: number;
  currPage: number;
  rows: FormContactProps[];
}

export interface FormContactState {
  contacts: FormContactProps[];
  isLoading: boolean;
  error: string | null;

  total: number;
  lastPage: number;
  currPage: number;

  fetchContact: (page: number) => Promise<void>;
  fetchContactById: (id: string) => Promise<void>;
  onChangeStatus: (id: string, status: boolean) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
}
