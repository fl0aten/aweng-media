import React, { Component, HTMLProps, ReactNode } from "react";

export default class Button extends Component<HTMLProps<HTMLButtonElement>, {}> {
    render(): ReactNode {
        return <button { ...this.props} className="puppercase whitespace-nowrap inline-flex uppercase border-blue-500 items-center justify-center px-8 py-2 border border-transparent shadow-sm text-base font-medium text-blue-500 bg-transparent hover:text-white hover:bg-blue-500" />
    }
}