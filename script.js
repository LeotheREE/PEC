const questions = [
    {
        question: "A piece of electrical equipment that is designed to operate at alternate intervals of (1) load and no load; or (2) load and rest; or (3) load, no load rest is called _____duty.",
        choices: ["short time", "intermittent", "periodic", "varying"],
        answer: "intermittent"
    },
    {
        question: "Lamp holders installed over highly combustible material shall be of the type:",
        choices: ["porcelain", "smoke resistance", "unswitched", "switched"],
        answer: "unswitched"
    },
    {
        question: "The main purpose of bonding jumper is to connect equipment grounding conductors and ___ to the grounded conductor of the system.",
        choices: ["supply transformer", "service-disconnect enclosure", "load side of service drop", "line side of service drop"],
        answer: "service-disconnect enclosure"
    },
    {
        question: "What is the maximum allowable distance interval between supports securing busways?",
        choices: ["1,000 mm", "1,800 mm", "2,000 mm", "1,500 mm"],
        answer: "1,500 mm"
    },
   {
        question: "What is the minimum size of wire in lighting outlet?",
        choices: ["3.5sq.mm", "5.5 sq.mm", "2.0 sq. mm", "8.0 sq. mm"],
        answer: "2.0 sq. mm"
    },
   {
        question: "What is the minimum size of grounding rod?",
        choices: ["10 mm", "12 mm", "13 mm", "16 mm"],
        answer: "16 mm"
    },
   {
        question: "Sign and outline lighting outlets shall be computed at a minimum of VA for each required branch circuit.",
        choices: ["1500", "180", "600", "1200"],
        answer: "1200"
    },
   {
        question: "A hermetic motor-compressor has a rated load current of 20 Amp. What is the allowable ampacity of branch circuit conductor?",
        choices: ["40 Amp", "20 Amp", "30 Amp", "25 Amp"],
        answer: "20 Amp"
    },
   {
        question: "What is the minimum ampacity of conductor for room air conditioner with 12 Amp rated current?",
        choices: ["10 Amp", "12 Amp", "15 Amp", "13.8 Amp"],
        answer: "15 Amp"
    },
   {
        question: "Code name for polyethylene insulation or PVC 75°C",
        choices: ["TW", "TF", "THW", "THHN"],
        answer: "THW"
    },
   {
        question: "What is the normal bending radius from inner edge of conduits, with relation to diameter?",
        choices: ["8-9 times", "6-7 times", "4-6 times", "3-4 times"],
        answer: "8-9 times"
    },
   {
        question: "Common cause of failure in termination of cable is",
        choices: ["Improper insulation & penciling", "Splices", "Wrong clearance", "Tracking"],
        answer: "Improper insulation & penciling"
    },
   {
        question: "Short circuit temperature of Polyethylene cable in degree centigrade is.",
        choices: ["200", "250", "300", "350"],
        answer: "250"
    },
   {
        question: "Short circuit temperature of Polyethylene cable in degree centigrade is.",
        choices: ["200", "250", "300", "350"],
        answer: "250"
    },
    {
        question: "What is the minimum distance receptacle outlet of a show window in meters?",
        choices: ["3", "4", "2", "5"],
        answer: "3"
    },
    {
        question: "Receptacle outlet shall be located not more than ___mm above countertop.",
        choices: ["300", "450", "250", "600"],
        answer: "450"
    },
    {
        question: "What is the distance from the flooring to the receptacle outlet in dwelling unit in mm?",
        choices: ["1800", "3700", "1700", "4000"],
        answer: "1800"
    },
    {
        question: "In dwelling units, at least one wall receptacle outlet shall be installed within ___mm of the outside edge of basin or bath tub.",
        choices: ["1200", "1600", "600", "900"],
        answer: "900"
    },
    {
        question: "In dwelling units, at least one receptacle outlet for hallways more than ___meter.",
        choices: ["3", "4", "2", "5"],
        answer: "3"
    },
    {
        question: "The lighting load for a dwelling unit expressed in terms of volt-ampere per sq. meter must be at least __.",
        choices: ["16", "28", "24", "12"],
        answer: "24"
    },
    {
        question: "The lighting load for an office expressed in terms of volt-ampere per square meter must be at least __.",
        choices: ["28", "12", "16", "24"],
        answer: "28"
    },
    {
        question: "A 3m motor draws 50 Amperes at full-load. What shall be the maximum inverse time circuit breaker that may be used for short circuit protection?",
        choices: ["50 Amp", "125 Amp", "100 Amp", "75 Amp"],
        answer: "125 Amp"
    },
    {
        question: "Branch circuit conductor to one or more units of a data processing system shall have an ampacity of ___% of the total connected load.",
        choices: ["80%", "125%", "200%", "100%"],
        answer: "125%"
    },
    {
        question: "What is the minimum ampacity of supply feeder for a window type air conditioning unit with 8 Amp rated load current with other load supplied?",
        choices: ["15 Amp", "20 Amp", "12 Amp", "10 Amp"],
        answer: "20 Amp"
    },
    {
        question: "The primary winding of a step-down transformer shall be protected on the primary side by an overcurrent device rated NOT more than a certain percentage of the primary current. What is this percentage?",
        choices: ["110%", "135%", "125%", "150%"],
        answer: "125%"
    },
    {
        question: "Grounding shall NOT be connected to:",
        choices: ["exothermic welding", "listed clamps", "soldered fittings", "listed pressure connectors"],
        answer: "soldered fittings"
    },
    {
        question: "Self-contained device that automatically opens an electric circuit, on severe overload without getting damage is:",
        choices: ["fuse", "disconnect switch", "molded circuit breaker", "cut-out"],
        answer: "molded circuit breaker"
    },
    {
        question: "Which of the following is not accepted as if they have the same meaning?",
        choices: ["low voltage", "no voltage", "over voltage", "under voltage"],
        answer: "low voltage"
    },
    {
        question: "What is called an electrically operated switch rated in amperes but also provide overload protection for motors?",
        choices: ["Magnetic starter", "Magnetic contactor", "Safety switch", "Manual starter"],
        answer: "Magnetic starter"
    },
    {
        question: "Code of Ethics is Resolution No. ___ series of 1995.",
        choices: ["18", "23", "22", "19"],
        answer: "22"
    },
    {
        question: "Which of the following establishes ethical behavior among professionals?",
        choices: ["legal contracts", "taxation regulations", "Hippocratic oath", "rules of play sports"],
        answer: "Hippocratic oath"
    },
    {
        question: "Integral part of contract requirement which set forth technical engineering requirements which are not shown completely on drawing.",
        choices: ["specification", "permit", "notarization", "perfection"],
        answer: "specification"
    },
    {
        question: "Sec.7, Article II. R.A. 7920: An Electrical Engineer shall not ___, vilify, or destroy the good name and reputation of others.",
        choices: ["modify", "divulge", "compete", "malign"],
        answer: "malign"
    },
    {
        question: "_____ is an establishment or a system for the production and modification of electric energy.",
        choices: ["Business establishments", "Industrial plant", "Electric plant", "Commercial establishments"],
        answer: "Electric plant"
    },
    {
        question: "Sec.2 (a)(6) Art. 1 of R.A.7920 is ___",
        choices: ["Consultation, investigation, valuation and management of services requiring electrical engineering knowledge.", "Teaching of electrical engineering professional subjects.", "Taking charge of sale and distribution of electrical equipment.", "Supervision of erection, installation, testing and commissioning of power plants."],
        answer: "Teaching of electrical engineering professional subjects."
    },
    {
        question: "The E.E. Board Chairman when the R.A 7920 and Code of Ethics was approved.",
        choices: ["Paul Joseph E. Woo", "Roy F. Gil", "Gerardo V. Gaor", "Rafael F. Florentino"],
        answer: "Rafael F. Florentino"
    },
    {
        question: "In what rule does R.A. 184 - Old Electrical Engineering Law (1947) stated?",
        choices: ["Rule 2 (e)", "Rule 2 (l)", "Rule 2 (p)", "Rule 2 (i)"],
        answer: "Rule 2 (l)"
    },
    {
        question: "A Board of Electrical Engineering (BEE) will serve his term in how many years?",
        choices: ["3", "5", "2", "6"],
        answer: "3"
    },
    {
        question: "How many years does a high school graduate need to qualify for RME?",
        choices: ["4 yrs.", "3 yrs.", "2 yrs.", "5 yrs."],
        answer: "5 yrs."
    },
    {
        question: "Under Penalty Clause: Any person who shall violate any of the provision of this Act shall be guilty of misdemeanor and shall, upon conviction, be sentenced to a fine:",
        choices: ["not more than P60,000", "not more than P20,000", "not more than P10,000", "not more than P50,000"],
        answer: "not more than P50,000"
    },
    {
        question: "Associate Electrical Engineer (Asso. EE) can apply for registration as Professional Electrical Engineer (PEE) without a degree of BSEE?",
        choices: ["True", "False", "can apply", "can interview"],
        answer: "False"
    },
    {
        question: "Who is the board of trustee or board member of TRANSCO?",
        choices: ["President of TRANSCO", "President of DOE", "President of DENR", "Department of Finance"],
        answer: "Department of Finance"
    },
    {
        question: "In Philippine Distribution Code Performance Standards, Which of the following does NOT belong?",
        choices: ["Collection standards", "Safety standards", "Reliability standards", "System efficiency standards"],
        answer: "Collection standards"
    },
 {
        question: "The available generating capacity in excess of the sum of the system demand plus losses within the specified period of time?",
        choices: ["Reserve Capacity", "Spinning Reserve", "Maximum Demand", "Operating Margin"],
        answer: "Operating Margin"
    },
    {
        question: "In R.A. 9136, what does PSALM mean?",
        choices: ["Power System Assets and Liabilities Management Corporation", "Power Sector Assets and Liabilities Management Corporation", "Power System Assets and Liabilities Management Commission", "Power Sector Assets and Liabilities Management Commission"],
        answer: "Power Sector Assets and Liabilities Management Corporation"
    },
    {
        question: "It is a distribution reliability index defined as the total duration of sustained customer power interruptions within a given period divided by the total number of customer served within the same period.",
        choices: ["SAIFI", "SAIDI", "MAIFI", "DAIFI"],
        answer: "SAIDI"
    },
    {
        question: "What is the meaning of WESM?",
        choices: ["World Energy Spot Market", "Wholesale Electricity Spot Market", "Wholesale Energy Saving Market", "World Electricity Saving Market"],
        answer: "Wholesale Electricity Spot Market"
    },
    {
        question: "A short voltage variation is a voltage swell if the root-mean-square (RMS) value of the voltage increases to between ___ percent and ___ of the nominal value.",
        choices: ["110,180", "120,190", "100,150", "105,175"],
        answer: "110,180"
    },
    {
        question: "Fast start is defined as the capability of a generating unit or generating plant to start and synchronize with the Grid within ___ minute/s.",
        choices: ["15", "5", "10", "30"],
        answer: "15"
    },
    {
        question: "In Philippine Distribution Code Purposes, which of the following does NOT belong?",
        choices: ["To ensure quality of electric Power", "To specify customers services for the protection of end users", "To specify standards for the protection of personnel in the work environment", "To ensure distribution system will be operated by only one distribution company"],
        answer: "To ensure quality of electric Power"
    },
    // Add more questions as needed
];

let questionPool = shuffleArray([...questions]);
let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    if (questionPool.length === 0) {
        questionElement.textContent = "REE KA NA IDOLOOO!";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";
        return;
    }

    const currentQuestion = questionPool[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => handleChoice(choice, currentQuestion.answer));
        choicesContainer.appendChild(button);
    });
    nextButton.disabled = true;
}

function handleChoice(selected, correct) {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.disabled = true; // Disable all buttons after selection
        if (button.textContent === correct) {
            button.classList.add("correct"); // Correct answer turns green
        } else if (button.textContent === selected) {
            button.classList.add("incorrect"); // Wrong answer turns red
        }
    });
    nextButton.disabled = false;

    if (selected !== correct) {
        questionPool.push(questionPool[currentQuestionIndex]); // Push back for retry
    }
    questionPool.splice(currentQuestionIndex, 1); // Remove question from pool
}

nextButton.addEventListener("click", () => {
    loadQuestion();
});

restartButton.addEventListener("click", () => {
    questionPool = shuffleArray([...questions]); // Shuffle the questions again
    currentQuestionIndex = 0;
    nextButton.style.display = "inline-block";
    restartButton.style.display = "none";
    loadQuestion();
});

loadQuestion();
