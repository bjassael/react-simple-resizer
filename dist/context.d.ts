import * as React from 'react';
import { ChildProps, ResizerContext } from './types';
export declare const ResizerProvider: React.Provider<ResizerContext>,
  ResizerConsumer: React.Consumer<ResizerContext>;
export declare function withResizerContext<T extends ChildProps>(
  Target: React.ComponentType<T>,
): (props: Omit<T, 'context'>) => React.JSX.Element;
