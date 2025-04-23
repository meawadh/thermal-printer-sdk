// Reexport the native module. On web, it will be resolved to ThermalPrinterSdkModule.web.ts
// and on native platforms to ThermalPrinterSdkModule.ts
export { default } from './ThermalPrinterSdkModule';
export { default as ThermalPrinterSdkView } from './ThermalPrinterSdkView';
export * from  './ThermalPrinterSdk.types';
