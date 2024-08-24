const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const INITIAL_COUNTER_VALUE = 1;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("Counter", (m) => {
  // Extraer los valores de los parámetros de manera sincrónica
  const initialValue = m.getParameter("initialValue", 0).defaultValue;  // Accedemos al valor directamente
  const counterAmount = m.getParameter("counterAmount", 1_000_000_000n).defaultValue;  // Accedemos al valor directamente

  console.log("Initial Value: ", initialValue);
  console.log("Counter Amount: ", counterAmount);

  // Desplegar el contrato usando los valores correctos
  const counter = m.contract("Counter", [initialValue]);

  console.log("Deploying Counter contract...");

  return { counter };
});

