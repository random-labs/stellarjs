import instrumentationMockFactory from './factories/instrumentationMockFactory';
import stellarRequestFactory from './factories/stellarRequestFactory';

export default function getConfigWithDefaults(config) {
  return {
    instrumentation: instrumentationMockFactory(config),
    stellarRequest: stellarRequestFactory(config),
    newSessionHandlers: [],
    ...config,
  };
}