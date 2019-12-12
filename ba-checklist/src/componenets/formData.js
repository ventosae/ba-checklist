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
        tooltipComment: "a bad example below",
        class: "tooltip-header"
      },
      {
        tooltipComment: "https://hotshotracing.sportsbet.com.au/ ",
        class: "tooltip-bad"
      }
    ]
  },
  {
    type: "checklist",
    label: "Web Page URL",
    inputId: "WebPageURL",
    options: [
      {
        optionLabel:
          "Make sure the new URL(s) are using keywords relevant to the page",
        id: "urlKeyword",
        value: "URLs are using keywords relevant to the page",
        checked: false,
        tooltiptext: [
          {
            tooltipComment:
              "SEO Team can provide keywords for this unless already provided",
            class: "tooltip-header"
          },
          {
            tooltipComment: "https://www.sportsbet.com.au/betting/boxing",
            class: "tooltip-good"
          },
          {
            tooltipComment:
              "https://www.sportsbet.com.au/betting/basketball-us/nba-matches/washington-wizards-at-charlotte-hornets-5003448/sgm",
            class: "tooltip-bad"
          }
        ]
      },
      {
        optionLabel: "URL is within the structure of the website category",
        id: "urlStrucutre",
        checked: false,
        tooltiptext: [
          {
            tooltipComment: 'Example for "Rugby League" keyword',
            class: "tooltip-header"
          },
          {
            tooltipComment: "https://www.sportsbet.com.au/betting/rugby-league",
            class: "tooltip-good"
          },
          {
            tooltipComment:
              "https://www.sportsbet.com.au/betting/novelty/rugby-league",
            class: "tooltip-bad"
          }
        ]
      },
      {
        optionLabel: "URL doesn’t have capital letters or special symbols",
        id: "urlCapital",
        checked: false,
        tooltiptext: [
          {
            tooltipComment: "Special Symbols can cause duplication",
            class: "tooltip-header"
          },
          {
            tooltipComment: "https://www.sportsbet.com.au/betting/rugby-league",
            class: "tooltip-good"
          },
          {
            tooltipComment: "https://www.sportsbet.com.au/betting/Rugby-lËague",
            class: "tooltip-bad"
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
        tooltipComment:
          "Please let us know if new feature/product uses Client Side Rendering."
      }
    ]
  },
  {
    type: "checklist",
    label: "Meta Data ",
    inputId: "MetaData",
    options: [
      {
        optionLabel: "Title tag requirements are fulfilled",
        id: "titleRequirements",
        checked: false,
        tooltiptext: [
          {
            tooltipComment: "Title Best practices and examples below",
            class: "tooltip-header"
          },
          {
            tooltipComment:
              "Max length: 50 – 65 symbols - Keywords included, brand included"
          },
          {
            tooltipComment:
              "Todays Horse Racing Schedule - Upcoming Races | Sportsbet",
            class: "tooltip-good"
          },
          {
            tooltipComment: "Races | Sportsbet",
            class: "tooltip-bad"
          }
        ]
      },
      {
        optionLabel: "Description tag requirements are fulfilled",
        id: "descriptionRequirements",
        checked: false,
        tooltiptext: [
          {
            tooltipComment: "Description tag best practices and examples below",
            class: "tooltip-header"
          },
          {
            tooltipComment:
              "Max length: 130 - 160 symbols - Keywords included, brand included, CTA included"
          },
          {
            tooltipComment:
              "View the latest odds and bet on Bayern Munich v Tottenham with Sportsbet. Join Australia's Favourite Online Betting and Entertainment Website.",
            class: "tooltip-good"
          },
          {
            tooltipComment: "Never miss on betting.",
            class: "tooltip-bad"
          }
        ]
      },
      {
        optionLabel: "H1 tag requirements are fulfilled",
        id: "h1Requirements",
        checked: false,
        tooltiptext: [
          {
            tooltipComment:
              "H1 – must be included in every page. Only one H1 should be added to the page.",
            class: "tooltip-header"
          },
          {
            tooltipComment:
              "Page contains H1, H2 and H4 tags (without H3tags) should be in order H1, H2 and H3 tags",
            class: "tooltip-bad"
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
        tooltipComment:
          "Reach out to SEO team to identify the available mark ups and code for them.",
        class: "tooltip-header"
      },
      {
        tooltipComment:
          "Get Chrome extension for markup verefication. Serarch: Structured Data Testing Tool"
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
        tooltipComment:
          "Page speed is very important ranking factor for google. We use lighthouse for benchmarking"
      }
    ]
  },
  {
    type: "textarea",
    label: "Any onther information which might be usefull for the team?",
    inputId: "comment-web",
    value: " "
  }
];

export const inputValuesForAppChecklist = [
  {
    type: "textarea",
    inputChange: "this.handleInputChange",
    label: "Please provide any comments below",
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
