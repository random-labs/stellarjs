import eio from 'engine.io-client';

import stellarSocketFactory from './stellarSocket';

export function stellarSocket(log) {
  return stellarSocketFactory(eio, log);
}

export default stellarSocketFactory;
