import type School from "./types/School";

/**
 * Obtém os dados da escola disponível no contexto da aplicação.
 *
 * @throws Lança um erro se não for possível obter os dados da escola.
 */
function getCurrentSchool(): School {
  if (Math.random() < 0.5) {
    throw new Error("The school isn't in this context.");
  }

  return {
    id: "704728e7-d3fb-4628-992e-3b92ab3b62cf",
    // ...
    language: "en-US",
  };
}

export default getCurrentSchool;
