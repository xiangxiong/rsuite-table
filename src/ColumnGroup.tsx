import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ColumnGroupProps } from './ColumnGroup.d';
import { defaultClassPrefix, prefix } from './utils';

const classPrefix = defaultClassPrefix('table-column-group');
const addPrefix = (name: string) => prefix(classPrefix)(name);

function ColumnGroup({
  header,
  className,
  children,
  headerHeight = 80,
  verticalAlign,
  width
}: ColumnGroupProps) {
  const height = headerHeight / 2;
  const styles: React.CSSProperties = {
    height,
    width
  };
  const contentStyles = { ...styles, verticalAlign };

  return (
    <div className={classNames(classPrefix, className)}>
      <div className={addPrefix('header')} style={styles}>
        <div className={addPrefix('header-content')} style={contentStyles}>
          {header}
        </div>
      </div>

      {React.Children.map(children, (node: React.ReactElement) => {
        const nodeStyles = { height, ...node.props?.style, top: styles.height };
        const width = node.props?.style?.width;
        const nodeContentStyles = { height, width, verticalAlign };

        return React.cloneElement(node, {
          className: addPrefix('cell'),
          style: nodeStyles,
          children: (
            <div className={addPrefix('cell-content')} style={nodeContentStyles}>
              {node.props.children}
            </div>
          )
        });
      })}
    </div>
  );
}

ColumnGroup.propTypes = {
  header: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right'])]),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom'])
};

export default ColumnGroup;
