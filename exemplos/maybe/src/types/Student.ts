import type Language from "./Language";

/** Objeto com os dados da pessoa estudante autenticada na aplicação. */
type Student = {
  id: string;
  // ...
  language?: Language;
};

export default Student;
