import React from 'react';
let dependencies = {};
export const setDI = (dep) => {
    dependencies = {...dependencies, ...dep};
};

export const withDI = (WrappedComponent) => {
    class DIComponent extends React.Component {
        render() {
            return
        <WrappedComponent {...dependencies} {...this.props} />;
        }
    }
    return DIComponent;
};
