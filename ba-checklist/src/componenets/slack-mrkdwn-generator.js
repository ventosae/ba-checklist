import React from "react";

function SlackMrkdwn(props) {
  const values = props.values;
  return console.log(
    values.map(value => {
      if (value.type === "text") {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "⚡G'day we have a reply!⚡"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: value.header
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: value.text
            }
          }
        ];
      }
    })
  );
}

export default SlackMrkdwn;
