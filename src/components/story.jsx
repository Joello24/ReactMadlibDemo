function Story({story}){
    return (
        <div>
            <p>
            Once upon a time, {story.character} lived in an old and smelly 
             {story.setting}. He wanted to go somewhere exciting,
            so he/she planned a trip to {story.place}. But then, {story.problem}.
            {story.character} was very {story.adjective1} and {story.adjective2},
            so, he/she had to do something!!
            so he/she {story.action}. After he/she did this, {story.result}.
            And {story.character} lived happily ever after
            </p>
        </div>
    )
}
export default Story;