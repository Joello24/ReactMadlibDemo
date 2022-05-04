import { useState } from 'react';
import Button from './components/button';
import Card from './components/card'
import LabeledInput from './components/labeledInput'
import Story from './components/story'
function App() {
  const [state,setState] = useState({
    character : "",
    setting : "",
    place : "",
    problem : "",
    adjective1 : "",
    adjective2 : "",
    action : "",
    result : ""
  });

  const [isVisible,setVisible] = useState(false);

  const stateSetter = (field,value) => {
    const newState = {...state};
    newState[field] = value;
    setState(newState);
  }
  const story = isVisible ? <Card title="The Mad Lib Story">
                            <Story story={state}/>
                            </Card>
                            :"";
  return (
    <div className="text-xl">
     <Card title = "Fill Out These Fields" text = "hi">
       <LabeledInput label="Character" type="text"  value={state.character}   
                                                    setValue={(value) => stateSetter("character", value)}
                                                    />
       <LabeledInput label="Setting" type="text"  value={state.setting}   
                                                  setValue={(value) => stateSetter("setting", value)}
                                                  />
       <LabeledInput label="PlaceToTravel" type="text"  value={state.place}   
                                                        setValue={(value) => stateSetter("place", value)}
                                                        />
       <LabeledInput label="Problem" type="text"  value={state.problem}   
                                                  setValue={(value) => stateSetter("problem", value)}
                                                  />
       <LabeledInput label="Adjective 1" type="text"  value={state.adjective1}   
                                                      setValue={(value) => stateSetter("adjective1", value)}
                                                      />
       <LabeledInput label="Adjective 2" type="text"  value={state.adjective2}   
                                                      setValue={(value) => stateSetter("adjective2", value)}
                                                      />
       <LabeledInput label="Action To Resolve Problem" type="text"  value={state.action}   
                                                                    setValue={(value) => stateSetter("action", value)}
                                                                    />
       <LabeledInput label="Result" type="text" value={state.result}   
                                                setValue={(value) => stateSetter("result", value)}
                                                />
     </Card>
     <Button label="Show the story" action={()=> {setVisible(!isVisible)}}>
     </Button>
     {story}
    
    </div>
  );
}

export default App;