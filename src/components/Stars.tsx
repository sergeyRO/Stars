import Star from './Star'

export type TStar = {
    count: number
}

export const Stars = ({count}: TStar) => {
    let content;
    if (count < 0 || count > 5)
    {
        //content = <h1>Звёзд очень много или мало</h1>
    }
    else{
        let component = [];
        
        for (let i = 0; i < count; i++) {
            component.push(<Star key={i}/>);
        }
        content = <ul className="card-body-stars u-clearfix">{component}</ul>         
    }
  return (
    <>
    {content}
    </>
  )
}
