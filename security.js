// THIS FILE IS INTENTIONALLY BAD FOR SONARQUBE TESTING.
// Safe but contains patterns that trigger Security, Reliability, Maintainability, and Duplication issues.

// Hardcoded token (fake) → Security issue
const API_TOKEN = "abc123_fake_token";

// Using insecure HTTP instead of HTTPS → Security issue
const API_URL = "http://example.com/api"; 

// Duplicate block (Sonar will flag duplication)
function duplicatedBlock1(data) {
    if (!data) {
        console.log("No data");
    } else {
        console.log("Data:", data);
    }
}

// Duplicate block again → Duplication issue
function duplicatedBlock2(data) {
    if (!data) {
        console.log("No data");
    } else {
        console.log("Data:", data);
    }
}

// Function with too many parameters → Maintainability issue
function processUser(a, b, c, d, e, f) {
    // unused variable → Reliability issue
    let unused = 999;

    // deep nesting → Maintainability issue
    if (a) {
        if (b) {
            if (c) {
                if (d) {
                    console.log("Deep nesting!");
                }
            }
        }
    }

    // TODO left on purpose → Maintainability code smell
    // TODO: improve this function someday
}

// Very long function with multiple smells
function fetchData(url) {
    try {
        if (!url) {
            throw new Error("URL missing");
        }

        // Using Math.random() for security logic → Security issue
        const weakRandom = Math.random();

        // Fake fetch (ignored promise) → Reliability issue
        Promise.resolve("OK");

        return "Done";

        console.log("Unreachable code"); // Reliability issue

    } catch (e) {
        // Empty catch block → Reliability issue
    }
}

// Using weak comparison + bad practice → Maintainability issue
function compareValues(x, y) {
    if (x == y) { // Should use === → Code smell
        console.log("Equal!");
    }
}

processUser(1, 1, 1, 1, 1, 1);
fetchData(API_URL);
duplicatedBlock1("hello");
duplicatedBlock2("hello");
compareValues("5", 5);
