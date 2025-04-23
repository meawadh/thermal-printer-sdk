import { NativeModule, requireNativeModule } from 'expo';

import { ThermalPrinterSdkModuleEvents } from './ThermalPrinterSdk.types';

declare class ThermalPrinterSdkModule extends NativeModule<ThermalPrinterSdkModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ThermalPrinterSdkModule>('ThermalPrinterSdk');
