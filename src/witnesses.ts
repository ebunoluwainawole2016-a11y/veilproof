import type { WitnessContext } from '@midnight-ntwrk/compact-runtime';
import type { Ledger } from '../contracts/managed/contract/index.js';

export type VeilProofPrivateState = {
  readonly privateValue: bigint;
};

export const createVeilProofPrivateState = (
  privateValue: bigint,
): VeilProofPrivateState => ({
  privateValue,
});

export const witnesses = {
  getPrivateValue: ({
    privateState,
  }: WitnessContext<Ledger, VeilProofPrivateState>): [
    VeilProofPrivateState,
    bigint,
  ] => [privateState, privateState.privateValue],
};
