/*Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages. */

function launchBrowser(browser) {
    if (browser === "Chrome") {
        console.log("Launching Chrome browser...");
    } else if (browser === "Firefox") {
        console.log("Launching Firefox browser...");
    } else if (browser === "Safari") {
        console.log("Launching Safari browser...");
    } else {
        console.log("Browser not supported.");
    }
}
    function  runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests...");
            break;  

            case "regression":
            console.log("Running regression tests...");
            break;  

            case "sanity":
            console.log("Running sanity tests...");
            break;
            
            default:
                console.log("Invalid test type.");
    }}
    launchBrowser("Chrome"); // Launching Chrome browser...
    launchBrowser("Edge"); // Browser not supported.
    runTests("smoke"); // Running smoke tests...    
    runTests("performance"); // Invalid test type.