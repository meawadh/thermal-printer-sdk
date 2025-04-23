import * as React from 'react';

import { ThermalPrinterSdkViewProps } from './ThermalPrinterSdk.types';

export default function ThermalPrinterSdkView(props: ThermalPrinterSdkViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
