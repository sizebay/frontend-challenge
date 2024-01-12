declare module 'uuid' {
  export function v1(options?: any, buffer?: number[], offset?: number): string;
  export function v3(options?: any, buffer?: number[], offset?: number): string;
  export function v4(options?: any, buffer?: number[], offset?: number): string;
  export function v5(options?: any, buffer?: number[], offset?: number): string;
  export function NIL(): string;
}
