export type LoginDTO = {
  email: string;
  password: string;
};

export type SignUpDTO = {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
  user_type: number;
};

export type EditProfileDTO = {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
};
