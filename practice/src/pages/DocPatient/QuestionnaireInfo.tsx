export let QuestContent = [
  {
    title: "IPSS",
    questions: [
      "How badly are you suffering from X",
      "How badly are you suffering from Y",
      "How badly are you suffering from Z"
    ],
    answers: [
      [
        "Not at all",
        "Less than 1 time in 5",
        "More than half the time",
        "Less than half the time",
        "Almost always"
      ],
      [
        "Not at all",
        "Less than 1 time in 5",
        "More than half the time",
        "Less than half the time",
        "Almost always"
      ],
      [
        "Not at all",
        "Less than 1 time in 5",
        "More than half the time",
        "Less than half the time",
        "Almost always"
      ]
    ]
  },
  {
    title: "IIEF",
    questions: ["Question One", "Question Two", "Question Three"],
    answers: [
      ["Very low", "Low", "Moderate", "High", "Very High"],
      [
        "No sexual activity",
        "Almost never or never",
        "A few times",
        "Sometimes",
        "Most times",
        "Almast always or always"
      ],
      ["Answer one", "Answer two", "Answer three", "Answer four"]
    ]
  }
];

export let Cards = [
  {
    cardTitle: "IPSS",
    cardDesc:
      "This questionnaire conatins important info regarding prostate cancer diagnosis",
    link: "/ipss"
  },
  {
    cardTitle: "IIEF",
    cardDesc:
      "This questionnaire asks about your erection problems as a potential diagnostic tool for prostate cancer",
    link: "/ieff"
  },
  {
    cardTitle: "App Feedback",
    cardDesc:
      "This questionnaire asks for feebdack on various features in this app, so we can better understand whats good and what need improving!",
    link: "/feedback"
  }
];
