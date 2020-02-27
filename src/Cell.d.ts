import * as React from 'react';
import { StandardProps, RowDataType } from './common';

export interface CellProps extends StandardProps {
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
  classPrefix?: string;
  dataKey?: string;
  isHeaderCell?: boolean;

  width: number;
  height?: number;
  left?: number;
  headerHeight?: number;

  style?: React.CSSProperties;
  firstColumn?: boolean;
  lastColumn?: boolean;
  hasChildren?: boolean;
  children?: React.ReactNode | ((rowData: RowDataType, rowIndex: number) => React.ReactNode);

  rowKey?: string | number;
  rowIndex?: number;
  rowData?: RowDataType;
  depth: number;

  onTreeToggle?: (
    rowKey?: string | number,
    rowIndex?: number,
    rowData?: RowDataType,
    event?: React.MouseEvent
  ) => void;

  renderTreeToggle?: (expandButton: React.ReactNode, rowData?: RowDataType) => React.ReactNode;
  renderCell?: (contentChildren: any) => React.ReactNode;
  wordWrap?: boolean;
  removed?: boolean;
}

declare const Cell: React.ComponentType<CellProps>;

export default Cell;
