import SlackFeedback, { themes } from 'react-slack-feedback'
 
ReactDOM.render(
  <SlackFeedback
    channel="#general"
    theme={themes.dark} // (optional) See src/themes/default for default theme
    user="Slack Feedback" // The logged in user (default = "Unknown User")
    onImageUpload={(image, success,error) => 
      uploadImage(image)
        .then(({ url }) => success(url))
        .catch(error)
    }
    onSubmit={(payload, success, error) => 
      sendToServer(payload)
        .then(success)
        .catch(error)
     }
  />,
  document.getElementById('root')
)
 
function sendToServer(payload, success, error) {
  return fetch('/api/slack', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then(success)
  .catch(error)
}
 
function uploadImage(image, success, error) {
  var form = new FormData()
  form.append('image', image)
 
  return fetch('/api/upload', { method: 'POST', data: form })
    .then(({ url }) => success(url))
    .catch(err => error(err))
  )
}