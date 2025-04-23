import { requireNativeView } from 'expo';
import * as React from 'react';

import { ThermalPrinterSdkViewProps } from './ThermalPrinterSdk.types';

const NativeView: React.ComponentType<ThermalPrinterSdkViewProps> =
  requireNativeView('ThermalPrinterSdk');

export default function ThermalPrinterSdkView(props: ThermalPrinterSdkViewProps) {
  return <NativeView {...props} />;
}
