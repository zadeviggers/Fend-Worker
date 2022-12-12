/* tslint:disable */
/* eslint-disable */
/**
*/
export function initialise(): void;
/**
* @param {Map<any, any>} currency_data
*/
export function initialiseWithHandlers(currency_data: Map<any, any>): void;
/**
* @param {string} input
* @param {number} timeout
* @returns {string}
*/
export function evaluateFendWithTimeout(input: string, timeout: number): string;
/**
* @param {string} input
* @param {number} timeout
* @returns {string}
*/
export function evaluate_fend_with_timeout(input: string, timeout: number): string;
/**
* Takes a '\0'-separated string of inputs, and returns a '\0'-separated string of results
* @param {string} inputs
* @param {number} timeout
* @returns {string}
*/
export function evaluateFendWithTimeoutMultiple(inputs: string, timeout: number): string;
/**
* @param {string} input
* @param {number} timeout
* @param {string} variables
* @returns {string}
*/
export function evaluateFendWithVariablesJson(input: string, timeout: number, variables: string): string;
/**
* @param {string} input
* @param {number} timeout
* @returns {string}
*/
export function substituteInlineFendExpressions(input: string, timeout: number): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly initialiseWithHandlers: (a: number) => void;
  readonly evaluateFendWithTimeout: (a: number, b: number, c: number, d: number) => void;
  readonly evaluateFendWithTimeoutMultiple: (a: number, b: number, c: number, d: number) => void;
  readonly evaluateFendWithVariablesJson: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly substituteInlineFendExpressions: (a: number, b: number, c: number, d: number) => void;
  readonly evaluate_fend_with_timeout: (a: number, b: number, c: number, d: number) => void;
  readonly initialise: () => void;
  readonly __wbindgen_export_0: (a: number) => number;
  readonly __wbindgen_export_1: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export_2: (a: number, b: number) => void;
  readonly __wbindgen_export_3: (a: number) => void;
  readonly __wbindgen_export_4: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
