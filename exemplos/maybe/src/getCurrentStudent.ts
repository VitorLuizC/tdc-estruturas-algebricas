import type Student from "./types/Student";

/**
 * Obtém os dados da pessoa estudante autenticada na aplicação.
 *
 * Caso não exista pessoa autenticada essa função retorna `null`.
 */
function getCurrentStudent(): null | Student {
  if (Math.random() < 0.5) {
    return null;
  }

  const student: Student = {
    id: "d07f3fc3-0aab-4c58-b1a3-36e08b8b204f",
    // ...
  };

  if (Math.random() < 0.5) {
    student.language = "pt-BR";
  }

  return student;
}

export default getCurrentStudent;
