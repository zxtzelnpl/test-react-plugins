import * as React from 'react';

function decorator(name: string) {
    return function(Target: any) {
        Target.abc = name;

        let D = () => <Target />;

        return D;
    };
}

// @ts-ignore
@decorator('abc')
class DecoratorComponent extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                DecoratorComponent
            </div>
        );
    }
}

export default DecoratorComponent;
