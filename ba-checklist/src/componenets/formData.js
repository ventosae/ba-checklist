export const inputValuesForProject = [
  {
    type: "input",
    inputLabel: "Project Name",
    inputId: "projectName",
    inputPlaceholder: "Project Name",
    errorMessage: "Plese enter project name",
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
        optionState: "urlKeyword",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "URL is within the structure of the website category",
        optionState: "urlStrucutre",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "URL doesn’t have capital letters or special symbols",
        optionState: "urlCapital",
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
    options: [
      {
        optionLabel: "Title tag requirements are fulfilled",
        optionState: "titleRequirements",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "Description tag requirements are fulfilled",
        optionState: "descriptionRequirements",
        tooltiptext: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        optionLabel: "H1 tag requirements are fulfilled",
        optionState: "h1Requirements",
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
    id: "content"
  }
];

export default inputValuesForProject;