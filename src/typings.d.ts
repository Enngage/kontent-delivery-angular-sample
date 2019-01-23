/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}



declare module 'kentico-cloud-delivery' {
  export * from 'node_modules/kentico-cloud-delivery/_es2015';
}