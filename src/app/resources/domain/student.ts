import { Contacts } from './contacts';
import { Measurement } from './Measurement';
import { Plan } from './Plan';

export class Student{

  id?: number
  name?: String;
  sexo?: String;
  contacts?: Array<Contacts>;
  measurements?: Array<Measurement>;
  birthDate?: String;
  situation?: String;
  paymentStatus?: String;
  plan?: Plan;
}