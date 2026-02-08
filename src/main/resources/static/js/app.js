document.addEventListener("DOMContentLoaded", () => {

    const metrics = document.querySelectorAll(".metrics span");

    const qualityGate = {
        status: "PASSED", // PASSED | FAILED
        coverage: 82,
        bugs: 0,
        vulnerabilities: 0,
        codeSmells: 3
    };

    // Animate metrics one by one
    metrics.forEach((metric, index) => {
        setTimeout(() => {
            metric.classList.add("active");
        }, index * 250);
    });

    // Quality Gate Banner
    const footer = document.querySelector(".footer h3");
    footer.innerText = `Quality Gate ${qualityGate.status}`;

    if (qualityGate.status === "PASSED") {
        footer.style.color = "#00ffff";
        footer.style.textShadow = "0 0 15px #00ffff";
    } else {
        footer.style.color = "#ff004f";
        footer.style.textShadow = "0 0 15px #ff004f";
    }

    // Console output like real CI logs (learning purpose)
    console.log("🔍 SonarQube Analysis Started...");
    console.log(`✔ Coverage: ${qualityGate.coverage}%`);
    console.log(`✔ Bugs: ${qualityGate.bugs}`);
    console.log(`✔ Vulnerabilities: ${qualityGate.vulnerabilities}`);
    console.log(`✔ Code Smells: ${qualityGate.codeSmells}`);
    console.log(`🚦 Quality Gate: ${qualityGate.status}`);
});

