import * as React from 'react';




function decorator(name:string){
    return function(Target:any){
        console.log(Target);
        console.log(typeof Target);
        Target.abc=name;


        let D = ()=><Target />;

        return D;
    }
}

// @ts-ignore
@decorator('abc')
class DecoratorComponent extends React.Component {

    componentDidMount(){
        console.dir(this.constructor)
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
