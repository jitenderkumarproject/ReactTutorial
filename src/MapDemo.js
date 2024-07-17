export default function MapDemo(){

    const data = [
        {
            id : 1,
            name : 'Jack',
            designation : 'Developer'
        },
        {
            id : 2,
            name : 'Mac',
            designation : 'Project Coordinator'
        },
        {
            id : 3,
            name : 'HP',
            designation : 'Project Manager'
        }
    ]

    return(
        <div align = "center">
        {
            data.map((MapDemo) =>(
                <div>{MapDemo.name}</div>
            ))
        }
        </div>
        
    );
}




