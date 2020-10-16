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
      "Does this feature/product creates a new URL on SB.com? 📃",
    isInputValid: "domainValid",
    inputId: "domain",
    errorMessage: "Please pick an answer",
    value: "",
    isValid: true,
    options: [
      "It is creating a new URL/Page",
      "It is NOT is creating a new URL/Page"
    ],
    tooltip: [
      {
        tooltipComment: "why it's important",
        class: "tooltip-header"
      },
      {
        tooltipComment: "We have to have a static URL in order to appear in Google search",
        class: "tooltip-comment"
      }
    ]
  },
  {
    type: "select",
    inputLabel:
      "Does this feature/product changes content on an existing page? 📝",
    isInputValid: "renderingValid",
    errorMessage: "Please pick an answer",
    inputId: "rendering",
    value: "",
    isValid: true,
    options: [
      "It is changing content on existing page",
      "It is not changing content on existing page"
    ],
    tooltip: [
      {
        tooltipComment:
          "There are always way to make content more attractive for search engines"
      }
    ]
  },
  {
    type: "select",
    inputLabel: "Does this new feature/product is hosted on new domain or subdomain? 🌐",
    errorMessage: "Please pick an answer",
    isInputValid: "schemaValid",
    inputId: "schema",
    value: "",
    isValid: true,
    options: [
      "It is hosted on the main domain - www.sportsbet.com.au",
      "It is hosted on the NEW domain OR subdomain"
    ],
    tooltip: [
      {
        tooltipComment:
          "New domains or subdomains require additional SEO optimisation",
        class: "tooltip-comment"
      }
    ]
  },
  {
    type: "textarea",
    label: "Can you provide a little bit more information about the feature/product",
    inputId: "comment-web",
    value: " "
  }
];

export const inputValuesForAppChecklist = [
  {
    type: "textarea",
    inputChange: "this.handleInputChange",
    label: "Please provide some information about the app below 📱",
    inputId: "appInfoComment",
    value: "Your Comment"
  }
];

export const defaultState = {
  projectValue: inputValuesForProject,
  checklistValue: inputValuesForChecklist,
  appChecklistValue: inputValuesForAppChecklist,
  displayProjectValue: true,
  displayInputProject: true,
  renderChecklist: null
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
