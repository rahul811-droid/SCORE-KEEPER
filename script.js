let score=0;
let wicket=0;
let ballWiseRes=[];
let hit =0;
let inputRef= React.createRef();

function addScore(num){
//     if(wicket<10){
//         ballWiseRes.push(num)
//    score += num;
    hit=num;
   console.log(hit)
   rootElement.render(<App/>)
    // }
}
function addWicket(){
    // if(wicket<10){
    //     ballWiseRes.push("w")
    //     wicket += 1;
    hit ="w"
        rootElement.render(<App/>)
        console.log(hit)
    // }
 }
 const ScoreButtons =()=>(
    <div>
    <button onClick={()=>addScore(0)}>0</button>
    <button onClick={()=>addScore(1)}>1</button>
    <button onClick={()=>addScore(2)}>2</button>
    <button onClick={()=>addScore(3)}>3</button>
    <button onClick={()=>addScore(4)}>4</button>
    <button onClick={()=>addScore(5)}>5</button>
    <button onClick={()=>addScore(6)}>6</button>
    <button onClick={addWicket}>wicket</button>
</div>
 )
 const Results =()=>(
    <div>
        {ballWiseRes.map((res,index)=>(<>
        {index % 6 === 0? <br/> : null}
        <span key={index}> {res ===0? <strong>.</strong>:res} </span>&nbsp;</>))}
    </div>
 )
        function handleSubmit(e){
            e.preventDefault();
            if(hit == "w"){
                wicket+=1;
            }else{
                score+=hit;
            }
            ballWiseRes.unshift(
                // <span>{hit}&nbsp;{inputRef.current.value}</span>
                <span>{`${hit}, ${inputRef.current.value}`}</span>
            );
            hit=0;
            inputRef.current.value=""
            console.log(inputRef.current.value)
            
            rootElement.render(<App/>)
        }
 const Form =()=>(
    <form  onSubmit={handleSubmit}>
       
        <input value={hit}/>
        <input ref ={inputRef} placeholder="Add a comment here"/>
        <button>submit</button>
    </form>
 )
const App=()=>( 
    <>
    <h1>SORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    <ScoreButtons/>
    <br/>
    <Form/>
    <hr/>
    {ballWiseRes.map((res,index)=>(
        < p key={index}>{res}</p>
    ))}
    {/* <Results/> */}
    </>
)


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>)