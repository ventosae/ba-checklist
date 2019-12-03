export const inputValuesForProject = [
  {
    type: "input",
    inputLabel: "Project Name",
    inputId: "projectName",
    inputPlaceholder: "Project Name",
    errorMessage: "Plese enter project name",
    value: "",
    isValid: true,
    tooltip: [
      {
        tooltipComment: "Please provide info here",
        class: "123"
      }
    ]
  },
  {
    type: "input",
    inputLabel: "Your Email Address",
    inputId: "email",
    inputPlaceholder: "example@sportsbet.com.au",
    errorMessage: "Email is invalid",
    value: "",
    isValid: true,
    tooltip: [
      {
        tooltipComment: "Some Examples Below",
        class: "tooltip-header"
      },
      {
        tooltipComment: "https://www.sportsbet.com.au/betting/rugby-league",
        class: "tooltip-good"
      },
      {
        tooltipComment: "https://www.sportsbet.com.au/betting/rugby-league",
        class: "tooltip-bad"
      }
    ]
  }
];

export const inputValuesForChecklist = [
  {
    type: "select",
    inputLabel:
      "Subdomain/new domain: is this new content/feature located on a separate domain/subdomain",
    isInputValid: "domainValid",
    inputId: "domain",
    errorMessage: "Please pick an answer",
    value: "",
    isValid: true,
    options: [
      "is located on separate subdomain/domain",
      "is NOT located on subdomain/domain"
    ],
    tooltip: [
      {
        tooltipComment: "Please provide info here",
        class: "123"
      }
    ]
  },
  {
    type: "checklist",
    label: "Web Page URL",
    errorMessage: "Please pick an answer",
    options: [
      {
        optionLabel:
          "Make sure the new URL(s) are using keywords relevant to the page",
        id: "urlKeyword",
        value: "URLs are using keywords relevant to the page",
        checked: true,
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "URL is within the structure of the website category",
        id: "urlStrucutre",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "URL doesn’t have capital letters or special symbols",
        id: "urlCapital",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      }
    ]
  },
  {
    type: "select",
    inputLabel:
      "Rendering – confirm the web page is rendering fully for Search Engine Crawlers",
    isInputValid: "renderingValid",
    errorMessage: "Please pick an answer",
    inputId: "rendering",
    value: "",
    isValid: true,
    options: [
      "Feature is using client side rendering",
      "Feature is NOT using client side rendering",
      "Not Sure"
    ],
    tooltip: [
      {
        tooltipComment: "Please provide info here",
        class: "123"
      }
    ]
  },
  {
    type: "checklist",
    label: "Meta Data",
    value: "",
    options: [
      {
        optionLabel: "Title tag requirements are fulfilled",
        id: "titleRequirements",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "Description tag requirements are fulfilled",
        id: "descriptionRequirements",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "H1 tag requirements are fulfilled",
        id: "h1Requirements",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      }
    ]
  },
  {
    type: "select",
    inputLabel: "Schema Markups",
    errorMessage: "Please pick an answer",
    isInputValid: "schemaValid",
    inputId: "schema",
    value: "",
    isValid: true,
    options: [
      "Schema Markups are implemented",
      "Schema Markups are NOT implemented",
      "Not Sure"
    ],
    tooltip: [
      {
        tooltipComment: "Please provide info here",
        class: "123"
      }
    ]
  },
  {
    type: "select",
    inputLabel: "Page Load Speed",
    errorMessage: "Please pick an answer",
    isInputValid: "pagespeedValid",
    inputId: "pagespeed",
    value: "",
    isValid: true,
    options: [
      "Page load speed is considered as per overall Sportsbet standard",
      "Page load speed is NOT considered as per overall Sportsbet standard",
      "Not Sure"
    ],
    tooltip: [
      {
        tooltipComment: "Please provide info here",
        class: "123"
      }
    ]
  },
  {
    type: "textarea",
    inputChange: "this.handleInputChange",
    label: "Any onther information which might be usefull for the team?",
    id: "content",
    value: ""
  }
  // {
  //   type: "select+checklist",
  //   inputLabel: "Page Load Speed1123",
  //   errorMessage: "Please pick an answer",
  //   isInputValid: "pagespeedValid",
  //   value: "",
  //   isValid: true,
  //   inputId: "pagespeed1",
  //   options: [
  //     "Page load speed is considered as per overall Sportsbet standard",
  //     "Page load speed is NOT considered as per overall Sportsbet standard",
  //     "Not Sure"
  //   ],
  //   tooltip: [
  //     {
  //       tooltipComment: "Please provide info here",
  //       class: "123"
  //     }
  //   ],
  //   labelChecklist: "Meta Data1",
  //   optionChecklist: [
  //     {
  //       optionLabel: "Title tag requirements are fulfilled",
  //       id: "titleRequirements",
  //       tooltiptext: [
  //         {
  //           tooltipComment: "Please provide info here",
  //           class: "123"
  //         }
  //       ]
  //     },
  //     {
  //       optionLabel: "Description tag requirements are fulfilled",
  //       id: "descriptionRequirements",
  //       tooltiptext: [
  //         {
  //           tooltipComment: "Please provide info here",
  //           class: "123"
  //         }
  //       ]
  //     },
  //     {
  //       optionLabel: "H1 tag requirements are fulfilled",
  //       id: "h1Requirements",
  //       tooltiptext: [
  //         {
  //           tooltipComment: "Please provide info here",
  //           class: "123"
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export const testData = [
  {
    type: "select",
    inputLabel:
      "Subdomain/new domain: is this new content/feature located on a separate domain/subdomain",
    isInputValid: "domainValid",
    inputId: "domain",
    errorMessage: "Please pick an answer",
    value: "",
    isValid: true,
    options: [
      "is located on separate subdomain/domain",
      "is NOT located on subdomain/domain"
    ],
    tooltip: [
      {
        tooltipComment: "Please provide info here",
        class: "123"
      }
    ]
  },
  {
    type: "input",
    inputLabel: "Project Name",
    inputId: "projectName",
    inputPlaceholder: "Project Name",
    errorMessage: "Plese enter project name",
    value: "",
    isValid: true,
    tooltip: [
      {
        tooltipComment: "Please provide info here",
        class: "123"
      }
    ]
  },
  {
    type: "checklist",
    label: "Web Page URL",
    errorMessage: "Please pick an answer",
    options: [
      {
        optionLabel:
          "Make sure the new URL(s) are using keywords relevant to the page",
        id: "urlKeyword123",
        value: "URLs are using keywords relevant to the page",
        checked: true,
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel:
          "Make sure the new URL(s) are using keywords relevant to the page",
        id: "urlKeyword",
        value: "URLs are using keywords relevant to the page",
        checked: true,
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      }
    ]
  }
];

export const inputValuesForAppChecklist = [
  {
    type: "textarea",
    inputChange: "this.handleInputChange",
    label: "",
    id: "appInfo",
    value: ""
  }
];

export const defaultState = {
  projectName: "",
  email: "",
  domain: "",
  rendering: "",
  schema: "",
  pagespeed: "",
  content: "No comment",
  appInfo: "No comment",
  renderChecklist: "",
  urlKeyword: "no answer",
  urlStrucutre: "no answer",
  urlCapital: "no answer",
  titleRequirements: "no answer",
  descriptionRequirements: "no answer",
  h1Requirements: "no answer",
  projectNameValid: true,
  emailValid: true,
  domainValid: true,
  schemaValid: true,
  pagespeedValid: true,
  contentValid: true,
  emailValidRender: false,
  projectNameValidRender: false,
  renderAppSelector: true,
  renderProjectInformation: true,
  name: ""
};

export function SlackMrkdwn(messageValues) {
  let values = messageValues;

  let textObj = values.map(value => {
    if (value.type === "text-header") {
      return {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*" + value.text + "*"
        }
      };
    } else if (value.type === "text") {
      return {
        type: "section",
        text: {
          type: "mrkdwn",
          text: value.text
        }
      };
    } else if (value.type === "text-list") {
      return {
        type: "section",
        fields: [
          {
            type: "plain_text",
            text: value.text1
          },
          {
            type: "plain_text",
            text: value.answer1
          },
          {
            type: "plain_text",
            text: value.text2
          },
          {
            type: "plain_text",
            text: value.answer2
          },
          {
            type: "plain_text",
            text: value.text3
          },
          {
            type: "plain_text",
            text: value.answer3
          }
        ]
      };
    } else if (value.type === "devider") {
      return {
        type: "divider"
      };
    }
  });

  let objFinal = { blocks: textObj };
  return objFinal;
}

export default inputValuesForProject;
