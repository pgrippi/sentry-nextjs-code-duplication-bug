const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});
const {withSentryConfig} = require('@sentry/nextjs');

// Swap the exports to generate the app without code duplication

module.exports = withSentryConfig(
  withBundleAnalyzer({
    future: {webpack5: true}
  }),
  {dryRun: true, silent: true}
);

// module.exports = withBundleAnalyzer({
//   future: {webpack5: true}
// });
