import React from 'react';
import './Button.css';

export type ButtonType =
  | 'Primary'
  | 'Secondary'
  | 'Accent'
  | 'Negative'
  | 'Positive'
  | 'White';

export type ButtonVariant =
  | 'Contained'
  | 'Outlined'
  | 'Text';

export type ButtonSize =
  | 'Large'
  | 'Medium'
  | 'Small';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  onlyIcon?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = ({
  type = 'Primary',
  variant = 'Contained',
  size = 'Large',
  loading = false,
  onlyIcon = false,
  iconLeft,
  iconRight,
  children = 'Button',
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[
        'nexus-button',
        `nexus-button--${type.toLowerCase()}`,
        `nexus-button--${variant.toLowerCase()}`,
        `nexus-button--${size.toLowerCase()}`,
        onlyIcon ? 'nexus-button--icon-only' : '',
        loading ? 'nexus-button--loading' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || loading}
      {...props}
    >
      {!onlyIcon && iconLeft && (
        <span className="nexus-button__icon">
          {iconLeft}
        </span>
      )}

      {loading ? (
        <span className="nexus-button__loader" aria-label="Loading" />
      ) : (
        <>
          <span className="nexus-button__label">
            {children}
          </span>

          {!onlyIcon && iconRight && (
            <span className="nexus-button__icon">
              {iconRight}
            </span>
          )}
        </>
      )}
    </button>
  );
};
