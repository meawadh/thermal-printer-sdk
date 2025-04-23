import { registerWebModule, NativeModule } from 'expo';

import { ThermalPrinterSdkModuleEvents } from './ThermalPrinterSdk.types';

class ThermalPrinterSdkModule extends NativeModule<ThermalPrinterSdkModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ThermalPrinterSdkModule);
