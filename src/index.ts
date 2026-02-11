// 🔥 HARD FAIL FILE 🔥

console.log("Backstage POC Platform Service running");

// 1️⃣ Hardcoded secret
const DB_PASSWORD = "super-secret-password";

// 2️⃣ SQL Injection pattern
function getUserById(id: string) {
  const query = "SELECT * FROM users WHERE id = '" + id + "'";
  return query;
}

// 3️⃣ eval usage (Security issue)
function executeDynamicCode(code: string) {
  return eval(code);
}

// 4️⃣ Extremely high cognitive complexity
function complexLogic(a: number, b: number, c: number) {
  if (a > 10) {
    if (b > 20) {
      if (c > 30) {
        if (a + b > c) {
          if (a % 2 === 0) {
            if (b % 2 === 0) {
              if (c % 2 === 0) {
                return 1;
              } else {
                return 2;
              }
            } else {
              return 3;
            }
          } else {
            return 4;
          }
        } else {
          return 5;
        }
      } else {
        return 6;
      }
    } else {
      return 7;
    }
  }
  return 0;
}

// 5️⃣ Duplicate logic
function duplicateA(value: number) {
  if (value > 10) {
    return value * 2;
  } else {
    return value + 2;
  }
}

function duplicateB(value: number) {
  if (value > 10) {
    return value * 2;
  } else {
    return value + 2;
  }
}

// 6️⃣ Empty catch block
async function unsafeAsync() {
  try {
    await fetch("https://example.com");
  } catch (e) {
    // silently ignored
  }
}

// 7️⃣ Unsafe regex (catastrophic backtracking risk)
const unsafeRegex = /(a+)+$/;
unsafeRegex.test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaX");

// 8️⃣ Non-null assertion abuse
function printName(user?: { name?: string }) {
  console.log(user!.name!.toUpperCase());
}

// 9️⃣ Unhandled Promise
function fireAndForget() {
  fetch("https://example.com");
}

fireAndForget();
