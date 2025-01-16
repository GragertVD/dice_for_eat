import React from "react";
import classNames from 'classnames'

import styles from './Button.module.scss'

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
}

type ButtonProps = {
    type?: ButtonType;
} & React.PropsWithChildren;

const Button: React.FC<ButtonProps> = ({ type = ButtonType.primary, children }) => {

    return <button className={classNames(styles.button, styles[`button_${type}`])}>{children}</button>
}

export default Button;