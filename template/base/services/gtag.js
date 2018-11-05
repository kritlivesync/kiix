const ID = process.env.GA

const pageview = url => {
  console.log('pageview'+ID,url)
  window.gtag('config', ID, {
    page_location: url
  })
}

const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

export {
    ID,
    pageview,
    event
};
