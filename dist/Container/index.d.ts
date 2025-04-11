import * as React from 'react';
import { Resizer } from './Resizer';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  onActivate?: () => void;
  beforeApplyResizer?: (resizer: Resizer) => void;
  afterResizing?: () => void;
}
declare class Container extends React.PureComponent<Props> {
  private readonly childrenProps;
  private readonly childrenInstance;
  private readonly barActions$;
  private readonly sizeRelatedInfoAction$;
  private readonly sizeRelatedInfo$;
  private get axis();
  private get dimension();
  private get contextValue();
  private get containerProps();
  componentDidMount(): void;
  render(): React.JSX.Element;
  getResizer(): Resizer;
  applyResizer(resizer: Resizer): void;
  private monitorBarStatusChanges;
  private triggerBarAction;
  private createID;
  private populateChildInstance;
  private refreshSizeInfos;
  private makeSizeInfos;
}
export { Container, Resizer, Props as ContainerProps };
