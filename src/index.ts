// Sonar Bait File 😈

console.log("Backstage POC Platform Service running");

let globalValue: any = "123"; // uso de any

function processUser(user: any, flag: boolean) { // any + função muito complexa
  let result = 0;
  let unusedVariable = "I am not used"; // variável não usada

  if (user == null) { // comparação fraca
    console.log("User is null");
  } else {
    if (flag) {
      if (user.age > 18) {
        if (user.age > 30) {
          result = 100;
        } else {
          result = 50;
        }
      } else {
        result = 10;
      }
    } else {
      if (user.role == "admin") { // comparação fraca
        result = 999;
      } else {
        result = 1;
      }
    }
  }

  // nested ternary
  const category =
    result > 100 ? "high"
      : result > 50 ? "medium"
        : result > 10 ? "low"
          : "none";

  // possível undefined access
  console.log(user.profile.name.toUpperCase());

  return category;
}

// código duplicado
function calculateA(value: number) {
  if (value > 10) {
    return value * 2;
  } else {
    return value + 2;
  }
}

function calculateB(value: number) {
  if (value > 10) {
    return value * 2;
  } else {
    return value + 2;
  }
}

// promise não tratada
async function fetchData() {
  fetch("https://example.com/api/data"); // sem await / sem catch
}

// magic number + shadowing
function computeScore(score: number) {
  if (score > 42) { // magic number
    let score = 100; // shadowing
    return score;
  }
  return score;
}

processUser({ age: 35, role: "admin" }, true);
