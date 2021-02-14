import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://a41aa1fe4a4b4fe7b8634c7b0829265a@o523836.ingest.sentry.io/5636132"
  });
}

function log(error) {
  Sentry.captureException(error);
  console.log(error);
}

// Interface of logService has two methods -- init and log
export default {
  init,
  log
};